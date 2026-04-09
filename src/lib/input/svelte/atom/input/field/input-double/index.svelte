<script lang="ts">
	import type { IInputDoubleProps } from '$stylist/input/interface/component/input/other';
	import { createInputDoubleState } from '$stylist/input/function/state/input-double';

	let props: IInputDoubleProps = $props();
	const state = createInputDoubleState(props);
</script>

<div class={state.containerClasses}>
	<div class="flex flex-col gap-1 flex-1">
		{#if props.label1 ?? 'Поле 1'}
			<label for={props.id1} class={state.labelClasses}>
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
	<div class="flex flex-col gap-1 flex-1">
		{#if props.label2 ?? 'Поле 2'}
			<label for={props.id2} class={state.labelClasses}>
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
