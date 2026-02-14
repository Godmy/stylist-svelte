<script lang="ts">
  import MessageMeta from './index.svelte';
  import type { Message } from '$stylist/design-system/props/chat';

  const message: Message = {
    id: '1',
    senderId: 'user1',
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
