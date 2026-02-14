<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import AdvancedColorPicker from './index.svelte';
</script>

<Story id="organisms-advanced-color-picker" title="Organisms / Interaction / Input / Advanced Color Picker" component={AdvancedColorPicker} category="Organisms/Interaction/Input">
  {#snippet children()}<div class="p-4"><AdvancedColorPicker value="#22b14c" /></div>{/snippet}
</Story>
