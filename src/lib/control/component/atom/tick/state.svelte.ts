type SliderTickProps = {
	value?: number;
	position?: number;
	active?: boolean;
	label?: string;
	class?: string;
};

// Определение состояния для Slider Tick
export function createSliderTickState(props: SliderTickProps) {
	const value = props.value ?? 0;
	const position = props.position ?? 0;
	const active = props.active ?? false;
	const label = props.label;

	return {
		value,
		position,
		active,
		label
	};
}

export default createSliderTickState;
