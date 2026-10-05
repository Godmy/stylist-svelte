<script lang="ts">
	import AppHeader from '$stylist/menu/component/organism/app-header/index.svelte';
	import Sidebar from '$stylist/navigation/component/organism/sidebar/index.svelte';
	import type { RecipeAdminShell } from '$stylist/travel-admin/interface/recipe/admin-shell';

	let props: RecipeAdminShell = $props();

	const sidebarItems = $derived(
		props.navItems.map((item) => ({ id: item.id, label: item.label, href: item.href, active: item.active }))
	);
</script>

<div class="admin-shell {props.class ?? ''}">
	<AppHeader brand={props.brand ?? 'Ланка Тур · Админка'} brandHref="/admin" />
	<div class="admin-shell__body">
		<Sidebar items={sidebarItems} collapsible={false} />
		<main class="admin-shell__content">
			{@render props.children()}
		</main>
	</div>
</div>

<style>
	.admin-shell {
		display: flex;
		flex-direction: column;
		min-height: 100%;
		background: var(--color-background-secondary);
	}
	.admin-shell__body {
		display: flex;
		flex: 1;
		min-height: 0;
	}
	.admin-shell__content {
		flex: 1;
		min-width: 0;
		padding: 1.5rem;
	}
</style>
