<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import TagInput from './index.svelte';
</script>

<Story id="organisms-tag-input" title="Organisms / Interaction / Input / Tag Input" component={TagInput} category="Organisms/Interaction/Input">
  {#snippet children()}<div class="p-4"><TagInput tags={['svelte','design-system']} /></div>{/snippet}
</Story>
