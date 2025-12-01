# MediaLibrary Component

The MediaLibrary component provides an interface for browsing and selecting media files like images, videos, and audio.

## Features

- Grid layout for media items
- File type filtering
- Selection support
- Upload capability

## Usage

```svelte
<script>
  import { MediaLibrary } from '$lib/components/molecules/media-library';
  
  const mediaItems = [
    { id: '1', url: '/images/photo1.jpg', type: 'image', name: 'Photo 1' },
    { id: '2', url: '/videos/video1.mp4', type: 'video', name: 'Video 1' }
  ];
</script>

<MediaLibrary 
  mediaItems={mediaItems}
  allowUpload={true}
  allowSelection={true}
  class="custom-classes"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| mediaItems | Array | [] | Array of media items |
| allowUpload | boolean | false | Enable upload functionality |
| allowSelection | boolean | false | Enable item selection |
| class | string | '' | Additional CSS classes |

## Accessibility

This component follows accessibility best practices:
- Keyboard navigation for item selection
- Screen reader support for media descriptions
- Proper ARIA attributes for interactive elements