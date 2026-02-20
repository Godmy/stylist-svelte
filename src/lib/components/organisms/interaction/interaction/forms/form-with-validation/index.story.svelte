<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import { FormStyleManager } from '$stylist/design-system/styles';
  import FormWithValidation from './index.svelte';
</script>

<Story
  id="organisms-form-with-validation"
  title="Organisms / Interaction / Forms / Form With Validation"
  component={FormWithValidation}
  category="Organisms/Interaction/Forms"
  description="A form component with comprehensive validation for various input types."
  tags={['form', 'validation', 'inputs']}
>
  {#snippet children(values: any)}
    <div class={FormStyleManager.container('sb-organisms-form-with-validation p-4')}>
      <h1 class="text-lg font-semibold mb-4">FormWithValidation Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive FormWithValidation</h2>
        <div class="max-w-lg">
          <FormWithValidation
          />
        </div>
      </div>
    </div>
  {/snippet}
</Story>

