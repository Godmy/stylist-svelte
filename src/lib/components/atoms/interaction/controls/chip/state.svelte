<script lang="ts">
  import { cn } from '$stylist/utils/classes';
  import type { ChipProps } from '$stylist/design-system/attributes';

  // Определение состояния для Chip
  export function createChipState(props: ChipProps) {
    const classes = $derived(
      cn(
        'chip',
        `variant-${props.variant}`,
        `size-${props.size}`,
        props.disabled ? 'disabled' : '',
        props.closable ? 'closable' : '',
        props.class
      )
    );

    return {
      classes,
      variant: props.variant ?? 'default',
      size: props.size ?? 'md',
      closable: props.closable ?? false,
      disabled: props.disabled ?? false,
      label: props.label,
      text: props.text,
      icon: props.icon,
      content: props.content
    };
  }
</script>