<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import AdminShell from './index.svelte';

	const navItems = [
		{ id: 'dashboard', label: 'Дашборд', href: '/admin', active: true },
		{ id: 'products', label: 'Туры и услуги', href: '/admin/products' },
		{ id: 'addons', label: 'Допники', href: '/admin/addons' },
		{ id: 'pricing', label: 'Тарифы трансфера', href: '/admin/pricing' }
	];
</script>

<Story
	component={AdminShell}
	title="AdminShell"
	category="TravelAdmin/Organisms/Layout"
	description="Admin layout shell: AppHeader + Sidebar (both from stylist-svelte) + content area."
>
	{#snippet children()}
		<div style="height: 32rem; border: 1px solid var(--color-border-primary); border-radius: 0.5rem; overflow: hidden;">
			<AdminShell {navItems}>
				{#snippet children()}
					<h2>Дашборд</h2>
					<p>Содержимое страницы рендерится сюда через слот.</p>
				{/snippet}
			</AdminShell>
		</div>
	{/snippet}
</Story>
