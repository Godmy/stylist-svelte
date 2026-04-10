import type { CodeEditorRecipe } from '$stylist/development/interface/recipe/code-editor';

export type CodeEditorProps = CodeEditorRecipe & {
  class?: string;
};
