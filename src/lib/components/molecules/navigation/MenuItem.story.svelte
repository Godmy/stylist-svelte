<script lang="ts">
  import MenuItem from './MenuItem.svelte';
  import Icon from '../../atoms/media/Icon.svelte';
</script>

<div class="p-4">
  <h1>MenuItem Component</h1>
  
  <div class="my-4 p-4 border rounded">
    <h2>Basic Menu Items</h2>
    <div class="flex flex-col gap-2 max-w-xs">
      <MenuItem href="#">Dashboard</MenuItem>
      <MenuItem href="#" active>Projects</MenuItem>
      <MenuItem href="#" disabled>Settings</MenuItem>
      <MenuItem href="#" external>Documentation</MenuItem>
    </div>
  </div>
  
  <div class="my-4 p-4 border rounded">
    <h2>Menu Items with Icons</h2>
    <div class="flex flex-col gap-2 max-w-xs">
      <MenuItem href="#" icon="home">Home</MenuItem>
      <MenuItem href="#" icon="user">Profile</MenuItem>
      <MenuItem href="#" icon="settings" active>Settings</MenuItem>
      <MenuItem href="#" icon="help-circle">Help Center</MenuItem>
    </div>
  </div>
  
  <div class="my-4 p-4 border rounded">
    <h2>Button-style Menu Items</h2>
    <div class="flex flex-col gap-2 max-w-xs">
      <MenuItem icon="log-out" onClick={() => alert('Logout clicked')}>Logout</MenuItem>
      <MenuItem disabled icon="user">Disabled Item</MenuItem>
    </div>
  </div>
</div>