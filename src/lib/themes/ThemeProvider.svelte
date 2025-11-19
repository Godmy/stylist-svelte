<script lang="ts">
  import { themes, type ThemeName } from './types';
  import { setThemeContext } from './context';
  import { onMount } from 'svelte';

  export let initialTheme: ThemeName = 'light';
  let currentTheme: ThemeName = initialTheme;
  let theme = themes[currentTheme];

  // Функция для установки темы
  const setTheme = (themeName: ThemeName) => {
    currentTheme = themeName;
    theme = themes[themeName];

    // Обновляем CSS переменные
    updateCSSVariables(theme);

    // Сохраняем в localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', themeName);
    }
  };

  // Функция для обновления CSS переменных
  const updateCSSVariables = (theme: typeof themes.light) => {
    const root = document.documentElement;
    
    // Цвета
    Object.entries(theme.colors).forEach(([colorCategory, colorShades]) => {
      Object.entries(colorShades).forEach(([shade, value]) => {
        root.style.setProperty(`--color-${colorCategory}-${shade}`, value);
      });
    });
    
    // Отступы
    Object.entries(theme.spacing).forEach(([name, value]) => {
      root.style.setProperty(`--spacing-${name}`, value);
    });
    
    // Типографика
    root.style.setProperty('--font-family', theme.typography.fontFamily);
    Object.entries(theme.typography.sizes).forEach(([size, value]) => {
      root.style.setProperty(`--text-size-${size}`, value);
    });
  };

  // Восстанавливаем тему из localStorage или определяем по системным настройкам
  onMount(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as ThemeName | null;
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      let themeToUse: ThemeName = 'light';

      if (savedTheme && savedTheme in themes) {
        themeToUse = savedTheme;
      } else if (systemPrefersDark) {
        themeToUse = 'dark';
      } else {
        themeToUse = initialTheme;
      }

      setTheme(themeToUse);
    }
  });

  // Устанавливаем контекст
  setThemeContext(theme, setTheme, currentTheme);
</script>

<slot />