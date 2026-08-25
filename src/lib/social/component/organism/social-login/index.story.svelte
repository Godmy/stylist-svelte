<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import SocialLogin from './index.svelte';

	let {
		id = '',
		title = '',
		description = '',
		controls = [
			{ name: 'showEmailForm', type: 'boolean', defaultValue: true },
			{ name: 'showPasswordForm', type: 'boolean', defaultValue: true },
			{ name: 'showSignUp', type: 'boolean', defaultValue: true },
			{ name: 'showForgotPassword', type: 'boolean', defaultValue: true }
		]
	} = $props<{
		id?: string;
		title?: string;
		description?: string;
		controls?: SlotStory[];
	}>();

	type Provider =
		| 'google'
		| 'facebook'
		| 'github'
		| 'twitter'
		| 'linkedin'
		| 'apple'
		| 'microsoft'
		| 'slack';

	const providers: Provider[] = ['google', 'github', 'apple'];

	function handleProviderClick(provider: Provider) {
		console.log('Provider clicked:', provider);
	}

	function handleEmailLogin() {
		console.log('Email login');
	}

	function handleSignUp() {
		console.log('Sign up');
	}
</script>

<Story {id} {title} {description} component={SocialLogin} category="Organisms" {controls}>
	{#snippet children(values: any)}
		<section class="sb-organisms-social-login _c1">
			<div class="_c2">
				<p class="_c3">Primary Social Login Example</p>
				<p class="_c4">Interactive social login with customizable options.</p>

				<div class="_c5">
					<SocialLogin
						{providers}
						showEmailForm={values.showEmailForm}
						showPasswordForm={values.showPasswordForm}
						showSignUp={values.showSignUp}
						showForgotPassword={values.showForgotPassword}
						onEmailLogin={handleEmailLogin}
						onSignUp={handleSignUp}
					/>
				</div>
			</div>

			<div class="_c6">
				<h3 class="_c7">Social Login Variations</h3>
				<p class="_c8">Different social login configurations with various options.</p>

				<div class="_c9">
					<article class="_c10">
						<p class="_c11">Social Only</p>
						<div class="_c12">
							<SocialLogin {providers} showEmailForm={false} showPasswordForm={false} />
						</div>
					</article>

					<article class="_c10">
						<p class="_c11">Email Only</p>
						<div class="_c12">
							<SocialLogin
								providers={[]}
								showEmailForm={true}
								showPasswordForm={true}
								onEmailLogin={handleEmailLogin}
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
	._c12 {
		margin-left: auto;
		margin-right: auto;
		max-width: 28rem;
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
		margin-left: auto;
		margin-right: auto;
		margin-top: 1.5rem;
		max-width: 28rem;
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
