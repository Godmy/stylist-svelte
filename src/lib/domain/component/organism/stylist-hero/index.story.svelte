<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import StylistLanding from './index.svelte';

	let {
		id = 'organisms-domain-stylist-hero',
		title = 'Domain / Stylist Hero',
		description = 'Domain entry hero composed from the Stylist landing surface.',
		controls = [
			{ name: 'rootDomainCount', type: 'number', defaultValue: 42 },
			{ name: 'storyModuleCount', type: 'number', defaultValue: 318 }
		]
	} = $props<{
		id?: string;
		title?: string;
		description?: string;
		controls?: SlotStory[];
	}>();
</script>

<Story {id} {title} {description} component={StylistLanding} category="Organisms" {controls}>
	{#snippet children(values: any)}
		<StylistLanding
			rootDomainCount={values.rootDomainCount}
			storyModuleCount={values.storyModuleCount}
		/>
	{/snippet}
</Story>
