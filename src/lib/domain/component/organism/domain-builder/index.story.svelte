<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import DomainBuilder from './index.svelte';

	const tree = [
		{
			name: 'layout',
			clusters: [
				{
					name: 'component',
					joints: [
						{
							name: 'atom',
							entities: [
								{
									name: 'clickable',
									path: 'layout/component/atom/clickable',
									files: [
										{
											name: 'index.svelte',
											path: 'layout/component/atom/clickable/index.svelte'
										}
									]
								}
							]
						}
					]
				}
			]
		}
	];
</script>

<Story
	component={DomainBuilder}
	title="DomainBuilder"
	description="Drag-and-drop page builder that composes atom/molecule/organism components into sections."
>
	{#snippet children()}
		<div class="_c1">
			<DomainBuilder {tree} descriptors={[]} />
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		height: 34rem;
		overflow: auto;
		border-radius: 1rem;
		border-width: 1px;
		border-style: solid;
		border-color: #e2e8f0;
		background-color: #ffffff;
	}
</style>
