<script lang="ts">
  import type { PageEllipsisProps } from '$stylist/design-system/attributes';

  let { class: className = '' }: PageEllipsisProps = $props();
</script>

<div class={`flex items-center px-3 py-2 text-sm font-medium text-gray-700 ${className}`}>
  <span>…</span>
</div>
