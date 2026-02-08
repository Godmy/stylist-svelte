<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import Breadcrumb from './breadcrumb/index.svelte';

	type Props = {
		currentPage: string;
	};

	const controls: ControlConfig[] = [
		{
			name: 'currentPage',
			type: 'text',
			defaultValue: 'Current Page'
		}
	];
</script>

<Story
	id="molecules-breadcrumb"
	title="Breadcrumb"
	component={Breadcrumb}
	category="Molecules"
	description="A navigation component that shows the user's location in the site hierarchy."
	tags={['navigation', 'path', 'hierarchy']}
	{controls}
>
	{#snippet children(props: Props)}
		<div class="p-6">
			<h2 class="mb-6 text-xl font-semibold">Breadcrumb</h2>
			<div class="mx-auto max-w-2xl">
				<Breadcrumb
					items={[
						{ label: 'Home', href: '/' },
						{ label: 'Products', href: '/products' },
						{ label: 'Category', href: '/products/category' },
						{ label: props.currentPage, href: '#' }
					]}
				/>
			</div>
		</div>
	{/snippet}
</Story>
