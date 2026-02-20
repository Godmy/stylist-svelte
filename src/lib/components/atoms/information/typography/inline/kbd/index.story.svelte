<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import Kbd from './index.svelte';
	import { CONTROL_TYPES } from '$stylist/design-system/tokens/controls';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';

	const controls: ControlConfig[] = [];
</script>

<Story
	{controls}
	component={Kbd}
	title="Kbd"
	category="Atoms/Information/Typography/Inline"
	description="Keyboard input component for displaying keyboard shortcuts."
	tags={['keyboard', 'shortcut', 'ui', 'input']}
>
	{#snippet children(values: any)}
		<div class="p-4">
			<div class="flex items-center space-x-2">
				<Kbd>Ctrl</Kbd>
				<Kbd>K</Kbd>
			</div>

			<h3 class="mt-8 mb-4 text-lg font-bold">Common Shortcuts</h3>
			<div class="flex flex-wrap items-center gap-4">
				<Kbd>Ctrl</Kbd>
				<Kbd>+</Kbd>
				<Kbd>C</Kbd>
				<span class="mx-2">Copy</span>

				<Kbd>Ctrl</Kbd>
				<Kbd>+</Kbd>
				<Kbd>V</Kbd>
				<span class="mx-2">Paste</span>

				<Kbd>Ctrl</Kbd>
				<Kbd>+</Kbd>
				<Kbd>Z</Kbd>
				<span class="mx-2">Undo</span>

				<Kbd>Shift</Kbd>
				<Kbd>+</Kbd>
				<Kbd>Alt</Kbd>
				<Kbd>+</Kbd>
				<Kbd>T</Kbd>
				<span class="mx-2">Terminal</span>
			</div>
		</div>
	{/snippet}
</Story>
