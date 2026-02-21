<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import AvatarSelector from './index.svelte';
  import type { ControlType } from '$stylist/design-system/tokens/interaction/controls';

  const controls = [
    {
      name: 'src',
      type: 'text' as ControlType,
      defaultValue: 'https://placehold.co/40x40',
      description: 'Avatar image URL'
    },
    {
      name: 'alt',
      type: 'text' as ControlType,
      defaultValue: 'User avatar',
      description: 'Alt text for the avatar'
    },
    {
      name: 'size',
      type: 'select' as ControlType,
      defaultValue: 'md',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Size of the avatar'
    }
  ];
</script>

<Story
  {controls}
  title="AvatarSelector Component"
  description="A component for selecting avatars with preview"
 
>
  {#snippet children(controlValues: any)}
  <div class="p-8 bg-gray-50 rounded-lg">
    <AvatarSelector
      src={controlValues.src}
      alt={controlValues.alt}
      size={controlValues.size}
    />
  </div>

  {/snippet}
</Story>