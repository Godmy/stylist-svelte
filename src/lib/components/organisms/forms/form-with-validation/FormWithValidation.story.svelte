<script lang="ts">
  import FormWithValidation from './FormWithValidation.svelte';

  let fields = [
    {
      id: 'name',
      label: 'Full Name',
      placeholder: 'Enter your full name',
      required: true,
      validation: [
        { 
          condition: (value: string) => value.length >= 2, 
          message: 'Name must be at least 2 characters long' 
        }
      ]
    },
    {
      id: 'email',
      label: 'Email Address',
      placeholder: 'Enter your email',
      required: true,
      validation: [
        { 
          condition: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), 
          message: 'Please enter a valid email address' 
        }
      ]
    },
    {
      id: 'age',
      label: 'Age',
      placeholder: 'Enter your age',
      required: true,
      validation: [
        { 
          condition: (value: string) => !isNaN(Number(value)) && Number(value) >= 18 && Number(value) <= 120, 
          message: 'Age must be a number between 18 and 120' 
        }
      ]
    },
    {
      id: 'country',
      label: 'Country',
      type: 'select' as const,
      required: true,
      options: [
        { value: 'us', label: 'United States' },
        { value: 'ca', label: 'Canada' },
        { value: 'uk', label: 'United Kingdom' },
        { value: 'au', label: 'Australia' }
      ]
    },
    {
      id: 'bio',
      label: 'Bio',
      type: 'textarea' as const,
      placeholder: 'Tell us about yourself',
      validation: [
        { 
          condition: (value: string) => !value || value.length <= 200, 
          message: 'Bio must be less than 200 characters' 
        }
      ]
    }
  ];

  let submitLabel: string = 'Submit Form';
  let validationMode: 'onChange' | 'onSubmit' | 'onBlur' = 'onSubmit';
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">FormWithValidation Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive FormWithValidation</h2>
    <div class="max-w-2xl mx-auto">
      <FormWithValidation 
        {fields}
        {submitLabel}
        {validationMode}
        onValidSubmit={async (data) => {
          console.log('Form submitted successfully:', data);
          alert('Form submitted successfully! Check console for details.');
        }}
      />
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="validation-mode" class="block text-sm mb-1">Validation Mode:</label>
        <select
          id="validation-mode"
          bind:value={validationMode}
          class="border rounded p-1"
        >
          <option value="onChange">On Change</option>
          <option value="onSubmit">On Submit</option>
          <option value="onBlur">On Blur</option>
        </select>
      </div>

      <div>
        <label for="submit-label" class="block text-sm mb-1">Submit Label:</label>
        <input
          id="submit-label"
          type="text"
          bind:value={submitLabel}
          class="border rounded p-1 w-32"
        />
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">FormWithValidation Variations</h2>
    <div class="space-y-4">
      <div>
        <h3 class="text-sm font-medium mb-2">Simple Contact Form</h3>
        <div class="max-w-md mx-auto">
          <FormWithValidation 
            fields={[
              {
                id: 'contact-name',
                label: 'Name',
                placeholder: 'Enter your name',
                required: true
              },
              {
                id: 'contact-email',
                label: 'Email',
                placeholder: 'Enter your email',
                required: true,
                validation: [
                  { 
                    condition: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), 
                    message: 'Invalid email format' 
                  }
                ]
              },
              {
                id: 'contact-message',
                label: 'Message',
                type: 'textarea',
                required: true,
                placeholder: 'Enter your message'
              }
            ]}
            submitLabel="Send Message"
            validationMode="onSubmit"
            onValidSubmit={(data) => console.log('Contact form submitted:', data)}
          />
        </div>
      </div>
    </div>
  </div>
</div>