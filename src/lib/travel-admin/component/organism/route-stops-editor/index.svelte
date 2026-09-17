<script lang="ts">
	import CloseButton from '$stylist/button/component/atom/close-button/index.svelte';
	import Button from '$stylist/button/component/atom/button/index.svelte';
	import type { RecipeRouteStopsEditor } from '$stylist/travel-admin/interface/recipe/route-stops-editor';
	import createRouteStopsEditorState from './state.svelte';

	let props: RecipeRouteStopsEditor = $props();
	const state = createRouteStopsEditorState(props);
</script>

<div class="route-stops-editor {props.class ?? ''}">
	{#each state.stops as stop, i (stop.id)}
		<div class="route-stops-editor__row">
			<span class="route-stops-editor__order">{i + 1}</span>
			<div class="route-stops-editor__fields">
				<label class="route-stops-editor__field">
					<span>Остановка</span>
					<input
						type="text"
						value={stop.title}
						oninput={(e) => state.patch(i, { title: (e.target as HTMLInputElement).value })}
					/>
				</label>
				<label class="route-stops-editor__field">
					<span>Описание</span>
					<input
						type="text"
						value={stop.description}
						oninput={(e) => state.patch(i, { description: (e.target as HTMLInputElement).value })}
					/>
				</label>
				<label class="route-stops-editor__checkbox">
					<input
						type="checkbox"
						checked={stop.photoSpot}
						onchange={(e) => state.patch(i, { photoSpot: (e.target as HTMLInputElement).checked })}
					/>
					Фото-спот
				</label>
			</div>
			<div class="route-stops-editor__actions">
				<Button variant="ghost" size="sm" onclick={() => state.move(i, -1)} disabled={i === 0}>↑</Button>
				<Button variant="ghost" size="sm" onclick={() => state.move(i, 1)} disabled={i === state.stops.length - 1}>↓</Button>
				<CloseButton ariaLabel="Удалить остановку" onclick={() => state.remove(i)} />
			</div>
		</div>
	{/each}

	<Button variant="secondary" size="sm" onclick={state.add}>+ Остановка</Button>
</div>

<style>
	.route-stops-editor {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		/* establishes the query container for each row's @container below */
		container-type: inline-size;
	}
	.route-stops-editor__row {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.75rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
	}
	.route-stops-editor__order {
		flex: none;
		font-weight: 700;
		color: var(--color-text-secondary);
	}
	.route-stops-editor__fields {
		flex: 1;
		display: grid;
		grid-template-columns: 1fr 1fr auto;
		gap: 0.75rem;
		align-items: center;
	}
	.route-stops-editor__field {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
		font-size: 0.8125rem;
		color: var(--color-text-secondary);
	}
	.route-stops-editor__field input {
		box-sizing: border-box;
		height: 2.5rem;
		padding: 0 0.65rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.375rem;
		background: var(--color-background-primary);
		color: var(--color-text-primary);
		font: inherit;
	}
	.route-stops-editor__checkbox {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.85rem;
		color: var(--color-text-secondary);
		white-space: nowrap;
	}
	.route-stops-editor__actions {
		flex: none;
		display: flex;
		align-items: center;
		gap: 0.35rem;
	}
	@container (max-width: 720px) {
		.route-stops-editor__row {
			flex-direction: column;
			align-items: stretch;
		}
		.route-stops-editor__fields {
			grid-template-columns: 1fr;
		}
		.route-stops-editor__actions {
			justify-content: flex-end;
		}
	}
</style>
