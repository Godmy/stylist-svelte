<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import ScrumBacklog from './index.svelte';

  interface BacklogItem {
    id: string;
    title: string;
    description?: string;
    assignee?: string;
    priority: 'low' | 'medium' | 'high';
    estimatedHours?: number;
    status: 'todo' | 'in-progress' | 'done';
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
  }

  interface BacklogData {
    items: BacklogItem[];
  }

  // Sample backlog data
  const sampleData: BacklogData = {
    items: [
      {
        id: 'item1',
        title: 'Р Р°Р·СЂР°Р±РѕС‚Р°С‚СЊ Р°СѓС‚РµРЅС‚РёС„РёРєР°С†РёСЋ РїРѕР»СЊР·РѕРІР°С‚РµР»РµР№',
        description: 'РЎРѕР·РґР°С‚СЊ СЃРёСЃС‚РµРјСѓ СЂРµРіРёСЃС‚СЂР°С†РёРё, РІС…РѕРґР° Рё РІРѕСЃСЃС‚Р°РЅРѕРІР»РµРЅРёСЏ РїР°СЂРѕР»СЏ',
        assignee: 'РРІР°РЅ РџРµС‚СЂРѕРІ',
        priority: 'high',
        estimatedHours: 16,
        status: 'todo',
        tags: ['backend', 'auth'],
        createdAt: new Date(2024, 9, 15),
        updatedAt: new Date(2024, 9, 15)
      },
      {
        id: 'item2',
        title: 'Р”РёР·Р°Р№РЅ РіР»Р°РІРЅРѕР№ СЃС‚СЂР°РЅРёС†С‹',
        description: 'РЎРѕР·РґР°С‚СЊ РјР°РєРµС‚ РіР»Р°РІРЅРѕР№ СЃС‚СЂР°РЅРёС†С‹ СЃ СѓС‡РµС‚РѕРј РЅРѕРІРѕР№ Р±СЂРµРЅРґРёРЅРіРѕРІРѕР№ РїРѕР»РёС‚РёРєРё',
        assignee: 'РђРЅРЅР° РЎРёРґРѕСЂРѕРІР°',
        priority: 'medium',
        estimatedHours: 12,
        status: 'in-progress',
        tags: ['frontend', 'ui/ux'],
        createdAt: new Date(2024, 9, 10),
        updatedAt: new Date(2024, 9, 12)
      },
      {
        id: 'item3',
        title: 'РРЅС‚РµРіСЂР°С†РёСЏ РїР»Р°С‚РµР¶РЅРѕР№ СЃРёСЃС‚РµРјС‹',
        description: 'РџРѕРґРєР»СЋС‡РёС‚СЊ РІРЅРµС€РЅРёР№ РїР»Р°С‚РµР¶РЅС‹Р№ РїСЂРѕРІР°Р№РґРµСЂ РґР»СЏ РѕР±СЂР°Р±РѕС‚РєРё С‚СЂР°РЅР·Р°РєС†РёР№',
        assignee: 'РњРёС…Р°РёР» РљРѕР·Р»РѕРІ',
        priority: 'high',
        estimatedHours: 24,
        status: 'todo',
        tags: ['backend', 'payments'],
        createdAt: new Date(2024, 9, 5),
        updatedAt: new Date(2024, 9, 5)
      },
      {
        id: 'item4',
        title: 'РўРµСЃС‚РёСЂРѕРІР°РЅРёРµ РїСЂРѕРёР·РІРѕРґРёС‚РµР»СЊРЅРѕСЃС‚Рё',
        description: 'РџСЂРѕРІРµСЃС‚Рё РЅР°РіСЂСѓР·РѕС‡РЅРѕРµ С‚РµСЃС‚РёСЂРѕРІР°РЅРёРµ API Рё Р±Р°Р·С‹ РґР°РЅРЅС‹С…',
        assignee: 'Р”РјРёС‚СЂРёР№ Р’РѕР»РєРѕРІ',
        priority: 'medium',
        estimatedHours: 8,
        status: 'done',
        tags: ['testing', 'performance'],
        createdAt: new Date(2024, 8, 25),
        updatedAt: new Date(2024, 9, 20)
      },
      {
        id: 'item5',
        title: 'Р РµС„Р°РєС‚РѕСЂРёРЅРі РєРѕРјРїРѕРЅРµРЅС‚РѕРІ',
        description: 'РћР±РЅРѕРІРёС‚СЊ СѓСЃС‚Р°СЂРµРІС€РёРµ РєРѕРјРїРѕРЅРµРЅС‚С‹ РІ СЃРѕРѕС‚РІРµС‚СЃС‚РІРёРё СЃ РЅРѕРІС‹РјРё СЃС‚Р°РЅРґР°СЂС‚Р°РјРё',
        assignee: 'Р•Р»РµРЅР° РњРѕСЂРѕР·РѕРІР°',
        priority: 'low',
        estimatedHours: 20,
        status: 'todo',
        tags: ['refactoring'],
        createdAt: new Date(2024, 8, 30),
        updatedAt: new Date(2024, 8, 30)
      }
    ]
  };

  // Handles for backlog events
  const handleItemAdd = (item: BacklogItem) => {
    console.log('Р”РѕР±Р°РІР»РµРЅРёРµ Р·Р°РґР°С‡Рё:', item);
    // Here would be the logic to add item to the backlog
  };

  const handleItemUpdate = (item: BacklogItem) => {
    console.log('РћР±РЅРѕРІР»РµРЅРёРµ Р·Р°РґР°С‡Рё:', item);
    // Here would be the logic to update item in the backlog
  };

  const handleItemDelete = (id: string) => {
    console.log('РЈРґР°Р»РµРЅРёРµ Р·Р°РґР°С‡Рё СЃ ID:', id);
    // Here would be the logic to remove item from the backlog
  };

  type Props = {
    showFilters: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'showFilters',
      type: 'boolean',
      defaultValue: true
    }
  ];
</script>

<Story
  id="molecules-scrum-backlog"
  title="Molecules / Information / Management / Agile / ScrumBacklog"
  component={ScrumBacklog}
  category="Molecules/Information/Management/Agile"
  description="A backlog component for managing sprint tasks with filtering and CRUD operations."
  controls={controls}
>
  {#snippet children(args)}
    <div class="sb-molecules-scrum-backlog p-4">
      <h1 class="text-xl font-bold mb-4">Scrum Backlog Component</h1>

      <div class="border rounded-lg p-4 bg-white h-[800px]">
        <ScrumBacklog
          data={sampleData}
          showFilters={args.showFilters}
          onItemAdd={handleItemAdd}
          onItemUpdate={handleItemUpdate}
          onItemDelete={handleItemDelete}
        />
      </div>
    </div>
  {/snippet}
</Story>



