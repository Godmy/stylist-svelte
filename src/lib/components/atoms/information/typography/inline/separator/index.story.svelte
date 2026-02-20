<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import Separator from './index.svelte';
	import { CONTROL_TYPES } from '$stylist/design-system/tokens/controls';

	const controls = [
		{
			name: 'orientation',
			type: CONTROL_TYPES.SELECT,
			options: ['horizontal', 'vertical'],
			defaultValue: 'horizontal'
		},
		{
			name: 'decorative',
			type: CONTROL_TYPES.BOOLEAN,
			defaultValue: false
		}
	];
</script>

<Story
	{controls}
	component={Separator}
	title="Separator"
	category="Atoms/Information/Typography/Inline"
	description="A separator component for dividing content."
	tags={['separator', 'divider', 'layout']}
>
	{#snippet children(values: any)}
		<div class="space-y-8">
			{/* Default story */}
			<div class="p-4">
				<div class="space-y-4">
					<p>Content before separator</p>
					<Separator
						orientation={props.orientation}
						decorative={props.decorative}
					/>
					<p>Content after separator</p>
				</div>
			</div>

			{/* Horizontal separator */}
			<div class="p-4">
				<h3 class="mb-4 text-lg font-medium">Horizontal Separator</h3>
				<div class="space-y-2">
					<p>Top section</p>
					<Separator orientation="horizontal" class="my-2" />
					<p>Bottom section</p>
				</div>
			</div>

			{/* Vertical separator */}
			<div class="flex p-4">
				<h3 class="mr-4 text-lg font-medium">Vertical Separator</h3>
				<div class="flex items-center space-x-4">
					<p>Left section</p>
					<Separator orientation="vertical" class="h-12" />
					<p>Right section</p>
				</div>
			</div>

			{/* Decorative vs semantic */}
			<div class="space-y-6 p-4">
				<h3 class="text-lg font-medium">Semantic Separator</h3>
				<p>Uses <code>&lt;hr&gt;</code> element</p>
				<Separator orientation="horizontal" decorative={false} />
				<p>After semantic separator</p>

				<h3 class="mt-6 text-lg font-medium">Decorative Separator</h3>
				<p>Uses <code>&lt;div&gt;</code> element</p>
				<Separator orientation="horizontal" decorative={true} />
				<p>After decorative separator</p>
			</div>
		</div>
	{/snippet}
</Story>
