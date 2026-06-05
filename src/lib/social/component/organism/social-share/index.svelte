<script lang="ts">
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';
	import Button from '$stylist/control/component/atom/button/index.svelte';
	import createSocialShareState from '$stylist/social/function/state/social-share/index.svelte';
	import type { Props } from '$stylist/social/type/struct/social-share/-props';

	let props: Props = $props();
	const state = createSocialShareState(props);
</script>

<div class="c-social-share {state.hostClass}" {...props}>
	<div class="c-social-share__row">
		<div class="c-social-share__share-wrap">
			<Button
				variant="ghost"
				size={props.size === 'sm' ? 'sm' : props.size === 'lg' ? 'lg' : 'md'}
				class="c-social-share__trigger {state.buttonClass}"
				onclick={state.toggleDropdown}
				aria-haspopup="true"
				aria-expanded={state.showDropdown}
			>
				{#if state.copied}
					<BaseIcon name="check" class={state.iconSizeClasses} />
				{:else}
					<BaseIcon name="share-2" class={state.iconSizeClasses} />
				{/if}
				<span class="c-social-share__sr-only">Share</span>
			</Button>

			{#if state.showDropdown}
				<div
					class="c-social-share__dropdown {state.dropdownClass}"
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="share-menu"
				>
					<div class="c-social-share__dropdown-list" role="none">
						{#each state.availablePlatforms as platform}
							{#if platform.enabled}
								<button
									type="button"
									class="c-social-share__platform-btn {platform.platform === 'copy' && state.copied
										? 'c-social-share__platform-btn--copied'
										: ''}"
									onclick={() => state.handleShare(platform.platform)}
									role="menuitem"
								>
									<platform.icon class="c-social-share__platform-icon" />
									<span>{platform.label}</span>
									{#if platform.platform === 'copy' && state.copied}
										<BaseIcon name="check" class="c-social-share__copied-check" />
									{/if}
								</button>
							{/if}
						{/each}
					</div>
				</div>
			{/if}
		</div>

		{#if props.showSave}
			<Button
				variant="ghost"
				size={props.size === 'sm' ? 'sm' : props.size === 'lg' ? 'lg' : 'md'}
				onclick={state.handleSave}
			>
				<BaseIcon name="bookmark" class={state.iconSizeClasses} />
				<span class="c-social-share__sr-only">Save</span>
			</Button>
		{/if}

		{#if props.showLike}
			<Button
				variant="ghost"
				size={props.size === 'sm' ? 'sm' : props.size === 'lg' ? 'lg' : 'md'}
				onclick={state.handleLike}
			>
				<BaseIcon name="heart" class={state.iconSizeClasses} />
				<span class="c-social-share__sr-only">Like</span>
			</Button>
		{/if}

		{#if props.showCopyLink}
			<Button
				variant="ghost"
				size={props.size === 'sm' ? 'sm' : props.size === 'lg' ? 'lg' : 'md'}
				onclick={state.copyLink}
				title={state.copied ? 'Copied!' : 'Copy link'}
			>
				{#if state.copied}
					<BaseIcon name="check" class={state.iconSizeClasses} />
				{:else}
					<BaseIcon name="link" class={state.iconSizeClasses} />
				{/if}
				<span class="c-social-share__sr-only">{state.copied ? 'Copied!' : 'Copy link'}</span>
			</Button>
		{/if}
	</div>

	{#if state.copied}
		<div class="c-social-share__copied-toast">Link copied to clipboard!</div>
	{/if}
</div>

<style>
	.c-social-share {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.c-social-share__row {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.c-social-share__share-wrap {
		position: relative;
	}

	.c-social-share__trigger {
		position: relative;
	}

	.c-social-share__sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	.c-social-share__dropdown {
		position: absolute;
		z-index: var(--z-index-docked, 10);
		margin-top: 0.5rem;
		width: 14rem;
		border-radius: 0.375rem;
		background: var(--color-background-primary);
		box-shadow:
			0 10px 15px -3px rgb(0 0 0 / 0.1),
			0 4px 6px -4px rgb(0 0 0 / 0.1);
		border: 1px solid rgb(0 0 0 / 0.05);
	}

	.c-social-share__dropdown-list {
		padding-block: 0.25rem;
	}

	.c-social-share__platform-btn {
		display: flex;
		width: 100%;
		align-items: center;
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
		color: var(--color-text-primary);
		background: none;
		border: none;
		cursor: pointer;
		text-align: left;
	}

	.c-social-share__platform-btn:hover {
		background: var(--color-background-secondary);
	}

	.c-social-share__platform-btn--copied {
		background: color-mix(in srgb, var(--color-success-500) 8%, transparent);
		color: var(--color-success-700, var(--color-success-600));
	}

	.c-social-share__platform-icon {
		width: 1.25rem;
		height: 1.25rem;
		margin-right: 0.75rem;
	}

	.c-social-share__copied-check {
		width: 1.25rem;
		height: 1.25rem;
		margin-left: auto;
		color: var(--color-success-500);
	}

	.c-social-share__copied-toast {
		display: inline-flex;
		border-radius: 9999px;
		background: color-mix(in srgb, var(--color-success-500) 12%, transparent);
		padding: 0.25rem 0.75rem;
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--color-success-700, var(--color-success-600));
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
</style>
