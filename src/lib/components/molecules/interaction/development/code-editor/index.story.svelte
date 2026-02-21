<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import CodeEditor from './index.svelte';

  const sample = `function greet(name) {
  return "Hello, " + name + "!";
}`;
</script>

<Story id="molecules-code-editor" title="Molecules / Development / Code Editor" component={CodeEditor} category="Molecules/Development">
  {#snippet children()}<div class="p-4"><CodeEditor code={sample} language="javascript" /></div>{/snippet}
</Story>
