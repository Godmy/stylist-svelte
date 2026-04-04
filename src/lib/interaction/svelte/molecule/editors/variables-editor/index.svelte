<script lang="ts">
	import { Button, Icon } from '$stylist';
	import { createVariablesEditorState } from '$stylist/interaction/function/state/variables-editor';
	import { VariablesEditorStyleManager } from '$stylist/interaction/class/style-manager/variables-editor';

	type BaseComponentProps = {
		class?: string;
		'data-testid'?: string;
	};

	type Props = BaseComponentProps & {
		variables?: Record<string, any>;
		height?: string;
		onChange?: (variables: Record<string, any>) => void;
	};

	let {
		variables = {},
		height = '150px',
		class: className = '',
		onChange
	}: Props = $props();

	const state = createVariablesEditorState({
		variables,
		height,
		class: className,
		onChange
	});
</script>

<div class={state.rootClasses}>
	<div class={VariablesEditorStyleManager.getToolbarClass()}>
		<div class="flex items-center space-x-1">
			<span class={VariablesEditorStyleManager.getLabelClass()}>Query Variables</span>
		</div>
		<div class="flex items-center space-x-1">
			<Button
				variant="ghost"
				size="sm"
				title="Format JSON"
				onclick={state.formatVariables}
			>
				<Icon name="align-left" class="h-4 w-4" />
			</Button>
			<Button
				variant="ghost"
				size="sm"
				title="Load Example"
				onclick={state.loadExample}
			>
				<Icon name="file-text" class="h-4 w-4" />
			</Button>
			<Button
				variant="ghost"
				size="sm"
				title="Clear Variables"
				onclick={state.clearVariables}
			>
				<Icon name="x" class="h-4 w-4" />
			</Button>
		</div>
	</div>

	<div class="relative" style="height: {height}">
		<textarea
			value={state.variablesContent}
			oninput={state.handleInput}
			class={state.textareaClasses}
			style="font-family: monospace; tab-size: 2;"
			placeholder={state.placeholderText}
			spellcheck={false}
		></textarea>

		{#if !state.variablesContent || state.variablesContent === '{}'}
			<div class={VariablesEditorStyleManager.getPlaceholderClasses()}>
				<div class={VariablesEditorStyleManager.getPlaceholderContentClasses()}>
					<Icon name="file-json" class={VariablesEditorStyleManager.getIconClasses()} />
					<p class="text-xs">Variables (JSON)</p>
				</div>
			</div>
		{/if}

		{#if !state.isValid}
			<div class={VariablesEditorStyleManager.getInvalidBadgeClasses()}>
				Invalid JSON
			</div>
		{/if}
	</div>
</div>

<style>
	.variables-editor {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.toolbar {
		flex-shrink: 0;
	}

	textarea {
		font-family: monospace;
	}
</style>
