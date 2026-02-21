<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import TeamAvatarStack from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'maxVisible', type: 'number', defaultValue: 4, min: 1, max: 8 },
    { name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
    { name: 'stackDirection', type: 'select', options: ['horizontal', 'vertical'], defaultValue: 'horizontal' },
    { name: 'showStatus', type: 'boolean', defaultValue: true },
    { name: 'showTooltip', type: 'boolean', defaultValue: false }
  ];

  const members = [
    { id: '1', name: 'John Doe', avatar: 'https://i.pravatar.cc/120?img=11', status: 'online' as const },
    { id: '2', name: 'Jane Smith', avatar: 'https://i.pravatar.cc/120?img=12', status: 'away' as const },
    { id: '3', name: 'Bob Johnson', avatar: 'https://i.pravatar.cc/120?img=13', status: 'busy' as const },
    { id: '4', name: 'Alice White', avatar: 'https://i.pravatar.cc/120?img=14', status: 'offline' as const },
    { id: '5', name: 'Mark Lee', avatar: 'https://i.pravatar.cc/120?img=15', status: 'online' as const }
  ];
</script>

<Story
  id="molecules-team-avatar-stack"
  title="Molecules / Information / Media / TeamAvatarStack"
  component={TeamAvatarStack}
  category="Molecules/Information/Media"
  description="Team avatar stack with direction and status controls."
  {controls}
>
  {#snippet children(args: any)}
    <div class="p-6 rounded-xl bg-gray-50">
      <TeamAvatarStack
        members={members}
        maxVisible={args.maxVisible}
        size={args.size}
        stackDirection={args.stackDirection}
        showStatus={args.showStatus}
        showTooltip={args.showTooltip}
      />
    </div>
  {/snippet}
</Story>
