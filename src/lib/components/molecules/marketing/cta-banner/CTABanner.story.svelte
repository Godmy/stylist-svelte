<script lang="ts">
  import CTABanner from './CTABanner.svelte';

  // Example data for CTABanner
  const ctaBannerData = {
    title: 'Ready to build with AI-verified components?',
    description: 'Install our package and start building today',
    buttons: [
      {
        label: "Get Started",
        variant: "primary" as const,
        onClick: () => alert('Get Started clicked!')
      },
      {
        label: "View on NPM",
        variant: "outline" as const,
        onClick: () => alert('View on NPM clicked!')
      }
    ],
    backgroundVariant: 'gradient' as const,
    backgroundImage: 'https://via.placeholder.com/1200x400'
  };

  const ctaBannerWithImage = {
    title: 'Summer Sale is Live!',
    description: 'Up to 50% off on all premium features',
    backgroundVariant: 'image' as const,
    backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    buttons: [
      {
        label: "Shop Now",
        variant: "primary" as const,
        onClick: () => alert('Shop Now clicked!')
      }
    ]
  };

  const ctaBannerSolid = {
    title: 'Join Our Community',
    description: 'Connect with other developers and designers',
    backgroundVariant: 'solid' as const,
    backgroundImage: 'https://via.placeholder.com/1200x400',
    buttons: [
      {
        label: "Sign Up",
        variant: "secondary" as const,
        onClick: () => alert('Sign Up clicked!')
      }
    ]
  };

  const ctaBannerMultiple = {
    title: 'Enhance Your Project',
    description: 'Choose the plan that fits your needs',
    backgroundVariant: 'gradient' as const,
    backgroundImage: 'https://via.placeholder.com/1200x400',
    buttons: [
      {
        label: "Free Trial",
        variant: "primary" as const,
        onClick: () => alert('Free Trial clicked!')
      },
      {
        label: "Buy Now",
        variant: "outline" as const,
        onClick: () => alert('Buy Now clicked!')
      },
      {
        label: "Learn More",
        variant: "secondary" as const,
        onClick: () => alert('Learn More clicked!')
      }
    ]
  };
</script>

<!-- Example 1: Default CTABanner -->
<div class="p-4 border-b">
  <h3 class="text-lg font-semibold mb-2">Default CTABanner</h3>
  <CTABanner {...ctaBannerData} />
</div>

<!-- Example 2: With Image Background -->
<div class="p-4 border-b">
  <h3 class="text-lg font-semibold mb-2">With Image Background</h3>
  <CTABanner {...ctaBannerWithImage} />
</div>

<!-- Example 3: Solid Background -->
<div class="p-4 border-b">
  <h3 class="text-lg font-semibold mb-2">Solid Background</h3>
  <CTABanner {...ctaBannerSolid} />
</div>

<!-- Example 4: Multiple Buttons -->
<div class="p-4">
  <h3 class="text-lg font-semibold mb-2">Multiple Buttons</h3>
  <CTABanner {...ctaBannerMultiple} />
</div>