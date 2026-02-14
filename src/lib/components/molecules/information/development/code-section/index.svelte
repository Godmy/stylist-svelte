<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { CodeSectionStyleManager } from '$stylist/design-system/styles/code-section';
  import CodeEditor from '$stylist/components/molecules/information/development/code-editor/index.svelte';
  import { Badge } from '$stylist/components/atoms';

  type CodeSectionVariant = 'default' | 'terminal' | 'diff';

  type Props = {
    /**
     * Title for the code section
     */
    title?: string;
    /**
     * Language for syntax highlighting
     */
    language?: string; // Using string instead of CodeLanguage for simplicity
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

  // Generate CSS classes using the style manager
  const containerClass = $derived(CodeSectionStyleManager.getContainerClass(typeof className === 'string' ? className : undefined));
  const headerContainerClass = $derived(CodeSectionStyleManager.getHeaderContainerClass());
  const headerContentClass = $derived(CodeSectionStyleManager.getHeaderContentClass());
  const titleClass = $derived(CodeSectionStyleManager.getTitleClass());
  const tagsContainerClass = $derived(CodeSectionStyleManager.getTagsContainerClass());
  const tagClass = $derived(CodeSectionStyleManager.getTagClass());
</script>

<div {...restProps} class={containerClass}>
  {#if title || tags.length > 0}
    <div class={headerContainerClass}>
      <div class={headerContentClass}>
        {#if title}
          <h3 class={titleClass}>{title}</h3>
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

  <CodeEditor
    {code}
    {language}
    {showLineNumbers}
    showCopyButton={showCopyButton}
    {...restProps}
  />
</div>



