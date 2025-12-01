<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

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
</script>

<div class={`code-diff rounded-lg border border-gray-200 overflow-hidden ${hostClass}`} {...restProps}>
  <div class={`bg-gray-100 px-4 py-2 border-b border-gray-200 text-sm font-medium text-gray-700 ${headerClass}`}>
    Code Diff
  </div>

  <div class="flex">
    {#if showLineNumbers}
      <div class="w-16 bg-gray-100 text-right select-none text-gray-500 text-sm py-2">
        {#each diffLines() as line, index}
          <div class="pr-2">{line.lineNumber}</div>
        {/each}
      </div>
    {/if}

    <div class={`flex-1 overflow-x-auto ${contentClass}`}>
      <div class="text-sm">
        {#each diffLines() as line}
          {#if line.type === 'unchanged'}
            <div class="px-4 py-1 bg-white">
              <span class="text-gray-700">{line.original}</span>
            </div>
          {:else if line.type === 'added'}
            <div class="px-4 py-1 bg-green-50 border-l-4 border-green-500">
              <span class="text-green-700">+ {line.modified}</span>
            </div>
          {:else if line.type === 'removed'}
            <div class="px-4 py-1 bg-red-50 border-l-4 border-red-500">
              <span class="text-red-700">- {line.original}</span>
            </div>
          {:else if line.type === 'changed'}
            <div class="bg-white">
              <div class="px-4 py-1 bg-red-50 border-l-4 border-red-500">
                <span class="text-red-700 line-through">- {line.original}</span>
              </div>
              <div class="px-4 py-1 bg-green-50 border-l-4 border-green-500">
                <span class="text-green-700">+ {line.modified}</span>
              </div>
            </div>
          {/if}
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .code-diff {
    position: relative;
  }
</style>
