<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import StylistTab from './index.svelte';
	import type { TokenControllerType } from '$stylist/interaction/type/record/controller-type';

	const customItems = [
		{ id: 'dashboard', label: 'Dashboard', icon: 'grid-layout' },
		{ id: 'analytics', label: 'Analytics', icon: 'chart' },
		{ id: 'settings', label: 'Settings', icon: 'settings' },
		{ id: 'profile', label: 'Profile', icon: 'user' }
	];

	const controls = [
		{
			name: 'selectedId',
			type: 'text' as TokenControllerType,
			defaultValue: 'architecture',
			description: 'ID РІС‹Р±СЂР°РЅРЅРѕРіРѕ С‚Р°Р±Р°'
		}
	];

	function handleSelect(item: { id: string; label: string; icon: string }) {
		console.log(`Selected tab: ${item.label} (${item.id})`);
	}
</script>

<Story
	{controls}
	title="Stylist Tab"
	description="РљРѕРјРїРѕРЅРµРЅС‚ РїРµСЂРµРєР»СЋС‡РµРЅРёСЏ С„СѓРЅРєС†РёРѕРЅР°Р»СЊРЅС‹С… С‚Р°РєСЃРѕРЅРѕРјРёР№ СЃ Р°РЅРёРјР°С†РёРµР№"
>
	{#snippet children(controlValues: any)}
		<div class="p-4">
			<h3 class="mb-4 text-lg font-semibold">Functional Taxonomy Tabs</h3>
			<StylistTab
				selectedId={controlValues.selectedId}
				onSelect={handleSelect}
			/>
			
			<h3 class="mt-8 mb-4 text-lg font-semibold">Custom Items</h3>
			<StylistTab
				items={customItems as any}
				selectedId="dashboard"
				onSelect={handleSelect}
			/>
		</div>
	{/snippet}
</Story>

