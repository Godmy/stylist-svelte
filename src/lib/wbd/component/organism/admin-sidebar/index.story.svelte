<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import AdminSidebar from './index.svelte';

	const items = [
		{ id: 'sessions', label: 'Сессии', href: '/app', iconName: 'list', active: true },
		{ id: 'questions', label: 'Вопросы', href: '/app/questions', iconName: 'file' },
		{ id: 'estimates', label: 'Оценки', href: '/app/estimates', iconName: 'check-circle' },
		{ id: 'analytics', label: 'Аналитика', href: '/app/analytics', iconName: 'activity' },
		{ id: 'discussions', label: 'Обсуждения', href: '/app/discussions', iconName: 'chat' },
		{ id: 'reports', label: 'Отчёты', href: '/app/reports', iconName: 'folder' },
		{ id: 'settings', label: 'Настройки', href: '/app/admin', iconName: 'settings' }
	];
</script>

<Story
	title="Admin Sidebar"
	category="Organisms/Wbd"
	description="Primary left navigation for the WeOracle admin app shell."
	tags={['sidebar', 'navigation', 'wbd', 'admin']}
>
	{#snippet children()}
		<div style="height: 32rem; display: flex;">
			<AdminSidebar {items}>
				{#snippet logo()}
					<strong>WeOracle</strong>
				{/snippet}
				{#snippet footer()}
					<span>demo@example.com</span>
				{/snippet}
			</AdminSidebar>
		</div>
	{/snippet}
</Story>
