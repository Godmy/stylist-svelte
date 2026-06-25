<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import CardShell from './index.svelte';
	import CardClose from '../card-close/index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'expanded', type: 'boolean', defaultValue: true },
		{ name: 'title', type: 'text', defaultValue: 'Graph Node Controls' }
	];
</script>

<Story
	{controls}
	title="CardShell"
	description="Expandable shell used by the orbit tooling panel."
>
	{#snippet children(values: any)}
		<div class="token-story-stage">
			<div class="token-story-card-position">
				<CardShell expanded={Boolean(values.expanded)} title={values.title as string}>
					{#snippet children()}
						<button type="button" class="token-story-chip">Layout</button>
						<button type="button" class="token-story-chip">Variants</button>
						<button type="button" class="token-story-chip">States</button>
					{/snippet}

					{#snippet close()}
						<CardClose expanded={Boolean(values.expanded)} />
					{/snippet}
				</CardShell>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	.token-story-stage {
		position: relative;
		min-height: 18rem;
		overflow: visible;
		border: 1px solid #d7dee8;
		border-radius: 0.5rem;
		background: #f8fafc;
		padding: 2rem;
	}
	.token-story-card-position {
		position: relative;
		margin: 3rem 0 0 1rem;
	}
	.token-story-chip {
		border: 1px solid #cbd5e1;
		border-radius: 9999px;
		background: #ffffff;
		padding: 0.3rem 0.75rem;
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 500;
		color: #334155;
	}
</style>
