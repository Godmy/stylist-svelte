<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import TagInput from './index.svelte';

	type Props = {
		placeholder: string;
		disabled: boolean;
		maxTags: number;
		delimiter: string;
	};

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'placeholder',
			type: 'text',
			defaultValue: 'Enter tags...'
		},
		{
			name: 'disabled',
			type: 'boolean',
			defaultValue: false
		},
		{
			name: 'maxTags',
			type: 'number',
			defaultValue: 0
		},
		{
			name: 'delimiter',
			type: 'text',
			defaultValue: ','
		}
	];

	let currentTags = $state<string[]>(['svelte', 'design-system']);

	function handleInputChange(tags: string[]) {
		currentTags = tags;
		console.log('Tags changed:', tags);
	}
</script>

<Story
	id="organisms-tag-input"
	title="Organisms / Interaction / Input / Tag Input"
	component={TagInput}
	category="Organisms/Interaction/Input"
	description="A tag input component for managing tags."
	tags={['input', 'tags', 'multiselect']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<h3 class="_c2">Current Tags: {currentTags.join(', ')}</h3>
			<TagInput
				tags={currentTags}
				placeholder={values.placeholder}
				disabled={values.disabled}
				maxTags={values.maxTags}
				delimiter={values.delimiter}
				onChange={handleInputChange as any}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1rem;
	}
	._c2 {
		margin-bottom: 0.5rem;
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
	}
</style>
