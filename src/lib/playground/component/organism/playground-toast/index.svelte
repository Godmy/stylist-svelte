<script lang="ts">
  import { Icon as BaseIcon } from '$stylist/media';
  import { onMount } from 'svelte';
  import { createPlaygroundToastState } from '$stylist/playground/function/state/playground-toast';
  import type { PlaygroundToastProps } from '$stylist/playground/type/struct/playground-toast-props';
  const Check = 'check';

  let props: PlaygroundToastProps = $props();
  const state = createPlaygroundToastState(props);

  onMount(() => {
    const timer = setTimeout(() => {
      state.onClose?.();
    }, state.duration);

    return () => clearTimeout(timer);
  });
</script>

<style>
  .toast {
    animation: slideIn var(--duration-300) var(--animation-ease-out);
  }

  @keyframes slideIn {
    from {
      transform: translateY(-100%);
      opacity: var(--opacity-0);
    }
    to {
      transform: translateY(0);
      opacity: var(--opacity-100);
    }
  }
</style>

<div class="toast fixed top-20 right-4 z-[10000] bg-green-500 text-white px-4 py-3 rounded-lg shadow-2xl flex items-center gap-3 min-w-[300px]">
  <div class="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
    <BaseIcon name={Check} class="w-4 h-4" />
  </div>
  <p class="text-sm font-medium flex-1">{state.message}</p>
</div>
