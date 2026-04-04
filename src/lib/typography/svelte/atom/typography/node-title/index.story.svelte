<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
	import NodeTitle from './index.svelte';

	type Props = {
		variant: 'default' | 'selected' | 'error' | 'warning';
		size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
		title: string;
		selected: boolean;
		editable: boolean;
		color: string;
	};

	const Circle = 'circle';
	const Check = 'check';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'variant', type: 'select', defaultValue: 'default', options: ['default', 'selected', 'error', 'warning'] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] },
		{ name: 'title', type: 'text', defaultValue: 'Node Title' },
		{ name: 'selected', type: 'boolean', defaultValue: false },
		{ name: 'editable', type: 'boolean', defaultValue: false },
		{ name: 'color', type: 'text', defaultValue: '' }
	];
</script>

<Story
	{controls}
	component={NodeTitle}
	title="Node Title"
	category="Atoms/Information/Typography"
	description="Р—Р°РіРѕР»РѕРІРѕРє РЅРѕРґС‹ СЃ РІР°СЂРёР°РЅС‚Р°РјРё СЃРѕСЃС‚РѕСЏРЅРёСЏ Рё СЃР»РѕС‚Р°РјРё РґР»СЏ РёРєРѕРЅРѕРє."
	tags={['node', 'title', 'typography']}
>
	{#snippet children(values: any)}
		{@const typed = values as Props}
		<div style="background: #1e1e1e; padding: var(--spacing-5); border-radius: var(--border-radius-lg);">
			<NodeTitle
				variant={typed.variant}
				size={typed.size}
				title={typed.title}
				selected={typed.selected}
				editable={typed.editable}
				color={typed.color || undefined}
			/>
		</div>
	{/snippet}

	{#snippet variants()}
		<div style="display: flex; flex-direction: column; gap: var(--spacing-4); background: #1e1e1e; padding: var(--spacing-5); border-radius: var(--border-radius-lg);">
			<div style="display: flex; flex-direction: column; gap: var(--spacing-2);">
				<NodeTitle size="xs" title="XS Size" />
				<NodeTitle size="sm" title="SM Size" />
				<NodeTitle size="md" title="MD Size" />
				<NodeTitle size="lg" title="LG Size" />
				<NodeTitle size="xl" title="XL Size" />
				<NodeTitle size="2xl" title="2XL Size" />
			</div>
			<div style="display: flex; flex-direction: column; gap: var(--spacing-2);">
				<NodeTitle variant="default" title="Default Variant" />
				<NodeTitle variant="selected" selected={true} title="Selected Variant" />
				<NodeTitle variant="error" title="Error Variant" />
				<NodeTitle variant="warning" title="Warning Variant" />
			</div>
			<div style="display: flex; flex-direction: column; gap: var(--spacing-2);">
				<NodeTitle title="With Leading Icon" icon={Circle} />
				<NodeTitle title="With Trailing Icon" trailingIcon={Check} />
			</div>
		</div>
	{/snippet}
</Story>



