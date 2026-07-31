<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';

	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import RecipeComponentPreview from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'title', type: 'text', defaultValue: 'Primary Button' },

		{ name: 'description', type: 'text', defaultValue: 'Button used for key actions in forms.' },

		{ name: 'code', type: 'text', defaultValue: '<Button variant="primary">Save</Button>' },

		{
			name: 'language',

			type: 'select',

			options: ['svelte', 'typescript', 'html'],

			defaultValue: 'svelte'
		},

		{ name: 'showCode', type: 'boolean', defaultValue: false },

		{
			name: 'demoVariant',

			type: 'select',

			options: ['primary', 'secondary', 'danger'],

			defaultValue: 'primary'
		}
	];

	function variantClass(variant: string): string {
		if (variant === 'secondary') return 'bg-gray-800 text-white';

		if (variant === 'danger') return 'bg-red-600 text-white';

		return 'bg-blue-600 text-white';
	}
</script>

<Story
	id="molecules-component-preview"
	title="Molecules / Information / Development / RecipeComponentPreview"
	component={RecipeComponentPreview}
	category="Molecules/Information/Development"
	description="Preview card with demo/codetab switch and configurable snippet text."
	{controls}
>
	{#snippet children(args: any)}
		<div class="_c1">
			<RecipeComponentPreview
				title={args.title}
				description={args.description}
				code={args.code}
				language={args.language}
				showCode={args.showCode}
			>
				{#snippet componentDemo()}
					<button class={`${variantClass(args.demoVariant)} _c2`} type="button"
						>Preview action</button
					>
				{/snippet}
			</RecipeComponentPreview>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.75rem;

		background-color: #f9fafb;

		padding: 1rem;
	}

	._c2 {
		border-radius: 0.25rem;
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
</style>
