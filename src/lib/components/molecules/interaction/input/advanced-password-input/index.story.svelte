<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import AdvancedPasswordInput from './index.svelte';
  import type { ControlType } from '$stylist/design-system/tokens/controls';

  const controls = [
    {
      name: 'placeholder',
      type: 'text' as ControlType,
      defaultValue: 'Enter password',
      description: 'Placeholder text for the password input'
    },
    {
      name: 'showStrength',
      type: 'boolean' as ControlType,
      defaultValue: true,
      description: 'Whether to show the password strength indicator'
    }
  ];
</script>

<Story
  {controls}
  title="AdvancedPasswordInput Component"
  description="A password input field with strength indicator and visibility toggle"
 
>
  {#snippet children(controlValues: any)}
  <div class="p-6 max-w-md mx-auto">
    <div class="mb-6">
      <h2 class="text-xl font-semibold">Password Input</h2>
      <p class="text-gray-500">Password field with strength indicator</p>
    </div>
    <AdvancedPasswordInput
      placeholder={controlValues.placeholder}
      showStrengthMeter={controlValues.showStrength}
    />
  </div>

  {/snippet}
</Story>