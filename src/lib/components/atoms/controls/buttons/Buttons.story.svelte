<script lang="ts">
  import { Button, CloseButton, IconButton, SplitButton } from '$lib';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  let variant = 'primary';
  let size = 'md';
  let disabled = false;

  // Define controls for the playground
  const controls: ControlConfig[] = [
    { name: 'variant', type: 'select', options: ['primary', 'secondary', 'success', 'warning', 'danger'], defaultValue: 'primary' },
    { name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
    { name: 'disabled', type: 'boolean', defaultValue: false }
  ];

  function handleClick() {
    console.log('Button clicked!');
  }
  
  // Define close handler function
  function handleClose() {
    console.log('Close button clicked!');
  }
</script>

# Кнопки

## Button

<Story title="Button" {controls}>
  
  <div class="space-y-4">
    <Button 
      variant={variant} 
      size={size} 
      disabled={disabled}
      on:click={handleClick}
    >
      Пример кнопки
    </Button>
    
    <div class="space-x-4">
      <label>
        <input type="checkbox" bind:checked={disabled} /> Disabled
      </label>
    </div>
    
    <div class="space-x-4">
      <label>
        Size: 
        <select bind:value={size}>
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </select>
      </label>
      
      <label>
        Variant: 
        <select bind:value={variant}>
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="danger">Danger</option>
        </select>
      </label>
    </div>
  </div>
</Story>

## CloseButton

<Story title="CloseButton">
  
  <div class="space-y-4">
    <CloseButton 
      size={size}
      on:click={handleClose}
    />
    
    <div>
      <label>
        Size: 
        <select bind:value={size}>
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </select>
      </label>
    </div>
  </div>
</Story>

## IconButton

<Story title="IconButton" {controls}>
  
  <div class="space-y-4">
    <IconButton 
      variant={variant} 
      size={size} 
      disabled={disabled}
      on:click={handleClick}
      aria-label="Пример иконки"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    </IconButton>
    
    <div class="space-x-4">
      <label>
        <input type="checkbox" bind:checked={disabled} /> Disabled
      </label>
    </div>
    
    <div class="space-x-4">
      <label>
        Size: 
        <select bind:value={size}>
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </select>
      </label>
      
      <label>
        Variant: 
        <select bind:value={variant}>
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="danger">Danger</option>
        </select>
      </label>
    </div>
  </div>
</Story>

## SplitButton

<Story title="SplitButton" {controls}>
  
  <div class="space-y-4">
    <SplitButton 
      variant={variant} 
      size={size} 
      disabled={disabled}
      on:click={handleClick}
    >
      Split Button
    </SplitButton>
    
    <div class="space-x-4">
      <label>
        <input type="checkbox" bind:checked={disabled} /> Disabled
      </label>
    </div>
    
    <div class="space-x-4">
      <label>
        Size: 
        <select bind:value={size}>
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </select>
      </label>
      
      <label>
        Variant: 
        <select bind:value={variant}>
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="danger">Danger</option>
        </select>
      </label>
    </div>
  </div>
</Story>