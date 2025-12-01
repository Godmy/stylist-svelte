<script lang="ts">
  let {
    label = '',
    checked = false,
    disabled = false,
    onChange = (value: boolean) => {},
    class: className = ''
  } = $props<{
    label?: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (value: boolean) => void;
    class?: string;
  }>();

  let localChecked = $state(checked);

  $effect(() => {
    localChecked = checked;
  });

  const handleChange = () => {
    if (!disabled) {
      localChecked = !localChecked;
      onChange(localChecked);
    }
  };
</script>

<div class={`flex items-center ${className}`}>
  <label class="flex items-center cursor-pointer">
    <input
      type="checkbox"
      class="sr-only"
      bind:checked={localChecked}
      disabled={disabled}
      onchange={handleChange}
    />
    <div class={`w-6 h-6 flex items-center justify-center rounded border ${
      localChecked 
        ? 'bg-blue-500 border-blue-500' 
        : 'bg-white border-gray-300'
    } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
      {#if localChecked}
        <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
        </svg>
      {/if}
    </div>
    <span class={`ml-2 ${disabled ? 'text-gray-400' : 'text-gray-700'}`}>{label}</span>
  </label>
</div>