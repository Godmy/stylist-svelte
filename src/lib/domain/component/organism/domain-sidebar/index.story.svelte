<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import DomainSidebar from './index.svelte';

	const entitiesByDomain = {
		interaction: [
			{ name: 'clickable', path: '/src/lib/interaction/component/atom/clickable', files: [{ path: 'index.svelte' }, { path: 'index.story.svelte' }] },
			{ name: 'hoverable', path: '/src/lib/interaction/component/atom/hoverable', files: [{ path: 'index.svelte' }] }
		],
		theme: [
			{ name: 'theme-provider', path: '/src/lib/theme/component/atom/theme-provider', files: [{ path: 'index.svelte' }, { path: 'index.story.svelte' }] },
			{ name: 'theme-consumer', path: '/src/lib/theme/component/atom/theme-consumer', files: [{ path: 'index.svelte' }] }
		]
	} as const;

	let activeDomain = $state<'interaction' | 'theme'>('interaction');
	let activeCluster = $state('component');
	let activeJoint = $state('atom');
	let activeEntityPath = $state(entitiesByDomain.interaction[0].path);

	const availableJoints = ['atom', 'molecule', 'organism'] as const;
</script>

<Story
	component={DomainSidebar}
	title="DomainSidebar"
	description="Full taxonomy rail combining domain, cluster, joint, and entity lists."
>
	{#snippet children()}
		<div class="h-[34rem] w-[18rem] overflow-hidden rounded-2xl border border-slate-200 bg-white">
			<DomainSidebar
				{activeDomain}
				{activeCluster}
				{activeJoint}
				availableJoints={availableJoints}
				entities={entitiesByDomain[activeDomain]}
				{activeEntityPath}
				onDomainSelect={(name) => {
					activeDomain = name === 'theme' ? 'theme' : 'interaction';
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
