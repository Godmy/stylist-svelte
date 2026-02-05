<script lang="ts">
  import { cn } from '$stylist/utils/classes';
  import type { SliderTickProps } from '$stylist/design-system/attributes';

  // Определение состояния для SliderTick
  export function createSliderTickState(props: SliderTickProps) {
    const classes = $derived(
      cn(
        'slider-tick',
        props.active ? 'active' : '',
        props.class
      )
    );

    return {
      classes,
      value: props.value,
      position: props.position,
      active: props.active,
      label: props.label
    };
  }
</script>