/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
export type { ButtonRecipe } from './button';
export type { CheckboxRecipe } from './checkbox';
export type { DraggableItemRecipe } from './draggable-item';
export type { IconButtonRecipe } from './icon-button';
export type { InteractionFeedbackRecipe } from './interaction-feedback';
export type { SelectRecipe } from './select';
export type { SelectControlRecipe } from './select-control';
export type { SharedCanvasRecipe } from './shared-canvas';
export type { SliderRecipe } from './slider';
export type { SliderTickRecipe } from './slider-tick';
export type { SwitchWithLabelRecipe } from './switch-with-label';
export type { ToggleRecipe } from './toggle';
export type { ToggleGroupRecipe } from './toggle-group';
export type { ToggleSpecificProps } from './toggle-specific-props';

/** AREA: STYLIST CODER MODEL -> AUTO-PROTECTED */

/**
 * recipe/ — эталонные составные контракты (LEGO-рецепты).
 *
 * Каждый рецепт показывает, как атомарные кирпичи из четырёх осей
 * (architecture, theme, interaction, information) объединяются в
 * конкретный компонент через RecordArchitectureMerge.
 *
 * Используй рецепты как отправную точку при создании новых компонентов —
 * либо напрямую, либо как основу для расширения через дополнительные кирпичи.
 */