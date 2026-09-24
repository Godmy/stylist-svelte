<script lang="ts">
	import Button from '$stylist/button/component/atom/button/index.svelte';
	import AddonRuleRow from '$stylist/travel-admin/component/molecule/addon-rule-row/index.svelte';
	import type { RecipeAddonRulesEditor } from '$stylist/travel-admin/interface/recipe/addon-rules-editor';
	import createAddonRulesEditorState from './state.svelte';

	let props: RecipeAddonRulesEditor = $props();
	const state = createAddonRulesEditorState(props);
</script>

<div class="addon-rules-editor {props.class ?? ''}">
	{#each state.addons as addon, i (addon.id)}
		<AddonRuleRow {addon} onChange={(next) => state.update(i, next)} onRemove={() => state.remove(i)} />
	{/each}
	<Button variant="secondary" size="sm" onclick={state.add}>+ Услуга</Button>
</div>

<style>
	.addon-rules-editor {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		/* establishes the query container each AddonRuleRow's @container reads,
		   so rows collapse to one column by their own available width, not the
		   full browser viewport (see also theme/component/molecule/story). */
		container-type: inline-size;
	}
</style>
