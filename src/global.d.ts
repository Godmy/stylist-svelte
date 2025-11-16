// Глобальное объявление типов для Svelte компонентов
declare module '*.svelte' {
    import type { ComponentType } from 'svelte';
    import type { SvelteComponent } from 'svelte';

    export default class extends SvelteComponent {}
}