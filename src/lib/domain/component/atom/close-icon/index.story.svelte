<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import CloseIcon from './index.svelte';

	const controls: InterfaceControllerSettings[] = [{ name: 'expanded', type: 'boolean', defaultValue: true }];

	let clicks = $state(0);
</script>

<Story
	{controls}
	component={CloseIcon}
	title="CloseIcon"
	description="Floating close affordance for expanded orbit cards."
>
	{#snippet children(values: any)}
		<div class="relative h-40 overflow-hidden rounded-3xl bg-slate-100 p-8">
			<div class="absolute left-8 top-8 h-24 w-64 rounded-[28px] border border-slate-200 bg-white"></div>
			<div class="absolute left-[232px] top-[32px]">
				<CloseIcon
					expanded={Boolean(values.expanded)}
					onClick={() => {
						clicks += 1;
					}}
				/>
			</div>
			<p class="absolute bottom-4 left-6 text-sm text-slate-500">Clicks: {clicks}</p>
		</div>
	{/snippet}
</Story>
