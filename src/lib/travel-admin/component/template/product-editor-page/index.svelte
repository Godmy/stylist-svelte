<script lang="ts">
	import AdminShell from '$stylist/travel-admin/component/organism/admin-shell/index.svelte';
	import ProductEditorForm from '$stylist/travel-admin/component/organism/product-editor-form/index.svelte';
	import RouteStopsEditor from '$stylist/travel-admin/component/organism/route-stops-editor/index.svelte';
	import MediaGalleryManager from '$stylist/travel-admin/component/organism/media-gallery-manager/index.svelte';
	import type { RecipeProductEditorPage } from '$stylist/travel-admin/interface/recipe/product-editor-page';
	import createProductEditorPageState from './state.svelte';

	let props: RecipeProductEditorPage = $props();
	const state = createProductEditorPageState(props);

	const navItems = [
		{ id: 'dashboard', label: 'Дашборд', href: '/admin' },
		{ id: 'products', label: 'Туры и услуги', href: '/admin/products', active: true },
		{ id: 'addons', label: 'Доп. услуги', href: '/admin/addons' },
		{ id: 'pricing', label: 'Тарифы трансфера', href: '/admin/pricing' }
	];
</script>

<div class={props.class ?? ''}>
	<AdminShell {navItems}>
		{#snippet children()}
			<h1>{props.productId == null ? 'Новый товар' : 'Редактирование товара'}</h1>
			{#if state.loading}
				<p>Загрузка…</p>
			{:else}
				<section class="product-editor-page__section">
					<ProductEditorForm product={state.product} saving={state.saving} onSave={state.save} />
					{#if state.savedAt}
						<p class="product-editor-page__saved">Сохранено</p>
					{/if}
				</section>

				<section class="product-editor-page__section">
					<h2>Маршрут</h2>
					<RouteStopsEditor stops={state.stops} onChange={(next) => (state.stops = next)} />
				</section>

				<section class="product-editor-page__section">
					<h2>Фото</h2>
					<MediaGalleryManager assets={state.gallery} uploader={props.uploader} onChange={(next) => (state.gallery = next)} />
				</section>
			{/if}
		{/snippet}
	</AdminShell>
</div>

<style>
	.product-editor-page__section {
		margin-top: 2rem;
	}
	.product-editor-page__saved {
		color: var(--color-success-600, green);
		font-size: 0.85rem;
	}
</style>
