export const CODE_LANGUAGES = [
    'javascript',
    'typescript',
    'html',
    'css',
    'svelte',
    'json',
    'markdown',
    'python',
    'java',
    'csharp',
    'cpp',
    'go',
    'rust',
    'sql',
    'yaml',
    'xml'
] as const;
export type CodeLanguage = (typeof CODE_LANGUAGES)[number];
