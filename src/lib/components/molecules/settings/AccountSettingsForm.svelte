<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { User, Mail, Phone, MapPin, Calendar, Save, AlertCircle } from 'lucide-svelte';

  type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    bio: string;
    dateOfBirth?: Date;
    location: string;
    website: string;
    avatar?: string;
  };

  type Props = {
    initialData?: FormData;
    onSave?: (data: FormData) => void;
    onCancel?: () => void;
    showAvatar?: boolean;
    class?: string;
    headerClass?: string;
    formClass?: string;
    footerClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    initialData = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      bio: '',
      location: '',
      website: ''
    },
    onSave,
    onCancel,
    showAvatar = true,
    class: className = '',
    headerClass = '',
    formClass = '',
    footerClass = '',
    ...restProps
  }: Props = $props();

  // Определяем переменные, которые не являются пропсами
  let unused = { ...restProps }; // Используем restProps, чтобы избежать предупреждения о неиспользуемых переменных

  let formData = $state<FormData>({ ...initialData });
  let isSaving = $state(false);
  let errors = $state<Record<string, string>>({});

  // Reactive variable for date input display
  let displayDateOfBirth = $state(
    formData.dateOfBirth ? new Date(formData.dateOfBirth).toISOString().split('T')[0] : ''
  );

  // Keep displayDateOfBirth in sync with formData.dateOfBirth
  $effect(() => {
    displayDateOfBirth = formData.dateOfBirth ? new Date(formData.dateOfBirth).toISOString().split('T')[0] : '';
  });

  function validateForm() {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (formData.phone && !/^\+?[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    
    if (formData.website && !/^https?:\/\/.*/.test(formData.website)) {
      newErrors.website = 'Website must start with http:// or https://';
    }
    
    errors = newErrors;
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(event: Event) {
    event.preventDefault(); // Add this line
    if (!validateForm()) return;
    
    isSaving = true;
    
    try {
      if (onSave) {
        await onSave(formData);
      }
    } finally {
      isSaving = false;
    }
  }

  function handleCancel() {
    if (onCancel) {
      onCancel();
    }
  }
</script>

<div class={`bg-white rounded-lg shadow border border-gray-200 overflow-hidden ${className}`} {...restProps}>
  <div class={`border-b px-6 py-5 ${headerClass}`}>
    <div class="flex items-center">
      <User class="h-6 w-6 text-gray-500 mr-2" />
      <h3 class="text-lg font-medium text-gray-900">Account Settings</h3>
    </div>
    <p class="mt-1 text-sm text-gray-500">Manage your account information and preferences.</p>
  </div>

  <div class={`p-6 ${formClass}`}>
    <form onsubmit={handleSubmit}>
      <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        {#if showAvatar}
          <div class="sm:col-span-6">
            <h4 class="text-sm font-medium text-gray-900 mb-2">Profile Photo</h4>
            <div class="flex items-center">
              <div class="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
                {#if formData.avatar}
                  <img src={formData.avatar} alt="Profile" class="h-16 w-16 rounded-full" />
                {:else}
                  <User class="h-8 w-8 text-gray-500" />
                {/if}
              </div>
              <div class="ml-4">
                <button
                  type="button"
                  class="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                >
                  Change
                </button>
                <p class="mt-1 text-xs text-gray-500">JPG, GIF or PNG. 2MB max.</p>
              </div>
            </div>
          </div>
        {/if}

        <div class="sm:col-span-3">
          <label for="firstName" class="block text-sm font-medium text-gray-700">First name</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              id="firstName"
              class={`block w-full px-3 py-2 border ${
                errors.firstName ? 'border-red-300' : 'border-gray-300'
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              bind:value={formData.firstName}
            />
            {#if errors.firstName}
              <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <AlertCircle class="h-5 w-5 text-red-500" />
              </div>
            {/if}
          </div>
          {#if errors.firstName}
            <p class="mt-1 text-sm text-red-600">{errors.firstName}</p>
          {/if}
        </div>

        <div class="sm:col-span-3">
          <label for="lastName" class="block text-sm font-medium text-gray-700">Last name</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              id="lastName"
              class={`block w-full px-3 py-2 border ${
                errors.lastName ? 'border-red-300' : 'border-gray-300'
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              bind:value={formData.lastName}
            />
            {#if errors.lastName}
              <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <AlertCircle class="h-5 w-5 text-red-500" />
              </div>
            {/if}
          </div>
          {#if errors.lastName}
            <p class="mt-1 text-sm text-red-600">{errors.lastName}</p>
          {/if}
        </div>

        <div class="sm:col-span-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail class="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              id="email"
              class={`block w-full pl-10 pr-12 py-2 border ${
                errors.email ? 'border-red-300' : 'border-gray-300'
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              bind:value={formData.email}
            />
            {#if errors.email}
              <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <AlertCircle class="h-5 w-5 text-red-500" />
              </div>
            {/if}
          </div>
          {#if errors.email}
            <p class="mt-1 text-sm text-red-600">{errors.email}</p>
          {/if}
        </div>

        <div class="sm:col-span-3">
          <label for="phone" class="block text-sm font-medium text-gray-700">Phone number</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone class="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="tel"
              id="phone"
              class={`block w-full pl-10 pr-3 py-2 border ${
                errors.phone ? 'border-red-300' : 'border-gray-300'
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              bind:value={formData.phone}
            />
            {#if errors.phone}
              <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <AlertCircle class="h-5 w-5 text-red-500" />
              </div>
            {/if}
          </div>
          {#if errors.phone}
            <p class="mt-1 text-sm text-red-600">{errors.phone}</p>
          {/if}
        </div>

        <div class="sm:col-span-3">
          <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin class="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="location"
              class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              bind:value={formData.location}
            />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="dateOfBirth" class="block text-sm font-medium text-gray-700">Date of birth</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar class="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="date"
              id="dateOfBirth"
              class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={displayDateOfBirth}
              onchange={(e) => {
                const date = (e.target as HTMLInputElement).value;
                formData.dateOfBirth = date ? new Date(date) : undefined;
                displayDateOfBirth = date; // Update displayDateOfBirth as well
              }}
            />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="website" class="block text-sm font-medium text-gray-700">Website</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              id="website"
              class={`block w-full px-3 py-2 border ${
                errors.website ? 'border-red-300' : 'border-gray-300'
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              placeholder="https://"
              bind:value={formData.website}
            />
            {#if errors.website}
              <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <AlertCircle class="h-5 w-5 text-red-500" />
              </div>
            {/if}
          </div>
          {#if errors.website}
            <p class="mt-1 text-sm text-red-600">{errors.website}</p>
          {/if}
        </div>

        <div class="sm:col-span-6">
          <label for="bio" class="block text-sm font-medium text-gray-700">Bio</label>
          <div class="mt-1">
            <textarea
              id="bio"
              rows={4}
              class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md p-3"
              bind:value={formData.bio}
              placeholder="Tell us about yourself"
            ></textarea>
          </div>
          <p class="mt-1 text-sm text-gray-500">Brief description for your profile.</p>
        </div>
      </div>
    </form>
  </div>

  <div class={`border-t px-6 py-4 ${footerClass}`}>
    <div class="flex justify-end space-x-3">
      <button
        type="button"
        class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        onclick={handleCancel}
      >
        Cancel
      </button>
      <button
        type="button"
        class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none disabled:opacity-50"
        onclick={handleSubmit}
        disabled={isSaving}
      >
        {#if isSaving}
          <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Saving...
        {:else}
          <Save class="h-4 w-4 mr-1" />
          Save
        {/if}
      </button>
    </div>
  </div>
</div>