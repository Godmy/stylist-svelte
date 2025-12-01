# RealTimePresence Component

The RealTimePresence component displays the online status of users in real-time, commonly used in chat applications or collaboration tools.

## Features

- Visual status indicators (online, away, offline)
- User avatars or names
- Real-time status updates
- Customizable status options

## Usage

```svelte
<script>
  import { RealTimePresence } from '$lib/components/molecules/real-time-presence';
  
  const users = [
    { id: '1', name: 'John Doe', status: 'online' },
    { id: '2', name: 'Jane Smith', status: 'away' },
    { id: '3', name: 'Bob Johnson', status: 'offline' }
  ];
</script>

<RealTimePresence 
  users={users}
  onpresencechange={handlePresenceChange}
  class="custom-classes"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| users | Array | [] | Array of user objects with status |
| class | string | '' | Additional CSS classes |
| onpresencechange | function | undefined | Presence change handler |

## Accessibility

This component follows accessibility best practices:
- Clear visual status indicators
- Proper labeling of user presence
- Screen reader support for status changes