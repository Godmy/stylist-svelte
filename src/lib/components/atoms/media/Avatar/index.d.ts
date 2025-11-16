// Типы для Avatar компонента
import type { ComponentType } from 'svelte';
import type AvatarComponent from './Avatar.svelte';

// Экспорт Avatar как ComponentType
declare const Avatar: ComponentType<InstanceType<typeof AvatarComponent> extends import('svelte').SvelteComponentTyped<infer Props, any, any> ? Props : never>;

export default Avatar;