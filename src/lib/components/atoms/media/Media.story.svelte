<script lang="ts">
  import { CountryFlag, Favicon, IconWrapper, Image } from '$lib';
  import type { Meta } from '@storybook/svelte';

  const meta: Meta = {
    title: 'Atoms/Media',
    tags: ['autodocs'],
    argTypes: {
      countryCode: { control: { type: 'text' } },
      faviconUrl: { control: { type: 'text' } },
      imageUrl: { control: { type: 'text' } }
    }
  };

  export default meta;
</script>

# Media

## CountryFlag

<ComponentStory>
  <script>
    let countryCode = 'US';
  </script>
  
  <div class="space-y-4">
    <CountryFlag {countryCode} />
    
    <div>
      <label>Country Code (2-letter ISO): <input type="text" bind:value={countryCode} maxlength="2" /></label>
    </div>
    
    <div class="grid grid-cols-5 gap-4">
      {#each ['US', 'GB', 'DE', 'FR', 'JP', 'CN', 'RU', 'IN', 'BR', 'CA'] as code}
        <div class="flex flex-col items-center">
          <CountryFlag countryCode={code} />
          <span class="text-xs mt-1">{code}</span>
        </div>
      {/each}
    </div>
  </div>
</ComponentStory>

## Favicon

<ComponentStory>
  <script>
    let faviconUrl = 'https://www.google.com/favicon.ico';
  </script>
  
  <div class="space-y-4">
    <Favicon {faviconUrl} />
    
    <div>
      <label>Favicon URL: <input type="text" bind:value={faviconUrl} /></label>
    </div>
  </div>
</ComponentStory>

## IconWrapper

<ComponentStory>
  <script>
    let size = 'md';
    let shape: 'circle' | 'square' | 'rounded' = 'circle';
    let color = 'blue';
  </script>
  
  <div class="space-y-4">
    <IconWrapper {size} {shape} {color}>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    </IconWrapper>
    
    <div class="space-y-4">
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
          Shape: 
          <select bind:value={shape}>
            <option value="circle">Circle</option>
            <option value="square">Square</option>
            <option value="rounded">Rounded</option>
          </select>
        </label>
      </div>
      
      <div>
        <label>Color: <input type="text" bind:value={color} /></label>
      </div>
    </div>
  </div>
</ComponentStory>

## Image

<ComponentStory>
  <script>
    let imageUrl = 'https://placehold.co/600x400';
    let altText = 'Placeholder image';
    let width = 300;
    let height = 200;
  </script>
  
  <div class="space-y-4">
    <Image src={imageUrl} alt={altText} {width} {height} />
    
    <div class="space-y-4">
      <div>
        <label>Image URL: <input type="text" bind:value={imageUrl} /></label>
      </div>
      
      <div>
        <label>Alt text: <input type="text" bind:value={altText} /></label>
      </div>
      
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label>Width: <input type="number" bind:value={width} /></label>
        </div>
        <div>
          <label>Height: <input type="number" bind:value={height} /></label>
        </div>
      </div>
    </div>
  </div>
</ComponentStory>