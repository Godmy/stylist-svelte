<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import AvatarSelector from './AvatarSelector.svelte';

  type Props = {
    src?: string;
    alt?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    class?: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'src',
      type: 'text',
      defaultValue: 'https://placehold.co/40x40'
    },
    {
      name: 'alt',
      type: 'text',
      defaultValue: 'User avatar'
    },
    {
      name: 'size',
      type: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      defaultValue: 'md'
    }
  ];
</script>

<Story
  id="molecules-avatar-selector"
  title="AvatarSelector"
  component={AvatarSelector}
  category="Molecules"
  description="A component for selecting avatars with preview."
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">AvatarSelector Story</h2>
      <AvatarSelector {...props} />
    </div>
  {/snippet}
</Story>