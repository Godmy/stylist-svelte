<script lang="ts">
	import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
	import { Icon as BaseIcon } from '$stylist';
	import { createRichTextEditorState } from '$stylist/interaction/function/state/rich-text-editor';
	import { RichTextEditorStyleManager } from '$stylist/interaction/class/style-manager/rich-text-editor';

	const Bold = 'bold';
	const Italic = 'italic';
	const Underline = 'underline';
	const AlignLeft = 'align-left';
	const AlignCenter = 'align-center';
	const AlignRight = 'align-right';
	const List = 'list';
	const ListOrdered = 'list-ordered';
	const Quote = 'quote';
	const Type = 'type';
	const Link = 'link';
	const Image = 'image';
	const MoreHorizontal = 'more-horizontal';
	const Hash = 'hash';
	const Minus = 'minus';

	type Props = {
		value?: string;
		placeholder?: string;
		onValueInput?: (content: string) => void;
		onValueChange?: (content: string) => void;
		onInput?: (content: string) => void;
		onChange?: (content: string) => void;
		showToolbar?: boolean;
		toolbarPosition?: 'top' | 'bottom';
		class?: string;
		toolbarClass?: string;
		editorClass?: string;
	} & InteractionHTMLAttributes<HTMLDivElement>;

	let {
		value = '',
		placeholder = 'Write something amazing...',
		onValueInput,
		onValueChange,
		onInput,
		onChange,
		showToolbar = true,
		toolbarPosition = 'top',
		class: className = '',
		toolbarClass = '',
		editorClass = '',
		...restProps
	} = $props();

	const state = createRichTextEditorState({
		value,
		placeholder,
		onValueInput,
		onValueChange,
		onInput,
		onChange,
		showToolbar,
		toolbarPosition: toolbarPosition as 'top' | 'bottom',
		class: className,
		toolbarClass,
		editorClass
	});
</script>

<div class={state.rootClasses} {...restProps}>
	{#if showToolbar && toolbarPosition === 'top'}
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
				onclick={() => state.formatText('justifyLeft')}
				title="Align Left"
			>
				<BaseIcon name={AlignLeft} class={state.iconButtonClasses} />
			</button>
			<button
				type="button"
				class={state.buttonClasses}
				onclick={() => state.formatText('justifyCenter')}
				title="Align Center"
			>
				<BaseIcon name={AlignCenter} class={state.iconButtonClasses} />
			</button>
			<button
				type="button"
				class={state.buttonClasses}
				onclick={() => state.formatText('justifyRight')}
				title="Align Right"
			>
				<BaseIcon name={AlignRight} class={state.iconButtonClasses} />
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
				onclick={state.toggleBlockquote}
				title="Quote"
			>
				<BaseIcon name={Quote} class={state.iconButtonClasses} />
			</button>

			<div class="relative">
				<button
					type="button"
					class={state.buttonClasses}
					onclick={() => state.toggleLinkInput()}
					title="Insert Link"
				>
					<BaseIcon name={Link} class={state.iconButtonClasses} />
				</button>

				{#if state.showLinkInput}
					<div class={RichTextEditorStyleManager.getLinkInputClasses()}>
						<div class="flex">
							<input
								type="text"
								class={RichTextEditorStyleManager.getLinkInputFieldClasses()}
								placeholder="https://example.com"
								bind:value={state.linkUrl}
								onkeydown={(e) => e.key === 'Enter' && state.insertLink()}
							/>
							<button
								type="button"
								class={RichTextEditorStyleManager.getLinkInputButtonClasses()}
								onclick={state.insertLink}
							>
								Add
							</button>
						</div>
						<button
							type="button"
							class="mt-2 text-xs text-[var(--color-text-secondary)]"
							onclick={() => state.setShowLinkInput(false)}
						>
							Cancel
						</button>
					</div>
				{/if}
			</div>

			<button
				type="button"
				class={state.buttonClasses}
				onclick={state.insertImage}
				title="Insert Image"
			>
				<BaseIcon name={Image} class={state.iconButtonClasses} />
			</button>

			<div class={state.dividerClasses}></div>

			<div class="relative group">
				<button
					type="button"
					class={state.buttonClasses}
					title="More options"
				>
					<BaseIcon name={MoreHorizontal} class={state.iconButtonClasses} />
				</button>

				<div class={RichTextEditorStyleManager.getDropdownClasses()}>
					<button
						type="button"
						class={RichTextEditorStyleManager.getDropdownItemClasses()}
						onclick={() => state.toggleHeading(2)}
					>
						<BaseIcon name={Hash} class={RichTextEditorStyleManager.getDropdownIconClasses()} />
						Heading 2
					</button>
					<button
						type="button"
						class={RichTextEditorStyleManager.getDropdownItemClasses()}
						onclick={() => state.toggleHeading(3)}
					>
						<BaseIcon name={Hash} class={RichTextEditorStyleManager.getDropdownIconClasses()} />
						Heading 3
					</button>
					<button
						type="button"
						class={RichTextEditorStyleManager.getDropdownItemClasses()}
						onclick={state.toggleHorizontalRule}
					>
						<BaseIcon name={Minus} class={RichTextEditorStyleManager.getDropdownIconClasses()} />
						Divider
					</button>
				</div>
			</div>
		</div>
	{/if}

	<div
		bind:this={state.editorRef}
		class={state.editorClasses}
		contenteditable="true"
		placeholder={placeholder}
		oninput={state.handleInput}
		onchange={state.handleChange}
		onfocus={state.handleFocus}
		onblur={state.handleBlur}
	>
		{@html state.content}
	</div>

	{#if showToolbar && toolbarPosition === 'bottom'}
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
				onclick={() => state.formatText('justifyLeft')}
				title="Align Left"
			>
				<BaseIcon name={AlignLeft} class={state.iconButtonClasses} />
			</button>
			<button
				type="button"
				class={state.buttonClasses}
				onclick={() => state.formatText('justifyCenter')}
				title="Align Center"
			>
				<BaseIcon name={AlignCenter} class={state.iconButtonClasses} />
			</button>
			<button
				type="button"
				class={state.buttonClasses}
				onclick={() => state.formatText('justifyRight')}
				title="Align Right"
			>
				<BaseIcon name={AlignRight} class={state.iconButtonClasses} />
			</button>
		</div>
	{/if}
</div>
