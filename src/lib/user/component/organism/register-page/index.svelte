<script lang="ts">
	import type { RecipeRegister } from '$stylist/user/interface/recipe/register';
	import Register from '$stylist/user/component/molecule/register/index.svelte';
	import AuthLink from '$stylist/user/component/atom/auth-link/index.svelte';

	type Props = RecipeRegister & {
		title?: string;
		subtitle?: string;
	};

	let props: Props = $props();
</script>

<section class="c-register-page">
	<div class="c-register-page__card">
		<div class="c-register-page__header">
			<h1 class="c-register-page__title">{props.title ?? 'Create account'}</h1>
			{#if props.subtitle}
				<p class="c-register-page__subtitle">{props.subtitle}</p>
			{/if}
		</div>

		<Register
			formState={props.formState}
			onSubmit={props.onSubmit}
			class={props.class}
		/>

		{#if props.loginHref}
			<div class="c-register-page__footer">
				<p class="c-register-page__login-text">
					Already have an account?
					<AuthLink href={props.loginHref}>Sign in</AuthLink>
				</p>
			</div>
		{/if}
	</div>
</section>

<style>
	.c-register-page {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		padding: 1rem;
		background: linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%);
	}

	.c-register-page__card {
		width: 100%;
		max-width: 26rem;
		background: var(--color-background-primary, #fff);
		border-radius: 1rem;
		padding: 2rem;
		box-shadow:
			0 4px 6px -1px rgb(0 0 0 / 0.1),
			0 2px 4px -2px rgb(0 0 0 / 0.1);
	}

	.c-register-page__header {
		text-align: center;
		margin-bottom: 1.5rem;
	}

	.c-register-page__title {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--color-text-primary, #111827);
		margin: 0 0 0.25rem;
	}

	.c-register-page__subtitle {
		font-size: 0.875rem;
		color: var(--color-text-secondary, #6b7280);
		margin: 0;
	}

	.c-register-page__footer {
		margin-top: 1.25rem;
		text-align: center;
	}

	.c-register-page__login-text {
		font-size: 0.875rem;
		color: var(--color-text-secondary, #6b7280);
		margin: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.25rem;
	}
</style>
