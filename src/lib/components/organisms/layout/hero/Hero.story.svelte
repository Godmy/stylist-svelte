<script lang="ts">
  import Hero from './Hero.svelte';
  import type { Meta, StoryFn } from '@storybook/svelte';
  import type { IHeroProps, HeroBackgroundVariant, HeroHeight } from './types';

  // Определяем мета-информацию для компонента
  const meta: Meta = {
    title: 'Organisms/Layout/Hero',
    component: Hero,
    tags: ['autodocs'],
    argTypes: {
      title: {
        control: { type: 'text' },
        description: 'Заголовок hero секции'
      },
      subtitle: {
        control: { type: 'text' },
        description: 'Подзаголовок hero секции'
      },
      stats: {
        control: { type: 'object' },
        description: 'Статистика для отображения'
      },
      primaryCTA: {
        control: { type: 'object' },
        description: 'Основная кнопка действия'
      },
      secondaryCTA: {
        control: { type: 'object' },
        description: 'Второстепенная кнопка действия'
      },
      backgroundVariant: {
        control: { type: 'select' },
        options: ['gradient', 'particles', 'image'],
        description: 'Вариант фона'
      },
      backgroundImage: {
        control: { type: 'text' },
        description: 'URL фонового изображения'
      },
      height: {
        control: { type: 'select' },
        options: ['screen', 'large', 'medium'],
        description: 'Высота секции'
      },
      class: {
        control: { type: 'text' },
        description: 'Дополнительные CSS классы'
      }
    },
    parameters: {
      docs: {
        description: {
          component: 'Hero - полноэкранная секция заголовка с фоном и CTA. Используется для создания привлекательной начальной секции страницы с призывом к действию и ключевой статистикой.'
        }
      }
    }
  };

  export default meta;

  // Определяем базовую историю
  const Template: StoryFn = ({ ...args }) => ({
    Component: Hero,
    props: args
  });

  // Создаем экспортируемые истории
  export const Default = Template.bind({});
  Default.args = {
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
    height: 'screen'
  };

  export const WithImageBackground = Template.bind({});
  WithImageBackground.args = {
    ...Default.args,
    title: 'Beautiful Landscapes',
    subtitle: 'Explore the world of possibilities',
    stats: [
      { label: "Locations", value: 1247 },
      { label: "Photographers", value: 365 },
      { label: "Awards", value: 28 }
    ],
    backgroundVariant: 'image',
    backgroundImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb'
  };

  export const MediumHeight = Template.bind({});
  MediumHeight.args = {
    ...Default.args,
    title: 'Quick Access',
    subtitle: 'Get to what you need in no time',
    height: 'medium',
    backgroundVariant: 'gradient',
    primaryCTA: { 
      label: "Get Started", 
      onClick: () => alert('Get Started clicked!') 
    }
  };

  export const ParticlesBackground = Template.bind({});
  ParticlesBackground.args = {
    ...Default.args,
    title: 'Innovation Hub',
    subtitle: 'Where technology meets creativity',
    stats: [
      { label: "Projects", value: 86 },
      { label: "Innovations", value: 24 },
      { label: "Team Members", value: 18 }
    ],
    backgroundVariant: 'particles',
    primaryCTA: { 
      label: "Join Us", 
      onClick: () => alert('Join Us clicked!') 
    },
    secondaryCTA: { 
      label: "Learn More", 
      onClick: () => alert('Learn More clicked!') 
    }
  };
</script>

<!-- Основной блок истории -->
<Story of={Default} />
<Story of={WithImageBackground} />
<Story of={MediumHeight} />
<Story of={ParticlesBackground} />