<script lang="ts">
	import DomainToolbar from '$stylist/domain/component/molecule/domain-toolbar/index.svelte';
	import ClusterToolbar from '$stylist/cluster/component/molecule/cluster-toolbar/index.svelte';
	import JointToolbar from '$stylist/joint/component/molecule/joint-toolbar/index.svelte';
	import DomainList from '$stylist/domain/component/molecule/domain-list/index.svelte';

	interface DomainSidebarEntity {
		name: string;
		path: string;
		files: { path: string }[];
	}

	interface DomainSidebarProps {
		activeDomain?: string;
		activeCluster?: string;
		activeJoint?: string;
		availableJoints?: readonly string[];
		entities?: DomainSidebarEntity[];
		activeEntityPath?: string;
		onDomainSelect?: (name: string) => void;
		onClusterSelect?: (name: string) => void;
		onJointSelect?: (name: string) => void;
		onEntitySelect?: (path: string) => void;
		class?: string;
	}

	let {
		activeDomain,
		activeCluster,
		activeJoint,
		availableJoints,
		entities = [],
		activeEntityPath,
		onDomainSelect,
		onClusterSelect,
		onJointSelect,
		onEntitySelect,
		class: className = ''
	}: DomainSidebarProps = $props();
</script>

<aside class="c-domain-sidebar {className}" aria-label="Taxonomy">
	<div class="sidebar-grid">
		<DomainToolbar
			active={activeDomain}
			orientation="vertical"
			showLabel={false}
			onSelect={onDomainSelect}
		/>

		<div class="taxonomy-labels">
			<div class="taxonomy-label">
				<span class="label-tier">domain</span>
				<strong class="label-value">{activeDomain || '-'}</strong>
			</div>
			<div class="taxonomy-label">
				<span class="label-tier">cluster</span>
				<strong class="label-value">{activeCluster || '-'}</strong>
			</div>
			<div class="taxonomy-label">
				<span class="label-tier">joint</span>
				<strong class="label-value">{activeJoint || '-'}</strong>
			</div>
		</div>

		<ClusterToolbar active={activeCluster} showLabel={false} onSelect={onClusterSelect} />

		<JointToolbar
			active={activeJoint}
			availableJoints={availableJoints}
			showLabel={false}
			onSelect={onJointSelect}
		/>

		<DomainList
			{entities}
			activePath={activeEntityPath}
			onSelect={onEntitySelect}
		/>
	</div>
</aside>

<style>
	.c-domain-sidebar {
		display: grid;
		grid-template-rows: minmax(0, 1fr);
		border-right: 1px solid var(--color-border-primary);
		background: var(--color-background-primary);
	}

	.sidebar-grid {
		display: grid;
		grid-template-columns: 32px minmax(0, 1fr);
		grid-template-rows: auto auto auto minmax(0, 1fr);
		min-height: 0;
		align-content: start;
	}

	.sidebar-grid :global(.c-domain-toolbar) {
		grid-row: 1 / span 4;
	}

	.taxonomy-labels {
		display: grid;
		grid-template-columns: minmax(0, 3fr) minmax(0, 3fr) minmax(0, 4fr);
		gap: 0.28rem;
		padding: 0.4rem 0.35rem;
		grid-column: 2;
		grid-row: 1;
		border-bottom: 1px solid var(--color-border-primary);
	}

	.taxonomy-label {
		display: grid;
		gap: 0.12rem;
		min-width: 0;
	}

	.label-tier {
		font-size: 9px;
		font-weight: 700;
		text-transform: uppercase;
		color: var(--color-text-secondary);
		line-height: 1;
	}

	.label-value {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-family: var(--font-mono, monospace);
		font-size: 10px;
		line-height: 1.1;
		color: var(--color-text-primary);
	}

	.sidebar-grid :global(.c-cluster-toolbar) {
		grid-column: 2;
		grid-row: 2;
		min-width: 0;
	}

	.sidebar-grid :global(.c-joint-toolbar) {
		grid-column: 2;
		grid-row: 3;
		min-width: 0;
	}

	.sidebar-grid :global(.c-domain-list) {
		grid-column: 2;
		grid-row: 4;
		min-height: 0;
	}
</style>
