<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import TabIndicator from './index.svelte';

	const colorOptions = ['primary', 'secondary', 'success', 'warning', 'danger', 'gray'] as const;

	type Props = {
		width: string;
		left: string;
		color: (typeof colorOptions)[number];
	};

	const controls: InterfaceControllerSettings[] = [
		{ name: 'width', type: 'text', defaultValue: '7rem' },
		{ name: 'left', type: 'text', defaultValue: '8rem' },
		{ name: 'color', type: 'select', defaultValue: 'primary', options: [...colorOptions] }
	];

	let activeTab = $state(0);

	const tabs = [
		{ label: 'Overview', width: '6.5rem', left: '0rem' },
		{ label: 'Reviews', width: '6.5rem', left: '7rem' },
		{ label: 'Deploys', width: '6.5rem', left: '14rem' }
	];

	function handleClick(index: number) {
		activeTab = index;
	}
</script>

<Story
	id="atoms-navigation-tab-indicator"
	title="TabIndicator"
	component={TabIndicator}
	category="Atoms"
	description="Low-level positioned marker used by tab navigation surfaces."
	{controls}
>
	{#snippet children(values: any)}
		{@const storyProps = values as Partial<Props>}
		{@const color = storyProps.color ?? 'primary'}
		{@const width = typeof storyProps.width === 'string' ? storyProps.width : '50px'}
		{@const left = typeof storyProps.left === 'string' ? storyProps.left : '0px'}

		<div class="_surface">
			<p class="_label">Measured indicator</p>
			<div class="_track">
				{#each tabs as tab, i}
					<button
						class={`${activeTab === i ? '_active' : '_inactive'} _button`}
						onclick={() => handleClick(i)}
					>
						{tab.label}
					</button>
				{/each}
			</div>

			<TabIndicator width={tabs[activeTab].width} left={tabs[activeTab].left} {color} />
		</div>

		<div class="_surface _manual">
			<p class="_label">Manual position</p>
			<div class="_manualTrack">
				<span>Alpha</span>
				<span>Beta</span>
				<span>Gamma</span>
			</div>

			<TabIndicator {width} {left} {color} />
		</div>
	{/snippet}
</Story>

<style>
	._surface {
		position: relative;
		width: 100%;
		max-width: 24rem;
		padding: 0.75rem 0 0;
		border-bottom: 1px solid var(--color-border-primary);
	}

	._surface + ._surface {
		margin-top: 1.5rem;
	}

	._label {
		margin: 0 0 0.5rem;
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		color: var(--color-text-tertiary);
	}

	._track {
		display: flex;
		gap: 0.5rem;
	}

	._manual {
		max-width: 28rem;
	}

	._manualTrack {
		display: flex;
		gap: 1rem;
		padding: 0.5rem 0;
		color: var(--color-text-secondary);
	}

	._button {
		width: 6.5rem;
		padding: 0.5rem 0;
		font-size: 0.875rem;
		font-weight: 500;
		text-align: center;
	}

	._active {
		color: var(--color-primary-600);
	}

	._inactive {
		color: var(--color-text-secondary);
	}
</style>
