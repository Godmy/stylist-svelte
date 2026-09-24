<script lang="ts">
	import { EXPERIENCE_CATEGORIES } from '$stylist/booking/const/array/experience-category';
	import { EXCURSION_MOTIFS } from '$stylist/travel-commerce/const/preset/excursion-motif';
	import { SAMPLE_EXCURSIONS } from '$stylist/travel-commerce/const/preset/sample-excursions';
	import type { Excursion } from '$stylist/travel-commerce/type/object/excursion';

	type Props = {
		selected?: string[];
		excursions?: Excursion[];
		/** Текст, если ничего не выбрано. Пустая строка (по умолчанию) — не рендерить ничего. */
		emptyLabel?: string;
	};

	let { selected = [], excursions, emptyLabel = '' }: Props = $props();

	const resolvedExcursions = $derived(excursions ?? SAMPLE_EXCURSIONS);
	const selectedExcursions = $derived(
		selected
			.map((id) => resolvedExcursions.find((excursion) => excursion.id === id))
			.filter((excursion): excursion is Excursion => Boolean(excursion))
	);

	function toneFor(excursion: Excursion): string {
		const category = EXPERIENCE_CATEGORIES.find((item) => item.id === excursion.categories[0]);
		return category?.tone ?? '#17231f';
	}
</script>

{#if selectedExcursions.length > 0}
	<span class="tc-booking-adventure-list">
		{#each selectedExcursions as excursion (excursion.id)}
			<span
				class="tc-booking-adventure-list__badge"
				style:background={toneFor(excursion)}
				title={excursion.title}
			>
				<svg viewBox="0 0 24 24" width="12" height="12" fill="white" aria-hidden="true">
					{#each EXCURSION_MOTIFS[excursion.id] ?? [] as layer (layer.id)}
						<path d={layer.d} />
					{/each}
				</svg>
			</span>
		{/each}
	</span>
{:else if emptyLabel}
	<span class="tc-booking-adventure-list__empty">{emptyLabel}</span>
{/if}

<style>
	.tc-booking-adventure-list {
		display: inline-flex;
		align-items: center;
		gap: 4px;
	}

	.tc-booking-adventure-list__badge {
		display: grid;
		place-items: center;
		width: 20px;
		height: 20px;
		border-radius: 999px;
		flex-shrink: 0;
	}

	.tc-booking-adventure-list__empty {
		color: #17231f;
		font-weight: 650;
	}
</style>
