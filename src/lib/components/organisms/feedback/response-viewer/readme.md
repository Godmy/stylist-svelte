# ResponseViewer Component

The ResponseViewer component displays API responses or other data in a formatted way, supporting different content types like JSON, XML, and plain text.

## Features

- Syntax highlighting for JSON and XML
- Collapsible content sections
- Different display modes for content types
- Copy to clipboard functionality

## Usage

```svelte
<script>
  import { ResponseViewer } from '$lib/components/molecules/response-viewer';
</script>

<ResponseViewer 
  response={apiResponse}
  format="json"
  class="custom-classes"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| response | string/object | '' | The response data to display |
| format | 'json'/'xml'/'text'/'html' | 'json' | Content format for styling |
| class | string | '' | Additional CSS classes |

## Accessibility

This component follows accessibility best practices:
- Semantic structure for response content
- Proper labeling of content sections
- Keyboard navigation for interactive elements