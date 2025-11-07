<script lang="ts">
  import BurgerMenu from './BurgerMenu.svelte';
  import Button from '../../atoms/controls/Button.svelte';
  
  let open = $state(false);
  
  const toggleMenu = () => {
    open = !open;
  };
</script>

<div class="p-4">
  <h1>BurgerMenu Component</h1>
  
  <div class="my-4 p-4 border rounded">
    <h2>Interactive Example</h2>
    <div class="flex items-center gap-4">
      <BurgerMenu {open} onClick={toggleMenu} />
      <Button onclick={toggleMenu}>
        {open ? 'Close' : 'Open'} Menu
      </Button>
      <p>State: {open ? 'Open' : 'Closed'}</p>
    </div>
  </div>
  
  <div class="my-4 p-4 border rounded">
    <h2>Size Variants</h2>
    <div class="flex items-center gap-4">
      <BurgerMenu size="sm" />
      <BurgerMenu size="md" />
      <BurgerMenu size="lg" />
    </div>
  </div>
  
  <div class="my-4 p-4 border rounded">
    <h2>Custom Colors</h2>
    <div class="flex items-center gap-4">
      <BurgerMenu color="#e74c3c" activeColor="#3498db" />
      <BurgerMenu color="#2ecc71" activeColor="#f39c12" />
    </div>
  </div>
</div>