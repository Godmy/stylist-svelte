<script lang="ts">
  import FormHeader from './FormHeader.svelte';

  let title: string = 'Personal Information';
  let subtitle: string = 'Step 1 of 3';
  let description: string = 'Please provide your personal details. This information will be used to personalize your experience.';
  let backButtonLabel: string = 'Back';
  let showBackButton: boolean = true;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">FormHeader Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive FormHeader</h2>
    <div class="max-w-2xl mx-auto">
      <div class="border rounded">
        <FormHeader 
          {title}
          {subtitle}
          {description}
          {backButtonLabel}
          backAction={showBackButton ? () => console.log('Back button clicked') : undefined}
        />
        <div class="p-6">
          <div class="h-32 flex items-center justify-center">
            <p class="text-gray-500">Form content would go here</p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="header-title" class="block text-sm mb-1">Title:</label>
        <input
          id="header-title"
          type="text"
          bind:value={title}
          class="border rounded p-1 w-40"
        />
      </div>

      <div>
        <label for="header-subtitle" class="block text-sm mb-1">Subtitle:</label>
        <input
          id="header-subtitle"
          type="text"
          bind:value={subtitle}
          class="border rounded p-1 w-32"
        />
      </div>

      <div>
        <label for="header-back-label" class="block text-sm mb-1">Back Label:</label>
        <input
          id="header-back-label"
          type="text"
          bind:value={backButtonLabel}
          class="border rounded p-1 w-24"
        />
      </div>

      <div class="flex items-end">
        <label for="show-back-button" class="flex items-center gap-1">
          <input id="show-back-button" type="checkbox" bind:checked={showBackButton} />
          Show Back Button
        </label>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">FormHeader Variations</h2>
    <div class="space-y-4">
      <div>
        <h3 class="text-sm font-medium mb-2">Without Back Button</h3>
        <div class="max-w-2xl mx-auto">
          <div class="border rounded">
            <FormHeader 
              title="Profile Settings"
              description="Update your profile information and preferences."
            />
            <div class="p-6">
              <div class="h-32 flex items-center justify-center">
                <p class="text-gray-500">Form content would go here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">Without Subtitle</h3>
        <div class="max-w-2xl mx-auto">
          <div class="border rounded">
            <FormHeader 
              title="Security Settings"
              description="Manage your account security options."
              backAction={() => console.log('Security back clicked')}
            />
            <div class="p-6">
              <div class="h-32 flex items-center justify-center">
                <p class="text-gray-500">Form content would go here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>