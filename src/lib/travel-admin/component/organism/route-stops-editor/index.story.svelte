<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import RouteStopsEditor from './index.svelte';
	import { SAMPLE_ADMIN_ROUTE_STOPS } from '$stylist/travel-admin/const/preset/sample-admin-route-stops';

	let stops = $state(SAMPLE_ADMIN_ROUTE_STOPS.map((s) => ({ ...s })));
</script>

<Story
	component={RouteStopsEditor}
	title="RouteStopsEditor"
	category="TravelAdmin/Organisms/ProductEditor"
	description="Reorderable list of a tour's route stops / photo spots."
>
	{#snippet children()}
		<RouteStopsEditor {stops} onChange={(next) => (stops = next)} />
	{/snippet}
</Story>
