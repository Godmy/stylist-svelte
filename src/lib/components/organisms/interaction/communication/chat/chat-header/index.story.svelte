<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import * as ChatHeaderModule from './index.svelte';
  const ChatHeader = ChatHeaderModule.default ?? ChatHeaderModule;
  import type { User, Chat } from './types';

  export let primaryScenario: { chat: Chat; currentUser: User };
  export let variantScenarios: { chat: Chat; currentUser: User }[] = [];
  export let controls: ControlConfig[] = [
    { name: 'showActions', type: 'boolean', defaultValue: true }
  ];

  // Sample data for scenarios
  const sampleUser1: User = {
    id: 'user1',
    name: 'Alex Morgan',
    status: 'online'
  };

  const sampleUser2: User = {
    id: 'user2',
    name: 'Taylor Swift',
    status: 'away'
  };

  const sampleUser3: User = {
    id: 'user3',
    name: 'Jamie Johnson',
    status: 'offline'
  };

  const sampleGroupUser: User = {
    id: 'user4',
    name: 'Jordan Smith',
    status: 'online'
  };

  const sampleCurrentUser: User = {
    id: 'current',
    name: 'You',
    status: 'online'
  };

  const defaultPrimaryScenario = {
    chat: {
      id: 'chat1',
      name: 'Alex Morgan',
      participants: [sampleUser1, sampleCurrentUser],
      isGroup: false,
      lastMessage: 'Hey, how are you doing?',
      lastMessageTime: new Date(Date.now() - 300000), // 5 minutes ago
      unreadCount: 2
    },
    currentUser: sampleCurrentUser
  };

  const variantScenariosData = [
    {
      chat: {
        id: 'group1',
        name: 'Design Team',
        participants: [sampleUser1, sampleUser2, sampleUser3, sampleCurrentUser],
        isGroup: true,
        lastMessage: 'Meeting at 3pm today',
        lastMessageTime: new Date(Date.now() - 1800000), // 30 minutes ago
        unreadCount: 5
      },
      currentUser: sampleCurrentUser
    },
    {
      chat: {
        id: 'chat2',
        name: 'Taylor Swift',
        participants: [sampleUser2, sampleCurrentUser],
        isGroup: false,
        lastMessage: 'Thanks for your help!',
        lastMessageTime: new Date(Date.now() - 3600000), // 1 hour ago
        unreadCount: 0
      },
      currentUser: sampleCurrentUser
    },
    {
      chat: {
        id: 'group2',
        name: 'Family Group',
        participants: [sampleUser1, sampleUser2, sampleGroupUser, sampleCurrentUser],
        isGroup: true,
        lastMessage: 'Dinner tonight?',
        lastMessageTime: new Date(Date.now() - 7200000), // 2 hours ago
        unreadCount: 12
      },
      currentUser: sampleCurrentUser
    }
  ];

  // Use provided scenarios or defaults
  primaryScenario = primaryScenario || defaultPrimaryScenario;
  variantScenarios = variantScenarios.length > 0 ? variantScenarios : variantScenariosData;

  // Event handlers for demo purposes
  function handleCall(event: CustomEvent<{ chat: Chat }>) {
    console.log('Call initiated for chat:', event.detail.chat.id);
  }

  function handleVideoCall(event: CustomEvent<{ chat: Chat }>) {
    console.log('Video call initiated for chat:', event.detail.chat.id);
  }

  function handleInfo(event: CustomEvent<{ chat: Chat }>) {
    console.log('Info requested for chat:', event.detail.chat.id);
  }

  type Props = {
    showActions: boolean;
  };
</script>

<Story
  id="organisms-chat-header"
  title="Organisms / Interaction / Communication / Chat / ChatHeader"
  component={ChatHeader}
  category="Organisms/Interaction/Communication/Chat"
  description="Interactive chat header with user status and actions."
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Chat Header Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive chat header with user status and actions.</p>

        <div class="mt-6">
          <div class="border border-[--color-border-primary] rounded-lg bg-[--color-background-secondary]">
            <ChatHeader
              chat={primaryScenario.chat}
              currentUser={primaryScenario.currentUser}
              showActions={values.showActions}
              on:call={handleCall as (e: CustomEvent<any>) => void}
              on:videoCall={handleVideoCall as (e: CustomEvent<any>) => void}
              on:info={handleInfo as (e: CustomEvent<any>) => void}
            />
          </div>
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Chat Header Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different chat contexts: one-on-one, group chats, and with various action states.
        </p>

        <div class="mt-5 space-y-4">
          {#each variantScenarios as scenario, i}
            <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
              <div class="mb-2">
                <p class="text-sm font-semibold text-[--color-text-primary]">
                  {scenario.chat.isGroup ? 'Group Chat' : 'One-on-One'} #{i + 1}
                </p>
                <p class="text-xs text-[--color-text-secondary]">
                  {scenario.chat.name} • {scenario.chat.participants.length} participants
                </p>
              </div>
              <div class="border border-[--color-border-primary] rounded-lg bg-white">
                <ChatHeader
                  chat={scenario.chat}
                  currentUser={scenario.currentUser}
                  showActions={true}
                  on:call={handleCall as (e: CustomEvent<any>) => void}
                  on:videoCall={handleVideoCall as (e: CustomEvent<any>) => void}
                  on:info={handleInfo as (e: CustomEvent<any>) => void}
                />
              </div>
            </article>
          {/each}
        </div>
      </div>
    </section>
  {/snippet}
</Story>


