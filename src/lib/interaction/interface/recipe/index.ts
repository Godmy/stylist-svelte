/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
export type { AnimatedStateRecipe, ClickableStateRecipe, DraggableStateRecipe, FocusableStateRecipe, HoverableStateRecipe, TransformableStateRecipe } from './state';
export type { AnimatedNumberRecipe } from './animated-number';
export type { CheckboxRecipe } from './checkbox';
export type { InteractionFeedbackRecipe } from './interaction-feedback';
export type { NumberFlowRecipe } from './number-flow';
export type { SharedCanvasRecipe } from './shared-canvas';
export type { SwitchWithLabelRecipe } from './switch-with-label';
export type { ToggleRecipe, ToggleSpecificProps } from './toggle';
export type { ToggleGroupRecipe } from './toggle-group';

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