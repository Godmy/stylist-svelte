<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import DomainSidebar from './index.svelte';

	type StoryEntity = {
		name: string;
		path: string;
		files: { path: string }[];
	};

	const entitiesByDomain: Record<'layout' | 'theme', StoryEntity[]> = {
		layout: [
			{
				name: 'clickable',
				path: '/src/lib/layout/component/atom/clickable',
				files: [{ path: 'index.svelte' }, { path: 'index.story.svelte' }]
			},
			{
				name: 'hoverable',
				path: '/src/lib/layout/component/atom/hoverable',
				files: [{ path: 'index.svelte' }]
			}
		],
		theme: [
			{
				name: 'theme-provider',
				path: '/src/lib/theme/component/atom/theme-provider',
				files: [{ path: 'index.svelte' }, { path: 'index.story.svelte' }]
			},
			{
				name: 'theme-consumer',
				path: '/src/lib/theme/component/atom/theme-consumer',
				files: [{ path: 'index.svelte' }]
			}
		]
	};

	let activeDomain = $state<'layout' | 'theme'>('layout');
	let activeCluster = $state('component');
	let activeJoint = $state('atom');
	let activeEntityPath = $state<string>(entitiesByDomain.layout[0].path);

	const availableJoints = ['atom', 'molecule', 'organism'] as const;
	const availableDomains = ['layout', 'theme'] as const;
</script>

<Story
	component={DomainSidebar}
	title="DomainSidebar"
	description="Full taxonomy rail combining domain, cluster, joint, and entity lists."
>
	{#snippet children()}
		<div class="_c1">
			<DomainSidebar
				{activeDomain}
				{activeCluster}
				{activeJoint}
				{availableDomains}
				{availableJoints}
				entities={entitiesByDomain[activeDomain]}
				{activeEntityPath}
				onDomainSelect={(name) => {
					activeDomain = name === 'theme' ? 'theme' : 'layout';
					activeEntityPath = entitiesByDomain[activeDomain][0].path;
				}}
				onClusterSelect={(name) => {
					activeCluster = name;
				}}
				onJointSelect={(name) => {
					activeJoint = name;
				}}
				onEntitySelect={(path) => {
					activeEntityPath = path;
				}}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		height: 34rem;
		width: 18rem;
		overflow: hidden;
		border-radius: 1rem;
		border-width: 1px;
		border-style: solid;
		border-color: #e2e8f0;
		background-color: #ffffff;
	}
</style>
