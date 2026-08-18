<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import { TOKEN_COLOR_TONE } from '$stylist/theme/const/array/color-tone';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import Clickable from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'variant',
			type: 'select',
			defaultValue: 'default',
			options: [...TOKEN_COLOR_TONE]
		},
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'hoverEffect', type: 'boolean', defaultValue: true },
		{ name: 'pressEffect', type: 'boolean', defaultValue: true },
		{
			name: 'cursor',
			type: 'select',
			defaultValue: 'pointer',
			options: ['pointer', 'default', 'grab', 'not-allowed']
		}
	];

	let eventName = $state('interact with the card');
	let count = $state(0);

	function handleEvent(name: string) {
		eventName = `${name} @ ${new Date().toLocaleTimeString()}`;
		if (name === 'click') {
			count += 1;
		}
	}
</script>

<Story
	{controls}
	component={Clickable}
	title="Clickable"
	description="Gesture wrapper for click, double click, and context menu interactions."
>
	{#snippet children(values: any)}
		<div class="_c1">
			<Clickable
				variant={values.variant as any}
				disabled={Boolean(values.disabled)}
				hoverEffect={Boolean(values.hoverEffect)}
				pressEffect={Boolean(values.pressEffect)}
				cursor={values.cursor as any}
				onClick={() => handleEvent('click')}
				onDblClick={() => handleEvent('double click')}
				onContextMenu={(event) => {
					event.preventDefault();
					handleEvent('context menu');
				}}
				onMouseDown={() => handleEvent('mouse down')}
				onMouseUp={() => handleEvent('mouse up')}
				onMouseEnter={() => handleEvent('mouse enter')}
				onMouseLeave={() => handleEvent('mouse leave')}
			>
				{#snippet children()}
					<div class="_c2" data-variant={values.variant}>
						<span class="_c3">Interactive story card</span>
						<strong class="_c4">{count}</strong>
					</div>
				{/snippet}
			</Clickable>
			<p class="_c5">Last event: {eventName}</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		display: grid;
		gap: 1rem;
		border-radius: 1.5rem;
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
	}
	._c2 {
		display: flex;
		min-height: 7rem;
		align-items: center;
		justify-content: space-between;
		border-radius: 1rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding-left: 1.25rem;
		padding-right: 1.25rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}
	._c2[data-variant='primary'] {
		border-color: var(--color-primary-300);
	}
	._c2[data-variant='secondary'] {
		border-color: var(--color-secondary-300);
	}
	._c2[data-variant='success'] {
		border-color: var(--color-success-300);
	}
	._c2[data-variant='info'] {
		border-color: var(--color-info-300);
	}
	._c2[data-variant='warning'] {
		border-color: var(--color-warning-300);
	}
	._c2[data-variant='danger'],
	._c2[data-variant='error'] {
		border-color: var(--color-danger-300);
	}
	._c3 {
		font-weight: 500;
		color: var(--color-text-primary);
	}
	._c4 {
		font-size: 1.5rem;
		line-height: 2rem;
		color: var(--color-info-700);
	}
	._c5 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
