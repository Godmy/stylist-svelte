<script lang="ts">
	import type { TOKEN_FUNCTIONAL_TAXONOMY } from '$stylist/architecture/const/array/functional-taxonomy';
	import type { StylistSelection } from '$stylist/development/type/struct/stylist-selection';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import Story from '$stylist/playground/component/molecule/story/index.svelte';

	import RecipeStylist from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'initialCategory',
			type: 'select',
			options: ['architecture', 'information', 'interaction'],
			defaultValue: 'architecture'
		}
	];
</script>

<Story
	{controls}
	component={RecipeStylist}
	title="RecipeStylist"
	category="Organisms/Development/RecipeStylist"
	description="Main RecipeStylist component library browser"
>
	{#snippet children(values: any)}
		<RecipeStylist
			initialCategory={values.initialCategory as (typeof TOKEN_FUNCTIONAL_TAXONOMY)[number]}
			onSelectionChange={(selection: StylistSelection) => {
				console.log('Selection changed:', selection);
			}}
		/>
	{/snippet}
</Story>
