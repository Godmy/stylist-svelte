<script lang="ts">
  import { InteractionFormsStyleManager } from '$stylist/design-system/styles/interaction/interaction-forms';
  import type { ScreenReaderProps } from '$stylist/design-system/props/interaction/interaction-forms';
  let { title='Screen Reader Tester', content='Accessible content', class: className='', ...restProps }: ScreenReaderProps = $props();
</script>
<div class={InteractionFormsStyleManager.root('c-screen-reader border rounded-lg p-4', className)} {...restProps}>
  <h3 class="font-semibold">{title}</h3>
  <p class="text-sm text-gray-700">{content}</p>
  <button class="sr-only" aria-label="Hidden accessible action">Action</button>
</div>
