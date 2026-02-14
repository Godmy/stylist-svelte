<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import ChatMessage from './index.svelte';

  export let id: string;
  export let title: string;
  export let description: string;
  export let controls: ControlConfig[] = [
    { name: 'isOwn', type: 'boolean', defaultValue: false },
    { name: 'status', type: 'select', options: ['sent', 'delivered', 'read'], defaultValue: 'sent' },
    { name: 'variant', type: 'select', options: ['default', 'primary', 'secondary'], defaultValue: 'default' }
  ];

  // Sample messages for different scenarios
  const sampleMessages = [
    {
      text: 'Hey there! How are you doing today?',
      sender: 'Alex Morgan',
      timestamp: '10:24 AM',
      isOwn: false
    },
    {
      text: 'I\'m doing great! Just working on that project we discussed.',
      sender: 'You',
      timestamp: '10:25 AM',
      isOwn: true
    },
    {
      text: 'That sounds awesome! Can you share the updates?',
      sender: 'Alex Morgan',
      timestamp: '10:26 AM',
      isOwn: false
    },
    {
      text: 'Sure, I\'ll send you the files in a moment.',
      sender: 'You',
      timestamp: '10:27 AM',
      isOwn: true
    }
  ];
</script>

<Story
  {id}
  {title}
  {description}
  component={ChatMessage}
  category="Molecules"
  controls={controls}
>
  {#snippet children(props: { isOwn?: boolean; status?: 'sent' | 'delivered' | 'read'; variant?: 'default' | 'primary' | 'secondary' })}
    <section class="grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Chat Message Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive chat message with customizable states.</p>

        <div class="mt-6 bg-[--color-background-secondary] p-4 rounded-lg min-h-[200px]">
          <div class="flex flex-col">
            <ChatMessage
              text="Hello! This is a sample message with the current props."
              sender="Sample User"
              timestamp="Just now"
              isOwn={props.isOwn}
              status={props.status}
              variant={props.variant}
            />
          </div>
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Message Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different message types: own messages, received messages, and various statuses.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Own Message (Sent)</p>
            <ChatMessage
              text="This is a message sent by you"
              sender="You"
              timestamp="10:30 AM"
              isOwn={true}
              status="sent"
            />
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Own Message (Delivered)</p>
            <ChatMessage
              text="This message has been delivered"
              sender="You"
              timestamp="10:31 AM"
              isOwn={true}
              status="delivered"
            />
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Own Message (Read)</p>
            <ChatMessage
              text="This message has been read by the recipient"
              sender="You"
              timestamp="10:32 AM"
              isOwn={true}
              status="read"
            />
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Received Message</p>
            <ChatMessage
              text="This is a message received from another user"
              sender="Other User"
              timestamp="10:33 AM"
              isOwn={false}
            />
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Primary Variant</p>
            <ChatMessage
              text="This is a message with primary styling"
              sender="System"
              timestamp="10:34 AM"
              isOwn={false}
              variant="primary"
            />
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>

