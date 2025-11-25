<script lang="ts">
  import PinInputDigit from './PinInputDigit.svelte';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import type { IPinInputDigitProps } from './types';
  import type { HTMLInputAttributes } from 'svelte/elements';

  type Props = IPinInputDigitProps & HTMLInputAttributes;

  const controls: ControlConfig[] = [
    { name: 'value', type: 'text', defaultValue: '', description: 'Current digit value' },
    { name: 'focused', type: 'boolean', defaultValue: false, description: 'Whether the digit is focused' },
    { name: 'invalid', type: 'boolean', defaultValue: false, description: 'Whether the digit is invalid' }
  ];
</script>

<Story
  id="atoms-pin-input-digit"
  title="PinInputDigit"
  component={PinInputDigit}
  category="Atoms"
  description="Single digit input used to build PIN or OTP flows."
  tags={['input', 'pin', 'otp']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-4 flex justify-center">
      <PinInputDigit {...props} />
    </div>
  {/snippet}
</Story>
