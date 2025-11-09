<script lang="ts">
  import { Abbr, DefinitionDescription, DefinitionTerm, Em, Highlight, Strikethrough, Strong, Subscript, Superscript } from '$lib';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  let title = $state('Язык');
  let text = $state('Пример текста');
  let term = $state('Термин');
  let description = $state('Описание');

  const controls: ControlConfig[] = [
    { name: 'title', type: 'text', defaultValue: 'Язык' },
    { name: 'text', type: 'text', defaultValue: 'Пример текста' },
    { name: 'term', type: 'text', defaultValue: 'Термин' },
    { name: 'description', type: 'text', defaultValue: 'Описание' }
  ];
</script>

# Inline

## Abbr

<Story id="abbr-story" title="Abbr" component={Abbr} {controls}>
  <div class="space-y-4 p-8">
    <p>Язык <Abbr title={title}>{text}</Abbr> используется для разметки веб-страниц.</p>

    <div class="space-y-4">
      <div>
        <label>Abbreviation: <input type="text" bind:value={text} /></label>
      </div>

      <div>
        <label>Title: <input type="text" bind:value={title} /></label>
      </div>
    </div>
  </div>
</Story>

## DefinitionTerm and DefinitionDescription

<Story id="definitionterm-description-story" title="DefinitionTerm and DefinitionDescription" component={DefinitionTerm}>
  <div class="space-y-4 p-8">
    <dl>
      <DefinitionTerm>{term}</DefinitionTerm>
      <DefinitionDescription>{description}</DefinitionDescription>
    </dl>

    <div class="space-y-4">
      <div>
        <label>Term: <input type="text" bind:value={term} /></label>
      </div>

      <div>
        <label>Description: <input type="text" bind:value={description} /></label>
      </div>
    </div>
  </div>
</Story>

## Em

<Story id="em-story" title="Em" component={Em}>
  <div class="space-y-4 p-8">
    <p>Этот текст содержит <Em>{text}</Em> слово.</p>

    <div class="space-y-4">
      <div>
        <label>Emphasized text: <input type="text" bind:value={text} /></label>
      </div>
    </div>
  </div>
</Story>

## Highlight

<Story id="highlight-story" title="Highlight" component={Highlight}>
  <div class="space-y-4 p-8">
    <p>Этот текст содержит <Highlight>{text}</Highlight> фрагмент.</p>

    <div class="space-y-4">
      <div>
        <label>Highlighted text: <input type="text" bind:value={text} /></label>
      </div>
    </div>
  </div>
</Story>

## Strikethrough

<Story id="strikethrough-story" title="Strikethrough" component={Strikethrough}>
  <div class="space-y-4 p-8">
    <p>Этот текст содержит <Strikethrough>{text}</Strikethrough> фрагмент.</p>

    <div class="space-y-4">
      <div>
        <label>Strikethrough text: <input type="text" bind:value={text} /></label>
      </div>
    </div>
  </div>
</Story>

## Strong

<Story id="strong-story" title="Strong" component={Strong}>
  <div class="space-y-4 p-8">
    <p>Этот текст содержит <Strong>{text}</Strong> фрагмент.</p>

    <div class="space-y-4">
      <div>
        <label>Strong text: <input type="text" bind:value={text} /></label>
      </div>
    </div>
  </div>
</Story>

## Subscript

<Story id="subscript-story" title="Subscript" component={Subscript}>
  <div class="space-y-4 p-8">
    <p>Формула воды: H<Subscript>{text}</Subscript>O</p>

    <div class="space-y-4">
      <div>
        <label>Subscript text: <input type="text" bind:value={text} /></label>
      </div>
    </div>
  </div>
</Story>

## Superscript

<Story id="superscript-story" title="Superscript" component={Superscript}>
  <div class="space-y-4 p-8">
    <p>Площадь квадрата: a<Superscript>{text}</Superscript></p>

    <div class="space-y-4">
      <div>
        <label>Superscript text: <input type="text" bind:value={text} /></label>
      </div>
    </div>
  </div>
</Story>