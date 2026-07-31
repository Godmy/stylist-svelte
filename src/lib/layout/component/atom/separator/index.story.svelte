<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import Separator from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'orientation',
			type: 'select',
			options: ['horizontal', 'vertical'],
			defaultValue: 'horizontal'
		},
		{
			name: 'decorative',
			type: 'boolean',
			defaultValue: false
		}
	];
</script>

<Story
	{controls}
	component={Separator}
	title="Separator"
	category="Atoms/Layout/Structure"
	description="A separator component for dividing content."
	tags={['separator', 'divider', 'layout']}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<!-- Default story -->
			<div class="_c2">
				<div class="_c3">
					<p>Content before separator</p>
					<Separator orientation={values.orientation} decorative={values.decorative} />
					<p>Content after separator</p>
				</div>
			</div>

			<!-- Horizontal separator -->
			<div class="_c2">
				<h3 class="_c4">Horizontal Separator</h3>
				<div class="_c5">
					<p>Top section</p>
					<Separator orientation="horizontal" class="_c6" />
					<p>Bottom section</p>
				</div>
			</div>

			<!-- Vertical separator -->
			<div class="_c7">
				<h3 class="_c8">Vertical Separator</h3>
				<div class="_c9">
					<p>Left section</p>
					<Separator orientation="vertical" class="_c10" />
					<p>Right section</p>
				</div>
			</div>

			<!-- Decorative vs semantic -->
			<div class="_c11">
				<h3 class="_c12">Semantic Separator</h3>
				<p>Uses <code>&lt;hr&gt;</code> element</p>
				<Separator orientation="horizontal" decorative={false} />
				<p>After semantic separator</p>

				<h3 class="_c13">Decorative Separator</h3>
				<p>Uses <code>&lt;div&gt;</code> element</p>
				<Separator orientation="horizontal" decorative={true} />
				<p>After decorative separator</p>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 > * + * {
		margin-top: 2rem;
	}
	._c10 {
		height: 3rem;
	}
	._c11 {
		padding: 1rem;
	}
	._c11 > * + * {
		margin-top: 1.5rem;
	}
	._c12 {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 500;
	}
	._c13 {
		margin-top: 1.5rem;
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 500;
	}
	._c2 {
		padding: 1rem;
	}
	._c3 > * + * {
		margin-top: 1rem;
	}
	._c4 {
		margin-bottom: 1rem;
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 500;
	}
	._c5 > * + * {
		margin-top: 0.5rem;
	}
	._c6 {
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}
	._c7 {
		display: flex;
		padding: 1rem;
	}
	._c8 {
		margin-right: 1rem;
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 500;
	}
	._c9 {
		display: flex;
		align-items: center;
	}
	._c9 > * + * {
		margin-left: 1rem;
	}
</style>
