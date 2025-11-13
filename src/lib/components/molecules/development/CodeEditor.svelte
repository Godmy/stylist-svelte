<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Code, Copy, Download, Play, Save, Settings, Terminal } from 'lucide-svelte';

  type Language = 'javascript' | 'typescript' | 'html' | 'css' | 'json' | 'markdown' | 'python' | 'other';

  type Props = {
    initialCode?: string;
    language?: Language;
    showLineNumbers?: boolean;
    showToolbar?: boolean;
    showLanguageIndicator?: boolean;
    editable?: boolean;
    onCodeChange?: (code: string) => void;
    onRun?: () => void;
    onSave?: () => void;
    theme?: 'light' | 'dark';
    title?: string;
    class?: string;
    toolbarClass?: string;
    editorClass?: string;
    headerClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    initialCode = '// Write your code here...',
    language = 'javascript',
    showLineNumbers = true,
    showToolbar = true,
    showLanguageIndicator = true,
    editable = true,
    onCodeChange,
    onRun,
    onSave,
    theme = 'light',
    title = 'Code Editor',
    class: className = '',
    toolbarClass = '',
    editorClass = '',
    headerClass = ''
  } = $props();

  let code = $state(initialCode);
  let copied = $state(false);
  let selectedTheme = $state(theme);

  function copyToClipboard() {
    navigator.clipboard.writeText(code);
    copied = true;
    setTimeout(() => copied = false, 2000);
  }

  function downloadCode() {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `code.${getFileExtension(language as Language)}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function handleCodeChange() {
    if (onCodeChange) {
      onCodeChange(code);
    }
  }

  function getFileExtension(lang: Language): string {
    switch(lang) {
      case 'javascript': return 'js';
      case 'typescript': return 'ts';
      case 'html': return 'html';
      case 'css': return 'css';
      case 'json': return 'json';
      case 'markdown': return 'md';
      case 'python': return 'py';
      default: return 'txt';
    }
  }

  function getLanguageDisplayName(lang: Language): string {
    switch(lang) {
      case 'javascript': return 'JavaScript';
      case 'typescript': return 'TypeScript';
      case 'html': return 'HTML';
      case 'css': return 'CSS';
      case 'json': return 'JSON';
      case 'markdown': return 'Markdown';
      case 'python': return 'Python';
      default: return 'Plain Text';
    }
  }
</script>

<div class={`border border-gray-200 rounded-lg overflow-hidden shadow-sm ${className}`}>
  {#if showToolbar}
    <div class={`flex items-center justify-between px-4 py-2 border-b ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} ${headerClass}`}>
      <div class="flex items-center">
        <Code class={`h-5 w-5 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-500'} mr-2`} />
        <h3 class={`text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>{title}</h3>
        
        {#if showLanguageIndicator}
          <span class={`ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            theme === 'dark' ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
          }`}>
            {getLanguageDisplayName(language as Language)}
          </span>
        {/if}
      </div>
      
      <div class="flex items-center space-x-2">
        <button
          type="button"
          class={`p-1.5 rounded ${
            theme === 'dark' ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200'
          } ${toolbarClass}`}
          onclick={copyToClipboard}
          title="Copy code"
        >
          {#if copied}
            <svg class="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          {:else}
            <Copy class="h-4 w-4" />
          {/if}
        </button>
        
        <button
          type="button"
          class={`p-1.5 rounded ${
            theme === 'dark' ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200'
          } ${toolbarClass}`}
          onclick={downloadCode}
          title="Download code"
        >
          <Download class="h-4 w-4" />
        </button>
        
        {#if onRun}
          <button
            type="button"
            class={`p-1.5 rounded ${
              theme === 'dark' ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200'
            } ${toolbarClass}`}
            onclick={onRun}
            title="Run code"
          >
            <Play class="h-4 w-4" />
          </button>
        {/if}
        
        {#if onSave}
          <button
            type="button"
            class={`p-1.5 rounded ${
              theme === 'dark' ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200'
            } ${toolbarClass}`}
            onclick={onSave}
            title="Save code"
          >
            <Save class="h-4 w-4" />
          </button>
        {/if}
        
        <button
          type="button"
          class={`p-1.5 rounded ${
            theme === 'dark' ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200'
          } ${toolbarClass}`}
          onclick={() => selectedTheme = selectedTheme === 'light' ? 'dark' : 'light'}
          title="Toggle theme"
        >
          {#if selectedTheme === 'dark'}
            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          {:else}
            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
            </svg>
          {/if}
        </button>
      </div>
    </div>
  {/if}

  <div class={`relative ${editorClass}`}>
    <pre class={`overflow-auto ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}><code contenteditable={editable} oninput={() => handleCodeChange()} class="block p-4 font-mono text-sm outline-none">
      {#if showLineNumbers}
        {#each code.split('\n') as line, i}
          <div class="flex">
            <span class={`inline-block w-10 pr-4 text-right text-gray-500 select-none ${theme === 'dark' ? 'text-gray-500' : ''}`}>
              {i + 1}
            </span>
            <span>{line}</span>
          </div>
        {/each}
      {:else}
        {code}
      {/if}
    </code></pre>
    
    {#if !editable}
      <div class={`absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        <div class="bg-white bg-opacity-90 p-4 rounded-lg shadow-lg">
          <div class="flex items-center">
            <Terminal class="h-5 w-5 text-gray-600 mr-2" />
            <span class="font-medium">Read-only mode</span>
          </div>
        </div>
      </div>
    {/if}
  </div>
  
  <div class={`border-t px-4 py-2 text-xs text-gray-500 flex justify-between ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
    <div>Editable: {editable ? 'Yes' : 'No'}</div>
    <div>Lines: {code.split('\n').length}</div>
  </div>
</div>