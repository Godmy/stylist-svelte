<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  type ValidationRule = {
    condition: (value: any) => boolean;
    message: string;
  };

  type FieldConfig = {
    id: string;
    label: string;
    placeholder?: string;
    required?: boolean;
    validation?: ValidationRule[];
    value?: any;
  } & (
    | { type?: Exclude<string, 'select'>; options?: never }
    | { type: 'select'; options: { value: string; label: string }[] }
  );

  type Props = {
    fields: FieldConfig[];
    submitLabel?: string;
    class?: string;
    fieldClass?: string;
    labelClass?: string;
    inputClass?: string;
    errorClass?: string;
    buttonClass?: string;
    validationMode?: 'onChange' | 'onSubmit' | 'onBlur';
    onValidSubmit?: (data: Record<string, any>) => void;
  } & HTMLAttributes<HTMLFormElement>;

  let {
    fields = [],
    submitLabel = 'Submit',
    class: className = '',
    fieldClass = '',
    labelClass = '',
    inputClass = '',
    errorClass = 'text-red-600 text-sm mt-1',
    buttonClass = '',
    validationMode = 'onSubmit',
    onValidSubmit,
    ...restProps
  }: Props = $props();

  let formData = $state<Record<string, any>>({});
  let errors = $state<Record<string, string>>({});
  let isSubmitting = $state(false);

  // Initialize form data
  $effect(() => {
    const initialData: Record<string, any> = {};
    fields.forEach(field => {
      initialData[field.id] = field.value || '';
    });
    formData = initialData;
  });

  function validateField(fieldId: string, value: any): string | null {
    const field = fields.find(f => f.id === fieldId);
    if (!field) return null;

    // Required validation
    if (field.required && (!value || value.toString().trim() === '')) {
      return `${field.label} is required`;
    }

    // Custom validation rules
    if (field.validation) {
      for (const rule of field.validation) {
        if (!rule.condition(value)) {
          return rule.message;
        }
      }
    }

    return null;
  }

  function validateForm(): boolean {
    let hasErrors = false;
    const newErrors: Record<string, string> = {};

    fields.forEach(field => {
      const error = validateField(field.id, formData[field.id]);
      if (error) {
        newErrors[field.id] = error;
        hasErrors = true;
      } else {
        delete newErrors[field.id];
      }
    });

    errors = newErrors;
    return !hasErrors;
  }

  function handleFieldChange(fieldId: string, value: any) {
    formData[fieldId] = value;
    
    if (validationMode === 'onChange') {
      const error = validateField(fieldId, value);
      if (error) {
        errors[fieldId] = error;
      } else {
        delete errors[fieldId];
      }
    }
  }

  function handleFieldBlur(fieldId: string, value: any) {
    if (validationMode === 'onBlur') {
      const error = validateField(fieldId, value);
      if (error) {
        errors[fieldId] = error;
      } else {
        delete errors[fieldId];
      }
    }
  }

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    isSubmitting = true;

    // Always validate on submit regardless of validation mode
    const isValid = validateForm();

    if (isValid && onValidSubmit) {
      try {
        await onValidSubmit({ ...formData });
      } finally {
        isSubmitting = false;
      }
    } else {
      isSubmitting = false;
    }
  }
</script>

<form class={`max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md ${className}`} onsubmit={handleSubmit} {...restProps}>
  {#each fields as field}
    <div class={`mb-4 ${fieldClass}`}>
      <label for={field.id} class={`block text-sm font-medium text-gray-700 mb-1 ${labelClass}`}>
        {field.label} {#if field.required}<span class="text-red-500">*</span>{/if}
      </label>
      
      {#if field.type === 'textarea'}
        <textarea
          id={field.id}
          class={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
            errors[field.id] ? 'border-red-500' : 'border-gray-300'
          } ${inputClass}`}
          placeholder={field.placeholder}
          bind:value={formData[field.id]}
          oninput={(e) => handleFieldChange(field.id, (e.target as HTMLTextAreaElement).value)}
          onblur={(e) => handleFieldBlur(field.id, (e.target as HTMLTextAreaElement).value)}
        ></textarea>
      {:else if field.type === 'select'}
        <select
          id={field.id}
          class={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
            errors[field.id] ? 'border-red-500' : 'border-gray-300'
          } ${inputClass}`}
          bind:value={formData[field.id]}
          onchange={(e) => handleFieldChange(field.id, (e.target as HTMLSelectElement).value)}
        >
          <option value="">Select an option</option>
          {#if field.options}
            {#each field.options as option}
              <option value={option.value}>{option.label}</option>
            {/each}
          {/if}
        </select>
      {:else}
        <input
          id={field.id}
          type={field.type || 'text'}
          class={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
            errors[field.id] ? 'border-red-500' : 'border-gray-300'
          } ${inputClass}`}
          placeholder={field.placeholder}
          bind:value={formData[field.id]}
          oninput={(e) => handleFieldChange(field.id, (e.target as HTMLInputElement).value)}
          onblur={(e) => handleFieldBlur(field.id, (e.target as HTMLInputElement).value)}
        />
      {/if}
      
      {#if errors[field.id]}
        <p class={`text-red-600 text-sm mt-1 ${errorClass}`}>{errors[field.id]}</p>
      {/if}
    </div>
  {/each}

  <div class="mt-6">
    <button
      type="submit"
      class={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
        isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
      } ${buttonClass}`}
      disabled={isSubmitting}
    >
      {#if isSubmitting}
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Submitting...
      {:else}
        {submitLabel}
      {/if}
    </button>
  </div>
</form>
