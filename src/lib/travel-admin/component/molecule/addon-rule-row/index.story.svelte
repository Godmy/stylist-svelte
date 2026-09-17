<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import AddonRuleRow from './index.svelte';
	import { SAMPLE_ADMIN_ADDONS } from '$stylist/travel-admin/const/preset/sample-admin-addons';

	let addon = $state({ ...SAMPLE_ADMIN_ADDONS[0] });
	let removed = $state(false);
</script>

<Story
	component={AddonRuleRow}
	title="AddonRuleRow"
	category="TravelAdmin/Molecules/AddonRulesEditor"
	description="One editable row of a product/category addon rule: label, price, price unit."
>
	{#snippet children()}
		{#if removed}
			<p>Строка удалена (демо).</p>
		{:else}
			<AddonRuleRow
				{addon}
				onChange={(next) => (addon = next)}
				onRemove={() => (removed = true)}
			/>
			<pre>{JSON.stringify(addon, null, 2)}</pre>
		{/if}
	{/snippet}
</Story>
