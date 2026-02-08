<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import Chip from './Chip.svelte';

	const controls: ControlConfig[] = [
		{
			name: 'label',
			type: 'text',
			defaultValue: 'РџСЂРёРјРµСЂ С‡РёРїР°'
		},
		{
			name: 'variant',
			type: 'select',
			defaultValue: 'primary',
			options: ['primary', 'secondary', 'success', 'warning', 'danger']
		},
		{
			name: 'size',
			type: 'select',
			defaultValue: 'md',
			options: ['sm', 'md', 'lg']
		},
		{
			name: 'closable',
			type: 'boolean',
			defaultValue: false
		},
		{
			name: 'disabled',
			type: 'boolean',
			defaultValue: false
		}
	];
</script>

<Story
	id="atoms-chip"
	title="Chip"
	category="Atoms"
	component={Chip}
	description="РљРѕРјРїР°РєС‚РЅС‹Р№ РєРѕРјРїРѕРЅРµРЅС‚ РґР»СЏ РѕС‚РѕР±СЂР°Р¶РµРЅРёСЏ РЅРµР±РѕР»СЊС€РёС… С„СЂР°РіРјРµРЅС‚РѕРІ РёРЅС„РѕСЂРјР°С†РёРё"
	tags={['tag', 'label', 'badge', 'chip']}
	{controls}
>
	{#snippet children(props: Record<string, any>)}
		<Chip
			label={props.label}
			variant={props.variant}
			size={props.size}
			closable={props.closable}
			disabled={props.disabled}
		/>
	{/snippet}
</Story>
