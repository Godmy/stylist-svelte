<script lang="ts">
	import type { SchemaDependencyProps } from '$stylist/erd/type/struct/schema-dependency-props';

	let { dependency, x1, y1, x2, y2, active = false }: SchemaDependencyProps = $props();
</script>

<g class={`schema-dependency ${active ? 'schema-dependency--active' : ''}`}>
	<line {x1} {y1} {x2} {y2} />
	<circle cx={x1} cy={y1} r="4" />
	<circle cx={x2} cy={y2} r="4" />
	<title>{dependency.label}</title>
</g>

<style>
	.schema-dependency line {
		stroke: #6c7f99;
		stroke-width: 2;
		stroke-linecap: round;
	}

	.schema-dependency circle {
		fill: #ffffff;
		stroke: #6c7f99;
		stroke-width: 2;
	}

	.schema-dependency--active line,
	.schema-dependency--active circle {
		stroke: #d46b34;
	}
</style>
