<script lang="ts">
  import { FileCode, Download, Copy, CheckCircle, Code2, ExternalLink, Package, Terminal } from 'lucide-svelte';
  import { generateCode, type ExportFormat } from '../../utils/codeGenerator';

  interface Props {
    componentName?: string;
    svelteCode?: string;
    props?: Record<string, any>;
  }

  let { componentName = '', svelteCode = '', props = {} }: Props = $props();

  let selectedFormat = $state<ExportFormat>('svelte');
  let copySuccess = $state(false);
  let npmCopySuccess = $state(false);

  const formats: { id: ExportFormat; label: string; icon: string; color: string }[] = [
    { id: 'svelte', label: 'Svelte', icon: '⚡', color: 'from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30 border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-300' },
    { id: 'react', label: 'React', icon: '⚛️', color: 'from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300' },
    { id: 'vue', label: 'Vue', icon: '💚', color: 'from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-green-200 dark:border-green-800 text-green-700 dark:text-green-300' },
    { id: 'html', label: 'HTML', icon: '📄', color: 'from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300' },
    { id: 'typescript', label: 'TypeScript', icon: '🔷', color: 'from-indigo-50 to-blue-50 dark:from-indigo-900/30 dark:to-blue-900/30 border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300' }
  ];

  const currentCode = $derived(generateCode({ componentName, svelteCode, props }, selectedFormat));

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

  async function copyNpmCommand() {
    const command = 'npm install @stylist-svelte/components';
    try {
      await navigator.clipboard.writeText(command);
      npmCopySuccess = true;
      setTimeout(() => {
        npmCopySuccess = false;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }

  function openInCodeSandbox() {
    function createAppContent(name: string, code: string) {
      const lt = '<';
      const gt = '>';
      const slash = '/';
      return lt + 'script>\n' +
        '  import ' + name + ' from \'./\' + (name || \'Component\') + \'.svelte\';\n' +
        lt + '/script>\n\n' +
        lt + name + ' ' + slash + gt;
    }

    const parameters = {
      files: {
        'package.json': {
          content: {
            dependencies: {
              svelte: 'latest',
              '@stylist-svelte/components': 'latest'
            }
          }
        },
        [`${componentName || 'Component'}.svelte`]: {
          content: currentCode
        },
        'App.svelte': {
          content: createAppContent(componentName, currentCode)
        }
      }
    };

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://codesandbox.io/api/v1/sandboxes/define';
    form.target = '_blank';

    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'parameters';
    input.value = JSON.stringify(parameters);

    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  }

  function openInStackBlitz() {
    const projectConfig = {
      title: componentName || 'Svelte Component',
      description: `${componentName} from Stylist Svelte`,
      template: 'node',
      files: {
        [`${componentName || 'Component'}.svelte`]: currentCode,
        'package.json': JSON.stringify({
          name: 'svelte-component',
          version: '1.0.0',
          dependencies: {
            svelte: '^5.0.0',
            '@stylist-svelte/components': 'latest'
          }
        }, null, 2)
      }
    };

    const url = `https://stackblitz.com/fork/svelte?file=${componentName || 'Component'}.svelte`;
    window.open(url, '_blank');
  }
</script>

<div class="export-panel p-6 h-full overflow-auto bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
  <!-- Header -->
  <div class="mb-6">
    <h3 class="text-xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 dark:from-orange-400 dark:via-red-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
      Export Component
    </h3>
    <p class="text-sm text-gray-600 dark:text-gray-400">
      Export to multiple formats, online editors, or install via npm
    </p>
  </div>

  <!-- Format selector -->
  <div class="mb-6">
    <h3 class="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-3">
      Select Format
    </h3>
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
      <h3 class="block text-xs font-bold text-gray-700 dark:text-gray-300">
        Code Preview
      </h3>
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

  <!-- Quick Actions -->
  <div class="mb-6">
    <h3 class="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-3">
      Quick Actions
    </h3>
    <div class="grid grid-cols-2 gap-3">
      <!-- CodeSandbox -->
      <button
        onclick={openInCodeSandbox}
        class="group p-4 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 hover:from-yellow-100 hover:to-amber-100 dark:hover:from-yellow-800/30 dark:hover:to-amber-800/30 rounded-xl border-2 border-yellow-200 dark:border-yellow-800 transition-all hover:scale-105 active:scale-95 shadow-sm hover:shadow-lg"
      >
        <div class="flex items-center justify-between mb-2">
          <div class="text-2xl">📦</div>
          <ExternalLink class="w-4 h-4 text-yellow-600 dark:text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div class="text-left">
          <h4 class="text-sm font-bold text-yellow-900 dark:text-yellow-200 mb-1">
            CodeSandbox
          </h4>
          <p class="text-xs text-yellow-700 dark:text-yellow-300">
            Open in browser IDE
          </p>
        </div>
      </button>

      <!-- StackBlitz -->
      <button
        onclick={openInStackBlitz}
        class="group p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 hover:from-blue-100 hover:to-cyan-100 dark:hover:from-blue-800/30 dark:hover:to-cyan-800/30 rounded-xl border-2 border-blue-200 dark:border-blue-800 transition-all hover:scale-105 active:scale-95 shadow-sm hover:shadow-lg"
      >
        <div class="flex items-center justify-between mb-2">
          <div class="text-2xl">⚡</div>
          <ExternalLink class="w-4 h-4 text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div class="text-left">
          <h4 class="text-sm font-bold text-blue-900 dark:text-blue-200 mb-1">
            StackBlitz
          </h4>
          <p class="text-xs text-blue-700 dark:text-blue-300">
            Instant dev environment
          </p>
        </div>
      </button>
    </div>
  </div>

  <!-- NPM Installation -->
  <div class="mb-6">
    <h3 class="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-3">
      NPM Installation
    </h3>
    <div class="flex gap-2">
      <div class="flex-1 bg-gray-900 dark:bg-black rounded-lg border-2 border-gray-700 dark:border-gray-800 px-4 py-3 font-mono text-sm text-green-400 flex items-center gap-2 shadow-lg">
        <Terminal class="w-4 h-4 flex-shrink-0" />
        <code class="flex-1">npm install @stylist-svelte/components</code>
      </div>
      <button
        onclick={copyNpmCommand}
        class="px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-lg font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center gap-2"
      >
        {#if npmCopySuccess}
          <CheckCircle class="w-4 h-4" />
          Copied!
        {:else}
          <Copy class="w-4 h-4" />
          Copy
        {/if}
      </button>
    </div>
  </div>

  <!-- Features -->
  <div class="grid grid-cols-2 gap-4">
    <div class="p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl border-2 border-orange-200 dark:border-orange-800 shadow-sm">
      <div class="flex items-center gap-2 mb-2">
        <Code2 class="w-4 h-4 text-orange-600 dark:text-orange-400" />
        <h4 class="text-xs font-bold text-orange-900 dark:text-orange-200">
          Framework Support
        </h4>
      </div>
      <p class="text-xs text-orange-700 dark:text-orange-300">
        Export to Svelte, React, Vue, or plain HTML
      </p>
    </div>

    <div class="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border-2 border-green-200 dark:border-green-800 shadow-sm">
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
  <div class="mt-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border-2 border-purple-200 dark:border-purple-800 shadow-sm">
    <p class="text-xs text-purple-700 dark:text-purple-300">
      <strong class="text-purple-900 dark:text-purple-200">💡 Pro tip:</strong> The exported code includes all current prop values and can be used directly in your project!
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