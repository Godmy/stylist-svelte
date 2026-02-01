<script lang="ts">
  import PinInputDigit from './index.svelte';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import type { HTMLInputAttributes } from 'svelte/elements';
  import type { InputProps } from '$stylist/design-system/input';

  type Props = InputProps & Omit<HTMLInputAttributes, 'size'> & {
    value?: string;
    focused?: boolean;
    invalid?: boolean;
  };

  const controls: ControlConfig[] = [
    { name: 'value', type: 'text', defaultValue: '', description: 'Current digit value' },
    { name: 'focused', type: 'boolean', defaultValue: false, description: 'Whether the digit is focused' },
    { name: 'invalid', type: 'boolean', defaultValue: false, description: 'Whether the digit is invalid' }
  ];

  const props: Props = {};
</script>

<div class="p-4 flex justify-center">
  <PinInputDigit {...props} />
</div>


