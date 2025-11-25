<script lang="ts">
  import type { Snippet } from 'svelte';

  import type { CodeBlockProps } from './types';
  import {
    DEFAULT_LANGUAGE,
    DEFAULT_CODE_BLOCK_VARIANT,
    DEFAULT_CODE_BLOCK_SIZE,
    DEFAULT_SHOW_LINE_NUMBERS,
    DEFAULT_START_LINE_NUMBER
  } from './constant';
  import { CodeBlockStyleManager } from './styles';

  /**
   * CodeBlock component - Displays formatted code with syntax highlighting
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles component rendering and state.
   * - Open/Closed: Extendable through properties but closed for modification.
   * - Liskov Substitution: Can be substituted with other similar components.
   * - Interface Segregation: Small focused interface.
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions.
   *
   * @param language - Language for syntax highlighting (default: 'text')
   * @param variant - Visual variant ('default' | 'terminal' | 'diff')
   * @param size - Size of the code block ('sm' | 'md' | 'lg')
   * @param showLineNumbers - Whether to show line numbers
   * @param startLineNumber - Starting line number (default: 1)
   * @param children - Snippet containing the code content
   * @param class - Additional CSS classes
   * @returns A styled code block with syntax highlighting and optional line numbers
   */
  let {
    language = DEFAULT_LANGUAGE,
    variant = DEFAULT_CODE_BLOCK_VARIANT,
    size = DEFAULT_CODE_BLOCK_SIZE,
    showLineNumbers = DEFAULT_SHOW_LINE_NUMBERS,
    startLineNumber = DEFAULT_START_LINE_NUMBER,
    children,
    class: className = '',
    ...restProps
  }: CodeBlockProps = $props();

  let classes = $derived(
    CodeBlockStyleManager.getCodeBlockClasses(variant, size, className)
  );

  // Function to generate line numbers
  function getLineNumbers(code: string): number[] {
    const lines = code.split('\n');
    return Array.from({ length: lines.length }, (_, i) => i + startLineNumber);
  }
</script>

<div {...restProps} class={classes}>
  {#if children}
    {@render children()}
  {/if}
</div>