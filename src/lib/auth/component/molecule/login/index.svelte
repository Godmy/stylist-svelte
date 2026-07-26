<script lang="ts">
	import type { RecipeLogin } from '$stylist/auth/interface/recipe/login';
	import createLoginState from '$stylist/auth/function/state/login/index.svelte';
	import LoginField from '$stylist/auth/component/atom/login-field/index.svelte';
	import SubmitButton from '$stylist/auth/component/atom/submit-button/index.svelte';
	import AuthError from '$stylist/auth/component/atom/auth-error/index.svelte';

	let props: RecipeLogin = $props();
	const state = createLoginState(props);
</script>

<div class={state.rootClass}>
	<form class="c-login__form" onsubmit={state.handleSubmit} novalidate>
		<LoginField
			label="Email"
			fieldType="email"
			id="login-email"
			name="email"
			value={state.email}
			oninput={(e) => (state.email = (e.currentTarget as HTMLInputElement).value)}
			autocomplete="email"
			placeholder="you@example.com"
			required
		/>
		<LoginField
			label="Password"
			fieldType="password"
			id="login-password"
			name="password"
			value={state.password}
			oninput={(e) => (state.password = (e.currentTarget as HTMLInputElement).value)}
			autocomplete="current-password"
			placeholder="••••••••"
			required
		/>
		{#if state.hasError}
			<AuthError message={state.error} />
		{/if}
		<SubmitButton isLoading={state.isLoading} label="Sign in" loadingLabel="Signing in..." />
	</form>
</div>

<style>
	.c-login {
		width: 100%;
	}

	.c-login__form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>

