<script lang="ts">
  import { Copy, Download, RefreshCw } from 'lucide-svelte';
  import type { CodeEditorProps } from '$stylist/design-system/props/molecules-migration';
  import { CodeEditorStyleManager } from '$stylist/design-system/styles/molecules-migration';

  let {
    code = '',
    language = 'javascript',
    height = '300px',
    width = '100%',
    readOnly = false,
    showLineNumbers = true,
    fontSize = 14,
    showCopyButton = true,
    class: className = '',
    onCodeChange,
    ...restProps
  }: CodeEditorProps = $props();

  let internalCode = $state(code);
  $effect(() => {
    internalCode = code;
  });

  function handleCodeChange(newValue: string) {
    internalCode = newValue;
    onCodeChange?.(newValue);
  }

  function handleCopy() {
    navigator.clipboard.writeText(internalCode);
  }

  function handleDownload() {
    const blob = new Blob([internalCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `code.${language}`;
    a.click();
    URL.revokeObjectURL(url);
  }
</script>

<div class={CodeEditorStyleManager.root(className)} {...restProps}>
  <div class="flex items-center justify-between border-b border-[var(--color-border-default)] p-2">
    <span class="text-xs uppercase text-gray-500">{language}</span>
    <div class="flex gap-2">
      {#if showCopyButton}<button type="button" class={CodeEditorStyleManager.button()} onclick={handleCopy}><Copy class="w-3 h-3 inline mr-1" />Copy</button>{/if}
      <button type="button" class={CodeEditorStyleManager.button()} onclick={handleDownload}><Download class="w-3 h-3 inline mr-1" />Download</button>
      <button type="button" class={CodeEditorStyleManager.button()} onclick={() => handleCodeChange(code)} disabled={readOnly}><RefreshCw class="w-3 h-3 inline mr-1" />Reset</button>
    </div>
  </div>
  <textarea
    class="w-full font-mono p-3 resize-none focus:outline-none"
    style={`height:${height};width:${width};font-size:${fontSize}px;${showLineNumbers ? 'padding-left:40px;' : ''}`}
    bind:value={internalCode}
    oninput={(e) => handleCodeChange((e.target as HTMLTextAreaElement).value)}
    readonly={readOnly}
  ></textarea>
</div>
