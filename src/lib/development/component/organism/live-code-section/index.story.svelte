<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import RecipeLiveCodeSection from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'title', type: 'text', defaultValue: 'See It In Action' },
		{
			name: 'description',
			type: 'text',
			defaultValue: 'Every component comes with ready-to-use code'
		},
		{ name: 'ctaText', type: 'text', defaultValue: 'Try in Playground' }
	];

	const sampleCode =
		`<scr` +
		`ipt lang="ts">
  let count = $state(0);
</scr` +
		`ipt>

<button onclick={() => count += 1}>
  Count: {count}
</button>`;
</script>

<Story
	component={RecipeLiveCodeSection}
	title="Live Code Section"
	description="Development-domain section pairing explanatory copy with a live code preview and call to action."
	{controls}
>
	{#snippet children(values: any)}
		<RecipeLiveCodeSection
			title={values.title}
			description={values.description}
			ctaText={values.ctaText}
			code={sampleCode}
		/>
	{/snippet}
</Story>
