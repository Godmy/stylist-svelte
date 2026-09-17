<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import PricingMatrixEditor from './index.svelte';
	import { SAMPLE_ADMIN_TRANSFER_RATES } from '$stylist/travel-admin/const/preset/sample-admin-transfer-rates';
	import { SAMPLE_ADMIN_PICKUP_POINTS } from '$stylist/travel-admin/const/preset/sample-admin-pickup-points';

	let rates = $state(SAMPLE_ADMIN_TRANSFER_RATES.map((r) => ({ ...r })));
</script>

<Story
	component={PricingMatrixEditor}
	title="PricingMatrixEditor"
	category="TravelAdmin/Organisms/PricingMatrix"
	description="Editable location x vehicle x headcount pricing table (see 002-Claude, section 3.10)."
>
	{#snippet children()}
		<PricingMatrixEditor {rates} pickupPoints={SAMPLE_ADMIN_PICKUP_POINTS} onChange={(next) => (rates = next)} />
	{/snippet}
</Story>
