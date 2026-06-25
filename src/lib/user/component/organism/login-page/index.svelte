<script lang="ts">
	import type { RecipeLogin } from '$stylist/user/interface/recipe/login';
	import Login from '$stylist/user/component/molecule/login/index.svelte';
	import AuthLink from '$stylist/user/component/atom/auth-link/index.svelte';

	type Props = RecipeLogin & {
		title?: string;
		subtitle?: string;
	};

	let props: Props = $props();
</script>

<section class="c-login-page">
	<div class="c-login-page__card">
		<div class="c-login-page__header">
			<h1 class="c-login-page__title">{props.title ?? 'Sign in'}</h1>
			{#if props.subtitle}
				<p class="c-login-page__subtitle">{props.subtitle}</p>
			{/if}
		</div>

		<Login
			formState={props.formState}
			onSubmit={props.onSubmit}
			class={props.class}
		/>

		{#if props.forgotPasswordHref || props.registerHref}
			<div class="c-login-page__footer">
				{#if props.forgotPasswordHref}
					<AuthLink href={props.forgotPasswordHref}>Forgot password?</AuthLink>
				{/if}
				{#if props.registerHref}
					<p class="c-login-page__register-text">
						Don't have an account?
						<AuthLink href={props.registerHref}>Sign up</AuthLink>
					</p>
				{/if}
			</div>
		{/if}
	</div>
</section>

<style>
	.c-login-page {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		padding: 1rem;
		background: linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%);
	}

	.c-login-page__card {
		width: 100%;
		max-width: 26rem;
		background: var(--color-background-primary, #fff);
		border-radius: 1rem;
		padding: 2rem;
		box-shadow:
			0 4px 6px -1px rgb(0 0 0 / 0.1),
			0 2px 4px -2px rgb(0 0 0 / 0.1);
	}

	.c-login-page__header {
		text-align: center;
		margin-bottom: 1.5rem;
	}

	.c-login-page__title {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--color-text-primary, #111827);
		margin: 0 0 0.25rem;
	}

	.c-login-page__subtitle {
		font-size: 0.875rem;
		color: var(--color-text-secondary, #6b7280);
		margin: 0;
	}

	.c-login-page__footer {
		margin-top: 1.25rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	.c-login-page__register-text {
		font-size: 0.875rem;
		color: var(--color-text-secondary, #6b7280);
		margin: 0;
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}
</style>
