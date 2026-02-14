<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import TranslationEditor from './index.svelte';

  const texts = [
    { id: '1', key: 'hello', original: 'Hello', translations: { en: 'Hello', es: 'Hola' }, status: 'translated' as const },
    { id: '2', key: 'bye', original: 'Goodbye', translations: { en: 'Goodbye', es: '' }, status: 'untranslated' as const }
  ];
  const locales = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' }
  ];
</script>

<Story id="organisms-translation-editor" title="Organisms / Interaction / Input / Translation Editor" component={TranslationEditor} category="Organisms/Interaction/Input">
  {#snippet children()}<div class="p-4"><TranslationEditor texts={texts} locales={locales} currentLocale="es" /></div>{/snippet}
</Story>
