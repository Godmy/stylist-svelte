<script lang="ts">
	import type { RecipeErdDepencency } from '$stylist/erd/interface/recipe/erd-dependency';

	let { dependency, x1, y1, x2, y2, active = false }: RecipeErdDepencency = $props();
</script>

<g class={`schema-dependency ${active ? 'schema-dependency--active' : ''}`}>
	<line {x1} {y1} {x2} {y2} />
	<circle cx={x1} cy={y1} r="4" />
	<circle cx={x2} cy={y2} r="4" />
	<title>{dependency.label}</title>
</g>

<style>
	.schema-dependency line {
		stroke: var(--color-text-tertiary, #6c7f99);
		stroke-width: 2;
		stroke-linecap: round;
	}

	.schema-dependency circle {
		fill: var(--color-background-primary, #ffffff);
		stroke: var(--color-text-tertiary, #6c7f99);
		stroke-width: 2;
	}

	.schema-dependency--active line,
	.schema-dependency--active circle {
		stroke: #d46b34;
	}
</style>
