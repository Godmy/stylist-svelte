<script lang="ts">
  import type { Props, DiffLine } from '$stylist/development/type/struct/code-diff';
  import { CodeDiffStyleManager } from '$stylist/development/class/style-manager/code-diff';

  function computeDiffLines(original: string, modified: string): DiffLine[] {
    const originalLines = original.split('\n');
    const modifiedLines = modified.split('\n');
    const lines: DiffLine[] = [];
    const maxLines = Math.max(originalLines.length, modifiedLines.length);

    for (let i = 0; i < maxLines; i++) {
      const origLine = i < originalLines.length ? originalLines[i] : null;
      const modLine = i < modifiedLines.length ? modifiedLines[i] : null;

      if (origLine === modLine) {
        lines.push({ type: 'unchanged', original: origLine, modified: modLine, lineNumber: i + 1 });
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
  }

  function stateFn(props: Props) {
    const diffLines = $derived(computeDiffLines(props.original ?? '', props.modified ?? ''));
    const containerClass = $derived(CodeDiffStyleManager.getContainerClass(props.class ?? ''));
    const headerClassComputed = $derived(CodeDiffStyleManager.getHeaderClass(props.headerClass ?? ''));
    const mainContentClass = $derived(CodeDiffStyleManager.getMainContentClass());
    const lineNumbersContainerClass = $derived(CodeDiffStyleManager.getLineNumbersContainerClass());
    const lineNumberItemClass = $derived(CodeDiffStyleManager.getLineNumberItemClass());
    const contentContainerClass = $derived(CodeDiffStyleManager.getContentContainerClass(props.contentClass ?? ''));
    const diffLineClass = (type: string) => CodeDiffStyleManager.getDiffLineClass(type);
    const diffSpanClass = (type: string) => CodeDiffStyleManager.getDiffSpanClass(type);

    return {
      get diffLines() { return diffLines; },
      get containerClass() { return containerClass; },
      get headerClassComputed() { return headerClassComputed; },
      get mainContentClass() { return mainContentClass; },
      get lineNumbersContainerClass() { return lineNumbersContainerClass; },
      get lineNumberItemClass() { return lineNumberItemClass; },
      get contentContainerClass() { return contentContainerClass; },
      diffLineClass,
      diffSpanClass
    };
  }

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

  const state = stateFn({ original, modified, language, class: hostClass, contentClass, headerClass, showLineNumbers, ...restProps });
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
      <div class={CodeDiffStyleManager.getDiffContentClass()}>
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
            <div class={CodeDiffStyleManager.getChangedContainerClass()}>
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




