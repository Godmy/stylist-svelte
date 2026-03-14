<script lang="ts">
  import type { UserProfileCardProps } from '$stylist/design-system/contracts/interaction/account-forms';
  import { AccountFormsStyleManager } from '$stylist/design-system/styles/interaction/account-forms';
  let { name='Jane Doe', role='Administrator', email='jane@example.com', class: className='', ...restProps }: UserProfileCardProps = $props();
</script>
<div class={AccountFormsStyleManager.root('c-user-profile-card border rounded-lg p-4', className)} {...restProps}>
  <div class="h-12 w-12 rounded-full bg-[var(--color-primary-100)] text-[var(--color-primary-700)] flex items-center justify-center font-semibold">{name.charAt(0)}</div>
  <div class="mt-2 font-semibold">{name}</div>
  <div class="text-sm text-[var(--color-text-secondary)]">{role}</div>
  <div class="text-sm text-[var(--color-text-secondary)]">{email}</div>
</div>



