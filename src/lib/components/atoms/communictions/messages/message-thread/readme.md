# MessageThread Component

The MessageThread component displays a conversation thread with multiple messages from different participants.

## Features

- Display of multiple messages
- Different styling for user and contact messages
- Message metadata integration
- Scrollable interface

## Usage

```svelte
<script>
  import { MessageThread } from '$lib/components/molecules/message-thread';
  
  const messages = [
    { id: '1', content: 'Hello!', sender: 'contact', timestamp: '2:30 PM' },
    { id: '2', content: 'Hi there!', sender: 'user', timestamp: '2:31 PM' }
  ];
</script>

<MessageThread 
  messages={messages}
  currentUser="user"
  class="custom-classes"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| messages | Array | [] | Array of message objects |
| currentUser | string | '' | Identifier for current user |
| class | string | '' | Additional CSS classes |

## Accessibility

This component follows accessibility best practices:
- Clear visual distinction between message senders
- Proper semantic structure for conversation
- Screen reader support for message content