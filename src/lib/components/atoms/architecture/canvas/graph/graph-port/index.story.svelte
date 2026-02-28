<script lang="ts">
	import GraphPort from './index.svelte';
	import type { Story } from '@storybook/svelte';

	export default {
		title: 'Atoms/Architecture/Graph/GraphPort',
		component: GraphPort,
		argTypes: {
			direction: {
				control: 'select',
				options: ['input', 'output']
			},
			dataType: {
				control: 'select',
				options: ['number', 'string', 'boolean', 'object', 'array', 'any', 'event', 'action']
			},
			size: {
				control: 'select',
				options: ['xs', 'sm', 'md', 'lg']
			},
			connected: { control: 'boolean' },
			active: { control: 'boolean' },
			color: { control: 'color' }
		}
	};

	type StoryArgs = {
		direction: 'input' | 'output';
		dataType: 'number' | 'string' | 'boolean' | 'object' | 'array' | 'any' | 'event' | 'action';
		size: 'xs' | 'sm' | 'md' | 'lg';
		label: string;
		connected: boolean;
		active: boolean;
		color: string;
	};

	const Template: Story<StoryArgs> = (args) => ({
		Component: GraphPort,
		props: args,
		style: 'position: relative; height: 60px; display: flex; align-items: center; justify-content: center; background: #1e1e1e; border-radius: 8px;'
	});

	export const Default = Template.bind({});
	Default.args = {
		direction: 'input',
		dataType: 'number',
		size: 'md',
		label: 'Value',
		connected: false,
		active: false,
		color: ''
	};

	export const InputPorts = Template.bind({});
	InputPorts.args = {
		direction: 'input',
		dataType: 'string',
		size: 'md',
		label: 'Input',
		connected: true
	};

	export const OutputPorts = Template.bind({});
	OutputPorts.args = {
		direction: 'output',
		dataType: 'number',
		size: 'md',
		label: 'Result',
		connected: true
	};

	export const EventPort = Template.bind({});
	EventPort.args = {
		direction: 'output',
		dataType: 'event',
		size: 'md',
		label: 'On Click',
		connected: false
	};

	export const ActivePort = Template.bind({});
	ActivePort.args = {
		direction: 'output',
		dataType: 'any',
		size: 'md',
		label: 'Drag Me',
		active: true
	};

	export const AllSizes = () => ({
		Component: GraphPort,
		props: {
			direction: 'output',
			dataType: 'number',
			label: 'Port'
		},
		style: `
			position: relative;
			height: 120px;
			display: flex;
			flex-direction: column;
			gap: 20px;
			align-items: flex-end;
			justify-content: center;
			background: #1e1e1e;
			border-radius: 8px;
			padding: 20px;
		`
	});

	export const AllDataTypes = () => ({
		Component: GraphPort,
		props: {
			direction: 'input',
			size: 'md',
			connected: false
		},
		style: `
			position: relative;
			height: 300px;
			display: flex;
			flex-direction: column;
			gap: 10px;
			justify-content: center;
			background: #1e1e1e;
			border-radius: 8px;
			padding: 20px;
		`
	});
</script>

<Story name="AllSizes">
	<GraphPort size="xs" label="XS (8px)" />
	<GraphPort size="sm" label="SM (10px)" />
	<GraphPort size="md" label="MD (12px)" />
	<GraphPort size="lg" label="LG (16px)" />
</Story>

<Story name="AllDataTypes">
	<GraphPort dataType="number" label="Number (green)" />
	<GraphPort dataType="string" label="String (blue)" />
	<GraphPort dataType="boolean" label="Boolean (orange)" />
	<GraphPort dataType="object" label="Object (purple)" />
	<GraphPort dataType="array" label="Array (cyan)" />
	<GraphPort dataType="any" label="Any (gray)" />
	<GraphPort dataType="event" label="Event (red)" />
	<GraphPort dataType="action" label="Action (pink)" />
</Story>
