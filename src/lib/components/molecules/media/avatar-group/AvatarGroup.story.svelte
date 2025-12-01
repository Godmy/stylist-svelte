<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import AvatarGroup from './AvatarGroup.svelte';

  type Props = {
    maxVisible: number;
    size: 'sm' | 'md' | 'lg';
  };

  const controls: ControlConfig[] = [
    {
      name: 'maxVisible',
      type: 'number',
      defaultValue: 3,
      min: 1,
      max: 10
    },
    {
      name: 'size',
      type: 'select',
      defaultValue: 'md',
      options: ['sm', 'md', 'lg']
    }
  ];

  // Sample avatars data
  const sampleAvatars = [
    { id: '1', name: 'John Doe', src: 'https://i.pravatar.cc/150?img=1' },
    { id: '2', name: 'Jane Smith', src: 'https://i.pravatar.cc/150?img=2' },
    { id: '3', name: 'Bob Johnson', src: 'https://i.pravatar.cc/150?img=3' },
    { id: '4', name: 'Alice Williams', src: 'https://i.pravatar.cc/150?img=4' },
    { id: '5', name: 'Charlie Brown', src: 'https://i.pravatar.cc/150?img=5' }
  ];
</script>

<Story
  id="molecules-avatar-group"
  title="AvatarGroup"
  component={AvatarGroup}
  category="Molecules"
  description="A component to display a group of user avatars."
  tags={['avatar', 'user', 'group']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-6">
      <h2 class="text-xl font-semibold mb-6">Avatar Group</h2>
      <div class="flex items-center space-x-6">
        <div>
          <h3 class="font-medium mb-2">Small</h3>
          <AvatarGroup avatars={sampleAvatars} maxVisible={props.maxVisible} size="sm" />
        </div>
        <div>
          <h3 class="font-medium mb-2">Medium</h3>
          <AvatarGroup avatars={sampleAvatars} maxVisible={props.maxVisible} size="md" />
        </div>
        <div>
          <h3 class="font-medium mb-2">Large</h3>
          <AvatarGroup avatars={sampleAvatars} maxVisible={props.maxVisible} size="lg" />
        </div>
      </div>
    </div>
  {/snippet}
</Story>