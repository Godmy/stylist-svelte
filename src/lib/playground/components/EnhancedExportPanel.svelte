<script lang="ts">
  import { FileCode, Download, Copy, CheckCircle, Code2 } from 'lucide-svelte';

  interface Props {
    componentName?: string;
    svelteCode?: string;
    props?: Record<string, any>;
  }

  let { componentName = '', svelteCode = '', props = {} }: Props = $props();

  type ExportFormat = 'svelte' | 'react' | 'vue' | 'html' | 'typescript';

  let selectedFormat = $state<ExportFormat>('svelte');
  let copySuccess = $state(false);

  const formats: { id: ExportFormat; label: string; icon: string; color: string }[] = [
    { id: 'svelte', label: 'Svelte', icon: '⚡', color: 'from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30 border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-300' },
    { id: 'react', label: 'React', icon: '⚛️', color: 'from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300' },
    { id: 'vue', label: 'Vue', icon: '💚', color: 'from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-green-200 dark:border-green-800 text-green-700 dark:text-green-300' },
    { id: 'html', label: 'HTML', icon: '📄', color: 'from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300' },
    { id: 'typescript', label: 'TypeScript', icon: '🔷', color: 'from-indigo-50 to-blue-50 dark:from-indigo-900/30 dark:to-blue-900/30 border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300' }
  ];

  // Generate code for different formats
  function generateCode(format: ExportFormat): string {
    const propsString = Object.entries(props)
      .map(([key, value]) => {
        if (typeof value === 'string') return `${key}="${value}"`;
        if (typeof value === 'boolean') return value ? key : `${key}={false}`;
        return `${key}={${JSON.stringify(value)}}`;
      })
      .join(' ');

    switch (format) {
      case 'svelte':
        return svelteCode || `<script lang="ts">
  import { ${componentName} } from '@stylist-svelte/components';
</script>

<${componentName} ${propsString} />`;

      case 'react':
        return `import React from 'react';
import { ${componentName} } from '@stylist-react/components';

export default function Example() {
  return (
    <${componentName} ${propsString} />
  );
}`;

      case 'vue':
        return `<template>
  <${componentName} ${propsString} />
</template>

<script setup lang="ts">
import { ${componentName} } from '@stylist-vue/components';
</script>`;

      case 'html':
        return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${componentName} Example</title>
  <script type="module" src="https://unpkg.com/@stylist-svelte/components"></script>
</head>
<body>
  <${componentName.toLowerCase()} ${propsString}></${componentName.toLowerCase()}>
</body>
</html>`;

      case 'typescript':
        return `import type { ComponentProps } from 'svelte';
import { ${componentName} } from '@stylist-svelte/components';

type ${componentName}Props = ComponentProps<typeof ${componentName}>;

const props: ${componentName}Props = ${JSON.stringify(props, null, 2)};

export { props };`;

      default:
        return svelteCode;
    }
  }

  const currentCode = $derived(generateCode(selectedFormat));

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(currentCode);
      copySuccess = true;
      setTimeout(() => {
        copySuccess = false;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }

  function downloadCode() {
    const extensions: Record<ExportFormat, string> = {
      svelte: '.svelte',
      react: '.tsx',
      vue: '.vue',
      html: '.html',
      typescript: '.ts'
    };

    const blob = new Blob([currentCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${componentName || 'component'}${extensions[selectedFormat]}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
</script>

<div class="export-panel p-6 h-full overflow-auto bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
  <!-- Header -->
  <div class="mb-6">
    <h3 class="text-base font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
      Export Component
    </h3>
    <p class="text-sm text-gray-600 dark:text-gray-400">
      Choose a format and export your component code
    </p>
  </div>

  <!-- Format selector -->
  <div class="mb-6">
    <label class="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-3">
      Select Format
    </label>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
      {#each formats as format}
        <button
          onclick={() => selectedFormat = format.id}
          class="format-button group relative p-4 bg-gradient-to-br {selectedFormat === format.id ? format.color : 'from-white to-gray-50 dark:from-gray-800 dark:to-gray-900'} rounded-xl border-2 {selectedFormat === format.id ? format.color.split(' ').filter(c => c.includes('border'))[0] : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'} transition-all hover:scale-105 active:scale-95 shadow-sm hover:shadow-md"
        >
          <div class="flex flex-col items-center gap-2">
            <span class="text-2xl">{format.icon}</span>
            <span class="text-sm font-bold {selectedFormat === format.id ? format.color.split(' ').filter(c => c.includes('text'))[0] : 'text-gray-700 dark:text-gray-300'}">
              {format.label}
            </span>
          </div>
          {#if selectedFormat === format.id}
            <div class="absolute top-2 right-2">
              <CheckCircle class="w-5 h-5 {format.color.split(' ').filter(c => c.includes('text'))[0]}" />
            </div>
          {/if}
        </button>
      {/each}
    </div>
  </div>

  <!-- Code preview -->
  <div class="mb-6">
    <div class="flex items-center justify-between mb-3">
      <label class="block text-xs font-bold text-gray-700 dark:text-gray-300">
        Code Preview
      </label>
      <div class="flex gap-2">
        <button
          onclick={copyCode}
          class="group flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 dark:hover:from-green-800/40 dark:hover:to-emerald-800/40 text-green-700 dark:text-green-300 transition-all hover:scale-105 active:scale-95 shadow-sm hover:shadow-md border-2 border-green-200 dark:border-green-800"
        >
          {#if copySuccess}
            <CheckCircle class="w-3.5 h-3.5" />
            Copied!
          {:else}
            <Copy class="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
            Copy
          {/if}
        </button>
        <button
          onclick={downloadCode}
          class="group flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 dark:hover:from-blue-800/40 dark:hover:to-indigo-800/40 text-blue-700 dark:text-blue-300 transition-all hover:scale-105 active:scale-95 shadow-sm hover:shadow-md border-2 border-blue-200 dark:border-blue-800"
        >
          <Download class="w-3.5 h-3.5 transition-transform group-hover:translate-y-1" />
          Download
        </button>
      </div>
    </div>

    <div class="relative bg-gray-900 dark:bg-black rounded-xl border-2 border-gray-700 dark:border-gray-800 overflow-hidden shadow-xl">
      <div class="flex items-center justify-between px-4 py-2 bg-gray-800 dark:bg-gray-900 border-b border-gray-700">
        <div class="flex items-center gap-2">
          <div class="w-3 h-3 rounded-full bg-red-500"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div class="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span class="text-xs font-mono text-gray-400">
          {formats.find(f => f.id === selectedFormat)?.label} Code
        </span>
        <div class="w-16"></div>
      </div>
      <div class="p-4 overflow-x-auto max-h-96 overflow-y-auto">
        <pre class="text-sm"><code class="font-mono text-gray-100">{currentCode}</code></pre>
      </div>
    </div>
  </div>

  <!-- Export options -->
  <div class="grid grid-cols-2 gap-4">
    <div class="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl border border-indigo-200 dark:border-indigo-800">
      <div class="flex items-center gap-2 mb-2">
        <Code2 class="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
        <h4 class="text-xs font-bold text-indigo-900 dark:text-indigo-200">
          Framework Support
        </h4>
      </div>
      <p class="text-xs text-indigo-700 dark:text-indigo-300">
        Export to Svelte, React, Vue, or plain HTML
      </p>
    </div>

    <div class="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
      <div class="flex items-center gap-2 mb-2">
        <FileCode class="w-4 h-4 text-green-600 dark:text-green-400" />
        <h4 class="text-xs font-bold text-green-900 dark:text-green-200">
          TypeScript Ready
        </h4>
      </div>
      <p class="text-xs text-green-700 dark:text-green-300">
        All exports include full TypeScript types
      </p>
    </div>
  </div>

  <!-- Pro tip -->
  <div class="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
    <p class="text-xs text-gray-600 dark:text-gray-400">
      <strong class="text-gray-900 dark:text-white">Pro tip:</strong> The exported code includes all current prop values and can be used directly in your project.
    </p>
  </div>
</div>

<style>
  .format-button {
    animation: fade-in 0.3s ease-out;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  pre {
    margin: 0;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  code {
    display: block;
  }
</style>