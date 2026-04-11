<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import StylistMenu from './index.svelte';

	interface StoryProps {
		class?: string;
		triggerIcon?: string;
		avatarLabel?: string;
		avatarName?: string;
		avatarEmail?: string;
		onItemClick?: (item: { id: string; label: string; icon: string }) => void;
		onFunctionalTabClick?: (tabId: 'architecture' | 'information' | 'interaction') => void;
		onAtomicTabClick?: (tabId: 'atoms' | 'molecules' | 'organisms') => void;
		onThemeButtonClick?: () => void;
		onSettingsButtonClick?: () => void;
		onAvatarProfileClick?: () => void;
		onAvatarSettingsClick?: () => void;
		onAvatarLogoutClick?: () => void;
	}

	let {
		class: className = '',
		triggerIcon = 'stylist-organism',
		avatarLabel = 'ME',
		avatarName = 'Dmitrii',
		avatarEmail = 'dmitrii@example.com',
		...restProps
	}: StoryProps = $props();

	function handleItemClick(item: { id: string; label: string; icon: string }) {
		console.log('Menu item clicked:', item);
	}

	function handleFunctionalTabClick(tabId: 'architecture' | 'information' | 'interaction') {
		console.log('Functional tab clicked:', tabId);
	}

	function handleAtomicTabClick(tabId: 'atoms' | 'molecules' | 'organisms') {
		console.log('Atomic tab clicked:', tabId);
	}

	function handleThemeButtonClick() {
		console.log('Theme button clicked');
	}

	function handleSettingsButtonClick() {
		console.log('Settings button clicked');
	}

	function handleAvatarProfileClick() {
		console.log('Avatar profile clicked');
	}

	function handleAvatarSettingsClick() {
		console.log('Avatar settings clicked');
	}

	function handleAvatarLogoutClick() {
		console.log('Avatar logout clicked');
	}
</script>

<Story
	component={StylistMenu}
	title="StylistMenu"
	category="Organisms/Control"
	description="Menu for switching stylist sections, atomic levels, and account actions."
>
	<div class="story-container">
		<div class="story-preview">
			<StylistMenu
				class={className}
				triggerIcon={triggerIcon}
				avatarLabel={avatarLabel}
				avatarName={avatarName}
				avatarEmail={avatarEmail}
				onItemClick={handleItemClick}
				onFunctionalTabClick={handleFunctionalTabClick}
				onAtomicTabClick={handleAtomicTabClick}
				onThemeButtonClick={handleThemeButtonClick}
				onSettingsButtonClick={handleSettingsButtonClick}
				onAvatarProfileClick={handleAvatarProfileClick}
				onAvatarSettingsClick={handleAvatarSettingsClick}
				onAvatarLogoutClick={handleAvatarLogoutClick}
				{...restProps}
			/>
		</div>
	</div>
</Story>

<style>
	.story-container {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 200px;
		padding: var(--spacing-6);
		background: var(--color-background-secondary);
	}

	.story-preview {
		width: 100%;
		max-width: 1200px;
	}
</style>
