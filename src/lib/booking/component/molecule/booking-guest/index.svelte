<script lang="ts">
	import InputStepper from '$stylist/input/component/atom/input-stepper/index.svelte';

	// 2026-10-05 (заказчик): only Взрослые / Дети до 12 лет (со скидкой) /
	// Дети до 3 лет are offered. `seniors` / `childrenTeen` stay in the props
	// (and in BookingDraft) so existing callers and orders keep working, but
	// there are no rows for them any more.
	type Props = {
		adults?: number;
		seniors?: number;
		children?: number;
		childrenUnder3?: number;
		childrenTeen?: number;
		onAdultsChange?: (value: number) => void;
		onSeniorsChange?: (value: number) => void;
		onChildrenChange?: (value: number) => void;
		onChildrenUnder3Change?: (value: number) => void;
		onChildrenTeenChange?: (value: number) => void;
		/** Размер подписи (любое CSS-значение font-size) */
		textSize?: string;
		/** Фон всего поля (любое CSS-значение) */
		background?: string;
		/** Минимальное расстояние между подписью и степпером (строка слева/контрол справа — justify-content: space-between) */
		gap?: string;
	};

	let {
		adults = 2,
		children = 0,
		childrenUnder3 = 0,
		onAdultsChange,
		onChildrenChange,
		onChildrenUnder3Change,
		textSize = '1rem',
		background,
		gap = '18px'
	}: Props = $props();
</script>

<div class="tc-booking-guest" style:background={background}>
	<div class="tc-booking-guest__row" style:gap={gap}>
		<span class="tc-booking-guest__label" style:font-size={textSize}>Взрослые</span>
		<InputStepper value={adults} min={1} max={16} label="Взрослые" onChange={(value) => onAdultsChange?.(value)} />
	</div>
	<div class="tc-booking-guest__row" style:gap={gap}>
		<span class="tc-booking-guest__label" style:font-size={textSize}>
			Дети до 12 лет
			<span class="tc-booking-guest__hint">со скидкой</span>
		</span>
		<InputStepper
			value={children}
			min={0}
			max={12}
			label="Дети до 12 лет"
			onChange={(value) => onChildrenChange?.(value)}
		/>
	</div>
	<div class="tc-booking-guest__row" style:gap={gap}>
		<span class="tc-booking-guest__label" style:font-size={textSize}>Дети до 3 лет</span>
		<InputStepper
			value={childrenUnder3}
			min={0}
			max={8}
			label="Дети до 3 лет"
			onChange={(value) => onChildrenUnder3Change?.(value)}
		/>
	</div>
</div>

<style>
	.tc-booking-guest {
		display: grid;
		gap: 10px;
	}

	.tc-booking-guest__row {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.tc-booking-guest__label {
		display: flex;
		align-items: center;
		gap: 6px;
		color: #17231f;
		font-weight: 600;
		white-space: nowrap;
	}

	.tc-booking-guest__hint {
		display: inline-flex;
		align-items: center;
		line-height: 1;
		padding: 3px 8px;
		border-radius: 999px;
		background: rgba(15, 81, 50, 0.12);
		color: #0f5132;
		font-size: 0.85em;
		font-weight: 650;
		white-space: nowrap;
	}
</style>
