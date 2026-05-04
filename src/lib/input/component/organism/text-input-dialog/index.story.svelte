<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import TextInputDialog from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'open', type: 'boolean', defaultValue: true },
		{ name: 'loading', type: 'boolean', defaultValue: false },
		{ name: 'saving', type: 'boolean', defaultValue: false },
		{ name: 'rows', type: 'number', defaultValue: 10 }
	];

	let draft = $state('Document the edge cases for this component story.\nAdd concrete examples for keyboard and pointer states.');
	let saveCount = $state(0);
</script>

<Story
	{controls}
	component={TextInputDialog}
	title="TextInputDialog"
	description="Modal text editor used by the domain page for backlog and notes editing."
>
	{#snippet children(values: any)}
		<div class="relative min-h-[42rem] rounded-3xl bg-slate-900/70 p-4">
			<TextInputDialog
				open={Boolean(values.open)}
				title="Story Backlog"
				path="src/lib/interaction/component/atom/clickable/README.md"
				bind:value={draft}
				loading={Boolean(values.loading)}
				saving={Boolean(values.saving)}
				rows={Number(values.rows)}
				placeholder="Write component guidance..."
				error={draft.length < 20 ? 'Draft should contain at least 20 characters.' : ''}
				onSave={() => {
					saveCount += 1;
				}}
			/>
			<p class="absolute bottom-4 left-6 text-sm text-slate-200">Save attempts: {saveCount}</p>
		</div>
	{/snippet}
</Story>
