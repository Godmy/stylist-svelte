<script lang="ts">
	import type { RecipeRegister } from '$stylist/user/interface/recipe/register';
	import createRegisterState from '$stylist/user/function/state/register/index.svelte';
	import LoginField from '$stylist/user/component/atom/login-field/index.svelte';
	import SubmitButton from '$stylist/user/component/atom/submit-button/index.svelte';
	import AuthError from '$stylist/user/component/atom/auth-error/index.svelte';

	let props: RecipeRegister = $props();
	const state = createRegisterState(props);
</script>

<div class={state.rootClass}>
	<form class="c-register__form" onsubmit={state.handleSubmit} novalidate>
		<LoginField
			label="Username"
			fieldType="text"
			id="register-username"
			value={state.username}
			oninput={(e) => (state.username = (e.currentTarget as HTMLInputElement).value)}
			autocomplete="username"
			placeholder="johndoe"
			required
		/>
		<LoginField
			label="Email"
			fieldType="email"
			id="register-email"
			value={state.email}
			oninput={(e) => (state.email = (e.currentTarget as HTMLInputElement).value)}
			autocomplete="email"
			placeholder="you@example.com"
			required
		/>
		<div class="c-register__name-row">
			<LoginField
				label="First name"
				fieldType="text"
				id="register-firstname"
				value={state.firstName}
				oninput={(e) => (state.firstName = (e.currentTarget as HTMLInputElement).value)}
				autocomplete="given-name"
				placeholder="John"
			/>
			<LoginField
				label="Last name"
				fieldType="text"
				id="register-lastname"
				value={state.lastName}
				oninput={(e) => (state.lastName = (e.currentTarget as HTMLInputElement).value)}
				autocomplete="family-name"
				placeholder="Doe"
			/>
		</div>
		<LoginField
			label="Password"
			fieldType="password"
			id="register-password"
			value={state.password}
			oninput={(e) => (state.password = (e.currentTarget as HTMLInputElement).value)}
			autocomplete="new-password"
			placeholder="••••••••"
			required
		/>
		<LoginField
			label="Confirm password"
			fieldType="password"
			id="register-confirm-password"
			value={state.confirmPassword}
			oninput={(e) => (state.confirmPassword = (e.currentTarget as HTMLInputElement).value)}
			autocomplete="new-password"
			placeholder="••••••••"
			required
		/>
		{#if state.hasError}
			<AuthError message={state.error} />
		{/if}
		<SubmitButton
			isLoading={state.isLoading}
			label="Create account"
			loadingLabel="Creating account..."
		/>
	</form>
</div>

<style>
	.c-register {
		width: 100%;
	}

	.c-register__form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.c-register__name-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.75rem;
	}
</style>
