<script lang="ts">
	import { InputGroup } from '.';

	type ButtonVariant =
		| 'primary'
		| 'secondary'
		| 'success'
		| 'warning'
		| 'danger'
		| 'ghost'
		| 'link';

	let id = 'input-group';
	let label = 'Invite teammate';
	let placeholder = 'name@company.com';
	let buttonLabel = 'Send invite';
	let buttonVariant: ButtonVariant = 'primary';
	let disabled = false;
	let buttonDisabled = false;
	let value = 'iris@figtree.com';

	function handleAction() {
		alert(`Triggered action with value: ${value}`);
	}
</script>

<div class="space-y-8 p-6">
	<section class="rounded-2xl border border-[--color-border-primary] bg-white p-6 shadow-sm">
		<div class="grid gap-6 lg:grid-cols-[320px_1fr]">
			<div class="space-y-4">
				<div>
					<label for="group-label" class="text-sm font-medium text-[--color-text-secondary]"
						>Label</label
					>
					<input
						id="group-label"
						class="mt-1 w-full rounded-lg border border-[--color-border-primary] px-3 py-2 text-sm"
						bind:value={label}
					/>
				</div>

				<div>
					<label for="group-placeholder" class="text-sm font-medium text-[--color-text-secondary]">
						Placeholder
					</label>
					<input
						id="group-placeholder"
						class="mt-1 w-full rounded-lg border border-[--color-border-primary] px-3 py-2 text-sm"
						bind:value={placeholder}
					/>
				</div>

				<div>
					<label for="button-label" class="text-sm font-medium text-[--color-text-secondary]">
						Надпись кнопки
					</label>
					<input
						id="button-label"
						class="mt-1 w-full rounded-lg border border-[--color-border-primary] px-3 py-2 text-sm"
						bind:value={buttonLabel}
					/>
				</div>

				<div>
					<label for="variant-select" class="text-sm font-medium text-[--color-text-secondary]">
						Вариант кнопки
					</label>
					<select
						id="variant-select"
						class="mt-1 w-full rounded-lg border border-[--color-border-primary] px-3 py-2 text-sm"
						bind:value={buttonVariant}
					>
						<option value="primary">primary</option>
						<option value="secondary">secondary</option>
						<option value="success">success</option>
						<option value="warning">warning</option>
						<option value="danger">danger</option>
						<option value="ghost">ghost</option>
						<option value="link">link</option>
					</select>
				</div>

				<div class="grid grid-cols-2 gap-2 text-sm text-[--color-text-secondary]">
					<label class="flex items-center gap-2">
						<input type="checkbox" bind:checked={disabled} />
						Disable input
					</label>
					<label class="flex items-center gap-2">
						<input type="checkbox" bind:checked={buttonDisabled} />
						Disable button
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
					<InputGroup
						{id}
						{label}
						{value}
						{placeholder}
						{buttonLabel}
						{buttonVariant}
						on:input={(e) => (value = e.detail.value)}
						{disabled}
						{buttonDisabled}
						onButtonClick={handleAction}
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
		<h2 class="text-base font-semibold text-[--color-text-primary]">
			Повторно используемые паттерны
		</h2>
		<p class="text-sm text-[--color-text-secondary]">
			Несколько примеров демонстрируют разные комбинации поля и кнопки.
		</p>

		<div class="mt-4 grid gap-4 md:grid-cols-2">
			<div class="rounded-xl border border-[--color-border-primary] bg-white p-4">
				<p class="text-sm font-semibold text-[--color-text-primary]">Поиск</p>
				<InputGroup
					id="search-group"
					label="Find template"
					placeholder="Поиск…"
					buttonLabel="Search"
					buttonVariant="secondary"
				/>
			</div>
			<div class="rounded-xl border border-[--color-border-primary] bg-white p-4">
				<p class="text-sm font-semibold text-[--color-text-primary]">URL с подтверждением</p>
				<InputGroup
					id="url-group"
					label="Webhook URL"
					placeholder="https://api.example.com/hooks"
					buttonLabel="Verify"
					buttonVariant="success"
				/>
			</div>
		</div>
	</section>
</div>
