<script lang="ts">
  /**
   * @component RecipeComponentPreview
   * @description Component preview with code and demo
   */

  import type { Snippet } from 'svelte';
  import { createComponentPreviewState } from '$stylist/development/function/state/component-preview';
  import CodeBlock from '../code-block/index.svelte';

  let {
    title,
    description,
    code,
    language = 'svelte',
    componentDemo,
    showCode = false,
    class: className = ''
  }: {
    title: string;
    description?: string;
    code: string;
    language?: string;
    componentDemo: Snippet;
    showCode?: boolean;
    class?: string;
  } = $props();

  const state = createComponentPreviewState({ title, description, code, language, componentDemo, showCode, class: className });
</script>

<div class={state.classes}>
  <div class={state.headerClasses}>
    <h3 class={state.titleClasses}>{title}</h3>
    {#if description}
      <p class={state.descriptionClasses}>{description}</p>
    {/if}
  </div>

  <div class={state.tabContainerClasses}>
    <div class={state.tabListClasses}>
      <button
        type="button"
        class={state.tabButtonClasses(state.activeTab === 'preview')}
        onclick={() => state.setPreviewTab('preview')}
      >
        Preview
      </button>
      <button
        type="button"
        class={state.tabButtonClasses(state.activeTab === 'code')}
        onclick={() => state.setPreviewTab('code')}
      >
        Code
      </button>
    </div>
  </div>

  {#if state.activeTab === 'preview'}
    <div class={state.previewContainerClasses}>
      <div class={state.demoContainerClasses}>
        {@render componentDemo()}
      </div>
    </div>
  {:else}
    <div class={state.codeContainerClasses}>
      <CodeBlock language={language} code={code} />
    </div>
  {/if}
</div>







