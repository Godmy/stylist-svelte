<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
  import { cn } from '$stylist/layout/function/script/merge-class-names';
const Copy = 'copy';
const Download = 'download';
const RefreshCw = 'refresh-cw';

  import type { CodeEditorRecipe } from '$stylist/information/interface/recipe/code-editor';
  import { CodeEditorStyleManager } from '$stylist/development/class/style-manager/code-editor';

  let {
    code = '',
    language = 'javascript',
    height = '300px',
    width = '100%',
    readOnly = false,
    showLineNumbers = true,
    FONT_SIZE = 14,
    showCopyButton = true,
    class: className = '',
    onCodeChange,
    ...restProps
  }: CodeEditorRecipe = $props();

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

<div class={cn(className)}>
  <div class="flex items-center justify-between border-b border-[var(--color-border-primary)] p-2">
    <span class="text-xs uppercase text-gray-500">{language}</span>
    <div class="flex gap-2">
      {#if showCopyButton}<button type="button" class={CodeEditorStyleManager.button()} onclick={handleCopy}><BaseIcon name={Copy} class="w-3 h-3 inline mr-1" />Copy</button>{/if}
      <button type="button" class={CodeEditorStyleManager.button()} onclick={handleDownload}><BaseIcon name={Download} class="w-3 h-3 inline mr-1" />Download</button>
      <button type="button" class={CodeEditorStyleManager.button()} onclick={() => handleCodeChange(code)} disabled={readOnly}><BaseIcon name={RefreshCw} class="w-3 h-3 inline mr-1" />Reset</button>
    </div>
  </div>
  <textarea
    class="w-full font-mono p-3 resize-none focus:outline-none"
    style={`height:${height};width:${width};font-size:${FONT_SIZE}px;${showLineNumbers ? 'padding-left: var(--spacing-10);' : ''}`}
    bind:value={internalCode}
    oninput={(e) => handleCodeChange((e.target as HTMLTextAreaElement).value)}
    readonly={readOnly}
  ></textarea>
</div>






