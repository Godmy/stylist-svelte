<script lang="ts">
	import Story from '$stylist/interaction/playground/Story.svelte';
	import Click from './index.svelte';

	import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'disabled',
			type: 'boolean',
			defaultValue: false
		},
		{
			name: 'variant',
			type: 'select',
			options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'error', 'info'],
			defaultValue: 'default'
		},
		{
			name: 'pressEffect',
			type: 'boolean',
			defaultValue: true
		},
		{
			name: 'hoverEffect',
			type: 'boolean',
			defaultValue: true
		},
		{
			name: 'cursor',
			type: 'select',
			options: ['pointer', 'default', 'grab', 'not-allowed'],
			defaultValue: 'pointer'
		}
	];

	let clickCount = $state(0);
	let lastEvent = $state('');

	function handleEvent(name: string) {
		lastEvent = `${name} @ ${new Date().toLocaleTimeString()}`;
		if (name === 'click') {
			clickCount++;
		}
	}
</script>

<Story {controls} component={Click} title="Click Component" description="Атом для обработки кликов и мышиных событий">
	{#snippet children(values: any)}
		<div class="w-full rounded-lg py-4">
			<Click
				{...values}
				class="p-6 bg-[var(--color-background-secondary)] rounded-lg"
				onClick={() => handleEvent('click')}
				onDblClick={() => handleEvent('dblclick')}
				onContextMenu={(e) => {
					e.preventDefault();
					handleEvent('contextmenu');
				}}
				onMouseEnter={() => handleEvent('mouseenter')}
				onMouseLeave={() => handleEvent('mouseleave')}
			>
				{#snippet children()}
					<div class="text-center">
						<p class="font-medium">Click counter: <strong>{clickCount}</strong></p>
						<p class="text-sm text-muted mt-1">Last event: {lastEvent}</p>
						<p class="text-xs text-muted mt-2">Try: click, dblclick, right-click, hover</p>
					</div>
				{/snippet}
			</Click>
		</div>
	{/snippet}
</Story>

