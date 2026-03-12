<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import { AccountSettingsStyleManager } from '$stylist/design-system/styles';
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
      <h1 class="text-lg font-semibold mb-4">UserProfileCard Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive UserProfileCard</h2>
        <div class="max-w-sm">
          <UserProfileCard
          />
        </div>
      </div>
    </div>
  {/snippet}
</Story>

