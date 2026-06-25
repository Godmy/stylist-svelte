<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import TokenIcon from './index.svelte';

	const icons = ['settings', 'palette', 'grid', 'animation', 'state', 'typography'];

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'value',
			type: 'select',
			defaultValue: 'settings',
			options: icons
		}
	];
</script>

<Story
	{controls}
	component={TokenIcon}
	title="Token Icon"
	category="Atoms/Token/Controls"
	description="Icon token selector for choosing a value from a visual icon set."
	tags={['token', 'icon', 'control']}
>
	{#snippet children(values: any)}
		<div class="token-story-panel">
			<TokenIcon title="Visual token" {icons} value={values.value as string} />
		</div>
	{/snippet}
</Story>

<style>
	.token-story-panel {
		display: grid;
		max-width: 32rem;
		border: 1px solid #d7dee8;
		border-radius: 0.5rem;
		background: #f8fafc;
		padding: 1.25rem;
	}
</style>
