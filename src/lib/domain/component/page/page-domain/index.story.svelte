<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import { DOMAIN_SCREEN_DOMAIN } from '$stylist/domain/const/value/domain-screen-domain';
	import PageDomain from './index.svelte';

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
										},
										{ name: 'index.ts', path: 'layout/component/atom/clickable/index.ts' }
									]
								},
								{
									name: 'hoverable',
									path: 'layout/component/atom/hoverable',
									files: [
										{
											name: 'index.svelte',
											path: 'layout/component/atom/hoverable/index.svelte'
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
	component={PageDomain}
	title="PageDomain"
	description="Root app shell: switches between landing/domain/workspace/builder/backlog/diagnostics screens and always shows DomainMenu on top."
>
	{#snippet children()}
		<div class="_c1">
			<PageDomain {tree} descriptors={[]} initialScreen={DOMAIN_SCREEN_DOMAIN} />
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		position: relative;
		height: 40rem;
		overflow: auto;
		border-radius: 1rem;
		border-width: 1px;
		border-style: solid;
		border-color: #e2e8f0;
		background-color: #ffffff;
	}
</style>
