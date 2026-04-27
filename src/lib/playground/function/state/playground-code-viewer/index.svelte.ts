import type { PlaygroundCodeViewerProps } from '$stylist/playground/type/struct/playground-code-viewer-props';
export function createPlaygroundCodeViewerState(props: PlaygroundCodeViewerProps) {
  const code = $derived(props.code ?? '');
  const componentName = $derived(props.componentName ?? '');
  const componentProps = $derived(props.props ?? {});
  const language = $derived(props.language ?? 'svelte');
  const theme = $derived(props.theme ?? 'github-light');
  const onCopySuccess = $derived(props.onCopySuccess);
  const onCopyError = $derived(props.onCopyError);
  const onDownloadSuccess = $derived(props.onDownloadSuccess);
  const onDownloadError = $derived(props.onDownloadError);

  let highlightedCode = $state('');
  let isLoading = $state(true);
  let currentTheme = $state(theme);
  let darkMode = $state(false);
  let highlightSequence = 0;
  let shikiLoader: Promise<typeof import('shiki')> | null = null;

  const generatedCode = $derived.by(() => {
    if (componentName && Object.keys(componentProps).length > 0) {
      // Would call buildComponentPreviewCode here
      return code;
    }
    return code;
  });

  const currentLanguage = $derived.by(() => (componentName ? 'svelte' : language));

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

  return {
    get code() { return code; },
    get componentName() { return componentName; },
    get componentProps() { return componentProps; },
    get language() { return language; },
    get theme() { return theme; },
    get highlightedCode() { return highlightedCode; },
    get isLoading() { return isLoading; },
    get currentTheme() { return currentTheme; },
    get darkMode() { return darkMode; },
    get generatedCode() { return generatedCode; },
    get currentLanguage() { return currentLanguage; },
    set darkMode(value: boolean) { darkMode = value; },
    set currentTheme(value: 'light' | 'dark' | 'github-light' | 'github-dark') { currentTheme = value; },
    highlightCode,
    copyCode,
    downloadCode,
    loadShiki
  };
}

export default createPlaygroundCodeViewerState;
