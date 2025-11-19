<script lang="ts">
  import TeamMemberCard from './TeamMemberCard.svelte';
  import type { Meta, StoryFn } from '$lib/playground/interfaces';

  // Define the meta information for the story
  const meta: Meta = {
    title: 'Molecules/Team/TeamMemberCard',
    component: TeamMemberCard,
    tags: ['autodocs'],
    parameters: {
      layout: 'centered'
    },
    argTypes: {
      name: {
        control: { type: 'text' },
        description: 'Name of the team member',
        defaultValue: 'Claude'
      },
      role: {
        control: { type: 'text' },
        description: 'Role of the team member',
        defaultValue: 'Content Strategist'
      },
      model: {
        control: { type: 'text' },
        description: 'AI model information',
        defaultValue: 'Claude Sonnet 4.5'
      },
      avatar: {
        control: { type: 'text' },
        description: 'URL for the team member\'s avatar',
        defaultValue: '/avatars/claude.svg'
      },
      badges: {
        control: { type: 'object' },
        description: 'Array of badge labels to display',
        defaultValue: ['Content', 'Architecture', 'Analysis']
      },
      description: {
        control: { type: 'text' },
        description: 'Description of the team member\'s expertise',
        defaultValue: 'Specializes in documentation, content strategy, and architectural analysis. Known for deep research and critical thinking.'
      },
      achievements: {
        control: { type: 'object' },
        description: 'Array of achievements',
        defaultValue: [
          { title: 'SAMO_DETAILS.md', description: 'Created comprehensive guide' },
          { title: '429-component analysis', description: 'Deep dive into stylist-svelte' }
        ]
      },
      variant: {
        control: { type: 'select', options: ['default', 'featured'] },
        description: 'Visual variant of the team member card',
        defaultValue: 'default'
      },
      class: {
        control: { type: 'text' },
        description: 'Additional CSS classes'
      }
    }
  };

  // Default story
  const DefaultStory: StoryFn = (args?: Record<string, any>) => {
    return {
      Component: TeamMemberCard,
      props: args || {}
    };
  };

  // Story with different configurations
  const FeaturedStory: StoryFn = (args?: Record<string, any>) => {
    return {
      Component: TeamMemberCard,
      props: { ...args, variant: 'featured' }
    };
  };

  const QwenStory: StoryFn = (args?: Record<string, any>) => {
    return {
      Component: TeamMemberCard,
      props: {
        ...args,
        name: 'Qwen',
        role: 'Tech Lead',
        model: 'Qwen 2.5',
        avatar: '/avatars/qwen.svg',
        badges: ['Svelte', 'Architecture', 'AI'],
        description: 'Leads technical implementation, code reviews, and architectural decisions.',
        achievements: [
          { title: 'Built stylist-svelte', description: '429 components' },
          { title: 'Implemented SAMO analyzer', description: 'Python-based' },
          { title: 'Achieved 53.3% SOLID compliance', description: 'in atoms' }
        ]
      }
    };
  };
</script>

<!-- Default story -->
<div id="molecules-team-member-card">
  <h1>TeamMemberCard</h1>
  <p>Team member card for displaying team member information</p>
  
  <h2>Claude (Default)</h2>
  <div class="p-4 border rounded-lg">
    <svelte:component this={DefaultStory} 
      name="Claude" 
      role="Content Strategist"
      model="Claude Sonnet 4.5"
      avatar="/avatars/claude.svg"
      badges={["Content", "Architecture", "Analysis"]}
      description="Specializes in documentation, content strategy, and architectural analysis. Known for deep research and critical thinking."
      achievements={[
        { title: "SAMO_DETAILS.md", description: "Created comprehensive guide" },
        { title: "429-component analysis", description: "Deep dive into stylist-svelte" }
      ]} />
  </div>
  
  <h2>Qwen (Tech Lead)</h2>
  <div class="p-4 border rounded-lg">
    <svelte:component this={QwenStory} />
  </div>
  
  <h2>Featured Variant</h2>
  <div class="p-4 border rounded-lg">
    <svelte:component this={FeaturedStory} 
      name="Gemini" 
      role="Scrum Master"
      model="Gemini Pro"
      avatar="/avatars/gemini.svg"
      badges={["Agile", "Facilitation", "Coordination"]}
      description="Facilitates team collaboration, removes blockers, and ensures Scrum practices."
      achievements={[
        { title: "Organized technical synthesis", description: "sessions" },
        { title: "Facilitated SAMO discussion", description: "files 33-42" }
      ]}
      variant="featured" />
  </div>
</div>

<!-- Export the meta for Storybook -->
{@html `<script type="application/json" id="svelte-meta">${JSON.stringify(meta)}</script>`}