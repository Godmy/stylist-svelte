<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { CodeWithCopy, SyntaxHighlightedCode } from '../../molecules/code';
  import { Badge } from '../../atoms';

  type CodeSectionVariant = 'default' | 'terminal' | 'diff';

  type Props = {
    /**
     * Title for the code section
     */
    title?: string;
    /**
     * Language for syntax highlighting
     */
    language?: string;
    /**
     * Code content to display
     */
    code: string;
    /**
     * Variant style
     */
    variant?: CodeSectionVariant;
    /**
     * Whether to show line numbers
     */
    showLineNumbers?: boolean;
    /**
     * Starting line number
     */
    startLineNumber?: number;
    /**
     * Whether to show copy button
     */
    showCopyButton?: boolean;
    /**
     * Custom copy success message
     */
    copySuccessMessage?: string;
    /**
     * Custom copy error message
     */
    copyErrorMessage?: string;
    /**
     * Optional tags to display
     */
    tags?: string[];
  } & HTMLAttributes<HTMLElement>;

  let {
    title = '',
    language = 'text',
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
</script>

<div {...restProps} class={`rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden ${className}`}>
  {#if title || tags.length > 0}
    <div class="bg-gray-50 dark:bg-gray-800 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
      <div class="flex justify-between items-center">
        {#if title}
          <h3 class="font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
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

  {#if showCopyButton}
    <CodeWithCopy
      {language}
      {variant}
      {showLineNumbers}
      {startLineNumber}
      {copySuccessMessage}
      {copyErrorMessage}
    >
      {code}
    </CodeWithCopy>
  {:else}
    <SyntaxHighlightedCode
      {language}
      {code}
      {variant}
      {showLineNumbers}
      {startLineNumber}
    />
  {/if}
</div>