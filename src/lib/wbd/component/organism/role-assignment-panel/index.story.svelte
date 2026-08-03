<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import type { StructWbdUser } from '$stylist/wbd/type/struct/user';
	import RoleAssignmentPanel from './index.svelte';

	const controls: SlotStory[] = [];
	const user: StructWbdUser = {
		id: 'user-1',
		email: 'coordinator@example.com',
		name: 'Maria Coordinator',
		company: 'WeOracle',
		role: 'coordinator',
		createdAt: '2026-08-01T09:00:00Z'
	};

	function handleAssignRole(userId: string, role: StructWbdUser['role']): void {
		console.info('WBD role assigned', { userId, role });
	}
</script>

<Story
	title="Role Assignment Panel"
	component={RoleAssignmentPanel}
	category="Organisms/Wbd"
	description="Admin role switcher for WBD users."
	{controls}
>
	{#snippet children()}
		<RoleAssignmentPanel {user} onAssignRole={handleAssignRole} />
	{/snippet}
</Story>
