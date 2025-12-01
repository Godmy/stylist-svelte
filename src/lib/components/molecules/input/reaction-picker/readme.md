# ReactionPicker Component

The ReactionPicker component allows users to select reactions (like, love, etc.) for content such as messages or posts.

## Features

- Emoji-based reaction options
- Visual feedback for selection
- Popup or inline display
- Customizable reaction set

## Usage

```svelte
<script>
  import { ReactionPicker } from '$lib/components/molecules/reaction-picker';
  
  const reactions = [
    { id: 'like', emoji: '👍', label: 'Like' },
    { id: 'love', emoji: '❤️', label: 'Love' },
    { id: 'laugh', emoji: '😂', label: 'Laugh' }
  ];
</script>

<ReactionPicker 
  reactions={reactions}
  selected={selectedReactions}
  onreactionselect={handleReaction}
  class="custom-classes"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| reactions | Array | [] | Array of reaction options |
| selected | Array | [] | Currently selected reactions |
| class | string | '' | Additional CSS classes |
| onreactionselect | function | undefined | Reaction selection handler |

## Accessibility

This component follows accessibility best practices:
- Proper labeling of reaction options
- Keyboard navigation support
- ARIA attributes for selection state