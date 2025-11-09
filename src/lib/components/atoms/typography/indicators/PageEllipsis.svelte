<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {} & HTMLAttributes<HTMLDivElement>;

  let {}: Props = $props();
</script>

<div class="flex items-center px-3 py-2 text-sm font-medium text-gray-700">
  <span>…</span>
</div>