<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import Click from './index.svelte';

	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	const controls: SlotStory[] = [
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

<Story
	{controls}
	component={Click}
	title="Click Component"
	description="Атом для обработки кликов и мышиных событий"
>
	{#snippet children(values: any)}
		<div class="_c1">
			<Click
				{...values}
				class="_c2"
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
					<div class="_c3">
						<p class="_c4">Click counter: <strong>{clickCount}</strong></p>
						<p class="text-muted _c5">Last event: {lastEvent}</p>
						<p class="text-muted _c6">Try: click, dblclick, right-click, hover</p>
					</div>
				{/snippet}
			</Click>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		width: 100%;
		border-radius: 0.5rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}
	._c2 {
		border-radius: 0.5rem;
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
	}
	._c3 {
		text-align: center;
	}
	._c4 {
		font-weight: 500;
	}
	._c5 {
		margin-top: 0.25rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
	._c6 {
		margin-top: 0.5rem;
		font-size: 0.75rem;
		line-height: 1rem;
	}
</style>
