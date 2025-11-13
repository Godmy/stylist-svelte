<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import Card from './DataDisplayCard.svelte';

  type Props = {
    title?: string;
    subtitle?: string;
    description?: string;
    image: string;
    footer?: Snippet;
    actions?: Snippet;
    class?: string;
    imageClass?: string;
    headerClass?: string;
    bodyClass?: string;
    footerClass?: string;
    actionsClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    title,
    subtitle,
    description,
    image,
    footer,
    actions,
    class: className = '',
    imageClass = 'h-48 w-full object-cover',
    headerClass = '',
    bodyClass = '',
    footerClass = '',
    actionsClass = '',
    ...restProps
  }: Props = $props();
</script>

<Card
  {title}
  {subtitle}
  {description}
  {image}
  {footer}
  {actions}
  class={className}
  {headerClass}
  {bodyClass}
  {footerClass}
  {actionsClass}
  {imageClass}
  {...restProps}
/>