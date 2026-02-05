<script lang="ts">
  import { cn } from '$stylist/utils/classes';
  import type { PictureToolbarProps } from '$stylist/design-system/attributes';

  // Определение состояния для PictureToolbar
  export function createPictureToolbarState(props: PictureToolbarProps) {
    const classes = $derived(
      cn(
        'picture-toolbar',
        props.class
      )
    );

    return {
      classes,
      tools: props.tools,
      activeTool: props.activeTool,
      onToolSelect: props.onToolSelect
    };
  }
</script>