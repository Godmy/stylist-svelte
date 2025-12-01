<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { User, Mail, Phone, MapPin, Calendar, Save, AlertCircle } from 'lucide-svelte';
  import { AccountSettingsFormStyleManager } from './styles';
  import { AccountSettingsFormValidator } from './ValidationService';
  import type { IAccountSettingsFormProps, AccountSettingsFormData, IAccountSettingsFormErrors } from './types';
  import { dateToInputString, inputStringToDate } from './date-formatter'; // Import new functions

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
  }: IAccountSettingsFormProps & HTMLAttributes<HTMLDivElement> = $props();

  let formData = $state<AccountSettingsFormData>({ ...initialData });
  let isSaving = $state(false);
  let errors = $state<IAccountSettingsFormErrors>({});

  // Reactive variable for date input display
  let displayDateOfBirth = $state(dateToInputString(formData.dateOfBirth));

  // No need for $effect to keep displayDateOfBirth in sync with formData.dateOfBirth
  // because the onchange handler directly updates formData.dateOfBirth
  // and displayDateOfBirth is updated from the new formData.dateOfBirth
  // or initialised from it.

  async function handleSubmit(event: Event) {
    event.preventDefault();
    // Use the validation service to validate the form data
    errors = AccountSettingsFormValidator.validate(formData);

    if (Object.keys(errors).length > 0) return;

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

<div class={AccountSettingsFormStyleManager.getContainerClass(className)} {...restProps}>
  <div class={AccountSettingsFormStyleManager.getHeaderClass(headerClass)}>
    <div class="flex items-center">
      <User class={AccountSettingsFormStyleManager.getAvatarIconClass()} />
      <h3 class={AccountSettingsFormStyleManager.getTitleClass()}>Account Settings</h3>
    </div>
    <p class={AccountSettingsFormStyleManager.getHeaderDescriptionClass()}>Manage your account information and preferences.</p>
  </div>

  <div class={AccountSettingsFormStyleManager.getFormClass(formClass)}>
    <form onsubmit={handleSubmit}>
      <div class={AccountSettingsFormStyleManager.getFormGridLayoutClass()}>
        {#if showAvatar}
          <div class="sm:col-span-6">
            <h4 class="text-sm font-medium text-[--color-text-primary] mb-2">Profile Photo</h4>
            <div class={AccountSettingsFormStyleManager.getAvatarContainerClass()}>
              <div class={AccountSettingsFormStyleManager.getAvatarPlaceholderClass()}>
                {#if formData.avatar}
                  <img src={formData.avatar} alt="Profile" class={AccountSettingsFormStyleManager.getAvatarImageClass()} />
                {:else}
                  <User class={AccountSettingsFormStyleManager.getAvatarIconClass()} />
                {/if}
              </div>
              <div class="ml-4">
                <button
                  type="button"
                  class={AccountSettingsFormStyleManager.getChangeButtonClass()}
                >
                  Change
                </button>
                <p class={AccountSettingsFormStyleManager.getAvatarDescriptionClass()}>JPG, GIF or PNG. 2MB max.</p>
              </div>
            </div>
          </div>
        {/if}

        <div class="sm:col-span-3">
          <label for="firstName" class={AccountSettingsFormStyleManager.getLabelClass()}>First name</label>
          <div class={AccountSettingsFormStyleManager.getInputContainerWithIconClass(!!errors.firstName)}>
            <input
              type="text"
              id="firstName"
              class={AccountSettingsFormStyleManager.getInputClass(!!errors.firstName)}
              bind:value={formData.firstName}
            />
            {#if errors.firstName}
              <div class={AccountSettingsFormStyleManager.getErrorIndicatorContainerClass()}>
                <AlertCircle class={AccountSettingsFormStyleManager.getErrorIconClass()} />
              </div>
            {/if}
          </div>
          {#if errors.firstName}
            <p class={AccountSettingsFormStyleManager.getErrorMessageClass()}>{errors.firstName}</p>
          {/if}
        </div>

        <div class="sm:col-span-3">
          <label for="lastName" class={AccountSettingsFormStyleManager.getLabelClass()}>Last name</label>
          <div class={AccountSettingsFormStyleManager.getInputContainerWithIconClass(!!errors.lastName)}>
            <input
              type="text"
              id="lastName"
              class={AccountSettingsFormStyleManager.getInputClass(!!errors.lastName)}
              bind:value={formData.lastName}
            />
            {#if errors.lastName}
              <div class={AccountSettingsFormStyleManager.getErrorIndicatorContainerClass()}>
                <AlertCircle class={AccountSettingsFormStyleManager.getErrorIconClass()} />
              </div>
            {/if}
          </div>
          {#if errors.lastName}
            <p class={AccountSettingsFormStyleManager.getErrorMessageClass()}>{errors.lastName}</p>
          {/if}
        </div>

        <div class="sm:col-span-4">
          <label for="email" class={AccountSettingsFormStyleManager.getLabelClass()}>Email address</label>
          <div class={AccountSettingsFormStyleManager.getInputContainerWithIconClass(!!errors.email)}>
            <div class={AccountSettingsFormStyleManager.getInputIconContainerClass()}>
              <Mail class="h-5 w-5 text-[--color-text-tertiary]" />
            </div>
            <input
              type="email"
              id="email"
              class={AccountSettingsFormStyleManager.getInputWithIconClass(!!errors.email)}
              bind:value={formData.email}
            />
            {#if errors.email}
              <div class={AccountSettingsFormStyleManager.getErrorIndicatorContainerClass()}>
                <AlertCircle class={AccountSettingsFormStyleManager.getErrorIconClass()} />
              </div>
            {/if}
          </div>
          {#if errors.email}
            <p class={AccountSettingsFormStyleManager.getErrorMessageClass()}>{errors.email}</p>
          {/if}
        </div>

        <div class="sm:col-span-3">
          <label for="phone" class={AccountSettingsFormStyleManager.getLabelClass()}>Phone number</label>
          <div class={AccountSettingsFormStyleManager.getInputContainerWithIconClass(!!errors.phone)}>
            <div class={AccountSettingsFormStyleManager.getInputIconContainerClass()}>
              <Phone class="h-5 w-5 text-[--color-text-tertiary]" />
            </div>
            <input
              type="tel"
              id="phone"
              class={AccountSettingsFormStyleManager.getInputWithIconClass(!!errors.phone)}
              bind:value={formData.phone}
            />
            {#if errors.phone}
              <div class={AccountSettingsFormStyleManager.getErrorIndicatorContainerClass()}>
                <AlertCircle class={AccountSettingsFormStyleManager.getErrorIconClass()} />
              </div>
            {/if}
          </div>
          {#if errors.phone}
            <p class={AccountSettingsFormStyleManager.getErrorMessageClass()}>{errors.phone}</p>
          {/if}
        </div>

        <div class="sm:col-span-3">
          <label for="location" class={AccountSettingsFormStyleManager.getLabelClass()}>Location</label>
          <div class={AccountSettingsFormStyleManager.getInputContainerWithIconClass()}>
            <div class={AccountSettingsFormStyleManager.getInputIconContainerClass()}>
              <MapPin class="h-5 w-5 text-[--color-text-tertiary]" />
            </div>
            <input
              type="text"
              id="location"
              class={AccountSettingsFormStyleManager.getInputWithIconClass()}
              bind:value={formData.location}
            />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="dateOfBirth" class={AccountSettingsFormStyleManager.getLabelClass()}>Date of birth</label>
          <div class={AccountSettingsFormStyleManager.getInputContainerWithIconClass()}>
            <div class={AccountSettingsFormStyleManager.getInputIconContainerClass()}>
              <Calendar class="h-5 w-5 text-[--color-text-tertiary]" />
            </div>
            <input
              type="date"
              id="dateOfBirth"
              class={AccountSettingsFormStyleManager.getInputWithIconClass()}
              value={displayDateOfBirth}
              onchange={(e) => {
                const dateString = (e.target as HTMLInputElement).value;
                formData.dateOfBirth = inputStringToDate(dateString);
                displayDateOfBirth = dateString; // Update displayDateOfBirth directly
              }}
            />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="website" class={AccountSettingsFormStyleManager.getLabelClass()}>Website</label>
          <div class={AccountSettingsFormStyleManager.getInputContainerWithIconClass(!!errors.website)}>
            <input
              type="text"
              id="website"
              class={AccountSettingsFormStyleManager.getInputClass(!!errors.website)}
              placeholder="https://"
              bind:value={formData.website}
            />
            {#if errors.website}
              <div class={AccountSettingsFormStyleManager.getErrorIndicatorContainerClass()}>
                <AlertCircle class={AccountSettingsFormStyleManager.getErrorIconClass()} />
              </div>
            {/if}
          </div>
          {#if errors.website}
            <p class={AccountSettingsFormStyleManager.getErrorMessageClass()}>{errors.website}</p>
          {/if}
        </div>

        <div class="sm:col-span-6">
          <label for="bio" class={AccountSettingsFormStyleManager.getLabelClass()}>Bio</label>
          <div class="mt-1">
            <textarea
              id="bio"
              rows={4}
              class={AccountSettingsFormStyleManager.getTextareaClass()}
              bind:value={formData.bio}
              placeholder="Tell us about yourself"
            ></textarea>
          </div>
          <p class="mt-1 text-sm text-[--color-text-secondary]">Brief description for your profile.</p>
        </div>
      </div>
    </form>
  </div>

  <div class={AccountSettingsFormStyleManager.getFooterClass(footerClass)}>
    <div class={AccountSettingsFormStyleManager.getButtonsContainerClass()}>
      <button
        type="button"
        class={AccountSettingsFormStyleManager.getSecondaryButtonClass()}
        onclick={handleCancel}
      >
        Cancel
      </button>
      <button
        type="button"
        class={AccountSettingsFormStyleManager.getPrimaryButtonClass(isSaving)}
        onclick={handleSubmit}
        disabled={isSaving}
      >
        {#if isSaving}
          <svg class={AccountSettingsFormStyleManager.getLoadingSpinnerClass()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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