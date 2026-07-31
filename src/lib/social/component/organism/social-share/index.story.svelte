<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import SocialShare from './index.svelte';

	let {
		id = '',
		title = '',
		description = '',
		controls = [
			{ name: 'showCopyLink', type: 'boolean', defaultValue: true },
			{ name: 'showEmbed', type: 'boolean', defaultValue: false },
			{ name: 'showSave', type: 'boolean', defaultValue: false },
			{ name: 'showLike', type: 'boolean', defaultValue: false }
		]
	} = $props<{
		id?: string;
		title?: string;
		description?: string;
		controls?: SlotStory[];
	}>();

	type SocialPlatform =
		| 'facebook'
		| 'twitter'
		| 'linkedin'
		| 'pinterest'
		| 'reddit'
		| 'whatsapp'
		| 'telegram'
		| 'email'
		| 'copy';

	const url = 'https://example.com';
	const pageTitle = 'Example Page';
	const pageDescription = 'This is a description of the example page.';
	const platforms: SocialPlatform[] = ['facebook', 'twitter', 'linkedin', 'email', 'copy'];

	function handleShare(platform: SocialPlatform) {
		console.log('Shared on:', platform);
	}

	function handleSave() {
		console.log('Saved');
	}

	function handleLike() {
		console.log('Liked');
	}
</script>

<Story {id} {title} {description} component={SocialShare} category="Organisms" {controls}>
	{#snippet children(values: any)}
		<section class="sb-organisms-social-share _c1">
			<div class="_c2">
				<p class="_c3">Primary Social Share Example</p>
				<p class="_c4">Interactive social share with customizable options.</p>

				<div class="_c5">
					<SocialShare
						{url}
						title={pageTitle}
						description={pageDescription}
						{platforms}
						showCopyLink={values.showCopyLink}
						showEmbed={values.showEmbed}
						showSave={values.showSave}
						showLike={values.showLike}
						onShare={handleShare}
						onSave={handleSave}
						onLike={handleLike}
					/>
				</div>
			</div>

			<div class="_c6">
				<h3 class="_c7">Social Share Variations</h3>
				<p class="_c8">Different social share configurations with various options.</p>

				<div class="_c9">
					<article class="_c10">
						<p class="_c11">Minimal</p>
						<div>
							<SocialShare
								{url}
								title={pageTitle}
								platforms={['twitter', 'facebook']}
								showCopyLink={false}
								onShare={handleShare}
							/>
						</div>
					</article>

					<article class="_c10">
						<p class="_c11">Full Featured</p>
						<div>
							<SocialShare
								{url}
								title={pageTitle}
								description={pageDescription}
								{platforms}
								showCopyLink={true}
								showEmbed={true}
								showSave={true}
								showLike={true}
								onShare={handleShare}
								onSave={handleSave}
								onLike={handleLike}
							/>
						</div>
					</article>
				</div>
			</div>
		</section>
	{/snippet}
</Story>

<style>
	._c1 {
		display: grid;
		width: 100%;
		gap: 2rem;
	}
	@media (min-width: 1024px) {
		._c1 {
			grid-template-columns: 1fr 1fr;
		}
	}
	._c10 {
		border-radius: 1rem;
		border-width: 1px;
		border-style: dashed;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1rem;
	}
	._c11 {
		margin-bottom: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c2 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c3 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		letter-spacing: 0.025em;
		color: var(--color-text-secondary);
		text-transform: uppercase;
	}
	._c4 {
		margin-top: 0.25rem;
		color: var(--color-text-primary);
	}
	._c5 {
		margin-top: 1.5rem;
	}
	._c6 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c7 {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c8 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
	._c9 {
		margin-top: 1.25rem;
	}
	._c9 > * + * {
		margin-top: 1rem;
	}
</style>
