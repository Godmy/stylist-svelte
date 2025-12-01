<script lang="ts">
  /**
   * ChatPreview - компонент для отображения превью чата команды
   * 
   * Следует принципам SOLID:
   * 
   * Single Responsibility: Отвечает только за отображение превью чата
   * Open/Closed: Легко расширяется через пропсы, не требует изменений в коде
   * Liskov Substitution: Может быть заменен другим компонентом чата при необходимости
   * Interface Segregation: Имеет минимальный, конкретный интерфейс для чата
   * Dependency Inversion: Зависит от абстракции стилей через ChatPreviewStyleManager
   * 
   * Использует подход Atomic Design (Molecule) - комбинирует базовые элементы
   * (аватары, сообщения) в составной компонент для отображения чата
   */
  
  import type { IChatPreviewProps } from './types';
  import { ChatPreviewStyleManager } from './styles';
  import MessageBubble from '../message-bubble/MessageBubble.svelte';
  
  let {
    title,
    participants = [],
    messages = [],
    maxMessages = 5,
    showAvatars = true,
    class: className = ''
  } = $props();
  
  // Вычисляемые стили через derived для изоляции логики стилизации
  const containerClasses = $derived(ChatPreviewStyleManager.getContainerClasses(className));
  const headerClasses = $derived(ChatPreviewStyleManager.getHeaderClasses());
  const chatInfoClasses = $derived(ChatPreviewStyleManager.getChatInfoClasses());
  const titleClasses = $derived(ChatPreviewStyleManager.getTitleClasses());
  const participantsClasses = $derived(ChatPreviewStyleManager.getParticipantsClasses());
  const messagesContainerClasses = $derived(ChatPreviewStyleManager.getMessagesContainerClasses());
  const avatarClasses = $derived(ChatPreviewStyleManager.getAvatarClasses());

  // Фильтруем сообщения до максимального количества
  const displayMessages = $derived(messages.slice(0, maxMessages));
</script>

<div class={containerClasses} role="region" aria-label={`Chat preview: ${title}`}>
  <!-- Заголовок чата -->
  <div class={headerClasses}>
    <div class={chatInfoClasses}>
      <h3 class={titleClasses} aria-label={title}>{title}</h3>
      <div class={participantsClasses} aria-label={`Participants: ${participants.join(', ')}`}>
        ({participants.join(', ')})
      </div>
    </div>
  </div>
  
  <!-- Сообщения -->
  <div class={messagesContainerClasses}>
    {#each displayMessages as message, index}
      <MessageBubble 
        {...message}
        avatar={showAvatars ? message.avatar : undefined}
      />
    {/each}
  </div>
</div>