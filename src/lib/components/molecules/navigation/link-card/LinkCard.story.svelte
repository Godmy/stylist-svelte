<script lang="ts">
  import LinkCard from './LinkCard.svelte';
  import type { Meta, StoryFn } from '@storybook/svelte';
  import type { ILinkCardProps, LinkCardVariant } from './types';

  // Определяем мета-информацию для компонента
  const meta: Meta = {
    title: 'Molecules/Navigation/LinkCard',
    component: LinkCard,
    tags: ['autodocs'],
    argTypes: {
      title: {
        control: { type: 'text' },
        description: 'Заголовок карточки'
      },
      description: {
        control: { type: 'text' },
        description: 'Описание карточки'
      },
      href: {
        control: { type: 'text' },
        description: 'URL для перехода'
      },
      newTab: {
        control: { type: 'boolean' },
        description: 'Открывать ли ссылку в новой вкладке'
      },
      variant: {
        control: { type: 'select' },
        options: ['default', 'primary', 'secondary', 'outline'],
        description: 'Вариант оформления карточки'
      },
      icon: {
        control: { type: 'text' },
        description: 'Иконка для карточки'
      },
      showArrow: {
        control: { type: 'boolean' },
        description: 'Показывать ли стрелку перехода'
      },
      class: {
        control: { type: 'text' },
        description: 'Дополнительные CSS классы'
      }
    },
    parameters: {
      docs: {
        description: {
          component: 'LinkCard - компонент для отображения карточки-ссылки для быстрых переходов. Используется для создания интерактивных карточек, ведущих на другие страницы или ресурсы.'
        }
      }
    }
  };

  export default meta;

  // Определяем базовую историю
  const Template: StoryFn = ({ ...args }) => ({
    Component: LinkCard,
    props: args
  });

  // Создаем экспортируемые истории
  export const Default = Template.bind({});
  Default.args = {
    title: 'Documentation',
    description: 'Learn how to use our components and features',
    href: '#',
    variant: 'default',
    showArrow: true
  };

  export const WithIcon = Template.bind({});
  WithIcon.args = {
    ...Default.args,
    title: 'API Reference',
    description: 'Detailed documentation for our API',
    href: '#',
    variant: 'primary',
    icon: '🔗'
  };

  export const SecondaryVariant = Template.bind({});
  SecondaryVariant.args = {
    ...Default.args,
    title: 'Tutorials',
    description: 'Step-by-step guides to get started',
    href: '#',
    variant: 'secondary'
  };

  export const OutlineVariant = Template.bind({});
  OutlineVariant.args = {
    ...Default.args,
    title: 'Community',
    description: 'Join our community forums',
    href: '#',
    variant: 'outline',
    newTab: true
  };

  export const WithoutArrow = Template.bind({});
  WithoutArrow.args = {
    ...Default.args,
    title: 'Resources',
    description: 'Additional tools and resources',
    href: '#',
    showArrow: false
  };
</script>

<!-- Основной блок истории -->
<Story of={Default} />
<Story of={WithIcon} />
<Story of={SecondaryVariant} />
<Story of={OutlineVariant} />
<Story of={WithoutArrow} />