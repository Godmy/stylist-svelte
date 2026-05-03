<script lang="ts">
  import Story from '$stylist/playground/component/molecule/story/index.svelte';
  import AdvancedPasswordInput from './index.svelte';
  import type { TokenControllerType } from '$stylist/interaction/type/record/controller-type';

  const controls = [
    {
      name: 'placeholder',
      type: 'text' as TokenControllerType,
      defaultValue: 'Enter password',
      description: 'Placeholder text for the password input'
    },
    {
      name: 'showStrength',
      type: 'boolean' as TokenControllerType,
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
      <p class="text-[var(--color-text-secondary)]">Password field with strength indicator</p>
    </div>
    <AdvancedPasswordInput
      placeholder={controlValues.placeholder}
      showStrengthMeter={controlValues.showStrength}
    />
  </div>

  {/snippet}
</Story>



