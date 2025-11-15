<script lang="ts">
  import { Code, Layers, Package, ChevronRight, ChevronDown, Folder, FolderOpen } from 'lucide-svelte';

  interface Story {
    id: string;
    componentName: string;
    category: string;
    subcategory?: string;
    path: string;
  }

  interface GroupedStories {
    [category: string]: {
      [subcategory: string]: Story[];
    };
  }

  interface Props {
    onComponentSelect?: (storyId: string) => void;
    groupedStories?: GroupedStories;
  }

  let { onComponentSelect, groupedStories = {} }: Props = $props();

  // State for expanded categories and subcategories
  let expandedCategories = $state<Set<string>>(new Set(['Atoms', 'Molecules', 'Organisms']));
  let expandedSubcategories = $state<Set<string>>(new Set());

  // Category configuration with bright Svelte-inspired colors
  const categoryConfig: Record<string, {
    icon: any;
    color: string;
    bg: string;
    border: string;
    hoverBg: string;
    activeBg: string;
  }> = {
    'Atoms': {
      icon: Code,
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10',
      border: 'border-blue-300 dark:border-blue-600',
      hoverBg: 'hover:bg-blue-500/20 dark:hover:bg-blue-600/20',
      activeBg: 'bg-blue-500/30'
    },
    'Molecules': {
      icon: Layers,
      color: 'text-purple-600 dark:text-purple-400',
      bg: 'bg-gradient-to-br from-purple-500/10 to-pink-500/10',
      border: 'border-purple-300 dark:border-purple-600',
      hoverBg: 'hover:bg-purple-500/20 dark:hover:bg-purple-600/20',
      activeBg: 'bg-purple-500/30'
    },
    'Organisms': {
      icon: Package,
      color: 'text-green-600 dark:text-green-400',
      bg: 'bg-gradient-to-br from-green-500/10 to-emerald-500/10',
      border: 'border-green-300 dark:border-green-600',
      hoverBg: 'hover:bg-green-500/20 dark:hover:bg-green-600/20',
      activeBg: 'bg-green-500/30'
    }
  };

  function toggleCategory(category: string) {
    if (expandedCategories.has(category)) {
      expandedCategories.delete(category);
    } else {
      expandedCategories.add(category);
    }
    expandedCategories = new Set(expandedCategories);
  }

  function toggleSubcategory(category: string, subcategory: string) {
    const key = `${category}-${subcategory}`;
    if (expandedSubcategories.has(key)) {
      expandedSubcategories.delete(key);
    } else {
      expandedSubcategories.add(key);
    }
    expandedSubcategories = new Set(expandedSubcategories);
  }

  function handleComponentClick(storyId: string) {
    if (onComponentSelect) {
      onComponentSelect(storyId);
    }
  }

  // Get subcategories for a category
  function getSubcategories(category: string): string[] {
    const stories = groupedStories[category];
    if (!stories) return [];
    return Object.keys(stories).sort();
  }

  // Get stories for a subcategory
  function getStories(category: string, subcategory: string) {
    return groupedStories[category]?.[subcategory] || [];
  }
</script>

<div class="flex flex-col bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700" style="height: 100%;">
  <div class="flex-1 overflow-y-auto p-3 min-h-0">
    <nav class="space-y-2">
      {#each Object.keys(categoryConfig) as category}
        {@const config = categoryConfig[category]}
        {@const IconComponent = config.icon}
        {@const isExpanded = expandedCategories.has(category)}
        {@const subcategories = getSubcategories(category)}
        {@const totalCount = subcategories.reduce((sum, sub) => sum + getStories(category, sub).length, 0)}

        <div class="space-y-1">
          <!-- Category header -->
          <button
            onclick={() => toggleCategory(category)}
            class="w-full flex items-center gap-2 px-2.5 py-2 rounded-lg transition-all duration-200 {config.hoverBg} group relative overflow-hidden"
          >
            <!-- Subtle background gradient on hover -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 {config.bg}"></div>

            <!-- Expand/collapse indicator -->
            <div class="relative flex-shrink-0 transition-transform duration-200 {isExpanded ? 'rotate-90' : 'rotate-0'}">
              <ChevronRight class="w-4 h-4 text-gray-400 dark:text-gray-500" />
            </div>

            <!-- Category icon -->
            <div class="relative w-7 h-7 rounded-md {config.bg} border {config.border} flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md transition-shadow">
              <IconComponent class="w-4 h-4 {config.color}" />
            </div>

            <!-- Category name -->
            <span class="relative flex-1 text-left font-semibold text-gray-800 dark:text-white capitalize text-sm tracking-wide min-w-0">
              {category}
            </span>

            <!-- Count badge -->
            <span class="relative px-2 py-0.5 rounded-full text-xs font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 tabular-nums flex-shrink-0 min-w-[32px] text-center">
              {totalCount}
            </span>
          </button>

          <!-- Subcategories and components -->
          {#if isExpanded}
            <div class="ml-3 pl-4 border-l-2 {config.border} space-y-1 mt-1">
              {#each subcategories as subcategory}
                {@const stories = getStories(category, subcategory)}
                {@const subcategoryKey = `${category}-${subcategory}`}
                {@const isSubcategoryExpanded = expandedSubcategories.has(subcategoryKey)}

                {#if stories.length > 0}
                  <!-- Subcategory header with icon -->
                  <button
                    onclick={() => toggleSubcategory(category, subcategory)}
                    class="w-full flex items-center gap-2 px-2 py-1.5 transition-all duration-200 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 rounded-md group"
                  >
                    <!-- Expand/collapse indicator -->
                    <div class="flex-shrink-0 transition-transform duration-200 {isSubcategoryExpanded ? 'rotate-90' : 'rotate-0'}">
                      <ChevronRight class="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" />
                    </div>

                    <!-- Folder icon -->
                    <div class="flex-shrink-0 transition-transform duration-200 group-hover:scale-110">
                      {#if isSubcategoryExpanded}
                        <FolderOpen class="w-3.5 h-3.5 {config.color} opacity-60" />
                      {:else}
                        <Folder class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
                      {/if}
                    </div>

                    <!-- Subcategory name -->
                    <span class="flex-1 text-left text-xs font-medium text-gray-700 dark:text-gray-300 capitalize min-w-0 truncate">
                      {subcategory}
                    </span>

                    <!-- Count -->
                    <span class="px-1.5 py-0.5 rounded text-xs font-semibold text-gray-400 dark:text-gray-500 tabular-nums flex-shrink-0 min-w-[24px] text-center">
                      {stories.length}
                    </span>
                  </button>

                  <!-- Components in subcategory -->
                  {#if isSubcategoryExpanded}
                    <div class="ml-6 space-y-0.5 mt-0.5">
                      {#each stories as story}
                        <button
                          onclick={() => handleComponentClick(story.id)}
                          class="w-full flex items-center gap-2 px-2 py-1.5 text-xs text-gray-600 dark:text-gray-400 hover:bg-[#FF3E00]/10 dark:hover:bg-[#FF3E00]/20 hover:text-[#FF3E00] dark:hover:text-[#FF3E00] transition-all duration-150 group rounded-md"
                        >
                          <!-- Component bullet point -->
                          <div class="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600 group-hover:bg-[#FF3E00] transition-colors flex-shrink-0"></div>

                          <!-- Component name -->
                          <span class="flex-1 text-left truncate font-medium">
                            {story.componentName}
                          </span>
                        </button>
                      {/each}
                    </div>
                  {/if}
                {/if}
              {/each}
            </div>
          {/if}
        </div>
      {/each}
    </nav>
  </div>
</div>

<style>
  /* Custom scrollbar */
  div::-webkit-scrollbar {
    width: 8px;
  }

  div::-webkit-scrollbar-track {
    background: transparent;
  }

  div::-webkit-scrollbar-thumb {
    background: rgba(156, 163, 175, 0.3);
    border-radius: 4px;
  }

  div::-webkit-scrollbar-thumb:hover {
    background: rgba(156, 163, 175, 0.5);
  }

  :global(.dark) div::-webkit-scrollbar-thumb {
    background: rgba(75, 85, 99, 0.3);
  }

  :global(.dark) div::-webkit-scrollbar-thumb:hover {
    background: rgba(75, 85, 99, 0.5);
  }
</style>