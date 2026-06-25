<script lang="ts">
	import type { RecipeForgotPassword } from '$stylist/user/interface/recipe/forgot-password';
	import ForgotPassword from '$stylist/user/component/molecule/forgot-password/index.svelte';

	type Props = RecipeForgotPassword & {
		title?: string;
		subtitle?: string;
	};

	let props: Props = $props();
</script>

<section class="c-forgot-password-page">
	<div class="c-forgot-password-page__card">
		<div class="c-forgot-password-page__header">
			<h1 class="c-forgot-password-page__title">{props.title ?? 'Forgot password?'}</h1>
			{#if props.subtitle}
				<p class="c-forgot-password-page__subtitle">{props.subtitle}</p>
			{:else}
				<p class="c-forgot-password-page__subtitle">
					No worries, we'll send you reset instructions.
				</p>
			{/if}
		</div>

		<ForgotPassword
			formState={props.formState}
			onSubmit={props.onSubmit}
			loginHref={props.loginHref}
			class={props.class}
		/>
	</div>
</section>

<style>
	.c-forgot-password-page {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		padding: 1rem;
		background: linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%);
	}

	.c-forgot-password-page__card {
		width: 100%;
		max-width: 26rem;
		background: var(--color-background-primary, #fff);
		border-radius: 1rem;
		padding: 2rem;
		box-shadow:
			0 4px 6px -1px rgb(0 0 0 / 0.1),
			0 2px 4px -2px rgb(0 0 0 / 0.1);
	}

	.c-forgot-password-page__header {
		text-align: center;
		margin-bottom: 1.5rem;
	}

	.c-forgot-password-page__title {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--color-text-primary, #111827);
		margin: 0 0 0.25rem;
	}

	.c-forgot-password-page__subtitle {
		font-size: 0.875rem;
		color: var(--color-text-secondary, #6b7280);
		margin: 0;
	}
</style>
