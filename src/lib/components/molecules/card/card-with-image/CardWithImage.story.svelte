<script lang="ts">
  import CardWithImage from './CardWithImage.svelte';

  let title: string = 'Sample Card Title';
  let subtitle: string = 'Sample Subtitle';
  let description: string = 'This is a sample description for the card with image component.';
  let image: string = 'https://placehold.co/400x200';
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">CardWithImage Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive CardWithImage</h2>
    <CardWithImage 
      {title}
      {subtitle}
      {description}
      {image}
    />

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="card-title" class="block text-sm mb-1">Title:</label>
        <input
          id="card-title"
          type="text"
          bind:value={title}
          class="border rounded p-1 w-40"
        />
      </div>

      <div>
        <label for="card-subtitle" class="block text-sm mb-1">Subtitle:</label>
        <input
          id="card-subtitle"
          type="text"
          bind:value={subtitle}
          class="border rounded p-1 w-40"
        />
      </div>

      <div>
        <label for="card-description" class="block text-sm mb-1">Description:</label>
        <input
          id="card-description"
          type="text"
          bind:value={description}
          class="border rounded p-1 w-60"
        />
      </div>

      <div>
        <label for="card-image" class="block text-sm mb-1">Image URL:</label>
        <input
          id="card-image"
          type="text"
          bind:value={image}
          class="border rounded p-1 w-60"
        />
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Card Variations</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h3 class="text-sm font-medium mb-2">With Title Only</h3>
        <CardWithImage 
          title="Title Only Card"
          image="https://placehold.co/400x200"
        />
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">With Subtitle Only</h3>
        <CardWithImage 
          subtitle="Subtitle Only Card"
          image="https://placehold.co/400x200"
        />
      </div>
    </div>
  </div>
</div>