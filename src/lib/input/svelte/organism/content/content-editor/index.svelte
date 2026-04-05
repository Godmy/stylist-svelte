<script lang="ts">
	import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
	import { Icon as BaseIcon } from '$stylist';
	import { createContentEditorState, type ContentType } from '$stylist/input/function/state/content-editor';
	import { ContentEditorStyleManager } from '$stylist/input/class/style-manager/content-editor';

	const Bold = 'bold';
	const Italic = 'italic';
	const Underline = 'underline';
	const AlignLeft = 'align-left';
	const AlignCenter = 'align-center';
	const AlignRight = 'align-right';
	const List = 'list';
	const ListOrdered = 'list-ordered';
	const Link = 'link';
	const Image = 'image';
	const Quote = 'quote';
	const Type = 'type';
	const MoreHorizontal = 'more-horizontal';
	const Save = 'save';
	const Eye = 'eye';
	const FileText = 'file-text';

	type Props = {
		initialContent?: Array<{ id: string; type: ContentType; content: string; attributes?: Record<string, any> }>;
		onSave?: (content: Array<{ id: string; type: ContentType; content: string; attributes?: Record<string, any> }>) => void;
		onPreview?: () => void;
		placeholder?: string;
		showToolbar?: boolean;
		showPreviewButton?: boolean;
		class?: string;
		toolbarClass?: string;
		editorClass?: string;
		contentClass?: string;
	} & InteractionHTMLAttributes<HTMLDivElement>;

	let {
		initialContent = [{ id: '1', type: 'text', content: '' }],
		onSave,
		onPreview,
		placeholder = 'Start writing here...',
		showToolbar = true,
		showPreviewButton = true,
		class: className = '',
		toolbarClass = '',
		editorClass = '',
		contentClass = '',
		...restProps
	} = $props();

	const state = createContentEditorState({
		initialContent,
		onSave,
		onPreview,
		placeholder,
		showToolbar,
		showPreviewButton,
		class: className,
		toolbarClass,
		editorClass,
		contentClass
	});
</script>

<div class={state.rootClasses} {...restProps}>
	{#if showToolbar}
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
				title="Add Image"
			>
				<BaseIcon name={Image} class={state.iconButtonClasses} />
			</button>
			<button
				type="button"
				class={state.buttonClasses}
				title="Add Link"
			>
				<BaseIcon name={Link} class={state.iconButtonClasses} />
			</button>

			<div class="flex-1"></div>

			<button
				type="button"
				class={state.buttonClasses}
				onclick={state.togglePreview}
				title="Preview"
			>
				<BaseIcon name={Eye} class={state.iconButtonClasses} />
			</button>
			<button
				type="button"
				class={state.buttonClasses}
				onclick={state.handleSave}
				title="Save"
			>
				<BaseIcon name={Save} class={state.iconButtonClasses} />
			</button>
		</div>
	{/if}

	<div class={state.editorClasses}>
		{#if state.isPreviewMode}
			<div class={ContentEditorStyleManager.getPreviewClasses()}>
				{#each state.contentElements as element}
					{#if element.type === 'text'}
						<p class="mb-4">{element.content || placeholder}</p>
					{:else if element.type === 'header'}
						<h2 class={ContentEditorStyleManager.getHeadingClasses()}>{element.content}</h2>
					{:else if element.type === 'quote'}
						<blockquote class={ContentEditorStyleManager.getQuoteClasses()}>
							{element.content}
						</blockquote>
					{:else if element.type === 'list'}
						<ul class={ContentEditorStyleManager.getListClasses()}>
							<li>{element.content}</li>
						</ul>
					{/if}
				{/each}
			</div>
		{:else}
			{#each state.contentElements as element, index}
				<div
					class={ContentEditorStyleManager.getContentClass(state.contentClasses, state.activeElementId === element.id)}
					role="button"
					tabindex="0"
					onclick={() => state.setActiveElementId(element.id)}
					onkeydown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							e.preventDefault();
							state.setActiveElementId(element.id);
						}
					}}
				>
					{#if element.type === 'text'}
						<textarea
							class={ContentEditorStyleManager.getTextareaClasses()}
							placeholder={index === 0 ? placeholder : ''}
							bind:value={element.content}
							oninput={() => state.updateContent(element.id, element.content)}
							rows={3}
						></textarea>
					{:else if element.type === 'header'}
						<input
							type="text"
							class={ContentEditorStyleManager.getHeadingInputClasses()}
							bind:value={element.content}
							oninput={() => state.updateContent(element.id, element.content)}
							placeholder="Heading..."
						/>
					{:else if element.type === 'quote'}
						<textarea
							class={ContentEditorStyleManager.getQuoteTextareaClasses()}
							bind:value={element.content}
							oninput={() => state.updateContent(element.id, element.content)}
							placeholder="Quote..."
							rows={2}
						></textarea>
					{:else if element.type === 'image'}
						<div class={ContentEditorStyleManager.getImagePlaceholderClasses()}>
							<BaseIcon name={Image} class={ContentEditorStyleManager.getImageIconClasses()} />
							<p class={ContentEditorStyleManager.getImageTextClasses()}>Image: {element.content || 'No image selected'}</p>
							<p class={ContentEditorStyleManager.getImageHintClasses()}>Click to add image</p>
						</div>
					{/if}

					<div class="flex justify-end space-x-1 mt-1">
						<button
							type="button"
							class={ContentEditorStyleManager.getMoveButtonClass()}
							onclick={() => state.moveElement(element.id, 'up')}
							disabled={index === 0}
							title="Move up"
						>
							<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
							</svg>
						</button>
						<button
							type="button"
							class={ContentEditorStyleManager.getMoveButtonClass()}
							onclick={() => state.moveElement(element.id, 'down')}
							disabled={index === state.contentElements.length - 1}
							title="Move down"
						>
							<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
							</svg>
						</button>
						<button
							type="button"
							class={ContentEditorStyleManager.getDeleteButtonClass()}
							onclick={() => state.deleteElement(element.id)}
							disabled={state.contentElements.length <= 1}
							title="Delete"
						>
							<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
							</svg>
						</button>
					</div>
				</div>

				<!-- Add button between elements -->
				<div class="flex justify-center my-2">
					<button
						type="button"
						class={ContentEditorStyleManager.getAddButtonClass()}
						onclick={() => state.addNewElement(index)}
					>
						<svg class={ContentEditorStyleManager.getAddIconClass()} fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
						</svg>
						Add
					</button>
				</div>
			{/each}

			<!-- Add button at the end -->
			<div class="flex justify-center mt-4">
				<button
					type="button"
					class={ContentEditorStyleManager.getAddButtonClass()}
					onclick={() => state.addNewElement(state.contentElements.length - 1)}
				>
					<svg class={ContentEditorStyleManager.getAddIconClass()} fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
					</svg>
					Add new block
				</button>
			</div>
		{/if}
	</div>
</div>
