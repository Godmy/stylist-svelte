<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import ChatRoom from './index.svelte';
  import type { Message } from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'loading', type: 'boolean', defaultValue: false },
      { name: 'variant', type: 'select', options: ['default', 'compact', 'spacious'], defaultValue: 'default' }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  // Sample users and messages
  const sampleCurrentUser = {
    id: 'current',
    name: 'You',
    avatar: ''
  };

  const sampleParticipants = [
    { id: 'user1', name: 'Alex Morgan', avatar: '' },
    { id: 'user2', name: 'Taylor Swift', avatar: '' },
    { id: 'user3', name: 'Jamie Johnson', avatar: '' },
    { id: 'user4', name: 'Jordan Smith', avatar: '' }
  ];

  const sampleMessages: Message[] = [
    {
      id: 'msg1',
      text: 'Hey team! How is everyone doing with the project?',
      sender: 'Alex Morgan',
      timestamp: '10:24 AM',
      isOwn: false
    },
    {
      id: 'msg2',
      text: 'I\'m making good progress on the UI components. Should have the first draft ready by EOD.',
      sender: 'You',
      timestamp: '10:25 AM',
      isOwn: true,
      status: 'read'
    },
    {
      id: 'msg3',
      text: 'That\'s great to hear! I\'ve finished the backend API implementation.',
      sender: 'Taylor Swift',
      timestamp: '10:26 AM',
      isOwn: false
    },
    {
      id: 'msg4',
      text: 'I\'m working on the testing suite. Planning to finish it by tomorrow morning.',
      sender: 'Jamie Johnson',
      timestamp: '10:27 AM',
      isOwn: false
    },
    {
      id: 'msg5',
      text: 'Perfect! Let\'s schedule a sync meeting for tomorrow afternoon.',
      sender: 'You',
      timestamp: '10:28 AM',
      isOwn: true,
      status: 'delivered'
    }
  ];

  // Function to handle message sending
  function handleSendMessage(text: string) {
    console.log('Message sent:', text);
  }
</script>

<Story
  {id}
  {title}
  {description}
  component={ChatRoom}
  category="Molecules"
  controls={controls}
>
  {#snippet children(props: { loading?: boolean; variant?: 'default' | 'compact' | 'spacious' })}
    <section class="grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Chat Room Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive chat room with message history and composer.</p>

        <div class="mt-6 bg-[--color-background-secondary] p-4 rounded-lg h-[400px]">
          <ChatRoom
            messages={sampleMessages}
            currentUser={sampleCurrentUser}
            participants={sampleParticipants}
            title="Design Team Chat"
            subtitle="3 teammates online"
            loading={props.loading}
            variant={props.variant}
            onMessageSend={handleSendMessage}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Chat Room Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different chat room configurations and states.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Compact View</p>
            <div class="h-80">
              <ChatRoom
                messages={sampleMessages.slice(0, 3)}
                currentUser={sampleCurrentUser}
                participants={sampleParticipants.slice(0, 2)}
                title="Project Discussion"
                subtitle="1 teammate online"
                variant="compact"
                onMessageSend={handleSendMessage}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Loading State</p>
            <div class="h-40 flex items-center justify-center">
              <ChatRoom
                messages={[]}
                currentUser={sampleCurrentUser}
                participants={sampleParticipants}
                title="New Chat"
                loading={true}
                onMessageSend={handleSendMessage}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Spacious View</p>
            <div class="h-80">
              <ChatRoom
                messages={sampleMessages.slice(0, 2)}
                currentUser={sampleCurrentUser}
                participants={sampleParticipants.slice(0, 1)}
                title="One-on-One"
                variant="spacious"
                onMessageSend={handleSendMessage}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>

