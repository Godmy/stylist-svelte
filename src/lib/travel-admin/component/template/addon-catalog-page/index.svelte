<script lang="ts">
	import AdminShell from '$stylist/travel-admin/component/organism/admin-shell/index.svelte';
	import AddonRulesEditor from '$stylist/travel-admin/component/organism/addon-rules-editor/index.svelte';
	import Button from '$stylist/button/component/atom/button/index.svelte';
	import type { RecipeAddonCatalogPage } from '$stylist/travel-admin/interface/recipe/addon-catalog-page';
	import createAddonCatalogPageState from './state.svelte';

	let props: RecipeAddonCatalogPage = $props();
	const state = createAddonCatalogPageState(props);

	const navItems = [
		{ id: 'dashboard', label: 'Дашборд', href: '/admin' },
		{ id: 'products', label: 'Туры и услуги', href: '/admin/products' },
		{ id: 'addons', label: 'Допники', href: '/admin/addons', active: true },
		{ id: 'pricing', label: 'Тарифы трансфера', href: '/admin/pricing' }
	];
</script>

<div class={props.class ?? ''}>
	<AdminShell {navItems}>
		{#snippet children()}
			<h1>Допники</h1>
			{#if state.loading}
				<p>Загрузка…</p>
			{:else}
				<AddonRulesEditor addons={state.addons} onChange={state.setAddons} />
				<div class="addon-catalog-page__actions">
					<Button variant="primary" loading={state.saving} onclick={state.saveAll}>Сохранить всё</Button>
					{#if state.savedAt}<span>Сохранено</span>{/if}
				</div>
			{/if}
		{/snippet}
	</AdminShell>
</div>

<style>
	.addon-catalog-page__actions {
		margin-top: 1rem;
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}
</style>
