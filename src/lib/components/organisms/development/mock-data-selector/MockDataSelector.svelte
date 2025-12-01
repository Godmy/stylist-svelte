<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Database, Shuffle, Download, Upload, Search, Filter } from 'lucide-svelte';

  type MockDataSchema = {
    id: string;
    name: string;
    description: string;
    fields: Array<{
      name: string;
      type: 'string' | 'number' | 'boolean' | 'date' | 'email' | 'id';
      required: boolean;
      example?: string;
    }>;
    sampleData: any[];
    tags: string[];
  };

  type DataSelection = {
    schemaId: string;
    count: number;
    selectedFields?: string[]; // If undefined, all fields are included
  };

  type Props = {
    schemas: MockDataSchema[];
    initialSelections?: DataSelection[];
    title?: string;
    description?: string;
    allowMultipleSelections?: boolean;
    allowFieldSelection?: boolean;
    allowCustomCount?: boolean;
    showSearch?: boolean;
    showTagsFilter?: boolean;
    onSelectionChange?: (selections: DataSelection[]) => void;
    onLoadMockData?: (selections: DataSelection[]) => void;
    class?: string;
    headerClass?: string;
    selectorClass?: string;
    previewClass?: string;
    footerClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    schemas = [],
    initialSelections = [],
    title = 'Mock Data Selector',
    description = 'Select mock data schemas to generate sample data',
    allowMultipleSelections = true,
    allowFieldSelection = true,
    allowCustomCount = true,
    showSearch = true,
    showTagsFilter = true,
    onSelectionChange,
    onLoadMockData,
    class: className = '',
    headerClass = '',
    selectorClass = '',
    previewClass = '',
    footerClass = ''
  } = $props();

  let selections = $state<DataSelection[]>(initialSelections.length > 0 ? initialSelections : []);
  let searchQuery = $state('');
  let selectedTags = $state<string[]>([]);
  let availableTags = $state<string[]>([]);

  // Initialize tags
  $effect(() => {
    const tagsSet = new Set<string>();
    schemas.forEach(schema => {
      schema.tags.forEach((tag: string) => tagsSet.add(tag));
    });
    availableTags = Array.from(tagsSet).sort();
  });

  function addSelection(schemaId: string) {
    const newSelection: DataSelection = {
      schemaId,
      count: 5,
      selectedFields: allowFieldSelection ? schemas.find(s => s.id === schemaId)?.fields.map((f: { name: string }) => f.name) : undefined
    };
    
    if (allowMultipleSelections) {
      selections = [...selections, newSelection];
    } else {
      selections = [newSelection];
    }
    
    if (onSelectionChange) {
      onSelectionChange(selections);
    }
  }

  function removeSelection(index: number) {
    selections = selections.filter((_, i) => i !== index);
    if (onSelectionChange) {
      onSelectionChange(selections);
    }
  }

  function updateCount(index: number, count: number) {
    if (count >= 0) {
      selections[index] = { ...selections[index], count };
      if (onSelectionChange) {
        onSelectionChange(selections);
      }
    }
  }

  function toggleField(index: number, fieldName: string) {
    if (!allowFieldSelection || !selections[index].selectedFields) return;
    
    const fieldIndex = selections[index].selectedFields!.indexOf(fieldName);
    if (fieldIndex > -1) {
      selections[index].selectedFields!.splice(fieldIndex, 1);
    } else {
      selections[index].selectedFields!.push(fieldName);
    }
    
    if (onSelectionChange) {
      onSelectionChange(selections);
    }
  }

  function loadMockData() {
    if (onLoadMockData) {
      onLoadMockData(selections);
    }
  }

  function toggleTag(tag: string) {
    if (selectedTags.includes(tag)) {
      selectedTags = selectedTags.filter(t => t !== tag);
    } else {
      selectedTags = [...selectedTags, tag];
    }
  }

  function getFilteredSchemas() {
    return schemas.filter(schema => {
      // Search filter
      if (searchQuery && 
          !schema.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
          !schema.description.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      
      // Tags filter
      if (selectedTags.length > 0 && !selectedTags.every(tag => schema.tags.includes(tag))) {
        return false;
      }
      
      return true;
    });
  }

  function getSampleData(schemaId: string, count: number, fields?: string[]) {
    const schema = schemas.find(s => s.id === schemaId);
    if (!schema) return [];
    
    const result = [];
    for (let i = 0; i < count; i++) {
      const item: any = {};
      
      const fieldsToUse = fields && fields.length > 0 ? fields : schema.fields.map((f: { name: string }) => f.name);
      
      schema.fields
        .filter((f: { name: string }) => fieldsToUse.includes(f.name))
        .forEach((field: any) => {
          // Generate mock values based on field type
          switch (field.type) {
            case 'string':
              item[field.name] = field.example || `${field.name}_${i}`;
              break;
            case 'number':
              item[field.name] = Math.floor(Math.random() * 100);
              break;
            case 'boolean':
              item[field.name] = Math.random() > 0.5;
              break;
            case 'date':
              item[field.name] = new Date(Date.now() - Math.floor(Math.random() * 365 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0];
              break;
            case 'email':
              item[field.name] = `user${i}@example.com`;
              break;
            case 'id':
              item[field.name] = `id_${i}`;
              break;
            default:
              item[field.name] = `value_${i}`;
          }
        });
      
      result.push(item);
    }
    
    return result;
  }
</script>

<div class={`bg-white rounded-lg shadow border border-gray-200 overflow-hidden ${className}`}>
  <div class={`border-b px-6 py-5 ${headerClass}`}>
    <div class="flex items-center">
      <Database class="h-6 w-6 text-gray-500 mr-2" />
      <h3 class="text-lg font-medium text-gray-900">{title}</h3>
    </div>
    <p class="mt-1 text-sm text-gray-500">{description}</p>
  </div>

  <div class="p-6">
    <!-- Search and filter controls -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {#if showSearch}
        <div>
          <label for="search" class="block text-sm font-medium text-gray-700 mb-1">Search Schemas</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search class="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="search"
              class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              bind:value={searchQuery}
              placeholder="Search schemas..."
            />
          </div>
        </div>
      {/if}

      {#if showTagsFilter}
        <fieldset class="border-0 p-0 m-0">
          <legend class="block text-sm font-medium text-gray-700 mb-1">Filter by Tags</legend>
          <div class="flex flex-wrap gap-2">
            {#each availableTags as tag}
              <button
                type="button"
                class={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  selectedTags.includes(tag)
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onclick={() => toggleTag(tag)}
              >
                {tag}
              </button>
            {/each}
          </div>
        </fieldset>
      {/if}

      <fieldset class="border-0 p-0 m-0">
        <legend class="block text-sm font-medium text-gray-700 mb-1">Actions</legend>
        <div class="flex space-x-2">
          <button
            type="button"
            class="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            onclick={loadMockData}
          >
            <Download class="h-4 w-4 mr-1" />
            Load Data
          </button>
        </div>
      </fieldset>
    </div>

    <!-- Available schemas -->
    <div class="mb-8">
      <h4 class="text-sm font-medium text-gray-900 mb-4">Available Schemas</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each getFilteredSchemas() as schema}
          <div class={`border rounded-lg p-4 hover:shadow-md transition-shadow ${selectorClass}`}>
            <div class="flex justify-between items-start">
              <div>
                <h5 class="font-medium text-gray-900">{schema.name}</h5>
                <p class="text-sm text-gray-500 mt-1">{schema.description}</p>
              </div>
              <button
                type="button"
                class="p-1.5 rounded-full hover:bg-gray-100 text-gray-500"
                onclick={() => addSelection(schema.id)}
                title="Add to selection"
              >
                <Shuffle class="h-5 w-5" />
              </button>
            </div>
            
            <div class="mt-3">
              <div class="flex flex-wrap gap-1">
                {#each schema.tags as tag}
                  <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                    {tag}
                  </span>
                {/each}
              </div>
            </div>
            
            <div class="mt-3 text-xs text-gray-500">
              <span>{schema.fields.length} fields</span>
              <span class="mx-2">•</span>
              <span>{schema.sampleData.length} samples</span>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Selected schemas -->
    {#if selections.length > 0}
      <div>
        <h4 class="text-sm font-medium text-gray-900 mb-4">Selected Schemas</h4>
        <div class="space-y-4">
          {#each selections as selection, index}
            {@const schema = schemas.find(s => s.id === selection.schemaId)}
            {#if schema}
              <div class={`border rounded-lg p-4 ${previewClass}`}>
                <div class="flex justify-between items-start">
                  <div>
                    <div class="flex items-center">
                      <h5 class="font-medium text-gray-900">{schema.name}</h5>
                      <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {selection.count} records
                      </span>
                    </div>
                    <p class="text-sm text-gray-500 mt-1">{schema.description}</p>
                  </div>
                  
                  <button
                    type="button"
                    class="p-1.5 rounded-full hover:bg-red-100 text-red-500"
                    onclick={() => removeSelection(index)}
                    title="Remove selection"
                  >
                    <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div class="mt-4">
                  <div class="flex items-center justify-between">
                    <label for="count-{index}" class="block text-sm font-medium text-gray-700">
                      Number of records
                    </label>
                    {#if allowCustomCount}
                      <input
                        type="number"
                        id="count-{index}"
                        min="1"
                        max="1000"
                        class="h-8 w-24 px-3 py-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        bind:value={selections[index].count}
                        oninput={(e) => updateCount(index, parseInt((e.target as HTMLInputElement).value))}
                      />
                    {/if}
                  </div>
                </div>
                
                {#if allowFieldSelection}
                  <div class="mt-4">
                    <h6 class="text-sm font-medium text-gray-900 mb-2">Select Fields</h6>
                    <div class="flex flex-wrap gap-2">
                      {#each schema.fields as field}
                        <label class={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                          selections[index].selectedFields?.includes(field.name)
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          <input
                            type="checkbox"
                            class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            checked={selections[index].selectedFields?.includes(field.name) ?? true}
                            onchange={() => toggleField(index, field.name)}
                          />
                          <span class="ml-1">{field.name}</span>
                        </label>
                      {/each}
                    </div>
                  </div>
                {/if}
                
                <!-- Preview of generated data -->
                <div class="mt-4">
                  <h6 class="text-sm font-medium text-gray-900 mb-2">Data Preview</h6>
                  <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          {#each schema.fields as field}
                            {#if !selections[index].selectedFields || selections[index].selectedFields.includes(field.name)}
                              <th class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{field.name}</th>
                            {/if}
                          {/each}
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-gray-200">
                        {#each getSampleData(schema.id, Math.min(2, selection.count), selections[index].selectedFields) as item, i}
                          <tr>
                            {#each schema.fields as field}
                              {#if !selections[index].selectedFields || selections[index].selectedFields.includes(field.name)}
                                <td class="px-3 py-2 text-sm text-gray-500 max-w-xs truncate">{item[field.name]?.toString()}</td>
                              {/if}
                            {/each}
                          </tr>
                        {/each}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            {/if}
          {/each}
        </div>
      </div>
    {/if}
  </div>
  
  <div class={`border-t px-6 py-4 ${footerClass}`}>
    <div class="flex items-center justify-between">
      <div class="text-sm text-gray-500">
        {selections.length} schema{selections.length !== 1 ? 's' : ''} selected
      </div>
      <button
        type="button"
        class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
        onclick={loadMockData}
      >
        <Download class="h-4 w-4 mr-1" />
        Generate Mock Data
      </button>
    </div>
  </div>
</div>