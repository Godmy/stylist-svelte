<script lang="ts">
	// @ts-nocheck
	import NodeProperty from './index.svelte';
	import type { Story } from '@storybook/svelte';
	import { Icon as BaseIcon } from '$stylist/components/atoms';

	const Settings = 'settings';
	const Hash = 'hash';

	export default {
		title: 'Atoms/Interaction/Controls/NodeProperty',
		component: NodeProperty,
		argTypes: {
			type: {
				control: 'select',
				options: ['string', 'number', 'boolean', 'enum', 'color', 'vector2', 'vector3', 'object', 'function']
			},
			size: {
				control: 'select',
				options: ['xs', 'sm', 'md', 'lg']
			},
			editable: { control: 'boolean' },
			error: { control: 'boolean' }
		}
	};

	type StoryArgs = {
		type: 'string' | 'number' | 'boolean' | 'enum' | 'color' | 'vector2' | 'vector3' | 'object' | 'function';
		size: 'xs' | 'sm' | 'md' | 'lg';
		name: string;
		label: string;
		value: unknown;
		editable: boolean;
		error: boolean;
	};

	const Template: Story<StoryArgs> = (args) => ({
		Component: NodeProperty,
		props: args,
		style: 'background: #1e1e1e; padding: var(--spacing-5); border-radius: var(--border-radius-lg); max-width: var(--border-radius-full);'
	});

	export const Default = Template.bind({});
	Default.args = {
		type: 'string',
		size: 'md',
		name: 'nodeName',
		label: 'Node Name',
		value: 'My Node',
		editable: true,
		error: false
	};

	export const NumberProperty = Template.bind({});
	NumberProperty.args = {
		...Default.args,
		type: 'number',
		name: 'count',
		label: 'Count',
		value: 42,
		min: 0,
		max: 100,
		step: 1
	};

	export const BooleanProperty = Template.bind({});
	BooleanProperty.args = {
		...Default.args,
		type: 'boolean',
		name: 'enabled',
		label: 'Enabled',
		value: true
	};

	export const EnumProperty = Template.bind({});
	EnumProperty.args = {
		...Default.args,
		type: 'enum',
		name: 'mode',
		label: 'Mode',
		value: 'Auto',
		options: ['Auto', 'Manual', 'Disabled']
	};

	export const ColorProperty = Template.bind({});
	ColorProperty.args = {
		...Default.args,
		type: 'color',
		name: 'color',
		label: 'Color',
		value: '#3b82f6'
	};

	export const Vector2Property = Template.bind({});
	Vector2Property.args = {
		...Default.args,
		type: 'vector2',
		name: 'position',
		label: 'Position',
		value: [100, 200]
	};

	export const Vector3Property = Template.bind({});
	Vector3Property.args = {
		...Default.args,
		type: 'vector3',
		name: 'scale',
		label: 'Scale',
		value: [1, 1, 1]
	};

	export const WithDescription = Template.bind({});
	WithDescription.args = {
		...Default.args,
		type: 'string',
		name: 'description',
		label: 'Description',
		value: 'Some text',
		description: 'Enter a brief description for this node'
	};

	export const WithIcon = Template.bind({});
	WithIcon.args = {
		...Default.args,
		type: 'number',
		name: 'value',
		label: 'Value'
	};

	export const ErrorState = Template.bind({});
	ErrorState.args = {
		...Default.args,
		type: 'string',
		name: 'invalid',
		label: 'Invalid Field',
		value: '',
		error: true,
		errorMessage: 'This field is required'
	};

	export const ReadonlyProperty = Template.bind({});
	ReadonlyProperty.args = {
		...Default.args,
		type: 'string',
		name: 'readonly',
		label: 'Readonly',
		value: 'Cannot edit',
		editable: false
	};

	export const AllTypes = () => ({
		Component: NodeProperty,
		props: {
			size: 'md',
			editable: true
		},
		style: `
			display: flex;
			flex-direction: column;
			gap: var(--spacing-2);
			background: #1e1e1e;
			padding: var(--spacing-5);
			border-radius: var(--border-radius-lg);
			max-width: 500px;
		`
	});
</script>

<Story name="WithIcon">
	<NodeProperty
		name="value"
		label="Value"
		type="number"
		value={10}
	>
		<svelte:fragment slot="icon">
			<Hash size={14} />
		</svelte:fragment>
	</NodeProperty>
</Story>

<Story name="AllTypes">
	<NodeProperty name="str" label="String" type="string" value="Hello" />
	<NodeProperty name="num" label="Number" type="number" value={42} />
	<NodeProperty name="bool" label="Boolean" type="boolean" value={true} />
	<NodeProperty name="enum" label="Enum" type="enum" value="Option 1" options={['Option 1', 'Option 2', 'Option 3']} />
	<NodeProperty name="color" label="Color" type="color" value="#3b82f6" />
	<NodeProperty name="vec2" label="Vector2" type="vector2" value={[10, 20]} />
	<NodeProperty name="vec3" label="Vector3" type="vector3" value={[1, 1, 1]} />
	<NodeProperty name="obj" label="Object" type="object" value={{}} />
	<NodeProperty name="fn" label="Function" type="function" value={null} />
</Story>

<Story name="AllSizes">
	<NodeProperty name="xs" label="XS Size" type="string" value="Small" size="xs" />
	<NodeProperty name="sm" label="SM Size" type="string" value="Small Medium" size="sm" />
	<NodeProperty name="md" label="MD Size" type="string" value="Medium" size="md" />
	<NodeProperty name="lg" label="LG Size" type="string" value="Large" size="lg" />
</Story>

