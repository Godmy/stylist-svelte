# MessageComposer Component

The MessageComposer component provides an interface for composing and sending messages in a conversation.

## Features

- Text input area for message composition
- Send button
- Attachment support (future)
- Rich text formatting (future)

## Usage

```svelte
<script>
  import { MessageComposer } from '$lib/components/molecules/message-composer';
</script>

<MessageComposer 
  onsubmit={handleSendMessage}
  class="custom-classes"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| class | string | '' | Additional CSS classes |
| onsubmit | function | undefined | Submit event handler |

## Accessibility

This component follows accessibility best practices:
- Proper labeling of input fields
- Keyboard navigation support
- ARIA attributes for live region updates