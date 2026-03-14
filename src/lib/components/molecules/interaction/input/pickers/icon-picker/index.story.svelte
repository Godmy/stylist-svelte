<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import IconPicker from './index.svelte';
  import { Icon as BaseIcon } from '$stylist/components/atoms';
const Heart = 'heart';
const Star = 'star';
const Mail = 'mail';
const Settings = 'settings';
const User = 'user';
const Search = 'search';
const Bell = 'bell';
const Camera = 'camera';
const File = 'file';
const Folder = 'folder';
const Image = 'image';
const Music = 'music';
const Video = 'video';
const Home = 'home';
const Calendar = 'calendar';
const MessageCircle = 'message-circle';
const Phone = 'phone';
const Trash2 = 'trash-2';
const Edit3 = 'edit-3';
const Copy = 'copy';

  import type { ControlType } from '$stylist/design-system/defaults/interaction/controls';

  const controls = [
    {
      name: 'title',
      type: 'text' as ControlType,
      defaultValue: 'Select an Icon',
      description: 'Title for the icon picker'
    },
    {
      name: 'searchPlaceholder',
      type: 'text' as ControlType,
      defaultValue: 'Search icons...',
      description: 'Placeholder for the search input'
    },
    {
      name: 'columns',
      type: 'number' as ControlType,
      defaultValue: 6,
      description: 'Number of columns in the grid'
    },
    {
      name: 'showSearch',
      type: 'boolean' as ControlType,
      defaultValue: true,
      description: 'Whether to show the search input'
    },
    {
      name: 'showCategories',
      type: 'boolean' as ControlType,
      defaultValue: true,
      description: 'Whether to show categories'
    }
  ];

  type MockIconItem = {
    name: string;
    component: any;
    keywords?: string[];
  };

  const icons: MockIconItem[] = [
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

  let selectedIcon: string = '';

  function handleIconSelect(icon: MockIconItem) {
    selectedIcon = icon.name;
    console.log('Icon selected:', icon.name);
  }
</script>

<Story
  {controls}
  title="IconPicker Component"
  description="Interactive icon picker with searchable icon library"
 
>
  {#snippet children(controlValues: any)}
  <div class="p-4">
    <div class="max-w-xl mx-auto">
      <IconPicker
        {icons}
        title={controlValues.title}
        searchPlaceholder={controlValues.searchPlaceholder}
        selectedIcon={selectedIcon}
        columns={controlValues.columns}
        showSearch={controlValues.showSearch}
        showCategories={controlValues.showCategories}
        onIconSelect={handleIconSelect}
      />
    </div>
  </div>

  {/snippet}
</Story>


