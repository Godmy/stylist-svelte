<script lang="ts">
  import FeatureToggle from './FeatureToggle.svelte';

  let initialFeature = {
    id: 'feature-1',
    name: 'NewCheckoutFlow',
    description: 'A new checkout flow that improves user experience and conversion rates',
    enabled: false,
    rolloutStrategy: 'gradual' as const,
    rolloutPercentage: 25,
    targetUsers: ['user1@example.com', 'user2@example.com'],
    targetConditions: [
      { attribute: 'country', operator: 'equals', value: 'US' },
      { attribute: 'userType', operator: 'equals', value: 'premium' }
    ],
    createdAt: new Date(Date.now() - 86400000), // 1 day ago
    updatedAt: new Date()
  };
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">FeatureToggle Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive FeatureToggle</h2>
    <div class="max-w-3xl mx-auto">
      <FeatureToggle 
        {initialFeature}
        onToggle={(id, enabled) => {
          console.log(`Feature ${id} toggled to ${enabled}`);
        }}
        onSave={(feature) => {
          console.log('Feature saved:', feature);
        }}
      />
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">FeatureToggle Variations</h2>
    <div class="space-y-4">
      <div>
        <h3 class="text-sm font-medium mb-2">Feature with Instant Rollout</h3>
        <div class="max-w-3xl mx-auto">
          <FeatureToggle 
            initialFeature={{
              id: 'feature-2',
              name: 'DarkMode',
              description: 'Enable dark mode for better visual comfort in low-light environments',
              enabled: false,
              rolloutStrategy: 'instant',
              rolloutPercentage: 100,
              targetUsers: [],
              targetConditions: [],
              createdAt: new Date(),
              updatedAt: new Date()
            }}
          />
        </div>
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">Feature with Targeted Rollout</h3>
        <div class="max-w-3xl mx-auto">
          <FeatureToggle 
            initialFeature={{
              id: 'feature-3',
              name: 'B2BDashboard',
              description: 'Enhanced dashboard for business customers',
              enabled: true,
              rolloutStrategy: 'targeted',
              rolloutPercentage: 100,
              targetUsers: ['business1@example.com', 'business2@example.com'],
              targetConditions: [],
              createdAt: new Date(),
              updatedAt: new Date()
            }}
          />
        </div>
      </div>
    </div>
  </div>
</div>