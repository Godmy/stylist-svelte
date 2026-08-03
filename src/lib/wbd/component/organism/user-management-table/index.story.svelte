<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import type { StructWbdUser } from '$stylist/wbd/type/struct/user';
	import UserManagementTable from './index.svelte';

	const controls: SlotStory[] = [];
	const users: StructWbdUser[] = [
		{ id: 'user-1', email: 'admin@example.com', name: 'Admin User', company: 'WeOracle', role: 'admin', createdAt: '2026-08-01T09:00:00Z' },
		{ id: 'user-2', email: 'coord@example.com', name: 'Coordinator User', company: 'WeOracle', role: 'coordinator', createdAt: '2026-08-01T10:00:00Z' },
		{ id: 'user-3', email: 'expert@example.com', name: 'Expert User', role: 'expert', createdAt: '2026-08-01T11:00:00Z' }
	];

	function handleSelectUser(userId: string): void {
		console.info('WBD user selected', userId);
	}

	function handleUpdateUserRole(userId: string, role: StructWbdUser['role']): void {
		console.info('WBD user role updated', { userId, role });
	}
</script>

<Story
	title="User Management Table"
	component={UserManagementTable}
	category="Organisms/Wbd"
	description="Admin user table with role controls."
	{controls}
>
	{#snippet children()}
		<UserManagementTable
			{users}
			selectedUserId="user-2"
			onSelectUser={handleSelectUser}
			onUpdateUserRole={handleUpdateUserRole}
		/>
	{/snippet}
</Story>
