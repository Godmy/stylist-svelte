<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = HTMLAttributes<HTMLPreElement> & {
    code?: string;
    language?: string;
    showLineNumbers?: boolean;
    showCopyButton?: boolean;
  };

  let {
    code = '',
    language = 'text',
    class: className = '',
    ...restProps
  }: Props = $props();
</script>

<pre class={`rounded-md border border-gray-200 bg-gray-50 p-4 text-sm overflow-auto ${className}`} {...restProps}>
  <code class={`language-${language}`}>{code}</code>
</pre>
