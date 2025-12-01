<script lang="ts">
  import ChatPreview from './ChatPreview.svelte';

  // Example data for ChatPreview
  const chatPreviewData = {
    title: 'AI Team Chat',
    participants: ['Claude', 'Qwen', 'Gemini'],
    maxMessages: 5,
    showAvatars: true,
    messages: [
      {
        text: 'I\'ve completed the SAMO analysis of the component library.',
        sender: 'Claude',
        timestamp: '2 min ago',
        isOwn: false,
        avatar: '/avatars/claude.svg'
      },
      {
        text: 'Great! I implemented the new components based on the guidelines.',
        sender: 'Qwen',
        timestamp: '1 min ago',
        isOwn: true,
        avatar: '/avatars/qwen.svg'
      },
      {
        text: 'The new components are already live on the staging site.',
        sender: 'Gemini',
        timestamp: 'Just now',
        isOwn: false,
        avatar: '/avatars/gemini.svg'
      }
    ]
  };

  const chatPreviewWithoutAvatars = {
    ...chatPreviewData,
    title: 'Development Discussion',
    participants: ['Developer 1', 'Developer 2'],
    showAvatars: false,
    messages: [
      {
        text: 'The new component follows all SOLID principles.',
        sender: 'Developer 1',
        timestamp: '5 min ago',
        isOwn: false
      },
      {
        text: 'Agreed, it has single responsibility and proper dependency inversion.',
        sender: 'Developer 2',
        timestamp: '3 min ago',
        isOwn: true
      }
    ]
  };

  const chatPreviewFewerMessages = {
    ...chatPreviewData,
    title: 'Project Updates',
    participants: ['Project Manager'],
    maxMessages: 2,
    messages: [
      {
        text: 'The sprint is on track to complete all components by deadline.',
        sender: 'Project Manager',
        timestamp: '10 min ago',
        isOwn: false,
        avatar: '/avatars/pm.svg'
      },
      {
        text: 'Remember to update your task statuses.',
        sender: 'Project Manager',
        timestamp: '5 min ago',
        isOwn: false,
        avatar: '/avatars/pm.svg'
      },
      {
        text: 'New requirements have been added to the backlog.',
        sender: 'Project Manager',
        timestamp: 'Just now',
        isOwn: false,
        avatar: '/avatars/pm.svg'
      }
    ]
  };
</script>

<!-- Example 1: Default ChatPreview -->
<div class="p-4 border-b">
  <h3 class="text-lg font-semibold mb-2">Default ChatPreview</h3>
  <ChatPreview {...chatPreviewData} />
</div>

<!-- Example 2: Without Avatars -->
<div class="p-4 border-b">
  <h3 class="text-lg font-semibold mb-2">Without Avatars</h3>
  <ChatPreview {...chatPreviewWithoutAvatars} />
</div>

<!-- Example 3: Fewer Messages -->
<div class="p-4">
  <h3 class="text-lg font-semibold mb-2">Fewer Messages</h3>
  <ChatPreview {...chatPreviewFewerMessages} />
</div>