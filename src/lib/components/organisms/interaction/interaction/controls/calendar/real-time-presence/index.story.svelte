<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import RealTimePresence from './index.svelte';

  type PresenceUser = {
    id: string;
    name: string;
    avatar?: string;
    status: 'online' | 'away' | 'busy' | 'offline';
    lastSeen?: Date;
    cursorPosition?: { x: number; y: number };
    activeArea?: string;
  };

  const users: PresenceUser[] = [
    { id: '1', name: 'John Doe', status: 'online' },
    { id: '2', name: 'Jane Smith', status: 'away' },
    { id: '3', name: 'Bob Johnson', status: 'offline' },
    { id: '4', name: 'Alice Brown', status: 'busy' }
  ];

  type Props = {
    title: string;
    showAvatars: boolean;
    showStatus: boolean;
    showLastSeen: boolean;
    showCursorPositions: boolean;
  };

  const controls: ControlConfig[] = [
    { name: 'title', type: 'text', defaultValue: 'Active Users' },
    { name: 'showAvatars', type: 'boolean', defaultValue: true },
    { name: 'showStatus', type: 'boolean', defaultValue: true },
    { name: 'showLastSeen', type: 'boolean', defaultValue: true },
    { name: 'showCursorPositions', type: 'boolean', defaultValue: false }
  ];
</script>

<Story
  id="organisms-real-time-presence"
  title="Organisms / Interaction / Controls / Calendar / RealTimePresence"
  component={RealTimePresence}
  category="Organisms/Interaction/Controls/Calendar"
  description="Real-time presence indicator showing active users with status and activity."
  controls={controls}
>
  {#snippet children(props)}
    <div class="sb-organisms-real-time-presence p-4">
      <h1>RealTimePresence Story</h1>
      <RealTimePresence
        {users}
        title={props.title}
        showAvatars={props.showAvatars}
        showStatus={props.showStatus}
        showLastSeen={props.showLastSeen}
        showCursorPositions={props.showCursorPositions}
        class="my-2"
      />
    </div>
  {/snippet}
</Story>



