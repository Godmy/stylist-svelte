<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  type Status = 'online' | 'offline' | 'away' | 'busy';

  type Props = {
    status?: Status;
    label?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLSpanElement>;

  let {
    status = 'online',
    label = status,
    children,
    ...restProps
  }: Props = $props();

  let statusClasses = $derived(() => {
    const classesMap = {
      online: 'bg-green-500',
      offline: 'bg-gray-500',
      away: 'bg-yellow-500',
      busy: 'bg-red-500'
    };
    return classesMap[status];
  });

  let statusText = $derived(() => {
    const textMap = {
      online: 'Online',
      offline: 'Offline',
      away: 'Away',
      busy: 'Busy'
    };
    return textMap[status];
  });
</script>

<span class="flex items-center" {...restProps}>
  <span class={`w-3 h-3 rounded-full ${statusClasses} mr-2`}></span>
  <span>{label || statusText}</span>
</span>