<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
  import type { CodeEditorProps } from '$stylist/development/type/struct/code-editor-props';
  import { createCodeEditorState } from '$stylist/development/function/state/code-editor';

  const Copy = 'copy';
  const Download = 'download';
  const RefreshCw = 'refresh-cw';

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
  }: CodeEditorProps = $props();

  const state = createCodeEditorState({ code, language, height, width, readOnly, showLineNumbers, FONT_SIZE, showCopyButton, class: className, onCodeChange, ...restProps });
</script>

<div class={state.containerClass}>
  <div class="flex items-center justify-between border-b border-[var(--color-border-primary)] p-2">
    <span class="text-xs uppercase text-gray-500">{language}</span>
    <div class="flex gap-2">
      {#if showCopyButton}<button type="button" class="" onclick={state.handleCopy}><BaseIcon name={Copy} class="w-3 h-3 inline mr-1" />Copy</button>{/if}
      <button type="button" class="" onclick={state.handleDownload}><BaseIcon name={Download} class="w-3 h-3 inline mr-1" />Download</button>
      <button type="button" class="" onclick={() => state.handleCodeChange(code)} disabled={readOnly}><BaseIcon name={RefreshCw} class="w-3 h-3 inline mr-1" />Reset</button>
    </div>
  </div>
  <textarea
    class="w-full font-mono p-3 resize-none focus:outline-none"
    style={`height:${height};width:${width};font-size:${FONT_SIZE}px;${showLineNumbers ? 'padding-left: var(--spacing-10);' : ''}`}
    bind:value={state.internalCode}
    oninput={(e) => state.handleCodeChange((e.target as HTMLTextAreaElement).value)}
    readonly={readOnly}
  ></textarea>
</div>
