<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import { IMAGE_CAPTION_STORY_PRESETS } from '$stylist/image/const/preset/image-caption';

	import ImageCaption from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'preset',
			label: 'Preset',
			type: 'select',
			options: IMAGE_CAPTION_STORY_PRESETS.map((preset) => preset.id),
			defaultValue: IMAGE_CAPTION_STORY_PRESETS[0].id
		}
	];

	function findPreset(id: string) {
		return (
			IMAGE_CAPTION_STORY_PRESETS.find((preset) => preset.id === id) ??
			IMAGE_CAPTION_STORY_PRESETS[0]
		);
	}
</script>

<Story
	id="atoms-image-caption"
	title="Image Caption"
	component={ImageCaption}
	category="Atoms"
	description="Изображение с подписью. Переключайте пресеты, чтобы увидеть готовые сочетания rounded/bordered/shadow на реальных ассетах домена."
	{controls}
>
	{#snippet children(values: any)}
		{@const preset = findPreset(values.preset)}
		<ImageCaption
			imageSrc={preset.src}
			imageAlt={preset.alt}
			caption={preset.caption}
			rounded={preset.rounded}
			bordered={preset.bordered}
			shadow={preset.shadow}
		/>
	{/snippet}
</Story>
