<script lang="ts">
  import type { DocumentationBlockProps } from '$stylist/development/type/struct/documentation-block-props';
  import { createDocumentationBlockState } from '$stylist/development/function/state/documentation-block';
  import CodeSection from '$stylist/development/svelte/molecule/code-section/index.svelte';
  import { Badge } from '$stylist';
  import { Divider } from '$stylist';

  let {
    title = '',
    content = '',
    variant = 'default',
    codeExamples = [],
    tags = [],
    class: className = '',
    ...restProps
  }: DocumentationBlockProps = $props();

  const state = createDocumentationBlockState({ title, content, variant, codeExamples, tags, class: className, ...restProps });
</script>

<div {...restProps} class={state.containerClass}>
  {#if title || tags.length > 0}
    <div class={state.headerContainerClass}>
      <div class={state.headerContentClass}>
        {#if title}
          <h2 class={state.titleClass}>{title}</h2>
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

  <div class={state.contentClass}>
    {@html content}
  </div>

  {#if codeExamples && codeExamples.length > 0}
    <div class={state.codeExamplesContainerClass}>
      {#each codeExamples as example, i}
        {#if i > 0}
          <Divider class={state.codeExampleDividerClass} />
        {/if}
        <CodeSection
          title={example.title}
          code={example.code}
          language={example.language}
          showLineNumbers={example.showLineNumbers}
        />
      {/each}
    </div>
  {/if}
</div>
