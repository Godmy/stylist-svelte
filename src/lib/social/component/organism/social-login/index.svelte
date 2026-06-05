<script lang="ts">
	import type { Props } from '$stylist/social/type/struct/social-login/-props';
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';
	import { TOKEN_SOCIAL_ICON } from '$stylist/social/const/enum/icon';
	import createSocialLoginState from '$stylist/social/function/state/social-login/index.svelte';

	let props: Props = $props();
	const state = createSocialLoginState(props);
</script>

<div class="c-social-login {state.hostClass}" {...props}>
	<div class="c-social-login__card">
		<div class="c-social-login__hero">
			<div class="c-social-login__hero-icon-wrap">
				<BaseIcon
					name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'user-round-plus') ?? 'user-round-plus'}
					class="c-social-login__hero-icon"
				/>
			</div>
			<h2 class="c-social-login__title">{props.title ?? 'Sign in to your account'}</h2>
			{#if props.description}
				<p class="c-social-login__description">{props.description}</p>
			{/if}
		</div>

		{#if (props.providers ?? []).length > 0}
			<div class="c-social-login__providers">
				<p class="c-social-login__providers-label">{props.socialLoginText ?? 'Or continue with'}</p>
				<div class="c-social-login__provider-list">
					{#each props.providers ?? [] as provider}
						{@const config = state.providerConfigs[provider]}
						<button
							type="button"
							class="c-social-login__provider-btn {state.buttonClass}"
							style={`border-color: ${config.borderColor ? 'var(' + config.borderColor.replace(/^border-\[(.+)\]$/, '$1') + ')' : 'var(--color-border-primary)'}`}
							onclick={() => state.handleSocialLogin(provider)}
							disabled={state.isLoading}
							aria-label={`Sign in with ${config.name}`}
						>
							{#if config.icon}
								<config.icon class="c-social-login__provider-icon" />
							{/if}
							Continue with {config.name}
						</button>
					{/each}
				</div>
			</div>
		{/if}

		{#if props.showEmailForm || props.showPasswordForm}
			<div class="c-social-login__divider-section">
				<div class="c-social-login__divider">
					<div class="c-social-login__divider-line"></div>
					<div class="c-social-login__divider-label">
						<span class="c-social-login__divider-text"
							>{props.emailLoginText ?? 'Or sign in with email'}</span
						>
					</div>
				</div>

				<form
					class="c-social-login__form {state.formClass}"
					onsubmit={(event) => {
						event.preventDefault();
						state.handleEmailLogin();
					}}
				>
					<div class="c-social-login__field">
						<label for="email" class="c-social-login__label">Email address</label>
						<div class="c-social-login__input-wrap">
							<div class="c-social-login__input-icon-wrap">
								<BaseIcon
									name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'mail') ?? 'mail'}
									class="c-social-login__input-icon"
								/>
							</div>
							<input
								id="email"
								name="email"
								type="email"
								autocomplete="email"
								required
								class="c-social-login__input {state.inputClass}"
								placeholder="name@company.com"
								value={state.email}
								oninput={(e) => (state.email = (e.target as HTMLInputElement).value)}
							/>
						</div>
					</div>

					{#if props.showPasswordForm}
						<div class="c-social-login__field">
							<label for="password" class="c-social-login__label">Password</label>
							<div class="c-social-login__input-wrap">
								<div class="c-social-login__input-icon-wrap">
									<BaseIcon
										name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'lock') ?? 'lock'}
										class="c-social-login__input-icon"
									/>
								</div>
								<input
									id="password"
									name="password"
									type="password"
									autocomplete="current-password"
									required
									class="c-social-login__input {state.inputClass}"
									placeholder="••••••••"
									value={state.password}
									oninput={(e) => (state.password = (e.target as HTMLInputElement).value)}
								/>
							</div>
						</div>

						{#if props.showForgotPassword}
							<div class="c-social-login__forgot-wrap">
								<button
									type="button"
									class="c-social-login__forgot-link"
									onclick={state.handleForgotPassword}
								>
									Forgot your password?
								</button>
							</div>
						{/if}
					{/if}

					<div class="c-social-login__remember-row">
						<input
							id="remember-me"
							name="remember-me"
							type="checkbox"
							class="c-social-login__checkbox"
							bind:checked={state.rememberMe}
						/>
						<label for="remember-me" class="c-social-login__remember-label">Remember me</label>
					</div>

					<button
						type="submit"
						class="c-social-login__submit {state.isLoading
							? 'c-social-login__submit--loading'
							: ''}"
						disabled={state.isLoading}
					>
						{#if state.isLoading}
							<BaseIcon
								name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'loader-2') ?? 'loader-2'}
								class="c-social-login__loader-icon"
							/>
							Signing in...
						{:else}
							Sign in
						{/if}
					</button>
				</form>
			</div>
		{/if}

		{#if props.showSignUp}
			<div class="c-social-login__signup">
				<p class="c-social-login__signup-text">
					Don't have an account?
					<button type="button" class="c-social-login__signup-link" onclick={state.handleSignUp}
						>Sign up</button
					>
				</p>
			</div>
		{/if}
	</div>
</div>

<style>
	.c-social-login {
	}

	.c-social-login__card {
		max-width: 28rem;
		margin: 0 auto;
		border-radius: 0.5rem;
		background: var(--color-background-primary);
		padding: 2rem;
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
	}

	.c-social-login__hero {
		text-align: center;
	}

	.c-social-login__hero-icon-wrap {
		display: flex;
		width: 3rem;
		height: 3rem;
		align-items: center;
		justify-content: center;
		border-radius: 9999px;
		background: color-mix(in srgb, var(--color-primary-500) 12%, transparent);
		margin: 0 auto;
	}

	.c-social-login__hero-icon {
		width: 1.5rem;
		height: 1.5rem;
		color: var(--color-primary-600);
	}

	.c-social-login__title {
		margin: 1rem 0 0;
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--color-text-primary);
	}

	.c-social-login__description {
		margin: 0.5rem 0 0;
		color: var(--color-text-secondary);
	}

	.c-social-login__providers {
		margin-top: 2rem;
	}

	.c-social-login__providers-label {
		margin-bottom: 1rem;
		text-align: center;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.c-social-login__provider-list {
		display: grid;
		grid-template-columns: 1fr;
		gap: 0.75rem;
	}

	.c-social-login__provider-btn {
		display: inline-flex;
		width: 100%;
		justify-content: center;
		align-items: center;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.375rem;
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
		background: var(--color-background-primary);
		cursor: pointer;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	.c-social-login__provider-btn:hover {
		opacity: 0.9;
	}
	.c-social-login__provider-btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.c-social-login__provider-icon {
		width: 1.25rem;
		height: 1.25rem;
		margin-right: 0.5rem;
	}

	.c-social-login__divider-section {
		margin-top: 1.5rem;
	}

	.c-social-login__divider {
		position: relative;
	}

	.c-social-login__divider-line {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
	}
	.c-social-login__divider-line::after {
		content: '';
		display: block;
		width: 100%;
		border-top: 1px solid var(--color-border-primary);
	}

	.c-social-login__divider-label {
		position: relative;
		display: flex;
		justify-content: center;
	}

	.c-social-login__divider-text {
		background: var(--color-background-primary);
		padding-inline: 0.5rem;
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}

	.c-social-login__form {
		margin-top: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.c-social-login__field {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.c-social-login__label {
		display: block;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.c-social-login__input-wrap {
		position: relative;
		margin-top: 0.25rem;
		border-radius: 0.375rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	.c-social-login__input-icon-wrap {
		pointer-events: none;
		position: absolute;
		inset-block: 0;
		left: 0;
		display: flex;
		align-items: center;
		padding-left: 0.75rem;
	}
	.c-social-login__input-icon {
		width: 1.25rem;
		height: 1.25rem;
		color: var(--color-text-tertiary, var(--color-text-secondary));
	}

	.c-social-login__input {
		display: block;
		width: 100%;
		border-radius: 0.375rem;
		border: 1px solid var(--color-border-primary);
		padding: 0.5rem 0.75rem 0.5rem 2.5rem;
		font-size: 0.875rem;
		font-family: inherit;
	}

	.c-social-login__input:focus {
		outline: none;
		border-color: var(--color-primary-500);
		box-shadow: 0 0 0 1px var(--color-primary-500);
	}

	.c-social-login__forgot-wrap {
		display: flex;
		justify-content: flex-end;
	}
	.c-social-login__forgot-link {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-primary-600);
		background: none;
		border: none;
		cursor: pointer;
	}
	.c-social-login__forgot-link:hover {
		color: var(--color-primary-500);
	}

	.c-social-login__remember-row {
		display: flex;
		align-items: center;
	}
	.c-social-login__checkbox {
		width: 1rem;
		height: 1rem;
		border-radius: 0.25rem;
		border: 1px solid var(--color-border-primary);
		accent-color: var(--color-primary-600);
	}
	.c-social-login__remember-label {
		margin-left: 0.5rem;
		font-size: 0.875rem;
		color: var(--color-text-primary);
	}

	.c-social-login__submit {
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
		border-radius: 0.375rem;
		border: none;
		background: var(--color-primary-600);
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-inverse);
		cursor: pointer;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	.c-social-login__submit:hover {
		background: var(--color-primary-700);
	}
	.c-social-login__submit:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
	.c-social-login__submit--loading {
		cursor: not-allowed;
		opacity: 0.75;
	}

	.c-social-login__loader-icon {
		width: 1rem;
		height: 1rem;
		margin-right: 0.5rem;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.c-social-login__signup {
		margin-top: 1.5rem;
		text-align: center;
	}
	.c-social-login__signup-text {
		font-size: 0.875rem;
		color: var(--color-text-secondary);
		margin: 0;
	}
	.c-social-login__signup-link {
		font-weight: 500;
		color: var(--color-primary-600);
		background: none;
		border: none;
		cursor: pointer;
	}
	.c-social-login__signup-link:hover {
		color: var(--color-primary-500);
	}
</style>
