<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { DocumentationBlockStyleManager } from '$stylist/design-system/styles/documentation-block';
  import CodeSection from '$stylist/components/molecules/information/development/code-section/index.svelte';
  import { Badge } from '$stylist/components/atoms';
  import { Divider } from '$stylist/components/atoms';

  type DocumentationBlockVariant = 'default' | 'info' | 'warning' | 'success' | 'danger';

  type Props = {
    /**
     * Title for the documentation block
     */
    title?: string;
    /**
     * Content of the documentation block
     */
    content: string;
    /**
     * Variant style
     */
    variant?: DocumentationBlockVariant;
    /**
     * List of code examples
     */
    codeExamples?: {
      title?: string;
      code: string;
      language?: string; // Using string instead of CodeLanguage for simplicity
      showLineNumbers?: boolean;
    }[];
    /**
     * Optional tags to display
     */
    tags?: string[];
  } & HTMLAttributes<HTMLElement>;

  let {
    title = '',
    content = '',
    variant = 'default',
    codeExamples = [],
    tags = [],
    class: className = '',
    ...restProps
  }: Props = $props();

  let variantClasses = $derived({
    default: 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900',
    info: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20',
    warning: 'border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20',
    success: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20',
    danger: 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20'
  }[variant as keyof {
    default: string;
    info: string;
    warning: string;
    success: string;
    danger: string;
  }]);

  let variantHeaderClasses = $derived({
    default: 'bg-gray-50 dark:bg-gray-800',
    info: 'bg-blue-100 dark:bg-blue-800/30',
    warning: 'bg-yellow-100 dark:bg-yellow-800/30',
    success: 'bg-green-100 dark:bg-green-800/30',
    danger: 'bg-red-100 dark:bg-red-800/30'
  }[variant as keyof {
    default: string;
    info: string;
    warning: string;
    success: string;
    danger: string;
  }]);

  // Generate CSS classes using the style manager
  const containerClass = $derived(DocumentationBlockStyleManager.getContainerClass(variantClasses, typeof className === 'string' ? className : undefined));
  const headerContainerClass = $derived(DocumentationBlockStyleManager.getHeaderContainerClass(variantHeaderClasses));
  const headerContentClass = $derived(DocumentationBlockStyleManager.getHeaderContentClass());
  const titleClass = $derived(DocumentationBlockStyleManager.getTitleClass());
  const tagsContainerClass = $derived(DocumentationBlockStyleManager.getTagsContainerClass());
  const tagClass = $derived(DocumentationBlockStyleManager.getTagClass());
  const contentClass = $derived(DocumentationBlockStyleManager.getContentClass());
  const codeExamplesContainerClass = $derived(DocumentationBlockStyleManager.getCodeExamplesContainerClass());
  const codeExampleDividerClass = $derived(DocumentationBlockStyleManager.getCodeExampleDividerClass());
</script>

<div {...restProps} class={containerClass}>
  {#if title || tags.length > 0}
    <div class={headerContainerClass}>
      <div class={headerContentClass}>
        {#if title}
          <h2 class={titleClass}>{title}</h2>
        {/if}
        {#if tags && tags.length > 0}
          <div class={tagsContainerClass}>
            {#each tags as tag}
              <Badge variant="default" class={tagClass}>{tag}</Badge>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  {/if}

  <div class={contentClass}>
    {@html content}
  </div>

  {#if codeExamples && codeExamples.length > 0}
    <div class={codeExamplesContainerClass}>
      {#each codeExamples as example, i}
        {#if i > 0}
          <Divider class={codeExampleDividerClass} />
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


