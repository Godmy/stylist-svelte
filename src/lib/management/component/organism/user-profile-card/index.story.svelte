<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import { AccountSettingsStyleManager } from '$stylist/interaction/class/style-manager/account-settings';
	import UserProfileCard from './index.svelte';
</script>

<Story
	id="organisms-user-profile-card"
	title="Organisms / Interaction / Forms / Account / User Profile Card"
	component={UserProfileCard}
	category="Organisms/Interaction/Forms/Account"
	description="A user profile card component for displaying and editing user information."
	tags={['profile', 'user', 'card', 'account']}
>
	{#snippet children(values: any)}
		<div class={AccountSettingsStyleManager.form('sb-organisms-user-profile-card p-4')}>
			<h1 class="mb-4 text-lg font-semibold">UserProfileCard Component</h1>

			<div class="mb-6 rounded border p-4">
				<h2 class="text-md mb-2 font-semibold">Interactive UserProfileCard</h2>
				<div class="max-w-sm">
					<UserProfileCard />
				</div>
			</div>
		</div>
	{/snippet}
</Story>
