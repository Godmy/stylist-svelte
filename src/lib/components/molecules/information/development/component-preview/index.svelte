<script lang="ts">
  /**
   * @component ComponentPreview
   * @description Component preview with code and demo
   *
   * SOLID Principles Applied:
   * - Single Responsibility: Only handles component preview display
   * - Open/Closed: Extensible through props without modifying source
   * - Liskov Substitution: Can substitute any component preview
   * - Interface Segregation: Minimal interface via IComponentPreviewProps
   * - Dependency Inversion: Depends on abstractions (props interface)
   *
   * Atomic Design: Molecule - Composes atoms into a meaningful preview unit
   */

  import type { Snippet } from 'svelte';
  import { ComponentPreviewStyleManager } from '$stylist/design-system/styles/information/component-preview';
  import { CodeBlock } from '$stylist/components/atoms';

  // Define component props using the interface
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

  // State for active tab
  let activeTab = $state(showCode ? 'code' : 'preview');

  // Get CSS classes from style manager
  let classes = $derived(ComponentPreviewStyleManager.getBaseClasses(className));
  let headerClasses = $derived(ComponentPreviewStyleManager.getHeaderClasses());
  let titleClasses = $derived(ComponentPreviewStyleManager.getTitleClasses());
  let descriptionClasses = $derived(ComponentPreviewStyleManager.getDescriptionClasses());
  let previewContainerClasses = $derived(ComponentPreviewStyleManager.getPreviewContainerClasses());
  let demoContainerClasses = $derived(ComponentPreviewStyleManager.getDemoContainerClasses());
  let codeContainerClasses = $derived(ComponentPreviewStyleManager.getCodeContainerClasses());
  let tabContainerClasses = $derived(ComponentPreviewStyleManager.getTabContainerClasses());
  let tabListClasses = $derived(ComponentPreviewStyleManager.getTabListClasses());
  let tabButtonClasses = (isActive: boolean) => ComponentPreviewStyleManager.getTabButtonClasses(isActive);
</script>

<div class={classes}>
  <div class={headerClasses}>
    <h3 class={titleClasses}>{title}</h3>
    {#if description}
      <p class={descriptionClasses}>{description}</p>
    {/if}
  </div>

  <div class={tabContainerClasses}>
    <div class={tabListClasses}>
      <button
        type="button"
        class={tabButtonClasses(activeTab === 'preview')}
        onclick={() => activeTab = 'preview'}
      >
        Preview
      </button>
      <button
        type="button"
        class={tabButtonClasses(activeTab === 'code')}
        onclick={() => activeTab = 'code'}
      >
        Code
      </button>
    </div>
  </div>

  {#if activeTab === 'preview'}
    <div class={previewContainerClasses}>
      <div class={demoContainerClasses}>
        {@render componentDemo()}
      </div>
    </div>
  {:else}
    <div class={codeContainerClasses}>
      <CodeBlock language={language}>
        {code}
      </CodeBlock>
    </div>
  {/if}
</div>

