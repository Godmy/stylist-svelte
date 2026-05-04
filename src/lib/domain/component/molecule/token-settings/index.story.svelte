<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import TokenSettings from './index.svelte';
	import { L6_TOKEN_DEFINITIONS } from '../orbit-control-definitions/index';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'definitionKey', type: 'select', defaultValue: 'variants', options: ['component-size', 'variants', 'controls'] },
		{ name: 'showTokenDetails', type: 'boolean', defaultValue: true },
		{ name: 'showDependencies', type: 'boolean', defaultValue: true },
		{ name: 'showTooltip', type: 'boolean', defaultValue: true },
		{ name: 'defaultTokenView', type: 'select', defaultValue: 'radio', options: ['radio', 'select'] }
	];

	let lastValue = $state<string>('primary');
</script>

<Story
	{controls}
	component={TokenSettings}
	title="TokenSettings"
	description="Token control surface with icon, dependency marker, tooltip, and inline editor."
>
	{#snippet children(values: any)}
		{@const definition = L6_TOKEN_DEFINITIONS[values.definitionKey as keyof typeof L6_TOKEN_DEFINITIONS]}
		<div class="rounded-3xl bg-[linear-gradient(180deg,#eff6ff,#f8fafc)] p-6">
			<TokenSettings
				{definition}
				value={definition.defaultValue}
				showTokenDetails={Boolean(values.showTokenDetails)}
				showDependencies={Boolean(values.showDependencies)}
				showTooltip={Boolean(values.showTooltip)}
				defaultTokenView={values.defaultTokenView as 'radio' | 'select'}
				dependencyCount={3}
				onChange={(value) => {
					lastValue = String(value);
				}}
			/>
			<p class="mt-4 text-sm text-slate-500">Last value: {lastValue}</p>
		</div>
	{/snippet}
</Story>
