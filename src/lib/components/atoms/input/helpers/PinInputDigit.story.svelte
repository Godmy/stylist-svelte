<script lang="ts">
  import PinInputDigit from './PinInputDigit.svelte';
  import { Story } from '$lib/playground';

  let digits = $state(['', '', '', '']);
  let invalid = $state(false);

  function handleChange(index: number, event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.slice(-1);
    const next = digits.slice();
    next[index] = value;
    digits = next;
    invalid = next.some((d) => d === '');
  }

  function reset() {
    digits = ['', '', '', ''];
    invalid = false;
  }
</script>

<Story
  id="atoms-pin-input-digit"
  title="PinInputDigit"
  component={PinInputDigit}
  category="Atoms"
  description="Single digit input used to build PIN or OTP flows."
  tags={['input', 'pin', 'otp']}
>
  {#snippet children()}
    <div class="space-y-6 p-6">
      <div class="flex items-center gap-3">
        {#each digits as digit, index}
          <PinInputDigit
            value={digit}
            invalid={invalid && digit === ''}
            oninput={(event) => handleChange(index, event)}
          />
        {/each}
      </div>

      <div class="flex gap-3 text-sm">
        <button
          type="button"
          class="rounded-lg border border-gray-300 px-3 py-2 hover:bg-gray-50"
          onclick={reset}
        >
          Reset
        </button>
        {#if !invalid}
          <span class="text-[--color-success-600]">PIN ready: {digits.join('')}</span>
        {:else}
          <span class="text-[--color-text-tertiary]">Enter all digits</span>
        {/if}
      </div>
    </div>
  {/snippet}
</Story>
