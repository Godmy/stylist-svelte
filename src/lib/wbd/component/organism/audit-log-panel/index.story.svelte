<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import type { StructWbdAuditLogEntry } from '$stylist/wbd/type/struct/audit-log-entry';
	import AuditLogPanel from './index.svelte';

	const controls: SlotStory[] = [];
	const entries: StructWbdAuditLogEntry[] = [
		{
			id: 'log-1',
			actorLabel: 'Coordinator',
			action: 'opened round 2',
			entityType: 'round',
			entityLabel: 'Resource base forecast',
			createdAt: '2026-08-02T12:10:00Z'
		},
		{
			id: 'log-2',
			actorLabel: 'System',
			action: 'calculated snapshots',
			entityType: 'system',
			entityLabel: 'Round 1',
			createdAt: '2026-08-02T11:30:00Z'
		}
	];
</script>

<Story
	title="Audit Log Panel"
	component={AuditLogPanel}
	category="Organisms/Wbd"
	description="Chronological operational log for WBD sessions."
	{controls}
>
	{#snippet children()}
		<AuditLogPanel {entries} />
	{/snippet}
</Story>
