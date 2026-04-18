import type { Snippet } from 'svelte';

export type InputSpecificProps = {
	type?: 'text' | 'email' | 'password' | 'textarea' | 'number' | 'pin' | 'tel' | 'search';
	maxLength?: number;
	rows?: number;
	showPasswordToggle?: boolean;
	length?: number;
	min?: number;
	max?: number;
	step?: number;
	children?: Snippet;
};
