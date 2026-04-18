<script lang="ts">
  /**
   * CodeEditor - Legacy wrapper for unified Code
   *
   * @deprecated Use Code with basic props instead
   */
  import Code from '../code-block/index.svelte';
  import type { CodeEditorProps } from '$stylist/development/type/struct/code-editor-props';
  import { createCodeEditorLegacyState } from '$stylist/development/function/state/code-editor-legacy';

  let {
    code = '',
    language = 'text',
    showLineNumbers = false,
    showCopyButton = false,
    class: className = ''
  }: CodeEditorProps = $props();

  const state = createCodeEditorLegacyState({ code, language, showLineNumbers, showCopyButton, class: className });
</script>

<Code
  code={state.props.code}
  language={state.props.language}
  showLineNumbers={state.props.showLineNumbers}
  copyable={state.props.showCopyButton}
  class={state.props.class}
/>
