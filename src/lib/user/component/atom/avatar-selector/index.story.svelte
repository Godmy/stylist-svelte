<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import AvatarSelector from './index.svelte';
	import type { TokenControllerType } from '$stylist/interaction/type/record/controller-type';

	const controls = [
		{
			name: 'src',
			type: 'text' as TokenControllerType,
			defaultValue: 'https://placehold.co/40x40',
			description: 'Avatar image URL'
		},
		{
			name: 'alt',
			type: 'text' as TokenControllerType,
			defaultValue: 'User avatar',
			description: 'Alt text for the avatar'
		},
		{
			name: 'size',
			type: 'select' as TokenControllerType,
			defaultValue: 'md',
			options: ['sm', 'md', 'lg', 'xl'],
			description: 'Size of the avatar'
		}
	];
</script>

<Story
	{controls}
	title="AvatarSelector Component"
	description="A component for selecting avatars with preview"
>
	{#snippet children(controlValues: any)}
		<div class="_c1">
			<AvatarSelector src={controlValues.src} alt={controlValues.alt} size={controlValues.size} />
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.5rem;
		background-color: var(--color-background-secondary);
		padding: 2rem;
	}
</style>
