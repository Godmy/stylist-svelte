<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import UserProfileCard from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'name', type: 'text', defaultValue: 'Jane Doe' },
		{ name: 'role', type: 'text', defaultValue: 'Administrator' },
		{ name: 'email', type: 'text', defaultValue: 'jane@example.com' }
	];
</script>

<Story
	{controls}
	component={UserProfileCard}
	title="UserProfileCard"
	category="Organisms/User"
	description="Compact user profile card showing initial, name, role and email."
>
	{#snippet children(values: any)}
		<UserProfileCard name={values.name} role={values.role} email={values.email} />
	{/snippet}
</Story>
