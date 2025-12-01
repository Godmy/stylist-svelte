<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { CodeLanguage } from '$lib/components/molecules/development/code-editor/types';
  import CodeSection from './CodeSection.svelte';
  import { Badge } from '$lib/components/atoms/typography/elements/badge';
  import { Divider } from '$lib/components/atoms/layout/divider';

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
      language?: CodeLanguage;
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
</script>

<div {...restProps} class={`rounded-lg border ${variantClasses} overflow-hidden ${className}`}>
  {#if title || tags.length > 0}
    <div class={`px-4 py-3 border-b ${variantHeaderClasses}`}>
      <div class="flex justify-between items-center">
        {#if title}
          <h2 class="font-semibold text-gray-800 dark:text-gray-200">{title}</h2>
        {/if}
        {#if tags && tags.length > 0}
          <div class="flex gap-2">
            {#each tags as tag}
              <Badge variant="default" class="text-xs">{tag}</Badge>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  {/if}

  <div class="p-4 prose prose-gray dark:prose-invert max-w-none">
    {@html content}
  </div>

  {#if codeExamples && codeExamples.length > 0}
    <div class="mt-6 space-y-6">
      {#each codeExamples as example, i}
        {#if i > 0}
          <Divider />
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