<script lang="ts">
	import { DEFAULT_SCHEMA_TEXT } from '$stylist/erd/const/value/schema-text';
	import { schemaTextToDocument } from '$stylist/erd/function/transform/schema-text-to-document';
	import type { SchemaTextProps } from '$stylist/erd/type/struct/schema-text-props';

	let {
		value = $bindable(DEFAULT_SCHEMA_TEXT),
		placeholder = DEFAULT_SCHEMA_TEXT
	}: SchemaTextProps = $props();
	let result = $derived(schemaTextToDocument(value));

	function handleInput(event: Event): void {
		value = (event.target as HTMLTextAreaElement).value;
	}
</script>

<section class="schema-text">
	<textarea
		spellcheck="false"
		{placeholder}
		{value}
		oninput={handleInput}
	></textarea>
	<div class="schema-text__status">
		<span>{result.document.tables.length} tables</span>
		<span>{result.document.dependencies.length} relations</span>
		<span class={result.errors.length > 0 ? 'schema-text__error-count' : ''}>
			{result.errors.length} errors
		</span>
	</div>
	{#if result.errors.length > 0}
		<ul class="schema-text__errors">
			{#each result.errors as error}
				<li>{error}</li>
			{/each}
		</ul>
	{/if}
</section>

<style>
	.schema-text {
		display: grid;
		gap: 0.6rem;
		min-height: 100%;
	}

	.schema-text textarea {
		min-height: 420px;
		resize: vertical;
		padding: 0.9rem;
		border: 1px solid rgba(22, 31, 44, 0.14);
		border-radius: 0.5rem;
		background: #111827;
		color: #edf2f7;
		font: 0.86rem/1.55 ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
		tab-size: 2;
	}

	.schema-text__status {
		display: flex;
		flex-wrap: wrap;
		gap: 0.45rem;
	}

	.schema-text__status span {
		padding: 0.32rem 0.48rem;
		border-radius: 0.4rem;
		background: #edf2f7;
		color: #334155;
		font-size: 0.76rem;
	}

	.schema-text__error-count {
		background: #fff1f2 !important;
		color: #be123c !important;
	}

	.schema-text__errors {
		margin: 0;
		padding: 0.7rem 0.9rem 0.7rem 1.6rem;
		border-radius: 0.5rem;
		background: #fff1f2;
		color: #9f1239;
		font-size: 0.78rem;
	}
</style>
