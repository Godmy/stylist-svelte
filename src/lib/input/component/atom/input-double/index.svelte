<script lang="ts">
	import type { SlotInputDouble as IInputDoubleProps } from '$stylist/input/interface/slot/input-double';
	import createInputDoubleState from '$stylist/input/function/state/input-double/index.svelte';

	let props: IInputDoubleProps = $props();
	const state = createInputDoubleState(props);
</script>

<div class={state.containerClasses}>
	<div class="flex flex-1 flex-col gap-1">
		{#if props.label1 ?? 'Поле 1'}
			<label
				for={props.id1}
				class={state.labelClasses}
				data-size={props.size ?? 'md'}
				data-disabled={(props.disabled1 ?? false) ? 'true' : 'false'}
			>
				{props.label1 ?? 'Поле 1'}
				{#if props.required1}
					<span class={state.requiredIndicatorClasses} aria-hidden="true">*</span>
				{/if}
			</label>
		{/if}
		<input
			id={props.id1}
			type={props.type1 ?? 'text'}
			bind:value={props.value1}
			placeholder={props.placeholder1}
			disabled={props.disabled1 ?? false}
			required={props.required1 ?? false}
			class={`${state.inputClasses1} w-full`}
			aria-describedby={state.hasError1 ? state.errorId1 : undefined}
			aria-invalid={state.hasError1 ? 'true' : 'false'}
			aria-required={props.required1 ? 'true' : 'false'}
		/>
		{#if state.hasError1 && (props.errors1?.length ?? 0) > 0}
			<p id={state.errorId1} class={state.errorTextClasses} role="alert">
				{#each props.errors1 ?? [] as error_msg, i}
					{error_msg}{i < (props.errors1?.length ?? 0) - 1 ? ' ' : ''}
				{/each}
			</p>
		{/if}
	</div>
	<div class="flex flex-1 flex-col gap-1">
		{#if props.label2 ?? 'Поле 2'}
			<label
				for={props.id2}
				class={state.labelClasses}
				data-size={props.size ?? 'md'}
				data-disabled={(props.disabled2 ?? false) ? 'true' : 'false'}
			>
				{props.label2 ?? 'Поле 2'}
				{#if props.required2}
					<span class={state.requiredIndicatorClasses} aria-hidden="true">*</span>
				{/if}
			</label>
		{/if}
		<input
			id={props.id2}
			type={props.type2 ?? 'text'}
			bind:value={props.value2}
			placeholder={props.placeholder2}
			disabled={props.disabled2 ?? false}
			required={props.required2 ?? false}
			class={`${state.inputClasses2} w-full`}
			aria-describedby={state.hasError2 ? state.errorId2 : undefined}
			aria-invalid={state.hasError2 ? 'true' : 'false'}
			aria-required={props.required2 ? 'true' : 'false'}
		/>
		{#if state.hasError2 && (props.errors2?.length ?? 0) > 0}
			<p id={state.errorId2} class={state.errorTextClasses} role="alert">
				{#each props.errors2 ?? [] as error_msg, i}
					{error_msg}{i < (props.errors2?.length ?? 0) - 1 ? ' ' : ''}
				{/each}
			</p>
		{/if}
	</div>
</div>

<style>
	.input-field-label {
		display: block;
		margin-block-end: 0.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.input-field-label[data-size='xs'] {
		font-size: var(--text-size-xs, 0.75rem);
	}

	.input-field-label[data-size='sm'],
	.input-field-label[data-size='1/3'],
	.input-field-label[data-size='2/5'] {
		font-size: var(--text-size-sm, 0.875rem);
	}

	.input-field-label[data-size='md'],
	.input-field-label[data-size='1/2'],
	.input-field-label[data-size='3/5'] {
		font-size: var(--text-size-md, 1rem);
	}

	.input-field-label[data-size='lg'],
	.input-field-label[data-size='2/3'] {
		font-size: var(--text-size-lg, 1.125rem);
	}

	.input-field-label[data-size='xl'],
	.input-field-label[data-size='3/4'] {
		font-size: var(--text-size-xl, 1.25rem);
	}

	.input-field-label[data-size='2xl'],
	.input-field-label[data-size='full'] {
		font-size: var(--text-size-2xl, 1.5rem);
	}

	.input-field-label[data-disabled='true'] {
		color: var(--color-text-tertiary);
		cursor: not-allowed;
	}

	.input-field-required {
		margin-inline-start: 0.25rem;
		color: var(--color-danger-500);
	}

	.input-field-error-text {
		margin-block-start: 0.25rem;
		font-size: var(--text-size-xs, 0.75rem);
		color: var(--color-danger-600);
	}
</style>
