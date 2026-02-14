<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import UserProfileCard from './index.svelte';
</script>
<Story id="organisms-user-profile-card" title="Organisms / Interaction / Forms / Account / User Profile Card" component={UserProfileCard} category="Organisms/Interaction/Forms/Account">
  {#snippet children()}<div class="sb-organisms-user-profile-card p-4 max-w-sm"><UserProfileCard /></div>{/snippet}
</Story>
