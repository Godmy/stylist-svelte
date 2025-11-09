<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import Avatar from '../../atoms/media/Avatar.svelte';
  import { Check, CheckCheck } from 'lucide-svelte';

  type MessageStatus = 'sent' | 'delivered' | 'read';

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    text?: string;
    sender?: string;
    senderAvatar?: string;
    timestamp?: string;
    status?: MessageStatus;
    isOwn?: boolean;
    children?: Snippet;
    class?: string;
    contentClass?: string;
    headerClass?: string;
    footerClass?: string;
    variant?: 'default' | 'primary' | 'secondary';
  };

  let {
    text,
    sender = 'User',
    senderAvatar,
    timestamp = 'Just now',
    status = 'sent',
    isOwn = false,
    children,
    class: hostClass = '',
    contentClass = '',
    headerClass = '',
    footerClass = '',
    variant = 'default',
    ...restProps
  }: Props = $props();

  let alignmentClass = $derived(isOwn ? 'justify-end' : 'justify-start');
  let bgClass = $derived(isOwn ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800');
  let variantClass = $derived({
    'default': 'bg-gray-100 text-gray-800',
    'primary': 'bg-blue-100 text-blue-800',
    'secondary': 'bg-gray-200 text-gray-900'
  }[variant]);

  let statusIcon = $derived({
    'sent': Check,
    'delivered': Check,
    'read': CheckCheck
  }[status]);
  
  let StatusIcon = $derived(statusIcon);
</script>

<div class={`flex ${alignmentClass} mb-4 ${hostClass}`} {...restProps}>
  <div class={`max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl ${contentClass}`}>
    {#if !isOwn}
      <div class={`flex items-center mb-1 ${headerClass}`}>
        {#if senderAvatar}
          <Avatar src={senderAvatar} alt={sender} size="sm" class="mr-2" />
        {/if}
        <span class="text-xs font-semibold text-gray-600">{sender}</span>
      </div>
    {/if}
    
    <div class={`rounded-lg px-4 py-2 ${isOwn ? bgClass : variantClass} ${isOwn ? 'rounded-br-none' : 'rounded-bl-none'}`}>
      {#if text}
        <p class="text-sm">{text}</p>
      {/if}
      {#if children}
        <div>
          {@render children()}
        </div>
      {/if}
    </div>
    
    <div class={`flex items-center justify-end mt-1 text-xs text-gray-500 ${footerClass}`}>
      <span>{timestamp}</span>
      {#if isOwn && status}
        <StatusIcon class={`ml-1 h-3 w-3 ${status === 'read' ? 'text-blue-500' : 'text-gray-400'}`} />
      {/if}
    </div>
  </div>
</div>
