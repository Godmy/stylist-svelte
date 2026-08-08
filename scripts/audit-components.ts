import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const LIB_DIR = path.resolve('src/lib');
const THICK_THRESHOLD = 200;
const FIX = process.argv.includes('--fix');

function toPascalCase(s: string) {
    return s.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
}

async function run() {
    const files = await glob('src/lib/**/component/{atom,molecule,organism}/**/index.svelte');
    console.log(`Found ${files.length} components.`);

    for (const file of files) {
        const fullPath = path.resolve(file);
        let content = fs.readFileSync(fullPath, 'utf-8');
        const lines = content.split('\n');
        
        const relativePath = path.relative(LIB_DIR, fullPath);
        const parts = relativePath.split(path.sep);
        const domain = parts[0];
        const joint = parts[2]; // atom, molecule, organism
        const family = parts[3];

        const issues: string[] = [];
        let changed = false;

        // 1. Thick
        if (lines.length > THICK_THRESHOLD) {
            issues.push(`Thick component: ${lines.length} lines`);
        }

        // 2. Missing <style>
        if (!content.includes('<style>')) {
            issues.push('Missing <style> section');
            if (FIX) {
                content += '\n\n<style>\n\t\n</style>\n';
                changed = true;
            }
        }

        // 3. Tailwind usage
        const tailwindPattern = /class="[^"]*(?:flex|grid|p-|m-|w-|h-|bg-|text-|border-|items-|justify-|relative|absolute|static|fixed|rounded|shadow|opacity-|z-|gap-|overflow-|flex-|grid-)[^"]*"/g;
        const tailwindMatches = content.match(tailwindPattern);
        if (tailwindMatches) {
            issues.push(`Tailwind usage detected: ${tailwindMatches.length} occurrences`);
        }

        // 4. State import
        const pascalFamily = toPascalCase(family);
        const stateImportPath = `$stylist/${domain}/function/state/${family}/index.svelte`;
        const stateImportRegex = new RegExp(`from\\s+['"]\\$stylist/${domain}/function/state/${family}/index\\.svelte['"]`);
        
        if (!stateImportRegex.test(content)) {
            const stateFileTS = path.join(LIB_DIR, domain, 'function', 'state', family, 'index.svelte.ts');
            if (fs.existsSync(stateFileTS)) {
                const stateImport = `import create${pascalFamily}State from '${stateImportPath}';`;
                issues.push(`Missing standard state import: ${stateImportPath}`);
                if (FIX) {
                    if (content.includes('<script lang="ts">')) {
                        content = content.replace(/<script lang="ts">/, `<script lang="ts">\n\t${stateImport}`);
                        changed = true;
                    }
                }
            }
        }

        // 5. Interface import
        const interfaceImportPath = `$stylist/${domain}/interface/recipe/${family}`;
        const interfaceImportRegex = new RegExp(`from\\s+['"]\\$stylist/${domain}/interface/recipe/${family}['"]`);
        
        if (!interfaceImportRegex.test(content)) {
             const interfacePath = path.join(LIB_DIR, domain, 'interface', 'recipe', family);
             if (fs.existsSync(interfacePath)) {
                 const interfaceName = `${pascalFamily}Props`;
                 const interfaceImport = `import type { ${interfaceName} } from '${interfaceImportPath}';`;
                 issues.push(`Missing standard interface import: ${interfaceImportPath}`);
                 if (FIX) {
                     if (content.includes('<script lang="ts">')) {
                        content = content.replace(/<script lang="ts">/, `<script lang="ts">\n\t${interfaceImport}`);
                        changed = true;
                     }
                 }
             }
        }

        // 6. Mutating interfaces
        if (content.includes('Omit<') || content.includes('Pick<') || /\$props<.*&.*>/.test(content)) {
            issues.push('Interface mutation detected (Omit/Pick/Intersection)');
        }

        // 7. Inlined interface
        const scriptMatch = content.match(/<script[^>]*>([\s\S]*?)<\/script>/);
        if (scriptMatch) {
            const scriptContent = scriptMatch[1];
            if (/interface\s+\w+\s+\{/.test(scriptContent) || /type\s+\w+\s+=\s+\{/.test(scriptContent)) {
                issues.push('Inlined interface/type definition detected in <script>');
            }
        }

        if (issues.length > 0) {
            console.log(`\n[${domain}/${joint}/${family}] ${file}:`);
            issues.forEach(issue => console.log(`  - ${issue}`));
            if (changed) console.log(`  (FIXED some issues)`);
        }

        if (changed && FIX) {
            fs.writeFileSync(fullPath, content, 'utf-8');
        }
    }
}

run().catch(console.error);
