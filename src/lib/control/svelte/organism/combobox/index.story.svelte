<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';

  import Combobox from './index.svelte';
  import type { ComboboxItem } from '$stylist/control/type/struct/combobox/item';

  let value: string | null = $state(null);
  let placeholder: string = $state('РќР°С‡РЅРёС‚Рµ РІРІРѕРґРёС‚СЊ...');
  let disabled: boolean = $state(false);
  let clearable: boolean = $state(true);
  let loading: boolean = $state(false);
  let emptyText: string = $state('РќРёС‡РµРіРѕ РЅРµ РЅР°Р№РґРµРЅРѕ');

  // Sample items for the combobox
  const items: ComboboxItem[] = [
    { id: '1', label: 'Apple', description: 'A sweet, edible fruit' },
    { id: '2', label: 'Banana', description: 'A yellow, curved fruit' },
    { id: '3', label: 'Cherry', description: 'A small, round stone fruit' },
    { id: '4', label: 'Date', description: 'A sweet brown fruit' },
    { id: '5', label: 'Elderberry', description: 'A dark purple berry' }
  ];

  type Props = {
    placeholder: string;
    disabled: boolean;
    clearable: boolean;
    loading: boolean;
    emptyText: string;
  };

  const controls: InterfaceControllerSettings[] = [
    { name: 'placeholder', type: 'text', defaultValue: 'РќР°С‡РЅРёС‚Рµ РІРІРѕРґРёС‚СЊ...' },
    { name: 'disabled', type: 'boolean', defaultValue: false },
    { name: 'clearable', type: 'boolean', defaultValue: true },
    { name: 'loading', type: 'boolean', defaultValue: false },
    { name: 'emptyText', type: 'text', defaultValue: 'РќРёС‡РµРіРѕ РЅРµ РЅР°Р№РґРµРЅРѕ' }
  ];
</script>

<Story
  id="organisms-combobox"
  title="Organisms / Interaction / Controls / Combobox"
  component={Combobox}
  category="Organisms/Interaction/Controls"
  description="Combobox component with searchable dropdown and keyboard navigation."
  controls={controls}
>
  {#snippet children(values: any)}
    <div class="sb-organisms-combobox space-y-4 p-8">
      <Combobox
        id="demo-combobox"
        label="Sample Combobox"
        description="This is a demo of the combobox component"
        {items}
        bind:value
        placeholder={values.placeholder}
        disabled={values.disabled}
        clearable={values.clearable}
        loading={values.loading}
        emptyText={values.emptyText}
      />

      <div class="mt-4">
        <p>Selected value: {value ?? 'None'}</p>
      </div>
    </div>
  {/snippet}
</Story>





