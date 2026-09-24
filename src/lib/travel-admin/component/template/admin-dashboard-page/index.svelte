<script lang="ts">
	import AdminShell from '$stylist/travel-admin/component/organism/admin-shell/index.svelte';
	import AdminKpiRow from '$stylist/travel-admin/component/organism/admin-kpi-row/index.svelte';
	import type { RecipeAdminDashboardPage } from '$stylist/travel-admin/interface/recipe/admin-dashboard-page';
	import createAdminDashboardPageState from './state.svelte';

	let props: RecipeAdminDashboardPage = $props();
	const state = createAdminDashboardPageState(props);

	const navItems = [
		{ id: 'dashboard', label: 'Дашборд', href: '/admin', active: true },
		{ id: 'products', label: 'Туры и услуги', href: '/admin/products' },
		{ id: 'addons', label: 'Доп. услуги', href: '/admin/addons' },
		{ id: 'pricing', label: 'Тарифы трансфера', href: '/admin/pricing' }
	];
</script>

<div class={props.class ?? ''}>
	<AdminShell {navItems}>
		{#snippet children()}
			<h1>Дашборд</h1>
			{#if state.loading}
				<p>Загрузка…</p>
			{:else}
				<AdminKpiRow metrics={state.metrics} />
				<h2 class="admin-dashboard-page__section-title">Последние товары</h2>
				<ul class="admin-dashboard-page__list">
					{#each state.products as product (product.id)}
						<li>
							<span>{product.title}</span>
							<span class="admin-dashboard-page__badge">{product.domain}</span>
							<span class="admin-dashboard-page__badge">{product.status}</span>
						</li>
					{/each}
				</ul>
			{/if}
		{/snippet}
	</AdminShell>
</div>

<style>
	.admin-dashboard-page__section-title {
		margin-top: 2rem;
	}
	.admin-dashboard-page__list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.admin-dashboard-page__list li {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.6rem 0.8rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.375rem;
		background: var(--color-background-primary);
	}
	.admin-dashboard-page__badge {
		font-size: 0.75rem;
		padding: 0.15rem 0.5rem;
		border-radius: 999px;
		background: var(--color-background-secondary);
		color: var(--color-text-secondary);
	}
</style>
