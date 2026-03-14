<script lang="ts">
	import NodeTitle from './index.svelte';
	import type { Story } from '@storybook/svelte';
	import { Icon as BaseIcon } from '$stylist/components/atoms';
const Circle = 'circle';


	export default {
		title: 'Atoms/Information/Typography/NodeTitle',
		component: NodeTitle,
		argTypes: {
			variant: {
				control: 'select',
				options: ['default', 'selected', 'error', 'warning']
			},
			size: {
				control: 'select',
				options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
			},
			selected: { control: 'boolean' },
			editable: { control: 'boolean' },
			color: { control: 'color' }
		}
	};

	type StoryArgs = {
		variant: 'default' | 'selected' | 'error' | 'warning';
		size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
		title: string;
		selected: boolean;
		editable: boolean;
		color: string;
	};

	const Template: Story<StoryArgs> = (args) => ({
		Component: NodeTitle,
		props: args,
		style: 'background: #1e1e1e; padding: var(--spacing-5); border-radius: var(--border-radius-lg);'
	});

	export const Default = Template.bind({});
	Default.args = {
		variant: 'default',
		size: 'md',
		title: 'Node Title',
		selected: false,
		editable: false,
		color: ''
	};

	export const Selected = Template.bind({});
	Selected.args = {
		...Default.args,
		variant: 'selected',
		selected: true
	};

	export const Error = Template.bind({});
	Error.args = {
		...Default.args,
		variant: 'error',
		title: 'Error State'
	};

	export const Warning = Template.bind({});
	Warning.args = {
		...Default.args,
		variant: 'warning',
		title: 'Warning State'
	};

	export const Editable = Template.bind({});
	Editable.args = {
		...Default.args,
		editable: true,
		title: 'Click to Edit'
	};

	export const WithIcon = Template.bind({});
	WithIcon.args = {
		...Default.args,
		title: 'With Icon'
	};

	export const AllSizes = () => ({
		Component: NodeTitle,
		props: {
			title: 'Node Title',
			variant: 'default'
		},
		style: `
			display: flex;
			flex-direction: column;
			gap: var(--spacing-2);
			background: #1e1e1e;
			padding: var(--spacing-5);
			border-radius: var(--border-radius-lg);
		`
	});
</script>

<Story name="AllSizes">
	<NodeTitle size="xs" title="XS Size (0.6875rem)" />
	<NodeTitle size="sm" title="SM Size (0.75rem)" />
	<NodeTitle size="md" title="MD Size (0.8125rem)" />
	<NodeTitle size="lg" title="LG Size (0.875rem)" />
	<NodeTitle size="xl" title="XL Size (1rem)" />
	<NodeTitle size="2xl" title="2XL Size (1.125rem)" />
</Story>

<Story name="WithIcon">
	<NodeTitle title="With Leading Icon">
		<svelte:fragment slot="icon">
			<BaseIcon name={Circle} size={16} />
		</svelte:fragment>
	</NodeTitle>
</Story>

<Story name="WithTrailingIcon">
	<NodeTitle title="With Trailing Icon">
		<svelte:fragment slot="trailingIcon">
			<BaseIcon name={Circle} size={16} />
		</svelte:fragment>
	</NodeTitle>
</Story>

<Story name="AllVariants">
	<NodeTitle variant="default" title="Default Variant" />
	<NodeTitle variant="selected" title="Selected Variant" />
	<NodeTitle variant="error" title="Error Variant" />
	<NodeTitle variant="warning" title="Warning Variant" />
</Story>


