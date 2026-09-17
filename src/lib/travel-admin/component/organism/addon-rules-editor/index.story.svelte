<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import AddonRulesEditor from './index.svelte';
	import { SAMPLE_ADMIN_ADDONS } from '$stylist/travel-admin/const/preset/sample-admin-addons';

	let addons = $state(SAMPLE_ADMIN_ADDONS.map((a) => ({ ...a })));
</script>

<Story
	component={AddonRulesEditor}
	title="AddonRulesEditor"
	category="TravelAdmin/Organisms/AddonCatalog"
	description="CRUD list of addon rules: what is selectable as an extra, and at what price."
>
	{#snippet children()}
		<AddonRulesEditor {addons} onChange={(next) => (addons = next)} />
	{/snippet}
</Story>
