<script lang="ts">
  import type { TokenUserCardSize } from '$stylist/commerce/type/enum/user-card-size';
  import type { User } from '$stylist/commerce/type/struct/user';
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

  import UserCard from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
    { name: 'showEmail', type: 'boolean', defaultValue: true },
    { name: 'showRole', type: 'boolean', defaultValue: true }
  ];

  const primaryUser: User = {
    id: 'pm-42',
    name: 'Alicia Norris',
    email: 'alicia@orion.software',
    role: 'Product Manager',
    avatar: 'https://i.pravatar.cc/96?img=12'
  };

  const roster: User[] = [
    { id: 'sup-1', name: 'Mika Howard', role: 'Support Lead', avatar: 'https://i.pravatar.cc/96?img=26', email: 'mika@orion.software' },
    { id: 'fre-19', name: 'Oscar Bentley', role: 'Motion Designer', avatar: 'https://i.pravatar.cc/96?img=48', email: 'oscar@orion.software' }
  ];
</script>

<Story component={UserCard} title="User Card" description="Compact commerce user card." controls={controls}>
  {#snippet children(values: any)}
    <section class="grid gap-4">
      <UserCard
        user={primaryUser}
        showEmail={values.showEmail as boolean}
        showRole={values.showRole as boolean}
        size={values.size as TokenUserCardSize}
      />
      <div class="space-y-3">
        {#each roster as member}
          <UserCard user={member} showEmail={false} showRole={true} size="sm" />
        {/each}
      </div>
    </section>
  {/snippet}
</Story>
