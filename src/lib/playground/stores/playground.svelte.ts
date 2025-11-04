/**
 * Playground State Management
 * Using Svelte 5 runes for reactive state
 */

import type { PlaygroundState, StoryConfig } from '../types';

class PlaygroundStore {
  // Core state
  state = $state<PlaygroundState>({
    currentStoryId: null,
    darkMode: false,
    sidebarOpen: true,
    viewport: 'desktop',
    showCode: false,
    controlsOpen: true
  });

  // Stories registry
  stories = $state<Map<string, StoryConfig>>(new Map());

  // Control values for current story
  controlValues = $state<Record<string, any>>({});

  // Methods
  registerStory(story: StoryConfig) {
    const wasEmpty = this.stories.size === 0;
    const isSameStory = this.state.currentStoryId === story.id;

    this.stories.set(story.id, story);

    if (wasEmpty || this.state.currentStoryId === null) {
      this.setCurrentStory(story.id);
      return;
    }

    if (isSameStory) {
      this.setCurrentStory(story.id);
    }
  }

  unregisterStory(id: string) {
    this.stories.delete(id);

    if (this.state.currentStoryId === id) {
      const next = this.stories.keys().next().value ?? null;
      this.setCurrentStory(next ?? null);
    }
  }

  setCurrentStory(id: string | null) {
    const previousId = this.state.currentStoryId;
    const previousValues = this.controlValues;

    this.state.currentStoryId = id;

    if (!id) {
      this.controlValues = {};
      return;
    }

    const story = this.stories.get(id);

    if (!story) {
      this.controlValues = {};
      return;
    }

    if (story.controls && story.controls.length > 0) {
      const mergedValues = story.controls.reduce((acc, control) => {
        if (previousId === id && control.name in previousValues) {
          acc[control.name] = previousValues[control.name];
        } else {
          acc[control.name] = control.defaultValue;
        }
        return acc;
      }, {} as Record<string, any>);

      this.controlValues = mergedValues;
    } else {
      this.controlValues = {};
    }
  }

  toggleDarkMode() {
    this.state.darkMode = !this.state.darkMode;
  }

  toggleSidebar() {
    this.state.sidebarOpen = !this.state.sidebarOpen;
  }

  setViewport(viewport: PlaygroundState['viewport']) {
    this.state.viewport = viewport;
  }

  toggleCode() {
    this.state.showCode = !this.state.showCode;
  }

  toggleControls() {
    this.state.controlsOpen = !this.state.controlsOpen;
  }

  updateControl(name: string, value: any) {
    this.controlValues[name] = value;
  }

  getCurrentStory(): StoryConfig | undefined {
    if (!this.state.currentStoryId) return undefined;
    return this.stories.get(this.state.currentStoryId);
  }

  getStoriesByCategory(): Map<string, StoryConfig[]> {
    const categorized = new Map<string, StoryConfig[]>();

    this.stories.forEach((story) => {
      const category = story.category || 'Uncategorized';
      const list = categorized.get(category) || [];
      list.push(story);
      categorized.set(category, list);
    });

    const sorted = new Map<string, StoryConfig[]>();

    [...categorized.entries()]
      .sort(([a], [b]) => a.localeCompare(b))
      .forEach(([category, stories]) => {
        const orderedStories = [...stories].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        sorted.set(category, orderedStories);
      });

    return sorted;
  }
}

// Export singleton instance
export const playgroundStore = new PlaygroundStore();
