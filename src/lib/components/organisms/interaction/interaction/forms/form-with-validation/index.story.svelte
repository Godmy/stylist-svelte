<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import type { FormWithValidationProps, FormData, ValidationErrors } from '$stylist/design-system/props';
  import { FormStyleManager, ValidationStyleManager } from '$stylist/design-system/styles';
  import FormWithValidation from './index.svelte';

  type Props = {
    showEmailValidation: boolean;
    showPasswordStrength: boolean;
    showPhoneValidation: boolean;
    showRequiredIndicators: boolean;
    realTimeValidation: boolean;
  };

  const controls: ControlConfig[] = [
    { name: 'showEmailValidation', type: 'boolean', defaultValue: true },
    { name: 'showPasswordStrength', type: 'boolean', defaultValue: true },
    { name: 'showPhoneValidation', type: 'boolean', defaultValue: true },
    { name: 'showRequiredIndicators', type: 'boolean', defaultValue: true },
    { name: 'realTimeValidation', type: 'boolean', defaultValue: true }
  ];

  function handleSubmit(data: FormData) {
    console.log('Form submitted:', data);
    alert('Form submitted successfully!');
  }

  function handleValidationError(errors: ValidationErrors) {
    console.log('Validation errors:', errors);
  }

  function handleValidationSuccess() {
    console.log('All validations passed');
  }
</script>

<Story
  id="organisms-form-with-validation"
  title="Organisms / Interaction / Forms / Form With Validation"
  component={FormWithValidation}
  category="Organisms/Interaction/Forms"
  description="A form component with comprehensive validation for various input types."
  tags={['form', 'validation', 'inputs']}
  controls={controls}
>
  {#snippet children(props)}
    <div class={FormStyleManager.container('sb-organisms-form-with-validation p-4')}>
      <h1 class="text-lg font-semibold mb-4">FormWithValidation Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive FormWithValidation</h2>
        <div class="max-w-lg">
          <FormWithValidation 
            showEmailValidation={props.showEmailValidation}
            showPasswordStrength={props.showPasswordStrength}
            showPhoneValidation={props.showPhoneValidation}
            showRequiredIndicators={props.showRequiredIndicators}
            realTimeValidation={props.realTimeValidation}
            onSubmit={handleSubmit}
            onValidationError={handleValidationError}
            onValidationSuccess={handleValidationSuccess}
          />
        </div>
      </div>
    </div>
  {/snippet}
</Story>

