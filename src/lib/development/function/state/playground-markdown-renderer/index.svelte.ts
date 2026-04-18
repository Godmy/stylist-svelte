import type { PlaygroundMarkdownRendererProps } from '$stylist/development/type/struct/playground-markdown-renderer-props';
export function createPlaygroundMarkdownRendererState(props: PlaygroundMarkdownRendererProps) {
  const content = $derived(props.content);
  const hostClass = $derived(props.class ?? '');

  let html = $state('');

  return {
    get content() { return content; },
    get hostClass() { return hostClass; },
    get html() { return html; },
    set html(value: string) { html = value; }
  };
}

export default createPlaygroundMarkdownRendererState;
