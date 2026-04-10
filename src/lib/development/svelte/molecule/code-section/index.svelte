<script lang="ts">
  import type { Props } from '$stylist/development/type/struct/code-section';
  import { createCodeSectionState } from '$stylist/development/function/state/code-section';
  import CodeEditor from '$stylist/development/svelte/molecule/code-editor-legacy/index.svelte';
  import { Badge } from '$stylist';

  let {
    title = '',
    language = 'javascript',
    code = '',
    variant = 'default',
    showLineNumbers = false,
    startLineNumber = 1,
    showCopyButton = true,
    copySuccessMessage = 'Code copied to clipboard!',
    copyErrorMessage = 'Failed to copy code',
    tags = [],
    class: className = '',
    ...restProps
  }: Props = $props();

  const state = createCodeSectionState({ title, language, code, variant, showLineNumbers, startLineNumber, showCopyButton, copySuccessMessage, copyErrorMessage, tags, class: className, ...restProps });
</script>

<div {...restProps} class={state.containerClass}>
  {#if title || tags.length > 0}
    <div class={state.headerContainerClass}>
      <div class={state.headerContentClass}>
        {#if title}
          <h3 class={state.titleClass}>{title}</h3>
        {/if}
        {#if tags && tags.length > 0}
          <div class={state.tagsContainerClass}>
            {#each tags as tag}
              <Badge variant="default" class={state.tagClass}>{tag}</Badge>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  {/if}

  <CodeEditor
    {code}
    {language}
    {showLineNumbers}
    showCopyButton={showCopyButton}
    {...restProps}
  />
</div>







