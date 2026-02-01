<script lang="ts">
  import type { Props } from '$stylist/design-system/interaction/navigation/pagination/page-ellipsis';

  let { class: className = '' }: Props = $props();
</script>

<div class={`flex items-center px-3 py-2 text-sm font-medium text-gray-700 ${className}`}>
  <span>…</span>
</div>
