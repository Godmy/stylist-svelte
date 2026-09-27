<script lang="ts">
	import InputText from '$stylist/input/component/molecule/input-text/index.svelte';
	import TextArea from '$stylist/input/component/molecule/text-area/index.svelte';
	import Button from '$stylist/button/component/atom/button/index.svelte';
	import type { RecipeProductEditorForm } from '$stylist/travel-admin/interface/recipe/product-editor-form';
	import createProductEditorFormState from './state.svelte';

	let props: RecipeProductEditorForm = $props();
	const state = createProductEditorFormState(() => props);
</script>

<form class="product-editor-form {props.class ?? ''}" onsubmit={(e) => (e.preventDefault(), state.save())}>
	<div class="product-editor-form__field--full">
		<InputText
			label="Название"
			value={state.draft.title}
			oninput={(e: Event) => state.patch({ title: (e.target as HTMLInputElement).value })}
		/>
	</div>
	<div class="product-editor-form__field--full">
		<InputText
			label="Слаг (URL)"
			value={state.draft.slug}
			oninput={(e: Event) => state.patch({ slug: (e.target as HTMLInputElement).value })}
		/>
	</div>

	<div class="product-editor-form__grid">
		<label class="product-editor-form__field">
			<span>Категория</span>
			<select
				value={state.draft.domain}
				onchange={(e) => state.patch({ domain: (e.target as HTMLSelectElement).value as typeof state.draft.domain })}
			>
				<option value="tour">Экскурсии по дням</option>
				<option value="premium">Чеки на миллион</option>
				<option value="retreat">Ретриты</option>
				<option value="club">Клубы по интересам</option>
				<option value="wedding">Свадьбы / венчания</option>
				<option value="corporate">Корпоративы</option>
				<option value="business">Бизнес-услуги</option>
			</select>
		</label>

		<label class="product-editor-form__field">
			<span>Статус</span>
			<select
				value={state.draft.status}
				onchange={(e) => state.patch({ status: (e.target as HTMLSelectElement).value as typeof state.draft.status })}
			>
				<option value="draft">Черновик</option>
				<option value="published">Опубликован</option>
			</select>
		</label>

		<label class="product-editor-form__field">
			<span>Цена, ₽</span>
			<input
				type="number"
				min="0"
				value={state.draft.basePriceCents / 100}
				oninput={(e) => state.patch({ basePriceCents: Math.round(Number((e.target as HTMLInputElement).value) * 100) })}
			/>
		</label>

		<label class="product-editor-form__field">
			<span>Единица цены</span>
			<select
				value={state.draft.priceUnit}
				onchange={(e) => state.patch({ priceUnit: (e.target as HTMLSelectElement).value as typeof state.draft.priceUnit })}
			>
				<option value="per_person">за человека</option>
				<option value="per_tour">за бронь целиком</option>
			</select>
		</label>

		<label class="product-editor-form__field">
			<span>Дней от бронирования (min advance)</span>
			<input
				type="number"
				min="0"
				value={state.draft.minAdvanceDays}
				oninput={(e) => state.patch({ minAdvanceDays: Number((e.target as HTMLInputElement).value) })}
			/>
		</label>
	</div>

	<TextArea
		label="Краткое описание"
		value={state.draft.summary}
		oninput={(e: Event) => state.patch({ summary: (e.target as HTMLTextAreaElement).value })}
	/>

	<div class="product-editor-form__actions">
		{#if props.onCancel}
			<Button type="button" variant="ghost" onclick={props.onCancel}>Отмена</Button>
		{/if}
		<Button type="submit" variant="primary" loading={props.saving}>Сохранить</Button>
	</div>
</form>

<style>
	.product-editor-form {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		max-width: 42rem;
		container-type: inline-size;
	}
	.product-editor-form__grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1rem;
	}
	.product-editor-form__field {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		min-width: 0;
		font-size: 0.85rem;
		color: var(--color-text-secondary);
	}
	.product-editor-form__field select,
	.product-editor-form__field input {
		box-sizing: border-box;
		width: 100%;
		padding: 0.6rem 0.75rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.375rem;
		background: var(--color-background-primary);
		color: var(--color-text-primary);
	}
	.product-editor-form__actions {
		display: flex;
		justify-content: flex-end;
		gap: 0.75rem;
	}
	@container (max-width: 560px) {
		.product-editor-form__grid {
			grid-template-columns: 1fr;
		}
	}
</style>
