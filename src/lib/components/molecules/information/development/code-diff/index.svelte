<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { CodeDiffStyleManager } from '$stylist/design-system/styles/code-diff';

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    original?: string;
    modified?: string;
    language?: string;
    class?: string;
    contentClass?: string;
    headerClass?: string;
    showLineNumbers?: boolean;
  };

  type DiffLine = {
    type: 'unchanged' | 'added' | 'removed' | 'changed';
    original: string | null;
    modified: string | null;
    lineNumber: number;
  };

  let {
    original = '',
    modified = '',
    language = 'text',
    class: hostClass = '',
    contentClass = '',
    headerClass = '',
    showLineNumbers = true,
    ...restProps
  }: Props = $props();

  // Function to compute diff - simplified implementation
  // In a real implementation, you would use a proper diff algorithm
  let originalLines = $derived(original.split('\n'));
  let modifiedLines = $derived(modified.split('\n'));

  // For now, we'll just compare line by line
  // A real diff would show additions, deletions, and changes with appropriate styling
  let diffLines = $derived(() => {
    const lines: DiffLine[] = [];
    const maxLines = Math.max(originalLines.length, modifiedLines.length);

    for (let i = 0; i < maxLines; i++) {
      const origLine = i < originalLines.length ? originalLines[i] : null;
      const modLine = i < modifiedLines.length ? modifiedLines[i] : null;

      if (origLine === modLine) {
        lines.push({
          type: 'unchanged',
          original: origLine,
          modified: modLine,
          lineNumber: i + 1
        });
      } else {
        lines.push({
          type: origLine === null ? 'added' : modLine === null ? 'removed' : 'changed',
          original: origLine,
          modified: modLine,
          lineNumber: i + 1
        });
      }
    }

    return lines;
  }) as () => DiffLine[];

  // Generate CSS classes using the style manager
  const containerClass = $derived(CodeDiffStyleManager.getContainerClass(hostClass));
  const headerClassComputed = $derived(CodeDiffStyleManager.getHeaderClass(headerClass));
  const mainContentClass = $derived(CodeDiffStyleManager.getMainContentClass());
  const lineNumbersContainerClass = $derived(CodeDiffStyleManager.getLineNumbersContainerClass());
  const lineNumberItemClass = $derived(CodeDiffStyleManager.getLineNumberItemClass());
  const contentContainerClass = $derived(CodeDiffStyleManager.getContentContainerClass(contentClass));
  const diffLineClass = (type: string) => CodeDiffStyleManager.getDiffLineClass(type);
  const diffSpanClass = (type: string) => CodeDiffStyleManager.getDiffSpanClass(type);
</script>

<div class={containerClass} {...restProps}>
  <div class={headerClassComputed}>
    Code Diff
  </div>

  <div class={mainContentClass}>
    {#if showLineNumbers}
      <div class={lineNumbersContainerClass}>
        {#each diffLines() as line, index}
          <div class={lineNumberItemClass}>
            {line.lineNumber}
          </div>
        {/each}
      </div>
    {/if}

    <div class={contentContainerClass}>
      <div class={CodeDiffStyleManager.getDiffContentClass()}>
        {#each diffLines() as line}
          {#if line.type === 'unchanged'}
            <div class={diffLineClass(line.type)}>
              <span class={diffSpanClass(line.type)}>{line.original}</span>
            </div>
          {:else if line.type === 'added'}
            <div class={diffLineClass(line.type)}>
              <span class={diffSpanClass(line.type)}>+ {line.modified}</span>
            </div>
          {:else if line.type === 'removed'}
            <div class={diffLineClass(line.type)}>
              <span class={diffSpanClass(line.type)}>- {line.original}</span>
            </div>
          {:else if line.type === 'changed'}
            <div class={CodeDiffStyleManager.getChangedContainerClass()}>
              <div class={diffLineClass('removed')}>
                <span class={`${diffSpanClass('removed')} line-through`}>- {line.original}</span>
              </div>
              <div class={diffLineClass('added')}>
                <span class={diffSpanClass('added')}>+ {line.modified}</span>
              </div>
            </div>
          {/if}
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  :global(.c-code-diff) {
    position: relative;
  }
</style>

