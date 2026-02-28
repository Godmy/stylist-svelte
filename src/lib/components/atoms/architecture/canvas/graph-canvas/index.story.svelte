<script lang="ts">
	import GraphCanvas from './index.svelte';
	import type { Story } from '@storybook/svelte';
	import { GraphNode, GraphEdge } from '$stylist/components/atoms';

	export default {
		title: 'Atoms/Architecture/Canvas/GraphCanvas',
		component: GraphCanvas,
		argTypes: {
			gridMode: {
				control: 'select',
				options: ['none', 'dots', 'lines', 'cross']
			},
			panMode: {
				control: 'select',
				options: ['drag', 'space', 'always']
			},
			zoom: { control: 'number', min: 0.1, max: 3, step: 0.1 },
			gridSize: { control: 'number', min: 10, max: 100, step: 5 },
			snapToGrid: { control: 'boolean' }
		}
	};

	type StoryArgs = {
		gridMode: 'none' | 'dots' | 'lines' | 'cross';
		panMode: 'drag' | 'space' | 'always';
		zoom: number;
		gridSize: number;
		snapToGrid: boolean;
		backgroundColor: string;
		gridColor: string;
	};

	const Template: Story<StoryArgs> = (args) => ({
		Component: GraphCanvas,
		props: args,
		style: 'background: #0f0f0f; padding: 20px; border-radius: 8px;'
	});

	export const Default = Template.bind({});
	Default.args = {
		gridMode: 'dots',
		panMode: 'drag',
		zoom: 1,
		gridSize: 20,
		snapToGrid: false,
		backgroundColor: '#1e1e1e',
		gridColor: 'rgba(128, 128, 128, 0.2)'
	};

	export const NoGrid = Template.bind({});
	NoGrid.args = {
		...Default.args,
		gridMode: 'none'
	};

	export const LinesGrid = Template.bind({});
	LinesGrid.args = {
		...Default.args,
		gridMode: 'lines'
	};

	export const CrossGrid = Template.bind({});
	CrossGrid.args = {
		...Default.args,
		gridMode: 'cross'
	};

	export const ZoomedIn = Template.bind({});
	ZoomedIn.args = {
		...Default.args,
		zoom: 2
	};

	export const ZoomedOut = Template.bind({});
	ZoomedOut.args = {
		...Default.args,
		zoom: 0.5
	};

	export const WithNodes = (args: StoryArgs) => ({
		Component: GraphCanvas,
		props: args,
		style: 'background: #0f0f0f; padding: 20px; border-radius: 8px;'
	});

	export const CustomGridSize = Template.bind({});
	CustomGridSize.args = {
		...Default.args,
		gridSize: 40
	};

	export const DarkTheme = Template.bind({});
	DarkTheme.args = {
		...Default.args,
		backgroundColor: '#0a0a0a',
		gridColor: 'rgba(255, 255, 255, 0.1)'
	};
</script>

<Story name="WithNodes">
	<GraphCanvas gridMode="dots" zoom={1} gridSize={20}>
		<div style="position: absolute; left: 100px; top: 100px;">
			<GraphNode id="node1" x={0} y={0} label="Node 1" />
		</div>
		<div style="position: absolute; left: 400px; top: 150px;">
			<GraphNode id="node2" x={0} y={0} label="Node 2" />
		</div>
		<div style="position: absolute; left: 250px; top: 250px;">
			<GraphNode id="node3" x={0} y={0} label="Node 3" />
		</div>
	</GraphCanvas>
</Story>

<Story name="AllGridModes">
	<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
		<div>
			<h4 style="color: #fff; margin-bottom: 10px;">Dots</h4>
			<GraphCanvas gridMode="dots" width={300} height={200} />
		</div>
		<div>
			<h4 style="color: #fff; margin-bottom: 10px;">Lines</h4>
			<GraphCanvas gridMode="lines" width={300} height={200} />
		</div>
		<div>
			<h4 style="color: #fff; margin-bottom: 10px;">Cross</h4>
			<GraphCanvas gridMode="cross" width={300} height={200} />
		</div>
		<div>
			<h4 style="color: #fff; margin-bottom: 10px;">None</h4>
			<GraphCanvas gridMode="none" width={300} height={200} />
		</div>
	</div>
</Story>

<Story name="AllZoomLevels">
	<div style="display: flex; flex-direction: column; gap: 20px;">
		<div>
			<h4 style="color: #fff; margin-bottom: 10px;">Zoom 0.5</h4>
			<GraphCanvas zoom={0.5} width={400} height={150} gridMode="lines">
				<div style="position: absolute; left: 50px; top: 50px; width: 100px; height: 50px; background: #3b82f6; border-radius: 4px;"></div>
			</GraphCanvas>
		</div>
		<div>
			<h4 style="color: #fff; margin-bottom: 10px;">Zoom 1.0</h4>
			<GraphCanvas zoom={1} width={400} height={150} gridMode="lines">
				<div style="position: absolute; left: 50px; top: 50px; width: 100px; height: 50px; background: #3b82f6; border-radius: 4px;"></div>
			</GraphCanvas>
		</div>
		<div>
			<h4 style="color: #fff; margin-bottom: 10px;">Zoom 2.0</h4>
			<GraphCanvas zoom={2} width={400} height={150} gridMode="lines">
				<div style="position: absolute; left: 50px; top: 50px; width: 100px; height: 50px; background: #3b82f6; border-radius: 4px;"></div>
			</GraphCanvas>
		</div>
	</div>
</Story>
