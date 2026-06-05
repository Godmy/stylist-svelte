<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import Breadcrumbs from './index.svelte';
	import { BREADCRUMB_TEMPLATE } from '$stylist/navigation/const/preset/breadcrumb-template';

	let activeId = $state('breadcrumb-dropdown-node');
</script>

<Story
	component={Breadcrumbs}
	title="Breadcrumbs"
	description="Breadcrumb trail with hover dropdown transitions."
>
	{#snippet children()}
		<Breadcrumbs crumbs={BREADCRUMB_TEMPLATE} {activeId} onNavigate={(id) => (activeId = id)} />
	{/snippet}
</Story>
