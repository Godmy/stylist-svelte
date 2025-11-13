<script>
  import { Input } from '$lib';

  // More on args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
  const baseArgs = {
    id: 'input-story',
    label: 'Input Label',
    placeholder: 'Enter text...',
  };

  const args = {
    ...baseArgs,
    type: 'text',
    required: false,
    disabled: false,
    errors: [],
  };

  const controls = {
    id: { control: { type: 'text' } },
    label: { control: { type: 'text' } },
    type: { 
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search']
    },
    placeholder: { control: { type: 'text' } },
    required: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    errors: { control: { type: 'object' } },
  };
</script>

<!-- Default story -->
<div class="p-4">
  <Input 
    id={args.id}
    label={args.label}
    type={args.type}
    placeholder={args.placeholder}
    required={args.required}
    disabled={args.disabled}
    errors={args.errors}
  />
</div>

<!-- Different input types -->
<div class="p-4 space-y-4">
  <h3 class="text-lg font-medium">Different Input Types</h3>
  <div class="space-y-4">
    <Input 
      id="text-input"
      label="Text Input"
      type="text"
      placeholder="Enter text..."
    />
    <Input 
      id="email-input"
      label="Email Input"
      type="email"
      placeholder="Enter email..."
    />
    <Input 
      id="password-input"
      label="Password Input" 
      type="password"
      placeholder="Enter password..."
    />
    <Input 
      id="number-input"
      label="Number Input"
      type="number"
      placeholder="Enter number..."
      min={0}
      max={100}
      step={1}
    />
  </div>
</div>

<!-- With and without errors -->
<div class="p-4 space-y-4">
  <h3 class="text-lg font-medium">With and Without Errors</h3>
  <div class="space-y-4">
    <Input 
      id="no-error-input"
      label="Input without errors"
      placeholder="This input has no errors"
    />
    <Input 
      id="error-input"
      label="Input with errors"
      placeholder="This input has errors"
      errors={['This field is required', 'Must be at least 6 characters']}
    />
  </div>
</div>

<!-- Required and disabled states -->
<div class="p-4 space-y-4">
  <h3 class="text-lg font-medium">Required and Disabled States</h3>
  <div class="space-y-4">
    <Input 
      id="required-input"
      label="Required Input"
      placeholder="This field is required"
      required={true}
    />
    <Input 
      id="disabled-input"
      label="Disabled Input"
      placeholder="This field is disabled"
      disabled={true}
    />
  </div>
</div>