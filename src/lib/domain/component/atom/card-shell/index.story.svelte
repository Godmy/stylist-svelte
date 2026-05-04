<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import CardShell from './index.svelte';
	import CloseIcon from '../close-icon/index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'expanded', type: 'boolean', defaultValue: true },
		{ name: 'title', type: 'text', defaultValue: 'Graph Node Controls' }
	];
</script>

<Story
	{controls}
	component={CardShell}
	title="CardShell"
	description="Expandable shell used by the orbit tooling panel."
>
	{#snippet children(values: any)}
		<div class="relative h-72 overflow-hidden rounded-3xl bg-[radial-gradient(circle_at_top,#dbeafe,transparent_60%),#eff6ff] p-8">
			<div class="absolute left-10 top-16">
				<CardShell expanded={Boolean(values.expanded)} title={values.title as string}>
					{#snippet children()}
						<button type="button" class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">Layout</button>
						<button type="button" class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">Variants</button>
						<button type="button" class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">States</button>
					{/snippet}

					{#snippet close()}
						<CloseIcon expanded={Boolean(values.expanded)} />
					{/snippet}
				</CardShell>
			</div>
		</div>
	{/snippet}
</Story>
