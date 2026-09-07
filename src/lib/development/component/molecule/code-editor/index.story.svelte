<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import CodeEditor from './index.svelte';

	const sample = `function greet(name) {
  return "Hello, " + name + "!";
}`;
</script>

<Story
	id="molecules-code-editor"
	title="Molecules / Development / Code Editor"
	component={CodeEditor}
	category="Molecules/Development"
>
	{#snippet children()}<div class="_c1">
			<CodeEditor code={sample} language="javascript" />
		</div>{/snippet}
</Story>

<style>
	._c1 {
		padding: 1rem;
	}
</style>
