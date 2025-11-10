<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Lock, AlertCircle, CheckCircle, Shield, Eye, EyeOff } from 'lucide-svelte';

  type ValidationRule = {
    rule: (value: any) => boolean;
    message: string;
  };

  type SecureField = {
    id: string;
    name: string;
    type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
    label: string;
    placeholder?: string;
    required?: boolean;
    validations?: ValidationRule[];
    secureInput?: boolean; // For masking sensitive inputs
    masked?: boolean; // For toggle to show/hide secure input
    hint?: string;
  };

  type Props = {
    fields: SecureField[];
    onSubmit?: (data: Record<string, any>) => void;
    submitLabel?: string;
    title?: string;
    description?: string;
    showSecurityIndicator?: boolean;
    securityLevel?: 'low' | 'medium' | 'high';
    class?: string;
    headerClass?: string;
    fieldClass?: string;
    submitClass?: string;
    footerClass?: string;
  } & HTMLAttributes<HTMLFormElement>;

  let {
    fields = [],
    onSubmit,
    submitLabel = 'Submit',
    title = 'Secure Form',
    description = 'Please fill in the required information',
    showSecurityIndicator = true,
    securityLevel = 'high',
    class: className = '',
    headerClass = '',
    fieldClass = '',
    submitClass = '',
    footerClass = '',
    ...restProps
  }: Props = $props();

  let formData = $state<Record<string, any>>({});
  let errors = $state<Record<string, string>>({});
  let isSubmitting = $state(false);

  // Initialize form data
  $effect(() => {
    const initialData: Record<string, any> = {};
    fields.forEach(field => {
      initialData[field.id] = '';
    });
    formData = initialData;
  });

  function validateField(field: SecureField, value: any): string | null {
    // Required check
    if (field.required && (!value || value.toString().trim() === '')) {
      return `${field.label} is required`;
    }

    // Custom validations
    if (field.validations) {
      for (const validation of field.validations) {
        if (!validation.rule(value)) {
          return validation.message;
        }
      }
    }

    return null;
  }

  function validateForm(): boolean {
    let isValid = true;
    const newErrors: Record<string, string> = {};

    fields.forEach(field => {
      const error = validateField(field, formData[field.id]);
      if (error) {
        newErrors[field.id] = error;
        isValid = false;
      }
    });

    errors = newErrors;
    return isValid;
  }

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    isSubmitting = true;
    try {
      if (onSubmit) {
        await onSubmit({ ...formData });
      }
    } finally {
      isSubmitting = false;
    }
  }

  function toggleMasked(fieldId: string) {
    const field = fields.find(f => f.id === fieldId);
    if (field) {
      field.masked = !field.masked;
    }
  }

  function getSecurityColor(): string {
    switch(securityLevel) {
      case 'high': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  }

  function getSecurityLabel(): string {
    switch(securityLevel) {
      case 'high': return 'High Security';
      case 'medium': return 'Medium Security';
      case 'low': return 'Low Security';
      default: return 'Security Level';
    }
  }
</script>

<form class={`bg-white rounded-lg shadow border border-gray-200 overflow-hidden ${className}`} onsubmit={handleSubmit} {...restProps}>
  {#if title || description}
    <div class={`border-b px-6 py-5 ${headerClass}`}>
      <div class="flex items-center">
        <Shield class="h-6 w-6 text-gray-500 mr-2" />
        <div>
          <h3 class="text-lg font-medium text-gray-900">{title}</h3>
          {#if description}
            <p class="mt-1 text-sm text-gray-500">{description}</p>
          {/if}
        </div>
      </div>
      
      {#if showSecurityIndicator}
        <div class="mt-4">
          <span class={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getSecurityColor()}`}>
            <Shield class="h-4 w-4 mr-1" />
            {getSecurityLabel()}
          </span>
        </div>
      {/if}
    </div>
  {/if}

  <div class="p-6 space-y-6">
    {#each fields as field}
      <div class={`${fieldClass}`}>
        <label for={field.id} class="block text-sm font-medium text-gray-700 mb-1">
          {field.label}
          {#if field.required}
            <span class="text-red-500">*</span>
          {/if}
        </label>
        
        <div class="mt-1 relative">
          {#if field.type === 'password' || field.secureInput}
            <div class="relative">
              <input
                id={field.id}
                type={field.masked ? 'password' : 'text'}
                class={`block w-full px-3 py-2 border ${
                  errors[field.id] ? 'border-red-300' : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                  field.secureInput ? 'pr-10' : ''
                }`}
                placeholder={field.placeholder}
                bind:value={formData[field.id]}
                required={field.required}
              />
              
              {#if field.secureInput}
                <button
                  type="button"
                  class="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onclick={() => toggleMasked(field.id)}
                >
                  {#if field.masked}
                    <Eye class="h-5 w-5 text-gray-400 hover:text-gray-500" />
                  {:else}
                    <EyeOff class="h-5 w-5 text-gray-400 hover:text-gray-500" />
                  {/if}
                </button>
              {/if}
            </div>
          {:else}
            <input
              id={field.id}
              type={field.type}
              class={`block w-full px-3 py-2 border ${
                errors[field.id] ? 'border-red-300' : 'border-gray-300'
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              placeholder={field.placeholder}
              bind:value={formData[field.id]}
              required={field.required}
            />
          {/if}
          
          {#if field.hint}
            <p class="mt-2 text-sm text-gray-500">{field.hint}</p>
          {/if}
          
          {#if errors[field.id]}
            <div class="mt-1 flex items-start">
              <AlertCircle class="h-5 w-5 text-red-500 mt-0.5" />
              <p class="ml-2 text-sm text-red-600">{errors[field.id]}</p>
            </div>
          {/if}
        </div>
      </div>
    {/each}
  </div>

  <div class={`border-t px-6 py-4 ${footerClass}`}>
    <div class="flex items-center justify-between">
      <div class="flex items-center text-sm text-gray-500">
        <Lock class="h-4 w-4 mr-1" />
        <span>Your information is securely transmitted</span>
      </div>
      
      <button
        type="submit"
        class={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${
          isSubmitting 
            ? 'bg-blue-400' 
            : 'bg-blue-600 hover:bg-blue-700 focus:outline-none'
        } focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${submitClass}`}
        disabled={isSubmitting}
      >
        {#if isSubmitting}
          <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Processing...
        {:else}
          {submitLabel}
        {/if}
      </button>
    </div>
  </div>
</form>