<script lang="ts">
  import { onMount } from 'svelte';
  import { buildComponentPreviewCode } from '$stylist/development/function/script/build-component-preview-code';

  type Props = {
    code?: string;
    componentName?: string;
    props?: Record<string, any>;
    language?: string;
    theme?: 'light' | 'dark' | 'github-light' | 'github-dark';
    onCopySuccess?: () => void;
    onCopyError?: (error: unknown) => void;
    onDownloadSuccess?: () => void;
    onDownloadError?: (error: unknown) => void;
  };

  const {
    code = '',
    componentName = '',
    props = {},
    language = 'svelte',
    theme = 'github-light',
    onCopySuccess,
    onCopyError,
    onDownloadSuccess,
    onDownloadError
  }: Props = $props();

  let highlightedCode = $state('');
  let isLoading = $state(true);
  let currentTheme = $state(theme);
  let darkMode = $state(false);
  let highlightSequence = 0;
  let shikiLoader: Promise<typeof import('shiki')> | null = null;

  const generatedCode = $derived.by(() => {
    if (componentName && Object.keys(props).length > 0) {
      return buildComponentPreviewCode({ componentName, props });
    }
    return code;
  });

  const currentLanguage = $derived.by(() => (componentName ? 'svelte' : language));

  $effect(() => {
    const codeSnippet = generatedCode;
    const lang = currentLanguage;
    const activeTheme = currentTheme;
    const requestId = ++highlightSequence;
    highlightCode(codeSnippet, lang, activeTheme, requestId);
  });

  $effect(() => {
    currentTheme = darkMode ? 'github-dark' : 'github-light';
  });

  const loadShiki = () => {
    if (!shikiLoader) {
      shikiLoader = import('shiki');
    }
    return shikiLoader;
  };

  async function highlightCode(codeToHighlight: string, lang: string, activeTheme: string, requestId: number) {
    if (!codeToHighlight) {
      highlightedCode = '';
      isLoading = false;
      return;
    }

    try {
      isLoading = true;
      const { codeToHtml } = await loadShiki();
      const highlighted = await codeToHtml(codeToHighlight, {
        lang,
        theme: activeTheme
      });

      if (requestId === highlightSequence) {
        highlightedCode = highlighted;
      }
    } catch (error) {
      if (requestId === highlightSequence) {
        console.error('Code highlight error', error);
        highlightedCode = `<pre><code>${codeToHighlight}</code></pre>`;
      }
    } finally {
      if (requestId === highlightSequence) {
        isLoading = false;
      }
    }
  }

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(generatedCode);
      onCopySuccess?.();
    } catch (error) {
      console.error('Copy error', error);
      onCopyError?.(error);
    }
  };

  const downloadCode = () => {
    try {
      const blob = new Blob([generatedCode], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${componentName || 'component'}.svelte`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      onDownloadSuccess?.();
    } catch (error) {
      console.error('Download error', error);
      onDownloadError?.(error);
    }
  };

  onMount(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      darkMode = true;
    }

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      darkMode = e.matches;
    };
    media.addEventListener('change', handler);

    return () => media.removeEventListener('change', handler);
  });
</script>

<div class="code-viewer border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
  <div class="code-tabs flex items-center justify-between border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-2">
    <div class="flex items-center gap-2">
      <span class="px-2 py-1 text-xs font-semibold rounded bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400">
        Svelte 5
      </span>
      <span class="text-xs text-gray-500 dark:text-gray-400">
        Component Code
      </span>
    </div>
  </div>

  <div class="code-toolbar flex items-center justify-between p-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
    <div class="text-xs text-gray-500 dark:text-gray-400">
      {currentLanguage} • {generatedCode.split('n').length} lines
      {#if componentName}
        • Dynamic generation
      {/if}
    </div>
    <div class="flex space-x-2">
      <button
        onclick={copyCode}
        class="text-xs bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-2 py-1 rounded"
        title="Copy code"
      >
        Copy
      </button>
      <button
        onclick={downloadCode}
        class="text-xs bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-2 py-1 rounded"
        title="Download file"
      >
        Download
      </button>
    </div>
  </div>

  <div class="code-content overflow-auto max-h-96">
    {#if isLoading}
      <div class="p-4 text-center text-gray-500 dark:text-gray-400">
        Loading highlighted code...
      </div>
    {:else if highlightedCode}
      {@html highlightedCode}
    {:else}
      <div class="p-4 text-gray-500 dark:text-gray-400">
        No code to display
      </div>
    {/if}
  </div>
</div>




