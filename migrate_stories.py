"""
Script to migrate story files to use Story.svelte component
"""
import os
import re
from pathlib import Path

def get_component_name(file_path):
    """Extract component name from file path"""
    parts = file_path.split(os.sep)
    for i, part in enumerate(parts):
        if part == 'index.story.svelte':
            return parts[i-1] if i > 0 else 'component'
    return 'component'

def create_migration_template(component_name):
    """Create a basic migration template"""
    return f'''<script lang="ts">
  import {{ Story }} from '$stylist/playground';
  import type {{ ControlConfig }} from '$stylist/playground';

  import {component_name} from './index.svelte';

  let {{
    id = '',
    title = '',
    description = '',
    controls = []
  }} = $props<{{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }}>();
</script>

<Story
  {{id}}
  {{title}}
  {{description}}
  component={component_name}
  category="Organisms"
  controls={{controls}}
>
  {{#snippet children(props: Record<string, unknown>)}}
    <section class="sb-organisms-{component_name.lower()} grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary {component_name.replace(/-/g, ' ').title()} Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive component with customizable options.</p>

        <div class="mt-6">
          <{component_name} />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Component Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different component configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Variation 1</p>
            <div>
              <{component_name} />
            </div>
          </article>
        </div>
      </div>
    </section>
  {{/snippet}}
</Story>
'''

def main():
    base_path = Path(r'D:\2026\code\template\stylist-svelte\src\lib\components\organisms\information')
    
    # Files that need migration
    files_to_migrate = [
        'communication/social/social-activity-feed',
        'communication/social/social-feed',
        'communication/social/social-login',
        'communication/social/social-share',
        'development/debug-console',
        'development/design-tokens',
        'development/development-error-boundary',
        'development/resource-optimizer',
        'files/file-browser',
        'files/file-list-item',
        'geo/geo-jsonviewer',
        'geo/map-marker',
        'geo/map-with-markers',
        'geo/route-planner',
        'geo/store-locator',
        'marketing/abtest-configurator',
        'marketing/test-results-viewer',
        'marketing/traffic-analytics',
        'marketing/user-behavior-metrics',
        'media/media-library',
        'product/product-catalog',
        'product/product-reviews',
        'product/product-sorting',
        'product/product-tour',
    ]
    
    print(f"Files to migrate: {len(files_to_migrate)}")
    for file_rel_path in files_to_migrate:
        file_path = base_path / file_rel_path / 'index.story.svelte'
        if file_path.exists():
            print(f"✓ {file_rel_path}")
        else:
            print(f"✗ {file_rel_path} - NOT FOUND")

if __name__ == '__main__':
    main()
