<script lang="ts">
  import Hero from './index.svelte';

  // Example data for Hero
  const heroData = {
    title: 'Vibe Management',
    subtitle: 'AI-Driven Development at Scale',
    stats: [
      { label: "Components", value: 429 },
      { label: "SOLID Checks", value: 1095 },
      { label: "Test Coverage", value: "94%" }
    ],
    primaryCTA: {
      label: "Explore Stylist",
      onClick: () => alert('Primary CTA clicked!')
    },
    secondaryCTA: {
      label: "Read Methodology",
      onClick: () => alert('Secondary CTA clicked!')
    },
    backgroundVariant: 'gradient',
    height: 'screen',
    backgroundImage: 'https://via.placeholder.com/1200x600',
    children: undefined
  };

  const heroWithImage = {
    title: 'Beautiful Landscapes',
    subtitle: 'Explore the world of possibilities',
    stats: [
      { label: "Locations", value: 1247 },
      { label: "Photographers", value: 365 },
      { label: "Awards", value: 28 }
    ],
    primaryCTA: {
      label: "Explore Gallery",
      onClick: () => alert('Primary CTA clicked!')
    },
    secondaryCTA: {
      label: "Learn More",
      onClick: () => alert('Secondary CTA clicked!')
    },
    backgroundVariant: 'image',
    backgroundImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    children: undefined
  };

  const heroMediumHeight = {
    title: 'Quick Access',
    subtitle: 'Get to what you need in no time',
    height: 'medium',
    backgroundVariant: 'gradient',
    primaryCTA: {
      label: "Get Started",
      onClick: () => alert('Get Started clicked!')
    },
    secondaryCTA: {
      label: "Learn More",
      onClick: () => alert('Secondary CTA clicked!')
    },
    backgroundImage: 'https://via.placeholder.com/1200x600',
    children: undefined
  };

  const heroParticles = {
    title: 'Innovation Hub',
    subtitle: 'Where technology meets creativity',
    stats: [
      { label: "Projects", value: 86 },
      { label: "Innovations", value: 24 },
      { label: "Team Members", value: 18 }
    ],
    primaryCTA: {
      label: "Join Us",
      onClick: () => alert('Join Us clicked!')
    },
    secondaryCTA: {
      label: "Learn More",
      onClick: () => alert('Learn More clicked!')
    },
    backgroundVariant: 'particles',
    backgroundImage: 'https://via.placeholder.com/1200x600',
    children: undefined
  };
</script>

<!-- Example 1: Default Hero -->
<div class="p-4 border-b">
  <h3 class="text-lg font-semibold mb-2">Default Hero</h3>
  <Hero {...heroData} />
</div>

<!-- Example 2: With Image Background -->
<div class="p-4 border-b">
  <h3 class="text-lg font-semibold mb-2">With Image Background</h3>
  <Hero {...heroWithImage} />
</div>

<!-- Example 3: Medium Height -->
<div class="p-4 border-b">
  <h3 class="text-lg font-semibold mb-2">Medium Height</h3>
  <Hero {...heroMediumHeight} />
</div>

<!-- Example 4: Particles Background -->
<div class="p-4">
  <h3 class="text-lg font-semibold mb-2">Particles Background</h3>
  <Hero {...heroParticles} />
</div>