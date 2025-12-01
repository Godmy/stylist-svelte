<script lang="ts">
  import MessageMeta from './MessageMeta.svelte';

  type User = {
    id: string;
    name: string;
    avatar?: string;
    status?: 'online' | 'away' | 'offline' | 'typing';
    lastSeen?: Date;
  };

  type Message = {
    id: string;
    sender: User;
    content: string;
    timestamp: Date;
    status?: 'sent' | 'delivered' | 'read';
    attachments?: any[];
    isSystemMessage?: boolean;
  };

  const message: Message = {
    id: '1',
    sender: {
      id: 'user1',
      name: 'John Doe'
    },
    content: 'Test message',
    timestamp: new Date(2023, 5, 15, 14, 30),
    status: 'read'
  };
</script>

<div class="p-4">
  <h1>MessageMeta Story</h1>
  <MessageMeta
    {message}
  />
</div>