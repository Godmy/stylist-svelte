<script lang="ts">
  import RealTimePresence from './RealTimePresence.svelte';

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
</script>

<div class="p-4">
  <h1>RealTimePresence Story</h1>
  <RealTimePresence
    {users}
    class="my-2"
  />
</div>