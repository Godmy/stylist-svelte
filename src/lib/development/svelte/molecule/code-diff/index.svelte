<script lang="ts">
  import type { CodeDiffProps } from '$stylist/development/type/struct/code-diff-props';
  import { createCodeDiffState } from '$stylist/development/function/state/code-diff';

  let {
    original = '',
    modified = '',
    language = 'text',
    class: hostClass = '',
    contentClass = '',
    headerClass = '',
    showLineNumbers = true,
    ...restProps
  }: CodeDiffProps = $props();

  const state = createCodeDiffState({ original, modified, language, class: hostClass, contentClass, headerClass, showLineNumbers, ...restProps });
</script>

<div class={state.containerClass} {...restProps}>
  <div class={state.headerClassComputed}>
    Code Diff
  </div>

  <div class={state.mainContentClass}>
    {#if showLineNumbers}
      <div class={state.lineNumbersContainerClass}>
        {#each state.diffLines as line, index}
          <div class={state.lineNumberItemClass}>
            {line.lineNumber}
          </div>
        {/each}
      </div>
    {/if}

    <div class={state.contentContainerClass}>
      <div class={state.getDiffContentClass}>
        {#each state.diffLines as line}
          {#if line.type === 'unchanged'}
            <div class={state.diffLineClass(line.type)}>
              <span class={state.diffSpanClass(line.type)}>{line.original}</span>
            </div>
          {:else if line.type === 'added'}
            <div class={state.diffLineClass(line.type)}>
              <span class={state.diffSpanClass(line.type)}>+ {line.modified}</span>
            </div>
          {:else if line.type === 'removed'}
            <div class={state.diffLineClass(line.type)}>
              <span class={state.diffSpanClass(line.type)}>- {line.original}</span>
            </div>
          {:else if line.type === 'changed'}
            <div class={state.getChangedContainerClass}>
              <div class={state.diffLineClass('removed')}>
                <span class={`${state.diffSpanClass('removed')} line-through`}>- {line.original}</span>
              </div>
              <div class={state.diffLineClass('added')}>
                <span class={state.diffSpanClass('added')}>+ {line.modified}</span>
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
