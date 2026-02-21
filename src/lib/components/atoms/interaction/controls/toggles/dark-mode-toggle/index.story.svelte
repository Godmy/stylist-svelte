<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import DarkModeToggle from './index.svelte';

	type DarkModeToggleStoryProps = {
		darkMode: boolean;
		disabled: boolean;
	};

	const controls: ControlConfig[] = [
		{
			name: 'darkMode',
			type: 'boolean',
			defaultValue: false
		},
		{
			name: 'disabled',
			type: 'boolean',
			defaultValue: false
		}
	];
</script>

<Story
	id="molecules-dark-mode-toggle"
	title="DarkModeToggle"
	component={DarkModeToggle}
	category="Molecules"
	description="A toggle for switching between dark and light mode."
	tags={['theme', 'toggle', 'dark-mode']}
	{controls}
>
	{#snippet children(values: any)}
		{@const darkMode = typeof values.darkMode === 'boolean' ? values.darkMode : false}
		{@const disabled = typeof values.disabled === 'boolean' ? values.disabled : false}
		<div class="rounded-lg bg-gray-50 p-8">
			<h2 class="mb-4 text-xl font-bold">DarkModeToggle Story</h2>
			<DarkModeToggle {darkMode} {disabled} />
		</div>
	{/snippet}
</Story>




