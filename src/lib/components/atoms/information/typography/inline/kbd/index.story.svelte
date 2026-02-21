<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import Kbd from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'key1', type: 'text', defaultValue: 'Ctrl' },
		{ name: 'key2', type: 'text', defaultValue: 'K' }
	];
</script>

<Story
	{controls}
	component={Kbd}
	title="Kbd"
	category="Atoms/Information/Typography/Inline"
	description="Keyboard key label component"
>
	{#snippet children(values: any)}
		<div class="flex items-center gap-2">
			<Kbd>{values.key1 as string}</Kbd>
			<span>+</span>
			<Kbd>{values.key2 as string}</Kbd>
		</div>
	{/snippet}
</Story>
