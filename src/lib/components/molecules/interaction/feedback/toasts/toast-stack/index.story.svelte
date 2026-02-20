<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import ToastStack from './index.svelte';
  import type { ControlType } from '$stylist/design-system/tokens/controls';

  const controls = [
    {
      name: 'position',
      type: 'select' as ControlType,
      defaultValue: 'top-right',
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
      description: 'Position of the toast stack'
    }
  ];

  type ToastType = 'info' | 'success' | 'warning' | 'error';

  type Toast = {
    id: string;
    title?: string;
    message: string;
    type: ToastType;
    duration?: number;
    actions?: Array<{
      label: string;
      onClick: () => void;
    }>;
    onDismiss?: () => void;
  };

  let toasts = $state<Toast[]>([
    { id: '1', message: 'This is a success message!', type: 'success', duration: 5000 },
    { id: '2', message: 'Warning: Please check your inputs', type: 'warning', duration: 5000 },
    { id: '3', message: 'Error: Something went wrong', type: 'error', duration: 0 }
  ]);

  function addToast() {
    const types: ('success' | 'warning' | 'error' | 'info')[] = ['success', 'warning', 'error', 'info'];
    const newToast: Toast = {
      id: String(Date.now()),
      message: `New toast added at ${new Date().toLocaleTimeString()}`,
      type: types[Math.floor(Math.random() * types.length)],
      duration: 5000,
      onDismiss: () => removeToast(newToast.id)
    };
    toasts = [...toasts, newToast];
  }

  function removeToast(id: string) {
    toasts = toasts.filter(t => t.id !== id);
  }
</script>

<Story
  {controls}
  title="ToastStack Component"
  description="Interactive toast stack with customizable positioning"
  let:controlValues
>
  <div class="p-4">
    <button
      class="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      onclick={addToast}
    >
      Add Toast
    </button>
    <ToastStack
      {toasts}
      position={controlValues.position}
    />
  </div>
</Story>