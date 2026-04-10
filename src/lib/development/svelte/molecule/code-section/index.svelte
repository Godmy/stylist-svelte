<script lang="ts">
  import type { Props } from '$stylist/development/type/struct/code-section';
  import { CodeSectionStyleManager } from '$stylist/development/class/style-manager/code-section';
  import CodeEditor from '$stylist/development/svelte/molecule/code-editor-legacy/index.svelte';
  import { Badge } from '$stylist';

  function stateFn(props: Props) {
    const containerClass = $derived(CodeSectionStyleManager.getContainerClass(typeof props.class === 'string' ? props.class : undefined));
    const headerContainerClass = $derived(CodeSectionStyleManager.getHeaderContainerClass());
    const headerContentClass = $derived(CodeSectionStyleManager.getHeaderContentClass());
    const titleClass = $derived(CodeSectionStyleManager.getTitleClass());
    const tagsContainerClass = $derived(CodeSectionStyleManager.getTagsContainerClass());
    const tagClass = $derived(CodeSectionStyleManager.getTagClass());

    return {
      get containerClass() { return containerClass; },
      get headerContainerClass() { return headerContainerClass; },
      get headerContentClass() { return headerContentClass; },
      get titleClass() { return titleClass; },
      get tagsContainerClass() { return tagsContainerClass; },
      get tagClass() { return tagClass; }
    };
  }

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

  const state = stateFn({ title, language, code, variant, showLineNumbers, startLineNumber, showCopyButton, copySuccessMessage, copyErrorMessage, tags, class: className, ...restProps });
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







