<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import type { UserProfileCardElementProps, UserData } from '$stylist/design-system/props';
  import { AccountSettingsStyleManager } from '$stylist/design-system/styles';
  import UserProfileCard from './index.svelte';

  type Props = {
    showAvatar: boolean;
    showEmail: boolean;
    showPhone: boolean;
    showBio: boolean;
    editable: boolean;
    showEditButton: boolean;
  };

  const controls: ControlConfig[] = [
    { name: 'showAvatar', type: 'boolean', defaultValue: true },
    { name: 'showEmail', type: 'boolean', defaultValue: true },
    { name: 'showPhone', type: 'boolean', defaultValue: true },
    { name: 'showBio', type: 'boolean', defaultValue: true },
    { name: 'editable', type: 'boolean', defaultValue: false },
    { name: 'showEditButton', type: 'boolean', defaultValue: true }
  ];

  const user: UserData = {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    bio: 'Software developer with 10 years of experience. Love building great user experiences.',
    avatar: 'https://placehold.co/200x200',
    role: 'Senior Developer',
    location: 'New York, USA'
  };

  function handleEdit(user: UserData) {
    console.log('Edit user:', user);
  }

  function handleSave(user: UserData) {
    console.log('Save user:', user);
    alert('Profile updated successfully!');
  }
</script>

<Story
  id="organisms-user-profile-card"
  title="Organisms / Interaction / Forms / Account / User Profile Card"
  component={UserProfileCard}
  category="Organisms/Interaction/Forms/Account"
  description="A user profile card component for displaying and editing user information."
  tags={['profile', 'user', 'card', 'account']}
  controls={controls}
>
  {#snippet children(props)}
    <div class={AccountSettingsStyleManager.form('sb-organisms-user-profile-card p-4')}>
      <h1 class="text-lg font-semibold mb-4">UserProfileCard Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive UserProfileCard</h2>
        <div class="max-w-sm">
          <UserProfileCard 
            {user}
            showAvatar={props.showAvatar}
            showEmail={props.showEmail}
            showPhone={props.showPhone}
            showBio={props.showBio}
            editable={props.editable}
            showEditButton={props.showEditButton}
            onEdit={handleEdit}
            onSave={handleSave}
          />
        </div>
      </div>
    </div>
  {/snippet}
</Story>

