<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import { FormStyleManager } from '$stylist/form/class/style-manager/forms';
	import LoginForm from './index.svelte';
</script>

<Story
	id="organisms-login-form"
	title="Organisms / Interaction / Forms / Login Form"
	component={LoginForm}
	category="Organisms/Interaction/Forms"
	description="A login form component for user authentication with email and password fields."
	tags={['form', 'login', 'authentication', 'signin']}
>
	{#snippet children(values: any)}
		<div class={FormStyleManager.container('sb-organisms-login-form p-4')}>
			<h1 class="mb-4 text-lg font-semibold">LoginForm Component</h1>

			<div class="mb-6 rounded border p-4">
				<h2 class="text-md mb-2 font-semibold">Interactive LoginForm</h2>
				<div class="mx-auto max-w-sm">
					<LoginForm />
				</div>
			</div>
		</div>
	{/snippet}
</Story>
