# MessageMeta Component

The MessageMeta component displays metadata for a message such as timestamp, sender, and delivery status.

## Features

- Timestamp display
- Sender information
- Message delivery status
- Customizable metadata fields

## Usage

```svelte
<script>
  import { MessageMeta } from '$lib/components/molecules/message-meta';
</script>

<MessageMeta 
  timestamp="2:30 PM"
  sender="John Doe"
  status="read"
  class="custom-classes"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| timestamp | string | '' | Message timestamp |
| sender | string | '' | Message sender |
| status | 'sent'/'delivered'/'read' | 'sent' | Message status |
| class | string | '' | Additional CSS classes |

## Accessibility

This component follows accessibility best practices:
- Clear visual indicators for message status
- Proper semantic structure
- Screen reader support for metadata