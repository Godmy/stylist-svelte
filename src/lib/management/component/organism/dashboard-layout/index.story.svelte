<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import DashboardLayout from './index.svelte';
	import { TOKEN_CONTROLLER_TYPE } from '$stylist/domain/const/map/controller-type';

	const controls = [
		{
			name: 'collapsibleSidebar',
			type: TOKEN_CONTROLLER_TYPE.BOOLEAN,
			defaultValue: true
		},
		{
			name: 'showSidebarToggle',
			type: TOKEN_CONTROLLER_TYPE.BOOLEAN,
			defaultValue: true
		},
		{
			name: 'variant',
			type: TOKEN_CONTROLLER_TYPE.SELECT,
			options: ['default', 'compact', 'spacious'],
			defaultValue: 'default'
		}
	];
</script>

<Story
	{controls}
	title="DashboardLayout"
	category="Organisms/Dashboards"
	description="A layout component for dashboards with header and sidebar."
	tags={['layout', 'dashboard', 'structure']}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<DashboardLayout
				collapsibleSidebar={values.collapsibleSidebar}
				showSidebarToggle={values.showSidebarToggle}
				variant={values.variant}
			>
				{#snippet header()}
					<div class="_c2">
						<h1 class="_c3">Dashboard Header</h1>
					</div>
				{/snippet}
				{#snippet sidebar()}
					<div class="_c4">
						<div>Navigation Item 1</div>
						<div>Navigation Item 2</div>
						<div>Navigation Item 3</div>
					</div>
				{/snippet}
				{#snippet children()}
					<div class="_c5">
						<h2 class="_c6">Main Content</h2>
						<p>This is the main content area of the dashboard.</p>
					</div>
				{/snippet}
			</DashboardLayout>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.5rem;
		background-color: var(--color-background-secondary);
		padding: 2rem;
	}
	._c2 {
		width: 100%;
	}
	._c3 {
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 600;
	}
	._c4 {
		padding: 0.5rem;
	}
	._c4 > * + * {
		margin-top: 0.5rem;
	}
	._c5 {
		padding: 1rem;
	}
	._c6 {
		margin-bottom: 0.5rem;
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 500;
	}
</style>
