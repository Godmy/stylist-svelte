<script lang="ts">
	import type { RecipeForgotPassword } from '$stylist/user/interface/recipe/forgot-password';
	import createForgotPasswordState from '$stylist/user/function/state/forgot-password/index.svelte';
	import LoginField from '$stylist/user/component/atom/login-field/index.svelte';
	import SubmitButton from '$stylist/user/component/atom/submit-button/index.svelte';
	import AuthError from '$stylist/user/component/atom/auth-error/index.svelte';
	import AuthLink from '$stylist/user/component/atom/auth-link/index.svelte';

	let props: RecipeForgotPassword = $props();
	const state = createForgotPasswordState(props);
</script>

<div class={state.rootClass}>
	{#if state.isSuccess}
		<div class="c-forgot-password__success">
			<div class="c-forgot-password__success-icon" aria-hidden="true">✓</div>
			<h3 class="c-forgot-password__success-title">Check your email</h3>
			<p class="c-forgot-password__success-text">
				We sent reset instructions to <strong>{state.submittedEmail}</strong>
			</p>
			<button
				type="button"
				class="c-forgot-password__retry"
				onclick={state.handleTryAgain}
			>
				Didn't receive it? Try again
			</button>
		</div>
	{:else}
		<form class="c-forgot-password__form" onsubmit={state.handleSubmit} novalidate>
			<LoginField
				label="Email address"
				fieldType="email"
				id="forgot-email"
				value={state.email}
				oninput={(e) => (state.email = (e.currentTarget as HTMLInputElement).value)}
				autocomplete="email"
				placeholder="you@example.com"
				required
			/>
			{#if state.hasError}
				<AuthError message={state.error} />
			{/if}
			<SubmitButton
				isLoading={state.isLoading}
				label="Send reset link"
				loadingLabel="Sending..."
			/>
			{#if props.loginHref}
				<div class="c-forgot-password__back">
					<AuthLink href={props.loginHref}>← Back to sign in</AuthLink>
				</div>
			{/if}
		</form>
	{/if}
</div>

<style>
	.c-forgot-password {
		width: 100%;
	}

	.c-forgot-password__form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.c-forgot-password__back {
		text-align: center;
	}

	.c-forgot-password__success {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		text-align: center;
	}

	.c-forgot-password__success-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		background: #d1fae5;
		color: #059669;
		font-size: 1.25rem;
		font-weight: 700;
	}

	.c-forgot-password__success-title {
		font-size: 1.125rem;
		font-weight: 700;
		color: var(--color-text-primary, #111827);
		margin: 0;
	}

	.c-forgot-password__success-text {
		font-size: 0.875rem;
		color: var(--color-text-secondary, #6b7280);
		margin: 0;
	}

	.c-forgot-password__retry {
		background: none;
		border: none;
		cursor: pointer;
		color: var(--color-primary-600, #4f46e5);
		font-size: 0.875rem;
		font-weight: 500;
		padding: 0;
		text-decoration: underline;
	}

	.c-forgot-password__retry:hover {
		color: var(--color-primary-700, #4338ca);
	}
</style>
