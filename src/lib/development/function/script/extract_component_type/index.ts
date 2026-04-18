/**
 * Extract Component Type Analysis Script
 * 
 * Scans all .svelte components for type declarations,
 * analyzes their dependencies, detects circular dependencies,
 * and recommends target folders for migration.
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, relative, dirname } from 'path';

// ============ Configuration ============

const STYLIST_SVELTE_LIB = 'D:\\2026\\code\\template\\stylist-svelte\\src\\lib';
const OUTPUT_FILE = 'D:\\2026\\code\\template\\stylist-svelte\\src\\lib\\development\\data\\md\\extract_component_type.md';

// ============ Types ============

interface TypeDependency {
	typeName: string;
	referencedTypes: string[];
	importedModules: string[];
}

interface TypeAnalysis {
	typeName: string;
	componentPath: string;
	domain: string;
	typeKind: 'enum' | 'map' | 'struct' | 'record' | 'unknown';
	targetPath: string;
	dependencies: TypeDependency[];
	hasCircularDependency: boolean;
	circularDependencyWith?: string;
	rawDefinition: string;
	lineNumber: number;
}

interface CircularDependencyInfo {
	types: string[];
	componentPaths: string[];
}

// ============ Utility Functions ============

function extractDomain(componentPath: string): string {
	const relativePath = relative(STYLIST_SVELTE_LIB, componentPath);
	const parts = relativePath.split(/[\\/]/);
	return parts[0] || 'unknown';
}

function determineTypeKind(typeName: string, definition: string): 'enum' | 'map' | 'struct' | 'record' | 'unknown' {
	const lower = definition.toLowerCase();
	const nameLower = typeName.toLowerCase();

	// Enum: union types, string literals
	if (lower.includes('|') || /^\s*type\s+\w+\s*=\s*['"]/i.test(definition)) {
		return 'enum';
	}

	// Map: Record<SpecificKey, SpecificValue> or key-value mappings
	if (/Record<[^,]+,\s*[^>]+>/.test(definition) && !lower.includes('string')) {
		return 'map';
	}

	// Record: Record<string, T> or similar generic records
	if (/Record<string,/.test(lower)) {
		return 'record';
	}

	// Struct: object types with named properties (most common case)
	if (lower.includes('{') && lower.includes('}')) {
		return 'struct';
	}

	// Heuristic by name
	if (nameLower.includes('enum') || nameLower.includes('mode') || nameLower.includes('kind') || nameLower.includes('type')) {
		return 'enum';
	}
	if (nameLower.includes('map') || nameLower.includes('mapping')) {
		return 'map';
	}
	if (nameLower.includes('record') || nameLower.includes('dictionary')) {
		return 'record';
	}
	if (nameLower.includes('props') || nameLower.includes('attributes') || nameLower.includes('config') || nameLower.includes('options')) {
		return 'struct';
	}

	return 'unknown';
}

function buildTargetPath(domain: string, kind: 'enum' | 'map' | 'struct' | 'record' | 'unknown', typeName: string): string {
	const sanitizedName = typeName
		.replace(/([A-Z])/g, '-$1')
		.toLowerCase()
		.replace(/^-/, '')
		.replace(/-+$/, '')
		.replace(/-+/g, '-');

	return `${domain}/type/${kind}/${sanitizedName}/`;
}

// ============ Parser ============

function extractScriptBlocks(content: string): Array<{ content: string; lineNumber: number }> {
	const blocks: Array<{ content: string; lineNumber: number }> = [];
	const regex = /<script[^>]*lang="ts"[^>]*>([\s\S]*?)<\/script>/g;
	let match;

	while ((match = regex.exec(content)) !== null) {
		const before = content.substring(0, match.index);
		const lineCount = before.split('\n').length;
		blocks.push({
			content: match[1],
			lineNumber: lineCount
		});
	}

	return blocks;
}

function extractTypesFromScript(scriptContent: string, baseLineNumber: number): Array<{
	name: string;
	definition: string;
	lineNumber: number;
}> {
	const types: Array<{ name: string; definition: string; lineNumber: number }> = [];
	
	// Find all type declarations
	const typeStartRegex = /((?:export\s+)?type\s+(\w+)\s*=\s*)/g;
	let match;

	while ((match = typeStartRegex.exec(scriptContent)) !== null) {
		const typeName = match[2];
		const startIndex = match.index + match[1].length;
		const lineNumber = baseLineNumber + scriptContent.substring(0, match.index).split('\n').length;
		
		// Find the end of the type definition by counting braces and semicolons
		let endIndex = findTypeEnd(scriptContent, startIndex);
		if (endIndex === -1) continue;
		
		const fullDefinition = scriptContent.substring(match.index, endIndex + 1); // Include the semicolon

		types.push({
			name: typeName,
			definition: fullDefinition,
			lineNumber
		});
	}

	return types;
}

function findTypeEnd(content: string, startIndex: number): number {
	let braceDepth = 0;
	let inString = false;
	let stringChar = '';
	let i = startIndex;
	
	while (i < content.length) {
		const char = content[i];
		const prevChar = i > 0 ? content[i - 1] : '';
		
		// Handle string literals
		if ((char === '"' || char === "'" || char === '`') && prevChar !== '\\') {
			if (!inString) {
				inString = true;
				stringChar = char;
			} else if (char === stringChar) {
				inString = false;
			}
		}
		
		if (!inString) {
			if (char === '{' || char === '(' || char === '[') {
				braceDepth++;
			} else if (char === '}' || char === ')' || char === ']') {
				braceDepth--;
			} else if (char === ';' && braceDepth === 0) {
				return i; // Found the ending semicolon
			}
		}
		
		i++;
	}
	
	return -1; // Not found
}

interface ScriptImport {
	importedNames: string[];
	source: string;
	isTypeImport: boolean;
}

function extractTypeDependencies(typeDefinition: string, allScriptContent: string): TypeDependency {
	const referencedTypes: string[] = [];
	const importedModules: string[] = [];

	// Extract referenced types (words starting with uppercase)
	const typeRefRegex = /\b([A-Z]\w*(?:<[^>]*>)?)\b/g;
	let match;
	while ((match = typeRefRegex.exec(typeDefinition)) !== null) {
		const ref = match[1].replace(/<.*>$/, ''); // Remove generic parameters
		// Exclude common TypeScript/utility types
		if (!['Omit', 'Pick', 'Partial', 'Required', 'Readonly', 'Record', 'Array', 'Promise', 'ReturnType', 'Parameters', 'Exclude', 'Extract', 'NonNullable'].includes(ref)) {
			referencedTypes.push(ref);
		}
	}

	// Extract ALL import statements from the full script
	const importRegex = /import\s+(?:type\s+)?(?:\{([^}]+)\}|(\w+))\s+from\s+['"]([^'"]+)['"]/g;
	while ((match = importRegex.exec(allScriptContent)) !== null) {
		const source = match[3];
		importedModules.push(source);
	}

	return {
		typeName: '',
		referencedTypes,
		importedModules
	};
}

// ============ Circular Dependency Detection ============

function buildDependencyGraph(analyses: TypeAnalysis[]): Map<string, Set<string>> {
	const graph = new Map<string, Set<string>>();

	// Create a map of type name -> analysis for quick lookup
	const analysisMap = new Map(analyses.map(a => [a.typeName, a]));

	for (const analysis of analyses) {
		const key = analysis.typeName;
		if (!graph.has(key)) {
			graph.set(key, new Set());
		}

		for (const dep of analysis.dependencies) {
			for (const refType of dep.referencedTypes) {
				// Skip self-references
				if (refType === key) continue;
				
				// Check if referenced type is also in our analyses
				if (analysisMap.has(refType)) {
					graph.get(key)!.add(refType);
				}
			}
		}
	}

	return graph;
}

function detectCycles(graph: Map<string, Set<string>>): CircularDependencyInfo[] {
	const cycles: CircularDependencyInfo[] = [];
	const visited = new Set<string>();
	const recursionStack = new Set<string>();
	const path: string[] = [];

	function dfs(node: string) {
		visited.add(node);
		recursionStack.add(node);
		path.push(node);

		const neighbors = graph.get(node) || new Set();
		for (const neighbor of neighbors) {
			if (!visited.has(neighbor)) {
				dfs(neighbor);
			} else if (recursionStack.has(neighbor)) {
				// Found a cycle
				const cycleStart = path.indexOf(neighbor);
				const cycle = path.slice(cycleStart);
				// Only report cycles with 2+ nodes (not self-references)
				if (cycle.length >= 2) {
					cycles.push({
						types: cycle,
						componentPaths: []
					});
				}
			}
		}

		path.pop();
		recursionStack.delete(node);
	}

	for (const node of graph.keys()) {
		if (!visited.has(node)) {
			dfs(node);
		}
	}

	return cycles;
}

// ============ Main Analysis ============

function analyzeComponents(): TypeAnalysis[] {
	const analyses: TypeAnalysis[] = [];
	
	function scanDirectory(dirPath: string) {
		if (!existsSync(dirPath)) return;

		const entries = readdirSync(dirPath);
		for (const entry of entries) {
			const fullPath = join(dirPath, entry);
			const stat = statSync(fullPath);

			if (stat.isDirectory()) {
				// Skip node_modules and hidden directories
				if (!entry.startsWith('.') && entry !== 'node_modules') {
					scanDirectory(fullPath);
				}
			} else if (entry.endsWith('.svelte') && !entry.endsWith('.story.svelte')) {
				analyzeComponent(fullPath);
			}
		}
	}

	function analyzeComponent(filePath: string) {
		const content = readFileSync(filePath, 'utf-8');
		const scriptBlocks = extractScriptBlocks(content);

		for (const block of scriptBlocks) {
			const types = extractTypesFromScript(block.content, block.lineNumber);

			for (const type of types) {
				const domain = extractDomain(filePath);
				const kind = determineTypeKind(type.name, type.definition);
				const targetPath = buildTargetPath(domain, kind, type.name);
				const deps = extractTypeDependencies(type.definition, block.content);
				deps.typeName = type.name;

				analyses.push({
					typeName: type.name,
					componentPath: filePath,
					domain,
					typeKind: kind,
					targetPath,
					dependencies: [deps],
					hasCircularDependency: false,
					rawDefinition: type.definition,
					lineNumber: type.lineNumber
				});
			}
		}
	}

	scanDirectory(STYLIST_SVELTE_LIB);
	return analyses;
}

// ============ Report Generation ============

function generateReport(analyses: TypeAnalysis[], cycles: CircularDependencyInfo[]): string {
	const lines: string[] = [];
	const timestamp = new Date().toISOString().replace(/[:.]/g, '-');

	lines.push(`# Анализ типов в Svelte компонентах`);
	lines.push('');
	lines.push(`**Дата генерации:** ${timestamp}`);
	lines.push(`**Всего типов найдено:** ${analyses.length}`);
	lines.push(`**Циклических зависимостей:** ${cycles.length}`);
	lines.push('');

	// Summary by domain
	lines.push('## 📊 Сводка по доменам');
	lines.push('');
	lines.push('| Домен | Кол-во типов | enum | struct | map | record | unknown |');
	lines.push('|---|---:|---:|---:|---:|---:|---:|');

	const domainStats = new Map<string, { total: number; enum: number; struct: number; map: number; record: number; unknown: number }>();
	for (const analysis of analyses) {
		if (!domainStats.has(analysis.domain)) {
			domainStats.set(analysis.domain, { total: 0, enum: 0, struct: 0, map: 0, record: 0, unknown: 0 });
		}
		const stats = domainStats.get(analysis.domain)!;
		stats.total++;
		stats[analysis.typeKind]++;
	}

	for (const [domain, stats] of Array.from(domainStats.entries()).sort((a, b) => b[1].total - a[1].total)) {
		lines.push(`| ${domain} | ${stats.total} | ${stats.enum} | ${stats.struct} | ${stats.map} | ${stats.record} | ${stats.unknown} |`);
	}
	lines.push('');

	// Circular dependencies
	if (cycles.length > 0) {
		lines.push('## 🚨 Циклические зависимости');
		lines.push('');
		lines.push('> ⚠️ Эти типы имеют циклические зависимости и требуют рефакторинга перед перемещением');
		lines.push('');

		for (let i = 0; i < cycles.length; i++) {
			const cycle = cycles[i];
			lines.push(`### Цикл #${i + 1}`);
			lines.push('');
			lines.push('```');
			lines.push(cycle.types.join(' → '));
			lines.push('```');
			lines.push('');
		}
	}

	// Detailed type list with full code
	lines.push('## 📋 Детальный анализ типов');
	lines.push('');

	// Group by domain
	const groupedByDomain = new Map<string, TypeAnalysis[]>();
	for (const analysis of analyses) {
		if (!groupedByDomain.has(analysis.domain)) {
			groupedByDomain.set(analysis.domain, []);
		}
		groupedByDomain.get(analysis.domain)!.push(analysis);
	}

	for (const [domain, domainAnalyses] of Array.from(groupedByDomain.entries()).sort((a, b) => a[0].localeCompare(b[0]))) {
		lines.push(`---`);
		lines.push('');
		lines.push(`## Домен: \`${domain}\` (${domainAnalyses.length} типов)`);
		lines.push('');

		for (const analysis of domainAnalyses) {
			const componentRelative = relative(STYLIST_SVELTE_LIB, analysis.componentPath).replace(/\\/g, '/');
			const circularFlag = analysis.hasCircularDependency ? ' 🔴 ЦИКЛИЧЕСКАЯ' : '';
			
			// Type header
			lines.push(`### \`${analysis.typeName}\`${circularFlag}`);
			lines.push('');
			
			// Metadata table
			lines.push('| Параметр | Значение |');
			lines.push('|---|---|');
			lines.push(`| **Категория** | ${analysis.typeKind} |`);
			lines.push(`| **Компонент** | \`lib/${componentRelative}\` |`);
			lines.push(`| **Строка** | ${analysis.lineNumber} |`);
			lines.push(`| **Целевой путь** | \`${analysis.targetPath}index.ts\` |`);
			lines.push('');

			// Full type definition
			lines.push('#### 📝 Определение типа');
			lines.push('');
			lines.push('```typescript');
			lines.push(analysis.rawDefinition);
			lines.push('```');
			lines.push('');

			// Dependencies analysis
			const allRefs = analysis.dependencies.flatMap(d => d.referencedTypes);
			const allImports = analysis.dependencies.flatMap(d => d.importedModules);
			
			if (allRefs.length > 0 || allImports.length > 0) {
				lines.push('#### 🔗 Зависимости');
				lines.push('');
				
				if (allRefs.length > 0) {
					lines.push('**Используемые типы:**');
					lines.push('');
					for (const ref of allRefs) {
						// Try to find where this type is imported from
						const importSource = findImportSource(ref, allImports, componentRelative);
						if (importSource) {
							lines.push(`- \`${ref}\` → импортируется из \`${importSource}\``);
						} else {
							lines.push(`- \`${ref}\` → ⚠️ источник не найден (возможно, глобальный или локальный)`);
						}
					}
					lines.push('');
				}

				if (allImports.length > 0) {
					lines.push('**Все импорты компонента:**');
					lines.push('');
					lines.push('```typescript');
					for (const imp of allImports) {
						lines.push(`import ... from '${imp}';`);
					}
					lines.push('```');
					lines.push('');
				}
			}

			// Migration recommendation
			lines.push('#### 💡 Рекомендация по миграции');
			lines.push('');
			lines.push(`Создать файл: \`${analysis.targetPath}index.ts\``);
			lines.push('');
			lines.push('```typescript');
			lines.push(`// Extracted from: lib/${componentRelative}:${analysis.lineNumber}`);
			if (analysis.rawDefinition.startsWith('export type')) {
				lines.push(analysis.rawDefinition);
			} else {
				lines.push(`export ${analysis.rawDefinition}`);
			}
			lines.push('```');
			lines.push('');
			lines.push('---');
			lines.push('');
		}
	}

	// Migration recommendations
	lines.push('## 🎯 Рекомендации по миграции');
	lines.push('');
	lines.push('### Порядок действий');
	lines.push('');
	lines.push('1. **Начать с типов без зависимостей** — их можно перемещать сразу');
	lines.push('2. **Исправить циклические зависимости** — вынести общие части в отдельные модули');
	lines.push('3. **Перемещать типы по категориям:**');
	lines.push("   - `enum` → union types (`'a' | 'b' | 'c'`)");
	lines.push('   - `struct` → object types с именованными свойствами (`Props`, `Config`)');
	lines.push('   - `map` → `Record<K, V>` с конкретными ключами');
	lines.push('   - `record` → `Record<string, T>` с динамическими ключами');
	lines.push('4. **После перемещения** — перегенерировать индексы: `python indexation/cli.py`');
	lines.push('');

	// Statistics
	lines.push('### Статистика');
	lines.push('');
	const uniquePaths = new Set(analyses.map(a => a.targetPath));
	lines.push(`- Всего типов: ${analyses.length}`);
	lines.push(`- Уникальных путей для создания: ${uniquePaths.size}`);
	lines.push(`- Типов с циклическими зависимостями: ${analyses.filter(a => a.hasCircularDependency).length}`);
	lines.push('');

	return lines.join('\n');
}

function findImportSource(typeName: string, imports: string[], componentPath: string): string | null {
	// This is a simplified version - in a full implementation, you'd parse actual import statements
	// For now, we'll try to match based on common patterns
	
	// Check if type might come from $stylist alias
	if (typeName.startsWith('Interaction') || typeName.startsWith('Information') || typeName.startsWith('Architecture')) {
		const domain = typeName.toLowerCase().replace(/^[a-z]+/, '');
		return `$stylist/${domain}/...`;
	}
	
	// Check HTML types
	if (typeName.includes('HTMLAttributes') || typeName.includes('HTMLElement')) {
		return 'svelte/elements';
	}
	
	// Unknown origin
	return null;
}

// ============ Entry Point ============

export function extractComponentType(): void {
	console.log('🔍 Starting component type analysis...');
	console.log(`📂 Scanning directory: ${STYLIST_SVELTE_LIB}`);

	const analyses = analyzeComponents();
	console.log(`✅ Found ${analyses.length} type declarations`);

	console.log('🔗 Building dependency graph...');
	const graph = buildDependencyGraph(analyses);

	console.log('🔄 Detecting circular dependencies...');
	const cycles = detectCycles(graph);
	
	if (cycles.length > 0) {
		console.log(`⚠️  Found ${cycles.length} circular dependencies`);
		// Mark analyses involved in cycles
		const cycleTypes = new Set(cycles.flatMap(c => c.types));
		for (const analysis of analyses) {
			if (cycleTypes.has(analysis.typeName)) {
				analysis.hasCircularDependency = true;
			}
		}
	}

	console.log('📝 Generating report...');
	const report = generateReport(analyses, cycles);

	writeFileSync(OUTPUT_FILE, report, 'utf-8');
	console.log(`📄 Report saved to: ${OUTPUT_FILE}`);
	console.log('✅ Analysis complete!');
}

extractComponentType();
