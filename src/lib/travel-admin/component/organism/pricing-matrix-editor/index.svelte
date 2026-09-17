<script lang="ts">
	import Button from '$stylist/button/component/atom/button/index.svelte';
	import { VEHICLE_TYPES } from '$stylist/travel-admin/const/array/vehicle-type';
	import type { RecipePricingMatrixEditor } from '$stylist/travel-admin/interface/recipe/pricing-matrix-editor';
	import createPricingMatrixEditorState from './state.svelte';

	let props: RecipePricingMatrixEditor = $props();
	const state = createPricingMatrixEditorState(props);
</script>

<div class="pricing-matrix-editor {props.class ?? ''}">
	<div class="pricing-matrix-editor__scroll">
	<table class="pricing-matrix-editor__table">
		<thead>
			<tr>
				<th>Откуда</th>
				<th>Куда</th>
				<th>Транспорт</th>
				<th>Мин. чел.</th>
				<th>Макс. чел.</th>
				<th>Цена, ₽</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			{#each state.rates as rate, i (rate.id)}
				<tr>
					<td>
						<select value={rate.fromPointId} onchange={(e) => state.patch(i, { fromPointId: Number((e.target as HTMLSelectElement).value) })}>
							{#each props.pickupPoints as point (point.id)}
								<option value={point.id}>{point.label}</option>
							{/each}
						</select>
					</td>
					<td>
						<select value={rate.toPointId} onchange={(e) => state.patch(i, { toPointId: Number((e.target as HTMLSelectElement).value) })}>
							{#each props.pickupPoints as point (point.id)}
								<option value={point.id}>{point.label}</option>
							{/each}
						</select>
					</td>
					<td>
						<select value={rate.vehicleType} onchange={(e) => state.patch(i, { vehicleType: (e.target as HTMLSelectElement).value })}>
							{#each VEHICLE_TYPES as vehicle (vehicle)}
								<option value={vehicle}>{vehicle}</option>
							{/each}
						</select>
					</td>
					<td>
						<input type="number" min="1" value={rate.minPeople} oninput={(e) => state.patch(i, { minPeople: Number((e.target as HTMLInputElement).value) })} />
					</td>
					<td>
						<input type="number" min="1" value={rate.maxPeople} oninput={(e) => state.patch(i, { maxPeople: Number((e.target as HTMLInputElement).value) })} />
					</td>
					<td>
						<input type="number" min="0" value={rate.priceCents / 100} oninput={(e) => state.patch(i, { priceCents: Math.round(Number((e.target as HTMLInputElement).value) * 100) })} />
					</td>
					<td>
						<Button variant="ghost" size="sm" onclick={() => state.remove(i)}>Удалить</Button>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
	</div>
	<Button variant="secondary" size="sm" onclick={state.add}>+ Ставка</Button>
</div>

<style>
	.pricing-matrix-editor {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.pricing-matrix-editor__scroll {
		overflow-x: auto;
	}
	.pricing-matrix-editor__table {
		width: 100%;
		min-width: 42rem;
		border-collapse: collapse;
		font-size: 0.85rem;
	}
	.pricing-matrix-editor__table th,
	.pricing-matrix-editor__table td {
		padding: 0.5rem;
		border-bottom: 1px solid var(--color-border-primary);
		text-align: left;
	}
	.pricing-matrix-editor__table select,
	.pricing-matrix-editor__table input {
		width: 100%;
		box-sizing: border-box;
		padding: 0.4rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.25rem;
		background: var(--color-background-primary);
		color: var(--color-text-primary);
	}
</style>
