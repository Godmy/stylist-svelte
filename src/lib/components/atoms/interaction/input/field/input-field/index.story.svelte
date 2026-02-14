<script lang="ts">
	import InputField from './index.svelte';

	const errorVariants = {
		none: [],
		required: ['Поле обязательно'],
		email: ['Введите корректный email'],
		custom: ['Неверный формат', 'Попробуйте снова']
	};

	let label = 'Work email';
	let placeholder = 'designer@figtree.com';
	let helperText = 'Мы отправим апдейты еженедельно.';
	let id = 'input-field';
	let type = 'email';
	let value = 'jade@figtree.com';
	let disabled = false;
	let required = true;
	let errorPreset: keyof typeof errorVariants = 'none';
</script>

<div class="space-y-8 p-6">
	<section class="rounded-2xl border border-[--color-border-primary] bg-white p-6 shadow-sm">
		<div class="grid gap-6 lg:grid-cols-[320px_1fr]">
			<div class="space-y-4">
				<div>
					<label for="label-input" class="text-sm font-medium text-[--color-text-secondary]"
						>Label</label
					>
					<input
						id="label-input"
						class="mt-1 w-full rounded-lg border border-[--color-border-primary] px-3 py-2 text-sm"
						bind:value={label}
					/>
				</div>

				<div>
					<label for="placeholder-input" class="text-sm font-medium text-[--color-text-secondary]">
						Placeholder
					</label>
					<input
						id="placeholder-input"
						class="mt-1 w-full rounded-lg border border-[--color-border-primary] px-3 py-2 text-sm"
						bind:value={placeholder}
					/>
				</div>

				<div>
					<label for="helper-input" class="text-sm font-medium text-[--color-text-secondary]">
						Helper text
					</label>
					<textarea
						id="helper-input"
						class="mt-1 w-full rounded-lg border border-[--color-border-primary] px-3 py-2 text-sm"
						rows="2"
						bind:value={helperText}
					></textarea>
				</div>

				<div>
					<label for="type-select" class="text-sm font-medium text-[--color-text-secondary]"
						>Тип ввода</label
					>
					<select
						id="type-select"
						class="mt-1 w-full rounded-lg border border-[--color-border-primary] px-3 py-2 text-sm"
						bind:value={type}
					>
						<option value="text">text</option>
						<option value="email">email</option>
						<option value="password">password</option>
						<option value="number">number</option>
					</select>
				</div>

				<div>
					<label for="error-select" class="text-sm font-medium text-[--color-text-secondary]">
						Ошибки
					</label>
					<select
						id="error-select"
						class="mt-1 w-full rounded-lg border border-[--color-border-primary] px-3 py-2 text-sm"
						bind:value={errorPreset}
					>
						{#each Object.keys(errorVariants) as preset}
							<option value={preset}>{preset}</option>
						{/each}
					</select>
				</div>

				<div class="grid grid-cols-2 gap-2 text-sm text-[--color-text-secondary]">
					<label class="flex items-center gap-2">
						<input type="checkbox" bind:checked={required} />
						Обязательное
					</label>
					<label class="flex items-center gap-2">
						<input type="checkbox" bind:checked={disabled} />
						Disabled
					</label>
				</div>
			</div>

			<div
				class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-secondary] p-4"
			>
				<p class="text-xs font-semibold tracking-wide text-[--color-text-secondary] uppercase">
					Live preview
				</p>
				<div class="mt-4 space-y-4">
					<InputField
						{id}
						{label}
						{type}
						bind:value
						{placeholder}
						{helperText}
						{required}
						{disabled}
						errors={errorVariants[errorPreset]}
					/>
					<p class="text-sm text-[--color-text-secondary]">
						Value: <span class="font-mono text-[--color-text-primary]">{value}</span>
					</p>
				</div>
			</div>
		</div>
	</section>

	<section
		class="rounded-2xl border border-[--color-border-primary] bg-[--color-background-secondary] p-6"
	>
		<h2 class="text-base font-semibold text-[--color-text-primary]">Состояния</h2>
		<p class="text-sm text-[--color-text-secondary]">
			Карточки ниже демонстрируют быстрые кейсы: успешное заполнение, ошибки, отключение.
		</p>

		<div class="mt-4 grid gap-4 md:grid-cols-3">
			<div class="rounded-xl border border-[--color-border-primary] bg-white p-4">
				<p class="text-sm font-semibold text-[--color-text-primary]">По умолчанию</p>
				<InputField
					id="default-state"
					label="Project name"
					placeholder="Например, Skyline"
					helperText="Название можно поменять позже."
				/>
			</div>
			<div class="rounded-xl border border-[--color-border-primary] bg-white p-4">
				<p class="text-sm font-semibold text-[--color-text-primary]">Ошибка</p>
				<InputField
					id="error-state"
					label="Budget"
					type="number"
					value="-100"
					errors={['Значение должно быть положительным']}
				/>
			</div>
			<div class="rounded-xl border border-[--color-border-primary] bg-white p-4">
				<p class="text-sm font-semibold text-[--color-text-primary]">Недоступно</p>
				<InputField
					id="disabled-state"
					label="API token"
					value="••••••••"
					disabled={true}
					helperText="Токен выдаётся автоматически."
				/>
			</div>
		</div>
	</section>
</div>



