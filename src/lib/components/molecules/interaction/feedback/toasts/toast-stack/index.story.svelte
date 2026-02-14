<script lang="ts">
    import ToastStack from './index.svelte';

    type ToastType = 'info' | 'success' | 'warning' | 'error';

    type Toast = {
        id: string;
        title?: string;
        message: string;
        type: ToastType;
        duration?: number; // in milliseconds, 0 means persistent
        actions?: Array<{
            label: string;
            onClick: () => void;
        }>;
        onDismiss?: () => void;
    };

    let toasts: Toast[] = [
        { id: '1', message: 'This is a success message!', type: 'success', duration: 5000 },
        { id: '2', message: 'Warning: Please check your inputs', type: 'warning', duration: 5000 },
        { id: '3', message: 'Error: Something went wrong', type: 'error', duration: 0 }
    ];

    function addToast() {
        const types: ('success' | 'warning' | 'error' | 'info')[] = ['success', 'warning', 'error', 'info'];
        const newToast = {
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

<div class="p-4">
    <h1>ToastStack Stories</h1>

    <div class="my-4 p-4 border rounded">
        <h2>Default ToastStack</h2>
        <button
            class="bg-blue-500 text-white px-4 py-2 rounded mb-4"
            onclick={addToast}
        >
            Add Toast
        </button>
        <ToastStack
            {toasts}
        />
    </div>

    <div class="my-4 p-4 border rounded">
        <h2>ToastStack with Position Control</h2>
        <button
            class="bg-blue-500 text-white px-4 py-2 rounded mb-4"
            onclick={addToast}
        >
            Add Toast
        </button>
        <ToastStack
            {toasts}
            position="top-left"
        />
    </div>
</div>