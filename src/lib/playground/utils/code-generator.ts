/**
 * Code Generator
 * Generates Svelte component code from props
 */

export interface CodeGeneratorOptions {
  componentName: string;
  props: Record<string, any>;
  children?: string;
  imports?: Record<string, string>;
}

export function generateComponentCode(options: CodeGeneratorOptions): string {
  const { componentName, props, children, imports } = options;

  // Generate imports
  let code = '';
  if (imports) {
    code += '<script lang="ts">\n';
    Object.entries(imports).forEach(([name, from]) => {
      code += `  import { ${name} } from '${from}';\n`;
    });
    code += '</script>\n\n';
  }

  // Generate component opening tag
  code += `<${componentName}`;

  // Generate props
  const propEntries = Object.entries(props).filter(([_, value]) => value !== undefined);

  if (propEntries.length > 0) {
    code += '\n';
    propEntries.forEach(([key, value], index) => {
      const isLast = index === propEntries.length - 1;
      code += `  ${key}={${formatValue(value)}}${isLast ? '' : '\n'}`;
    });
    code += '\n';
  }

  // Close tag
  if (children) {
    code += `>\n  ${children}\n</${componentName}>`;
  } else {
    code += propEntries.length > 0 ? ' />' : '/>';
  }

  return code;
}

function formatValue(value: any): string {
  if (typeof value === 'string') {
    return `"${value}"`;
  }
  if (typeof value === 'boolean') {
    return value.toString();
  }
  if (typeof value === 'number') {
    return value.toString();
  }
  if (Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value === 'object') {
    return JSON.stringify(value);
  }
  return String(value);
}

export function prettifyCode(code: string): string {
  // Basic prettification (can be enhanced with prettier)
  return code;
}
