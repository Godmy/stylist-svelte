import type { PlaygroundGenericCodeViewerProps } from '$stylist/playground/type/struct/playground-generic-code-viewer-props';
export function createPlaygroundGenericCodeViewerState(props: PlaygroundGenericCodeViewerProps) {
  const code = $derived(props.code ?? '');
  const language = $derived(props.language ?? 'svelte');

  let copied = $state(false);
  let highlightedCode = $state('');

  async function updateHighlightedCode() {
    if (code) {
      try {
        const { codeToHtml } = await import('shiki');
        highlightedCode = await codeToHtml(code, {
          lang: language,
          theme: 'github-dark'
        });
      } catch {
        highlightedCode = '';
      }
    }
  }

  async function copyCode() {
    try {
      if (code) {
        await navigator.clipboard.writeText(code);
        copied = true;
        setTimeout(() => { copied = false; }, 2000);
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }

  return {
    get code() { return code; },
    get language() { return language; },
    get copied() { return copied; },
    get highlightedCode() { return highlightedCode; },
    updateHighlightedCode,
    copyCode
  };
}

export default createPlaygroundGenericCodeViewerState;
