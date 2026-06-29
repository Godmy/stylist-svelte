<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import RecipeEnhancedExportPanel from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'componentName', type: 'text', defaultValue: 'Button' }
	];
</script>

<Story
	component={RecipeEnhancedExportPanel}
	title="Enhanced Export Panel"
	description="Development-domain export panel for generated component code, props, and package options."
	{controls}
>
	{#snippet children(values: any)}
		<RecipeEnhancedExportPanel
			componentName={values.componentName}
			svelteCode="<button class='btn'>Click me</button>"
			props={{ variant: 'primary' }}
		/>
	{/snippet}
</Story>
