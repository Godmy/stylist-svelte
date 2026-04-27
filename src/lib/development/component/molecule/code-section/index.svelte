<script lang="ts">
  import type { CodeSectionProps } from '$stylist/development/type/struct/code-section-props';
  import type { CodeEditorProps } from '$stylist/development/type/struct/code-editor-props';
  import { createCodeSectionState } from '$stylist/development/function/state/code-section';
  import CodeEditor from '$stylist/development/component/molecule/code-editor-legacy/index.svelte';
  import { Badge } from '$stylist';

  let props: CodeSectionProps = $props();
  const state = createCodeSectionState(props);
  const editorProps = $derived({
    code: props.code,
    language: props.language,
    showLineNumbers: props.showLineNumbers,
    showCopyButton: props.showCopyButton,
    class: typeof props.class === 'string' ? props.class : undefined
  } as CodeEditorProps);
</script>

<div {...props} class={state.containerClass}>
  {#if props.title || (props.tags && props.tags.length > 0)}
    <div class={state.headerContainerClass}>
      <div class={state.headerContentClass}>
        {#if props.title}
          <h3 class={state.titleClass}>{props.title}</h3>
        {/if}
        {#if props.tags && props.tags.length > 0}
          <div class={state.tagsContainerClass}>
            {#each props.tags as tag}
              <Badge variant="default" class={state.tagClass}>{tag}</Badge>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  {/if}

  <CodeEditor {...editorProps} />
</div>
