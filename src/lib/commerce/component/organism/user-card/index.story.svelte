<script lang="ts">
	import { TOKEN_SIZE } from '$stylist/layout/const/array/size';
	import type { User } from '$stylist/commerce/type/struct/user';
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
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
		{
			id: 'sup-1',
			name: 'Mika Howard',
			role: 'Support Lead',
			avatar: 'https://i.pravatar.cc/96?img=26',
			email: 'mika@orion.software'
		},
		{
			id: 'fre-19',
			name: 'Oscar Bentley',
			role: 'Motion Designer',
			avatar: 'https://i.pravatar.cc/96?img=48',
			email: 'oscar@orion.software'
		}
	];
</script>

<Story component={UserCard} title="User Card" description="Compact commerce user card." {controls}>
	{#snippet children(values: any)}
		<section class="_c1">
			<UserCard
				user={primaryUser}
				showEmail={values.showEmail as boolean}
				showRole={values.showRole as boolean}
				size={values.size as (typeof TOKEN_SIZE)[number]}
			/>
			<div class="_c2">
				{#each roster as member}
					<UserCard user={member} showEmail={false} showRole={true} size="sm" />
				{/each}
			</div>
		</section>
	{/snippet}
</Story>

<style>
	._c1 {
		display: grid;
		gap: 1rem;
	}
	._c2 > * + * {
		margin-top: 0.75rem;
	}
</style>
