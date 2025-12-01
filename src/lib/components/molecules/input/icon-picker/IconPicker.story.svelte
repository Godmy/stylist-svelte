<script lang="ts">
  import IconPicker from './IconPicker.svelte';
  import { Heart, Star, Mail, Settings, User, Search, Bell, Camera, File, Folder, Image, Music, Video, Home, Calendar, MessageCircle, Phone, Trash2, Edit3, Copy } from 'lucide-svelte';

  // Define mock icons array with component references
  type MockIconItem = {
    name: string;
    component: any;
    keywords?: string[];
  };

  let icons: MockIconItem[] = [
    { name: 'Heart', component: Heart, keywords: ['love', 'favorite', 'like'] },
    { name: 'Star', component: Star, keywords: ['rating', 'favorite', 'bookmark'] },
    { name: 'Mail', component: Mail, keywords: ['email', 'message', 'inbox'] },
    { name: 'Settings', component: Settings, keywords: ['gear', 'cog', 'preferences'] },
    { name: 'User', component: User, keywords: ['person', 'profile', 'account'] },
    { name: 'Search', component: Search, keywords: ['find', 'lookup', 'magnifying'] },
    { name: 'Bell', component: Bell, keywords: ['notification', 'alert', 'alarm'] },
    { name: 'Camera', component: Camera, keywords: ['photo', 'picture', 'image'] },
    { name: 'File', component: File, keywords: ['document', 'paper', 'page'] },
    { name: 'Folder', component: Folder, keywords: ['directory', 'organize', 'storage'] },
    { name: 'Image', component: Image, keywords: ['photo', 'gallery', 'picture'] },
    { name: 'Music', component: Music, keywords: ['audio', 'sound', 'note'] },
    { name: 'Video', component: Video, keywords: ['movie', 'film', 'recording'] },
    { name: 'Home', component: Home, keywords: ['house', 'main', 'dashboard'] },
    { name: 'Calendar', component: Calendar, keywords: ['date', 'schedule', 'time'] },
    { name: 'MessageCircle', component: MessageCircle, keywords: ['chat', 'comment', 'conversation'] },
    { name: 'Phone', component: Phone, keywords: ['call', 'contact', 'communication'] },
    { name: 'Trash2', component: Trash2, keywords: ['delete', 'remove', 'garbage'] },
    { name: 'Edit3', component: Edit3, keywords: ['pencil', 'modify', 'change'] },
    { name: 'Copy', component: Copy, keywords: ['duplicate', 'clone', 'replicate'] }
  ];

  let title: string = 'Select an Icon';
  let searchPlaceholder: string = 'Search icons...';
  let selectedIcon: string = '';
  let columns: number = 6;
  let showSearch: boolean = true;
  let showCategories: boolean = true;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">IconPicker Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive IconPicker</h2>
    <div class="max-w-xl mx-auto">
      <IconPicker 
        {icons}
        {title}
        {searchPlaceholder}
        {selectedIcon}
        {columns}
        {showSearch}
        {showCategories}
        onIconSelect={(icon) => {
          selectedIcon = icon.name;
          console.log('Icon selected:', icon.name);
        }}
      />
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="icon-title" class="block text-sm mb-1">Title:</label>
        <input
          id="icon-title"
          type="text"
          bind:value={title}
          class="border rounded p-1 w-32"
        />
      </div>

      <div>
        <label for="icon-search-placeholder" class="block text-sm mb-1">Search Placeholder:</label>
        <input
          id="icon-search-placeholder"
          type="text"
          bind:value={searchPlaceholder}
          class="border rounded p-1 w-32"
        />
      </div>

      <div>
        <label for="icon-columns" class="block text-sm mb-1">Columns:</label>
        <select
          id="icon-columns"
          bind:value={columns}
          class="border rounded p-1"
        >
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
      </div>

      <div class="flex items-end">
        <label for="icon-search" class="flex items-center gap-1">
          <input id="icon-search" type="checkbox" bind:checked={showSearch} />
          Show Search
        </label>
      </div>

      <div class="flex items-end">
        <label for="icon-categories" class="flex items-center gap-1">
          <input id="icon-categories" type="checkbox" bind:checked={showCategories} />
          Show Categories
        </label>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">IconPicker Variations</h2>
    <div class="space-y-4">
      <div>
        <h3 class="text-sm font-medium mb-2">With Fewer Columns</h3>
        <div class="max-w-md mx-auto">
          <IconPicker 
            {icons}
            title="4-Column Layout"
            columns={4}
            showSearch={true}
            onIconSelect={(icon) => console.log('Selected 4-column:', icon.name)}
          />
        </div>
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">Without Search</h3>
        <div class="max-w-lg mx-auto">
          <IconPicker 
            {icons}
            title="No Search Bar"
            showSearch={false}
            columns={5}
            onIconSelect={(icon) => console.log('Selected no-search:', icon.name)}
          />
        </div>
      </div>
    </div>
  </div>
</div>