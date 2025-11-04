<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Avatar from './Avatar.svelte';

  const sizeOptions = ['sm', 'md', 'lg', 'xl'] as const;
  const imageUrl = 'https://i.pravatar.cc/160?img=13';

  type AvatarStoryProps = {
    initials: string;
    useImage: boolean;
    size: (typeof sizeOptions)[number];
  };

  const controls: ControlConfig[] = [
    {
      name: 'initials',
      type: 'text',
      defaultValue: 'JS'
    },
    {
      name: 'useImage',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'size',
      type: 'select',
      defaultValue: 'md',
      options: [...sizeOptions]
    }
  ];
</script>

<Story
  id="atoms-avatar"
  title="Avatar"
  component={Avatar}
  category="Atoms"
  description="Circular avatar with image or initials fallback."
  tags={['profile', 'identity']}
  controls={controls}
>
  {#snippet children(props: AvatarStoryProps)}
    <div class="flex items-center gap-4">
      <Avatar
        alt={props.initials || 'User'}
        size={props.size}
        src={props.useImage ? imageUrl : undefined}
      />

      <div class="text-sm text-gray-600 space-y-1">
        <p>
          <strong>Source:</strong>
          {props.useImage ? 'Remote image' : 'Initials fallback'}
        </p>
        <p>
          <strong>Size:</strong> {props.size}
        </p>
      </div>
    </div>
  {/snippet}
</Story>
