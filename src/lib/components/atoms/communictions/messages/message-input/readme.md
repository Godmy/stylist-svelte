# MessageInput Component

The MessageInput component provides a text input field specifically designed for messaging applications.

## Features

- Text input with message-specific styling
- Placeholder support
- Disabled and readonly states
- Input event handling

## Usage

```svelte
<script>
  import { MessageInput } from '$lib/components/molecules/message-input';
</script>

<MessageInput 
  placeholder="Type your message..."
  oninput={handleInput}
  class="custom-classes"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| placeholder | string | '' | Input placeholder text |
| value | string | '' | Input value |
| disabled | boolean | false | Disable the input |
| readonly | boolean | false | Make input readonly |
| class | string | '' | Additional CSS classes |
| oninput | function | undefined | Input event handler |
| onchange | function | undefined | Change event handler |

## Accessibility

This component follows accessibility best practices:
- Proper labeling of input field
- Keyboard navigation support
- ARIA attributes for input state