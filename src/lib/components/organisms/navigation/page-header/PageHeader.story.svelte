<script lang="ts">
  import PageHeader from './PageHeader.svelte';
  import type { Meta, StoryFn } from '@storybook/svelte';
  import type { IPageHeaderProps } from './types';
  import Button from '../../../atoms/controls/buttons/button/Button.svelte';

  // Определяем мета-информацию для компонента
  const meta: Meta = {
    title: 'Organisms/Navigation/PageHeader',
    component: PageHeader,
    tags: ['autodocs'],
    argTypes: {
      title: {
        control: { type: 'text' },
        description: 'Заголовок страницы'
      },
      description: {
        control: { type: 'text' },
        description: 'Описание страницы'
      },
      breadcrumbs: {
        control: { type: 'object' },
        description: 'Хлебные крошки'
      },
      class: {
        control: { type: 'text' },
        description: 'Дополнительные CSS классы'
      }
    },
    parameters: {
      docs: {
        description: {
          component: 'PageHeader - заголовок страницы с хлебными крошками и описанием. Используется для создания единообразного заголовка страницы с навигацией и дополнительными действиями.'
        }
      }
    }
  };

  export default meta;

  // Определяем базовую историю
  const Template: StoryFn = ({ ...args }) => ({
    Component: PageHeader,
    props: args
  });

  // Создаем экспортируемые истории
  export const Default = Template.bind({});
  Default.args = {
    title: 'SAMO Methodology',
    description: 'Automated architecture verification for component libraries',
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "SAMO" }
    ]
  };

  export const WithActions = Template.bind({});
  WithActions.args = {
    title: 'Component Library',
    description: 'Comprehensive collection of reusable UI components',
    breadcrumbs: [
      { label: "Dashboard", href: "/" },
      { label: "Libraries", href: "/libraries" },
      { label: "Component Library" }
    ],
    actions: () => ({
      Component: Button,
      props: {
        variant: "outline",
        label: "Download PDF"
      }
    })
  };

  export const WithoutBreadcrumbs = Template.bind({});
  WithoutBreadcrumbs.args = {
    title: 'Project Settings',
    description: 'Configure your project preferences and settings',
    actions: () => ({
      Component: Button,
      props: {
        variant: "primary",
        label: "Save Changes"
      }
    })
  };

  export const WithoutDescription = Template.bind({});
  WithoutDescription.args = {
    title: 'User Dashboard',
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Dashboard" }
    ]
  };
</script>

<!-- Основной блок истории -->
<Story of={Default} />
<Story of={WithActions} />
<Story of={WithoutBreadcrumbs} />
<Story of={WithoutDescription} />