<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import DatePicker from './index.svelte';
	import type { TokenControllerType } from '$stylist/interaction/type/record/controller-type';

	const controls = [
		{
			name: 'placeholder',
			type: 'text' as TokenControllerType,
			defaultValue: 'Р’С‹Р±РµСЂРёС‚Рµ РґР°С‚Сѓ',
			description: 'Placeholder text for the date picker'
		},
		{
			name: 'disabled',
			type: 'boolean' as TokenControllerType,
			defaultValue: false,
			description: 'Whether the date picker is disabled'
		}
	];

	let minDate: Date | undefined = new Date();
	let maxDate: Date | undefined = new Date();
	let selectedDate: Date | undefined = new Date();

	minDate.setDate(minDate.getDate() - 14);
	maxDate.setDate(maxDate.getDate() + 45);

	const milestones = [
		{
			id: 'launch',
			label: 'Р РµР»РёР· РїСЂРѕРґСѓРєС‚Р°',
			date: new Date().toISOString().split('T')[0]
		},
		{
			id: 'retro',
			label: 'Р РµС‚СЂРѕ РєРѕРјР°РЅРґС‹',
			date: new Date(new Date().setDate(new Date().getDate() + 5)).toISOString().split('T')[0]
		},
		{
			id: 'marketing',
			label: 'РљР°РјРїР°РЅРёСЏ РјР°СЂРєРµС‚РёРЅРіР°',
			date: new Date(new Date().setDate(new Date().getDate() + 12)).toISOString().split('T')[0]
		}
	];

	function handleManualSelection(value: string) {
		selectedDate = value ? new Date(`${value}T00:00:00`) : undefined;
	}
</script>

<Story
	{controls}
	title="DatePicker Component"
	description="Interactive date picker with customizable options"
>
	{#snippet children(controlValues: any)}
		<div class="_c1">
			<div class="_c2">
				<div class="_c3">
					<div>
						<label for="manual-date" class="_c4">
							РЈСЃС‚Р°РЅРѕРІРёС‚СЊ РІС‹Р±СЂР°РЅРЅСѓСЋ РґР°С‚Сѓ
						</label>
						<input
							id="manual-date"
							type="date"
							class="_c5"
							value={selectedDate ? selectedDate.toISOString().split('T')[0] : ''}
							on:change={(event) => handleManualSelection((event.target as HTMLInputElement).value)}
						/>
					</div>
				</div>

				<div class="_c6">
					<div class="_c7">
						<DatePicker
							value={selectedDate}
							placeholder={controlValues.placeholder}
							disabled={controlValues.disabled}
							{minDate}
							{maxDate}
						/>
						<p class="_c8">
							Р’С‹Р±СЂР°РЅРѕ: {selectedDate ? selectedDate.toLocaleDateString() : 'вЂ”'}
						</p>
					</div>
				</div>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1rem;
	}
	._c2 {
		display: grid;
		gap: 1.5rem;
	}
	@media (min-width: 1024px) {
		._c2 {
			grid-template-columns: 280px 1fr;
		}
	}
	._c3 > * + * {
		margin-top: 1rem;
	}
	._c4 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-secondary);
	}
	._c5 {
		margin-top: 0.25rem;
		width: 100%;
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
	._c6 {
		border-radius: 1rem;
		border-width: 1px;
		border-style: dashed;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1rem;
	}
	._c7 {
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	._c8 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
