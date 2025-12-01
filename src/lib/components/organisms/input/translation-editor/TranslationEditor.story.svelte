<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import TranslationEditor from './TranslationEditor.svelte';

    type Props = {
        texts?: Array<{
            id: string;
            key: string;
            original: string;
            translations: Record<string, string>;
            context?: string;
            status: 'translated' | 'needs-review' | 'untranslated';
        }>;
        locales?: Array<{
            code: string;
            name: string;
        }>;
        defaultLocale?: string;
        currentLocale?: string;
        showContextColumn?: boolean;
        showStatusColumn?: boolean;
        onTranslationChange?: (key: string, locale: string, translation: string) => void;
        onSave?: (texts: any[]) => void;
    };

    type TranslatableText = {
        id: string;
        key: string;
        original: string;
        translations: Record<string, string>;
        context?: string;
        status: 'translated' | 'needs-review' | 'untranslated';
    };

    const defaultLocales: Array<{
        code: string;
        name: string;
    }> = [
        { code: 'en', name: 'English' },
        { code: 'es', name: 'Spanish' },
        { code: 'fr', name: 'French' }
    ];

    const defaultTexts: TranslatableText[] = [
        {
            id: '1',
            key: 'greeting',
            original: 'Hello',
            translations: { en: 'Hello', es: 'Hola', fr: 'Bonjour' },
            context: 'Greeting used on homepage',
            status: 'translated'
        },
        {
            id: '2',
            key: 'farewell',
            original: 'Goodbye',
            translations: { en: 'Goodbye', es: 'Adiós', fr: 'Au revoir' },
            context: 'Farewell message',
            status: 'translated'
        },
        {
            id: '3',
            key: 'welcome',
            original: 'Welcome',
            translations: { en: 'Welcome', es: 'Bienvenido', fr: 'Bienvenue' },
            context: 'Welcome message',
            status: 'translated'
        }
    ];

    const controls: ControlConfig[] = [
        {
            name: 'defaultLocale',
            type: 'text',
            defaultValue: 'en'
        },
        {
            name: 'currentLocale',
            type: 'text',
            defaultValue: 'es'
        },
        {
            name: 'showContextColumn',
            type: 'boolean',
            defaultValue: true
        },
        {
            name: 'showStatusColumn',
            type: 'boolean',
            defaultValue: true
        }
    ];

    function handleTranslationChange(key: string, locale: string, translation: string) {
        console.log(`Translation changed - Key: ${key}, Locale: ${locale}, Translation: ${translation}`);
    }

    function handleSave(texts: any[]) {
        console.log('Saving translations:', texts);
    }
</script>

<Story
    id="molecules-translation-editor"
    title="TranslationEditor"
    component={TranslationEditor}
    category="Molecules"
    description="Editor for translating text content"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <TranslationEditor
                texts={props.texts || defaultTexts}
                locales={props.locales || defaultLocales}
                defaultLocale={props.defaultLocale || 'en'}
                currentLocale={props.currentLocale || 'es'}
                showContextColumn={props.showContextColumn}
                showStatusColumn={props.showStatusColumn}
                onTranslationChange={handleTranslationChange}
                onSave={handleSave}
            />
        </div>
    {/snippet}
</Story>