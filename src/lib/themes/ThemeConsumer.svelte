<script lang="ts">
  import { getThemeContext } from '../themes/context';
  import { onMount } from 'svelte';
  
  // Получаем текущую тему из контекста
  const { theme } = getThemeContext();
  
  // Создаем реактивную переменную для обновления стилей при смене темы
  let currentTheme = $state(theme);
  
  // При монтировании подписываемся на изменения темы
  onMount(() => {
    // В реальной реализации здесь будет логика подписки на изменения темы
    // Пока что просто обновляем тему при изменении контекста
    const { theme: newTheme } = getThemeContext();
    currentTheme = newTheme;
  });
</script>

<slot {theme} />