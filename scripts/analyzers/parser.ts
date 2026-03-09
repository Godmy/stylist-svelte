/**
 * Утилиты для парсинга TypeScript файлов
 */

import fs from 'fs';
import path from 'path';

export interface FileInfo {
  name: string;
  path: string;
  type: 'component' | 'module' | 'style' | 'contract' | 'model' | 'token' | 'icon';
  exports: ExportInfo[];
  imports: ImportInfo[];
  props?: PropInfo[];
}

export interface ExportInfo {
  name: string;
  kind: 'const' | 'let' | 'var' | 'function' | 'class' | 'type' | 'interface' | 'enum' | 'default';
  type?: string;
  value?: string;
}

export interface ImportInfo {
  names: string[];
  from: string;
}

export interface PropInfo {
  name: string;
  type: string;
  required: boolean;
  default?: string;
}

/**
 * Извлекает имя файла без расширения
 */
export function getBaseName(filePath: string): string {
  return path.basename(filePath, path.extname(filePath));
}

/**
 * Рекурсивно находит все файлы с расширениями
 */
export function findFiles(dirPath: string, extensions: string[] = ['.ts', '.js', '.svelte']): string[] {
  const results: string[] = [];
  
  if (!fs.existsSync(dirPath)) {
    return results;
  }
  
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      results.push(...findFiles(fullPath, extensions));
    } else if (entry.isFile() && extensions.includes(path.extname(entry.name))) {
      results.push(fullPath);
    }
  }
  
  return results;
}

/**
 * Парсит экспорты из TypeScript файла с детальной информацией
 */
export function parseExports(content: string): ExportInfo[] {
  const exports: ExportInfo[] = [];
  
  // export const/let/var name = value
  const constExports = content.match(/export\s+(?:const|let|var)\s+(\w+)(?::\s*([^=]+))?\s*=\s*([^;\n]+)/g);
  if (constExports) {
    constExports.forEach(exp => {
      const match = exp.match(/export\s+(?:const|let|var)\s+(\w+)(?::\s*([^=]+))?\s*=\s*([^;\n]+)/);
      if (match) {
        exports.push({
          name: match[1],
          kind: 'const',
          type: match[2]?.trim(),
          value: match[3]?.trim().slice(0, 100) // Ограничиваем длину
        });
      }
    });
  }
  
  // export function name() {}
  const funcExports = content.match(/export\s+(?:async\s+)?function\s+(\w+)/g);
  if (funcExports) {
    funcExports.forEach(exp => {
      const match = exp.match(/export\s+(?:async\s+)?function\s+(\w+)/);
      if (match) {
        exports.push({ name: match[1], kind: 'function' });
      }
    });
  }
  
  // export class Name {}
  const classExports = content.match(/export\s+class\s+(\w+)/g);
  if (classExports) {
    classExports.forEach(exp => {
      const match = exp.match(/export\s+class\s+(\w+)/);
      if (match) {
        exports.push({ name: match[1], kind: 'class' });
      }
    });
  }
  
  // export type Name = ...
  const typeExports = content.match(/export\s+type\s+(\w+)\s*=/g);
  if (typeExports) {
    typeExports.forEach(exp => {
      const match = exp.match(/export\s+type\s+(\w+)\s*=/);
      if (match) {
        exports.push({ name: match[1], kind: 'type' });
      }
    });
  }
  
  // export interface Name {}
  const interfaceExports = content.match(/export\s+interface\s+(\w+)/g);
  if (interfaceExports) {
    interfaceExports.forEach(exp => {
      const match = exp.match(/export\s+interface\s+(\w+)/);
      if (match) {
        exports.push({ name: match[1], kind: 'interface' });
      }
    });
  }
  
  // export enum Name {}
  const enumExports = content.match(/export\s+enum\s+(\w+)/g);
  if (enumExports) {
    enumExports.forEach(exp => {
      const match = exp.match(/export\s+enum\s+(\w+)/);
      if (match) {
        exports.push({ name: match[1], kind: 'enum' });
      }
    });
  }
  
  // export { name1, name2 }
  const namedExports = content.match(/export\s+\{([^}]+)\}(?:\s+from\s+['"]([^'"]+)['"])?/g);
  if (namedExports) {
    namedExports.forEach(exp => {
      const fromMatch = exp.match(/from\s+['"]([^'"]+)['"]/);
      const names = exp.replace(/export\s+\{|\}.*$/g, '').split(',');
      names.forEach(n => {
        const clean = n.trim().split(/\s+as\s+/).pop()?.trim();
        if (clean && !clean.startsWith('from')) {
          exports.push({ 
            name: clean, 
            kind: fromMatch ? 'const' : 'const',
            type: fromMatch ? `re-export from ${fromMatch[1]}` : undefined
          });
        }
      });
    });
  }
  
  // export default
  if (content.includes('export default')) {
    exports.push({ name: 'default', kind: 'default' });
  }
  
  return exports;
}

/**
 * Парсит импорты из TypeScript файла
 */
export function parseImports(content: string): ImportInfo[] {
  const imports: ImportInfo[] = [];

  // import { name1, name2 } from '...'
  const namedImports = content.match(/import\s+(?:type\s+)?\{([^}]+)\}\s+from\s+['"]([^'"]+)['"]/g);
  if (namedImports) {
    namedImports.forEach(imp => {
      const match = imp.match(/import\s+(?:type\s+)?\{([^}]+)\}\s+from\s+['"]([^'"]+)['"]/);
      if (match) {
        const names = match[1].split(',').map(n => {
          const clean = n.trim().split(/\s+as\s+/).pop()?.trim();
          return clean || '';
        }).filter(Boolean);
        imports.push({ names, from: match[2] });
      }
    });
  }

  // import type name from '...'
  const typeDefaultImports = content.match(/import\s+type\s+(\w+)\s+from\s+['"]([^'"]+)['"]/g);
  if (typeDefaultImports) {
    typeDefaultImports.forEach(imp => {
      const match = imp.match(/import\s+type\s+(\w+)\s+from\s+['"]([^'"]+)['"]/);
      if (match) {
        imports.push({ names: [match[1]], from: match[2] });
      }
    });
  }

  // import name from '...'
  const defaultImports = content.match(/import\s+(\w+)\s+from\s+['"]([^'"]+)['"]/g);
  if (defaultImports) {
    defaultImports.forEach(imp => {
      const match = imp.match(/import\s+(\w+)\s+from\s+['"]([^'"]+)['"]/);
      if (match) {
        imports.push({ names: [match[1]], from: match[2] });
      }
    });
  }

  // import '...'
  const sideEffectImports = content.match(/import\s+['"]([^'"]+)['"]/g);
  if (sideEffectImports) {
    sideEffectImports.forEach(imp => {
      const match = imp.match(/import\s+['"]([^'"]+)['"]/);
      if (match) {
        imports.push({ names: [], from: match[1] });
      }
    });
  }

  return imports;
}

/**
 * Пытается извлечь props из Svelte компонента или TypeScript интерфейса
 */
export function parseProps(content: string): PropInfo[] {
  const props: PropInfo[] = [];
  
  // export let name: type = default
  const svelteProps = content.match(/export\s+let\s+(\w+)(?::\s*([^=]+))?(?:\s*=\s*([^;\n]+))?/g);
  if (svelteProps) {
    svelteProps.forEach(prop => {
      const match = prop.match(/export\s+let\s+(\w+)(?::\s*([^=]+))?(?:\s*=\s*([^;\n]+))?/);
      if (match) {
        props.push({
          name: match[1],
          type: match[2]?.trim() || 'any',
          required: !match[3],
          default: match[3]?.trim()
        });
      }
    });
  }
  
  // interface $$Props {}
  const propsInterface = content.match(/interface\s+\$?\$?props\s*\{([^}]+)\}/s);
  if (propsInterface) {
    const propsContent = propsInterface[1];
    const propLines = propsContent.split('\n');
    propLines.forEach(line => {
      const match = line.match(/(\w+)(?:\?)?:\s*([^;]+)/);
      if (match) {
        props.push({
          name: match[1],
          type: match[2].trim(),
          required: !line.includes('?:')
        });
      }
    });
  }
  
  return props;
}

/**
 * Анализирует директорию и возвращает информацию о файлах
 */
export function analyzeDirectory(
  dirPath: string,
  type: FileInfo['type'],
  extensions: string[] = ['.ts', '.js', '.svelte']
): FileInfo[] {
  const files = findFiles(dirPath, extensions);
  
  return files.map(filePath => {
    const content = fs.readFileSync(filePath, 'utf-8');
    return {
      name: getBaseName(filePath),
      path: filePath,
      type,
      exports: parseExports(content),
      imports: parseImports(content),
      props: parseProps(content)
    };
  });
}

/**
 * Генерирует имя GraphQL типа из имени файла
 */
export function generateGraphQLTypeName(name: string, prefix: string = ''): string {
  const pascalCase = name.charAt(0).toUpperCase() + name.slice(1).replace(/[-_](\w)/g, (_, c) => c.toUpperCase());
  return prefix ? `${prefix}${pascalCase}` : pascalCase;
}

/**
 * Экранирует строку для GraphQL
 */
export function escapeGraphQLString(str: string): string {
  return str.replace(/"/g, '\\"');
}

/**
 * Находит зависимости между файлами
 */
export function findDependencies(files: FileInfo[], baseDir: string): Record<string, string[]> {
  const deps: Record<string, string[]> = {};
  
  files.forEach(file => {
    const relativePath = path.relative(baseDir, file.path);
    deps[relativePath] = [];
    
    file.imports.forEach(imp => {
      // Ищем локальные импорты
      if (imp.from.startsWith('.') || imp.from.startsWith('$')) {
        deps[relativePath].push(imp.from);
      }
    });
  });
  
  return deps;
}
