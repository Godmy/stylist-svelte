<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import DomainDiagnostics from './index.svelte';

	const controls: InterfaceControllerSettings[] = [{ name: 'compact', type: 'boolean', defaultValue: true }];
</script>

<Story
	{controls}
	component={DomainDiagnostics}
	title="DomainDiagnostics"
	description="Runs story diagnostics by importing and mounting story modules in the workspace."
>
	{#snippet children(values: any)}
		<div class="rounded-2xl border border-slate-200 bg-white">
			<DomainDiagnostics compact={Boolean(values.compact)} />
		</div>
	{/snippet}
</Story>
