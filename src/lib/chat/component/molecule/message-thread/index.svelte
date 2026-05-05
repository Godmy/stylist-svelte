<script lang="ts">
  import type { SlotMessageThread as MessageThreadProps } from '$stylist/chat/interface/slot/message-thread';
  import { createMessageThreadState } from '$stylist/chat/function/state/message-thread';

  let props: MessageThreadProps = $props();

  const state = createMessageThreadState(props);
</script>

<div class={state.hostClasses} {...props}>
  {#if state.title}
    <header class={state.headerClasses}>
      <h3 class="font-semibold text-lg">{state.title}</h3>
    </header>
  {/if}

  <div class={state.containerClasses}>
    {#if state.loading}
      <div class={state.loadingClasses}>
        <div class={state.spinnerClasses}></div>
      </div>
    {:else}
      <div class={state.messageContainerClasses}>
        {#each state.messages as message}
          <div class={`message-item ${state.variantClass}`}>
            <p>{message.text}</p>
            <span class="text-xs text-[var(--color-text-secondary)]">
              {message.sender} - {message.timestamp}
            </span>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>
