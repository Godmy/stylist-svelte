<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import AdvancedPasswordInput from './AdvancedPasswordInput.svelte';

  type Props = {
    placeholder: string;
    showStrength: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'placeholder',
      type: 'text',
      defaultValue: 'Enter password'
    },
    {
      name: 'showStrength',
      type: 'boolean',
      defaultValue: true
    }
  ];
</script>

<Story
  id="molecules-advanced-password-input"
  title="AdvancedPasswordInput"
  component={AdvancedPasswordInput}
  category="Molecules"
  description="A password input field with strength indicator and visibility toggle."
  tags={['form', 'input', 'security', 'password']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-6 max-w-md mx-auto">
      <div class="mb-6">
        <h2 class="text-xl font-semibold">Password Input</h2>
        <p class="text-gray-500">Password field with strength indicator</p>
      </div>
      <AdvancedPasswordInput placeholder={props.placeholder} showStrengthMeter={props.showStrength} />
    </div>
  {/snippet}
</Story>