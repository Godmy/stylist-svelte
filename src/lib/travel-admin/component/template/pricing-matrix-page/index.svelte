<script lang="ts">
	import AdminShell from '$stylist/travel-admin/component/organism/admin-shell/index.svelte';
	import PricingMatrixEditor from '$stylist/travel-admin/component/organism/pricing-matrix-editor/index.svelte';
	import Button from '$stylist/button/component/atom/button/index.svelte';
	import type { RecipePricingMatrixPage } from '$stylist/travel-admin/interface/recipe/pricing-matrix-page';
	import createPricingMatrixPageState from './state.svelte';

	let props: RecipePricingMatrixPage = $props();
	const state = createPricingMatrixPageState(props);

	const navItems = [
		{ id: 'dashboard', label: 'Дашборд', href: '/admin' },
		{ id: 'products', label: 'Туры и услуги', href: '/admin/products' },
		{ id: 'addons', label: 'Доп. услуги', href: '/admin/addons' },
		{ id: 'pricing', label: 'Тарифы трансфера', href: '/admin/pricing', active: true }
	];
</script>

<div class={props.class ?? ''}>
	<AdminShell {navItems}>
		{#snippet children()}
			<h1>Тарифы трансфера</h1>
			<p>Цена зависит от точки подачи, точки назначения, типа транспорта и числа людей.</p>
			{#if state.loading}
				<p>Загрузка…</p>
			{:else}
				<PricingMatrixEditor rates={state.rates} pickupPoints={state.pickupPoints} onChange={state.setRates} />
				<div class="pricing-matrix-page__actions">
					<Button variant="primary" loading={state.saving} onclick={state.saveAll}>Сохранить всё</Button>
					{#if state.savedAt}<span>Сохранено</span>{/if}
				</div>
			{/if}
		{/snippet}
	</AdminShell>
</div>

<style>
	.pricing-matrix-page__actions {
		margin-top: 1rem;
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}
</style>
