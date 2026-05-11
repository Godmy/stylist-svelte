<script lang="ts">
	import { Story } from '$stylist/playground/component';
	import { FormStyleManager } from '$stylist/form';
	import FormWithValidation from './index.svelte';
</script>

<Story
	id="organisms-form-with-validation"
	title="Organisms / Interaction / Forms / Form With Validation"
	component={FormWithValidation}
	category="Organisms/Interaction/Forms"
	description="A form component with comprehensive validation for various input types."
	tags={['form', 'validation', 'inputs']}
>
	{#snippet children(values: any)}
		<div class={FormStyleManager.container('sb-organisms-form-with-validation p-4')}>
			<h1 class="mb-4 text-lg font-semibold">FormWithValidation Component</h1>

			<div class="mb-6 rounded border p-4">
				<h2 class="text-md mb-2 font-semibold">Interactive FormWithValidation</h2>
				<div class="max-w-lg">
					<FormWithValidation />
				</div>
			</div>
		</div>
	{/snippet}
</Story>
