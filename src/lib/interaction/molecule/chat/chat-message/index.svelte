<script lang="ts">
  import type { InteractionHTMLAttributes } from '$stylist/interaction/type/attribute/interaction';
  import type { Snippet } from 'svelte';
  import { Icon as BaseIcon, Avatar } from '$stylist';

  const Check = 'check';
  const CheckCheck = 'check-check';

  type MessageStatus = 'sent' | 'delivered' | 'read';

  type RestProps = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>;

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
  let bgClass = $derived(isOwn ? 'bg-[var(--color-primary-500)] text-[var(--color-text-inverse)]' : 'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)]');
  let variantClass = $derived({
    'default': 'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)]',
    'primary': 'bg-[var(--color-primary-100)] text-[var(--color-primary-800)]',
    'secondary': 'bg-[var(--color-background-tertiary)] text-[var(--color-text-primary)]'
  }[variant]);

  let statusIcon = $derived({
    'sent': Check,
    'delivered': Check,
    'read': CheckCheck
  }[status]);
</script>

<div class={`flex ${alignmentClass} mb-4 ${hostClass}`} {...restProps}>
  <div class={`max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl ${contentClass}`}>
    {#if !isOwn}
      <div class={`flex items-center mb-1 ${headerClass}`}>
        {#if senderAvatar}
          <Avatar src={senderAvatar} alt={sender} size="sm" class="mr-2" />
        {/if}
        <span class="text-xs font-semibold text-[var(--color-text-secondary)]">{sender}</span>
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
    
    <div class={`flex items-center justify-end mt-1 text-xs text-[var(--color-text-secondary)] ${footerClass}`}>
      <span>{timestamp}</span>
      {#if isOwn && status}
        <BaseIcon name={statusIcon} class={`ml-1 h-3 w-3 ${status === 'read' ? 'text-[var(--color-primary-500)]' : 'text-[var(--color-text-tertiary)]'}`} />
      {/if}
    </div>
  </div>
</div>





