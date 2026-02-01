<script lang="ts">
	import { Story } from '$lib/playground';
	import type { ControlConfig } from '$lib/playground';
	import TabIndicator from './index.svelte';

	const colorOptions = ['primary', 'secondary', 'success', 'warning', 'danger', 'gray'] as const;

	type Props = {
		width: string;
		left: string;
		color: (typeof colorOptions)[number];
	};

	const controls: ControlConfig[] = [
		{ name: 'width', type: 'text', defaultValue: '50px' },
		{ name: 'left', type: 'text', defaultValue: '0px' },
		{ name: 'color', type: 'select', defaultValue: 'primary', options: [...colorOptions] }
	];

	let activeTab = $state(0);
	const tabs = [
		{ label: 'Tab 1', width: '80px', left: '0px' },
		{ label: 'Tab 2', width: '90px', left: '90px' },
		{ label: 'Tab 3', width: '70px', left: '190px' }
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
	description="A visual indicator for the active tab in a tab navigation."
	controls={controls}
>
	{#snippet children(props: Props)}
		<div class="relative w-full max-w-md border-b border-gray-200">
			<div class="flex">
				{#each tabs as tab, i}
					<button
						class={`px-4 py-2 text-sm font-medium ${activeTab === i ? 'text-primary-600' : 'text-gray-600'}`}
						onclick={() => handleClick(i)}
					>
						{tab.label}
					</button>
				{/each}
			</div>
			<TabIndicator
				width={tabs[activeTab].width}
				left={tabs[activeTab].left}
				color={props.color}
			/>
		</div>

		<h3 class="mt-8 mb-4 text-lg font-bold">Customizable Indicator</h3>
		<div class="relative w-full max-w-md border-b border-gray-200">
			<div class="flex justify-between">
				<button class="px-4 py-2 text-sm font-medium text-gray-600">Item A</button>
				<button class="px-4 py-2 text-sm font-medium text-gray-600">Item B</button>
				<button class="px-4 py-2 text-sm font-medium text-gray-600">Item C</button>
			</div>
			<TabIndicator width={props.width} left={props.left} color={props.color} />
		</div>
	{/snippet}
</Story>




