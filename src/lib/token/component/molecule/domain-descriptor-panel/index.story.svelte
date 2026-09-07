<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import DomainDescriptorPanel from './index.svelte';
	import type { TypeDomainComponentDescriptor } from '$stylist/domain/type/object/domain-component-descriptor';

	const descriptor: TypeDomainComponentDescriptor = {
		entityPath: 'commerce/component/molecule/price-tag',
		domain: 'commerce',
		cluster: 'component',
		joint: 'molecule',
		family: 'price-tag',
		componentModulePath: 'commerce/component/molecule/price-tag/index.svelte',
		recipeTypePath: 'commerce/interface/recipe/price-tag/index.ts',
		stateFunctionPath: null,
		jsonPaths: [],
		contractPaths: [],
		interfaceRecipeJsonPaths: [],
		constEnumJsonPaths: [],
		constMapJsonPaths: [],
		functionStateJsonPaths: [],
		functionScriptJsonPaths: [],
		controlDefinitionJsonPaths: [],
		hasRecipePipeline: true,
		hasStatePipeline: false,
		hasStoryPreview: true,
		storyModulePath: 'commerce/component/molecule/price-tag/index.story.svelte'
	};
</script>

<Story
	component={DomainDescriptorPanel}
	title="DomainDescriptorPanel"
	description="Orbit panel summarizing a component descriptor's architecture, information, interaction, controls, and contracts."
>
	{#snippet children()}
		<div class="_c1">
			<DomainDescriptorPanel {descriptor} />
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		max-width: 44rem;
	}
</style>
