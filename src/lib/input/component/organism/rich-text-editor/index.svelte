<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import type { RichTextEditorStateProps } from '$stylist/input/interface/recipe/rich-text-editor-state-props';
	import createRichTextEditorState from '$stylist/input/function/state/rich-text-editor/index.svelte';

	const Bold = 'bold';
	const Italic = 'italic';
	const Underline = 'underline';
	const Blockquote = 'blockquote';
	const Heading = 'heading';
	const List = 'list';
	const ListOrdered = 'list-ordered';
	const Divider = 'divider';
	const Link = 'link';
	const Image = 'image';

	let props: RichTextEditorStateProps & HTMLAttributes<HTMLDivElement> = $props();
	const state = createRichTextEditorState(props);
</script>

<div class={state.rootClasses} {...props}>
	{#if props.showToolbar ?? true}
		<div class={state.toolbarClasses}>
			<button
				type="button"
				class={state.buttonClasses}
				onclick={() => state.formatText('bold')}
				title="Bold"
			>
				<BaseIcon name={Bold} class={state.iconButtonClasses} />
			</button>
			<button
				type="button"
				class={state.buttonClasses}
				onclick={() => state.formatText('italic')}
				title="Italic"
			>
				<BaseIcon name={Italic} class={state.iconButtonClasses} />
			</button>
			<button
				type="button"
				class={state.buttonClasses}
				onclick={() => state.formatText('underline')}
				title="Underline"
			>
				<BaseIcon name={Underline} class={state.iconButtonClasses} />
			</button>

			<div class={state.dividerClasses}></div>

			<button
				type="button"
				class={state.buttonClasses}
				onclick={() => state.toggleHeading(1)}
				title="Heading 1"
			>
				<BaseIcon name={Heading} class={state.iconButtonClasses} />
			</button>
			<button
				type="button"
				class={state.buttonClasses}
				onclick={() => state.toggleHeading(2)}
				title="Heading 2"
			>
				<BaseIcon name={Heading} class={state.iconButtonClasses} />
			</button>
			<button
				type="button"
				class={state.buttonClasses}
				onclick={() => state.toggleBlockquote()}
				title="Blockquote"
			>
				<BaseIcon name={Blockquote} class={state.iconButtonClasses} />
			</button>

			<div class={state.dividerClasses}></div>

			<button
				type="button"
				class={state.buttonClasses}
				onclick={() => state.formatText('insertUnorderedList')}
				title="Bullet List"
			>
				<BaseIcon name={List} class={state.iconButtonClasses} />
			</button>
			<button
				type="button"
				class={state.buttonClasses}
				onclick={() => state.formatText('insertOrderedList')}
				title="Numbered List"
			>
				<BaseIcon name={ListOrdered} class={state.iconButtonClasses} />
			</button>

			<div class={state.dividerClasses}></div>

			<button
				type="button"
				class={state.buttonClasses}
				onclick={() => state.toggleHorizontalRule()}
				title="Horizontal Rule"
			>
				<BaseIcon name={Divider} class={state.iconButtonClasses} />
			</button>
			<button
				type="button"
				class={state.buttonClasses}
				onclick={() => state.toggleLinkInput()}
				title="Link"
			>
				<BaseIcon name={Link} class={state.iconButtonClasses} />
			</button>
			<button
				type="button"
				class={state.buttonClasses}
				onclick={() => state.insertImage()}
				title="Image"
			>
				<BaseIcon name={Image} class={state.iconButtonClasses} />
			</button>

			{#if state.showLinkInput}
				<div class={state.linkInputClasses}>
					<input
						type="text"
						class={state.linkInputFieldClasses}
						placeholder="https://example.com"
						value={state.linkUrl}
						oninput={(event) => state.setLinkUrl((event.target as HTMLInputElement).value)}
						onkeydown={(event) => {
							if (event.key === 'Enter') {
								event.preventDefault();
								state.insertLink();
							} else if (event.key === 'Escape') {
								state.setShowLinkInput(false);
							}
						}}
					/>
					<button
						type="button"
						class={state.linkInputButtonClasses}
						onclick={() => state.insertLink()}
					>
						Insert
					</button>
				</div>
			{/if}
		</div>
	{/if}

	<div
		contenteditable="true"
		role="textbox"
		tabindex="0"
		aria-multiline="true"
		aria-label={props.placeholder ?? 'Rich text editor'}
		class={state.editorClasses}
		bind:this={state.editorRef}
		oninput={state.handleInput}
		onblur={() => {
			state.handleBlur();
			state.handleChange();
		}}
		onfocus={state.handleFocus}
	></div>
</div>

<style>
	.rich-text-editor {
		border: 1px solid var(--color-border-primary);
		border-radius: var(--border-radius-large, 0.5rem);
		overflow: hidden;
	}

	.rich-text-editor__toolbar {
		position: relative;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.25rem;
		padding: 0.5rem;
		border-block-end: 1px solid var(--color-border-primary);
		background-color: var(--color-background-secondary);
	}

	.rich-text-editor__btn {
		padding: 0.5rem;
		border-radius: var(--border-radius-sm, 0.25rem);
		background: none;
		border: none;
		cursor: pointer;
	}

	.rich-text-editor__btn:hover {
		background-color: var(--color-background-tertiary);
	}

	.rich-text-editor__divider {
		width: 1px;
		height: 1.5rem;
		background-color: var(--color-background-tertiary);
		margin-inline: 0.25rem;
	}

	.rich-text-editor__icon {
		width: 1rem;
		height: 1rem;
	}

	.rich-text-editor__editor {
		padding: 0.75rem 1rem;
		min-height: 12.5rem;
		outline: none;
	}

	.rich-text-editor__editor--focused {
		background-color: var(--color-background-primary);
	}

	.rich-text-editor__link-popover {
		position: absolute;
		z-index: var(--z-index-docked, 10);
		inset-block-start: 100%;
		inset-inline-start: 0.5rem;
		margin-block-start: 0.25rem;
		display: flex;
		width: 16rem;
		padding: 0.75rem;
		gap: 0.5rem;
		background-color: var(--color-background-primary);
		border: 1px solid var(--color-border-primary);
		border-radius: var(--border-radius-base, 0.375rem);
		box-shadow:
			0 4px 6px -1px rgba(0, 0, 0, 0.1),
			0 2px 4px -1px rgba(0, 0, 0, 0.06);
	}

	.rich-text-editor__link-input {
		flex: 1;
		padding: 0.25rem 0.5rem;
		border: 1px solid var(--color-border-primary);
		border-start-start-radius: var(--border-radius-sm, 0.25rem);
		border-end-start-radius: var(--border-radius-sm, 0.25rem);
		font-size: var(--text-size-sm, 0.875rem);
	}

	.rich-text-editor__link-button {
		padding: 0.25rem 0.75rem;
		background-color: var(--color-primary-500);
		color: var(--color-text-inverse);
		border: none;
		border-start-end-radius: var(--border-radius-sm, 0.25rem);
		border-end-end-radius: var(--border-radius-sm, 0.25rem);
		font-size: var(--text-size-sm, 0.875rem);
		cursor: pointer;
	}
</style>
