<script lang="ts">
  import FormFooter from './FormFooter.svelte';

  let primaryButtonLabel: string = 'Submit';
  let secondaryButtonLabel: string = 'Cancel';
  let primaryButtonDisabled: boolean = false;
  let secondaryButtonDisabled: boolean = false;
  let showSecondaryButton: boolean = true;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">FormFooter Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive FormFooter</h2>
    <div class="max-w-md mx-auto">
      <div class="border rounded p-6">
        <div class="h-32 flex items-center justify-center">
          <p class="text-gray-500">Form content would go here</p>
        </div>
        <FormFooter 
          {primaryButtonLabel}
          {secondaryButtonLabel}
          {primaryButtonDisabled}
          {secondaryButtonDisabled}
          {showSecondaryButton}
          onPrimaryClick={() => {
            console.log('Primary button clicked');
          }}
          onSecondaryClick={() => {
            console.log('Secondary button clicked');
          }}
        />
      </div>
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="primary-label" class="block text-sm mb-1">Primary Label:</label>
        <input
          id="primary-label"
          type="text"
          bind:value={primaryButtonLabel}
          class="border rounded p-1 w-32"
        />
      </div>

      <div>
        <label for="secondary-label" class="block text-sm mb-1">Secondary Label:</label>
        <input
          id="secondary-label"
          type="text"
          bind:value={secondaryButtonLabel}
          class="border rounded p-1 w-32"
        />
      </div>

      <div class="flex items-end">
        <label for="primary-disabled" class="flex items-center gap-1">
          <input id="primary-disabled" type="checkbox" bind:checked={primaryButtonDisabled} />
          Primary Disabled
        </label>
      </div>

      <div class="flex items-end">
        <label for="secondary-disabled" class="flex items-center gap-1">
          <input id="secondary-disabled" type="checkbox" bind:checked={secondaryButtonDisabled} />
          Secondary Disabled
        </label>
      </div>

      <div class="flex items-end">
        <label for="show-secondary" class="flex items-center gap-1">
          <input id="show-secondary" type="checkbox" bind:checked={showSecondaryButton} />
          Show Secondary
        </label>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">FormFooter Variations</h2>
    <div class="space-y-4">
      <div>
        <h3 class="text-sm font-medium mb-2">Save & Cancel</h3>
        <div class="max-w-md mx-auto">
          <div class="border rounded p-6">
            <div class="h-32 flex items-center justify-center">
              <p class="text-gray-500">Form content would go here</p>
            </div>
            <FormFooter 
              primaryButtonLabel="Save"
              secondaryButtonLabel="Cancel"
            />
          </div>
        </div>
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">Primary Only</h3>
        <div class="max-w-md mx-auto">
          <div class="border rounded p-6">
            <div class="h-32 flex items-center justify-center">
              <p class="text-gray-500">Form content would go here</p>
            </div>
            <FormFooter 
              primaryButtonLabel="Submit"
              showSecondaryButton={false}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>