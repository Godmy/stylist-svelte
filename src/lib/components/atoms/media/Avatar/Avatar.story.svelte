<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Avatar from './Avatar.svelte';

  const sizeOptions = ['sm', 'md', 'lg', 'xl'] as const;
  const statusOptions = ['online', 'away', 'offline', 'typing', 'idle'] as const;
  const imageUrl = 'https://i.pravatar.cc/160?img=13';

  type AvatarStoryProps = {
    initials: string;
    useImage: boolean;
    size: (typeof sizeOptions)[number];
    status: (typeof statusOptions)[number];
    showStatus: boolean;
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
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'online',
      options: [...statusOptions]
    },
    {
      name: 'showStatus',
      type: 'boolean',
      defaultValue: false
    }
  ];
</script>

<Story
  id="atoms-avatar"
  title="Avatar"
  component={Avatar}
  category="Atoms/Media"
  description="Circular avatar with image or initials fallback."
  tags={['profile', 'identity', 'avatar']}
  controls={controls}
>
  {#snippet children(props: AvatarStoryProps)}
    <div class="flex items-center gap-4">
      <Avatar
        name={props.initials}
        size={props.size}
        src={props.useImage ? imageUrl : undefined}
        status={props.status}
        showStatus={props.showStatus}
      />

      <div class="text-sm text-gray-600 space-y-1">
        <p>
          <strong>Source:</strong>
          {props.useImage ? 'Remote image' : 'Initials fallback'}
        </p>
        <p>
          <strong>Size:</strong> {props.size}
        </p>
        <p>
          <strong>Status:</strong> {props.status}
        </p>
        <p>
          <strong>Show Status:</strong> {props.showStatus ? 'Yes' : 'No'}
        </p>
      </div>
    </div>
  {/snippet}
</Story>
