<script lang="ts">
  import LinkCard from './index.svelte';

  let {
    variant = 'primary'
  } = $props();
</script>

<div id="molecules-link-card">
  <h1>LinkCard</h1>
  <p>LinkCard - component for displaying link cards for quick navigation</p>

  <h2>Default</h2>
  <div class="p-4 border rounded-lg max-w-sm">
    <LinkCard
      title="Documentation"
      description="Learn how to use our components and features"
      href="#"
      variant="default"
      showArrow={true} />
  </div>

  <h2>With Icon</h2>
  <div class="p-4 border rounded-lg max-w-sm">
    <LinkCard
      title="API Reference"
      description="Detailed documentation for our API"
      href="#"
      variant="primary"
      icon="🔗"
      showArrow={true} />
  </div>

  <h2>Secondary Variant</h2>
  <div class="p-4 border rounded-lg max-w-sm">
    <LinkCard
      title="Tutorials"
      description="Step-by-step guides to get started"
      href="#"
      variant="secondary" />
  </div>

  <h2>Outline Variant</h2>
  <div class="p-4 border rounded-lg max-w-sm">
    <LinkCard
      title="Community"
      description="Join our community forums"
      href="#"
      variant="outline"
      newTab={true} />
  </div>

  <h2>Without Arrow</h2>
  <div class="p-4 border rounded-lg max-w-sm">
    <LinkCard
      title="Resources"
      description="Additional tools and resources"
      href="#"
      showArrow={false} />
  </div>
</div>
