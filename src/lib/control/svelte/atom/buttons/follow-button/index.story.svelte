<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
	import FollowButton from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'isFollowing', type: 'boolean', defaultValue: false },
		{ name: 'showText', type: 'boolean', defaultValue: true },
		{ name: 'variant', type: 'select', defaultValue: 'primary', options: ['primary', 'secondary', 'outline', 'ghost'] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] },
		{ name: 'disabled', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	{controls}
	component={FollowButton}
	title="FollowButton"
	category="Atoms/Interaction/Controls/Buttons"
	description="Toggle follow/unfollow action button"
>
	{#snippet children(values: any)}
		<FollowButton
			isFollowing={values.isFollowing as boolean}
			showText={values.showText as boolean}
			variant={values.variant as 'primary' | 'secondary' | 'outline' | 'ghost'}
			size={values.size as 'sm' | 'md' | 'lg'}
			disabled={values.disabled as boolean}
		/>
	{/snippet}
</Story>



