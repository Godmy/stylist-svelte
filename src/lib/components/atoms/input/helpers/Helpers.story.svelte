<script lang="ts">
  import { CharacterCount, FormErrorMessage, FormHelperText, PinInputDigit } from '$lib';
  import type { Meta } from '@storybook/svelte';

  const meta: Meta = {
    title: 'Atoms/Input/Helpers',
    tags: ['autodocs'],
    argTypes: {}
  };

  export default meta;
</script>

# Input Helpers

## CharacterCount

<ComponentStory>
  <script>
    let current = 25;
    let max = 100;
  </script>
  
  <div class="space-y-4">
    <CharacterCount {current} {max} />
    
    <div class="space-y-4">
      <div>
        <label>Current: <input type="number" bind:value={current} min="0" max={max} /></label>
      </div>
      <div>
        <label>Max: <input type="number" bind:value={max} min={current} /></label>
      </div>
    </div>
  </div>
</ComponentStory>

## FormErrorMessage

<ComponentStory>
  <script>
    let message = 'Пожалуйста, введите корректный email';
  </script>
  
  <div class="space-y-4">
    <FormErrorMessage>{message}</FormErrorMessage>
    
    <div>
      <label>Message: <input type="text" bind:value={message} /></label>
    </div>
  </div>
</ComponentStory>

## FormHelperText

<ComponentStory>
  <script>
    let text = 'Пароль должен содержать не менее 8 символов';
  </script>
  
  <div class="space-y-4">
    <FormHelperText>{text}</FormHelperText>
    
    <div>
      <label>Text: <input type="text" bind:value={text} /></label>
    </div>
  </div>
</ComponentStory>

## PinInputDigit

<ComponentStory>
  <script>
    let value = '5';
    let isActive = false;
    let hasError = false;
  </script>
  
  <div class="space-y-6">
    <div class="flex space-x-2">
      <PinInputDigit {value} {isActive} {hasError} />
      <PinInputDigit value="" {isActive} {hasError} />
      <PinInputDigit value="" {isActive} {hasError} />
      <PinInputDigit value="" {isActive} {hasError} />
    </div>
    
    <div class="space-y-4">
      <div>
        <label>
          <input type="checkbox" bind:checked={isActive} /> Active
        </label>
        <label class="ml-4">
          <input type="checkbox" bind:checked={hasError} /> Has Error
        </label>
      </div>
      <div>
        <label>Value: <input type="text" bind:value={value} maxlength="1" /></label>
      </div>
    </div>
  </div>
</ComponentStory>