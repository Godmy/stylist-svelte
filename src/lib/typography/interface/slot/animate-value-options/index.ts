export interface AnimateValueOptions {
	from: number;
	to: number;
	duration: number;
	delay: number;
	easing: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
	onUpdate: (value: number) => void;
	onFinish?: () => void;
}
