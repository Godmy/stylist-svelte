<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import UserStatus from './index.svelte';
  import type { ControlType } from '$stylist/design-system/tokens/controls';

  const controls = [
    {
      name: 'showAvatar',
      type: 'boolean' as ControlType,
      defaultValue: true,
      description: 'Whether to show the avatar'
    },
    {
      name: 'showName',
      type: 'boolean' as ControlType,
      defaultValue: true,
      description: 'Whether to show the user name'
    },
    {
      name: 'showStatusText',
      type: 'boolean' as ControlType,
      defaultValue: true,
      description: 'Whether to show the status text'
    }
  ];
  
  const user = {
    id: 'demo-user',
    name: 'Kai Rodriguez',
    status: 'online' as const,
    lastSeen: undefined
  };
</script>

<Story
  {controls}
  title="UserStatus Component"
  description="A component to display a user's status with presence indicator"
 
>
  {#snippet children(controlValues: any)}
  <UserStatus
    {user}
    showAvatar={controlValues.showAvatar}
    showName={controlValues.showName}
    showStatusText={controlValues.showStatusText}
  />

  {/snippet}
</Story>
