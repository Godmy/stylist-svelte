<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import Focusable from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'focusEffect', type: 'boolean', defaultValue: true },
		{ name: 'disabled', type: 'boolean', defaultValue: false }
	];

	let stateLabel = $state('focus the button with Tab');
</script>

<Story
	{controls}
	component={Focusable}
	title="Focusable"
	description="Focus wrapper that exposes keyboard focus and blur states."
>
	{#snippet children(values: any)}
		<div class="rounded-3xl bg-slate-50 p-6">
			<Focusable
				focusEffect={Boolean(values.focusEffect)}
				disabled={Boolean(values.disabled)}
				class="block rounded-2xl border border-slate-200 bg-white p-2"
				onFocus={() => {
					stateLabel = 'focused';
				}}
				onBlur={() => {
					stateLabel = 'blurred';
				}}
			>
				{#snippet children()}
					<button type="button" class="w-full rounded-xl bg-amber-50 px-4 py-5 text-left font-medium text-amber-900">
						Keyboard focus target
					</button>
				{/snippet}
			</Focusable>
			<p class="mt-4 text-sm text-slate-500">State: {stateLabel}</p>
		</div>
	{/snippet}
</Story>
