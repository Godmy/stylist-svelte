<script lang="ts">
    import { createEventDispatcher, onMount, onDestroy } from 'svelte';

    export let open = false;
    export let position: 'left' | 'right' | 'top' | 'bottom' = 'right';
    export let size = '300px';
    export let closable = true;
    export let showBackdrop = true;

    const dispatch = createEventDispatcher();

    let drawerEl: HTMLElement | null = null;
    let backdropEl: HTMLElement | null = null;

    function close() {
        if (closable) {
            open = false;
            dispatch('close');
        }
    }

    function handleBackdropClick(e: MouseEvent) {
        if (e.target === backdropEl && closable) {
            close();
        }
    }

    function handleBackdropKeyDown(e: KeyboardEvent) {
        if ((e.key === 'Enter' || e.key === ' ') && e.target === backdropEl && closable) {
            e.preventDefault();
            close();
        }
    }

    function handleEscape(e: KeyboardEvent) {
        if (e.key === 'Escape' && closable) {
            close();
        }
    }

    onMount(() => {
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    });
</script>

{#if open}
<div
    class="drawer-backdrop"
    class:show={showBackdrop}
    bind:this={backdropEl}
    on:click={handleBackdropClick}
    on:keydown={handleBackdropKeyDown}
    role="button"
    tabindex="0"
    aria-label="Close drawer via backdrop"
>
    <div
        class="drawer"
        class:left={position === 'left'}
        class:right={position === 'right'}
        class:top={position === 'top'}
        class:bottom={position === 'bottom'}
        class:open
        bind:this={drawerEl}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
        style={`--size: ${size};`}
    >
        <div class="drawer-header">
            <slot name="header">
                <h2 id="drawer-title">Drawer Title</h2>
            </slot>
            {#if closable}
                <button class="close-button" on:click={close} aria-label="Close drawer">
                    ×
                </button>
            {/if}
        </div>
        <div class="drawer-content">
            <slot />
        </div>
        <div class="drawer-actions">
            <slot name="actions" />
        </div>
    </div>
</div>
{/if}

<style>
    .drawer-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
        display: flex;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .drawer-backdrop.show {
        background-color: rgba(0, 0, 0, 0.5);
    }

    .drawer-backdrop.show {
        opacity: 1;
    }

    .drawer {
        display: flex;
        flex-direction: column;
        min-width: var(--size);
        max-width: 90vw;
        height: 100%;
        background-color: white;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s ease;
    }

    .drawer.left {
        order: -1;
        transform: translateX(-100%);
        border-right: 1px solid #e0e0e0;
    }

    .drawer.right {
        order: 1;
        transform: translateX(100%);
        border-left: 1px solid #e0e0e0;
    }

    .drawer.top {
        width: 100%;
        max-width: none;
        max-height: 40vh;
        transform: translateY(-100%);
        border-bottom: 1px solid #e0e0e0;
    }

    .drawer.bottom {
        width: 100%;
        max-width: none;
        max-height: 40vh;
        transform: translateY(100%);
        order: 1;
        border-top: 1px solid #e0e0e0;
    }

    .drawer.open.left { transform: translateX(0); }
    .drawer.open.right { transform: translateX(0); }
    .drawer.open.top { transform: translateY(0); }
    .drawer.open.bottom { transform: translateY(0); }

    .drawer-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        border-bottom: 1px solid #e0e0e0;
    }

    .drawer-content {
        flex: 1;
        overflow-y: auto;
        padding: 1rem;
    }

    .drawer-actions {
        padding: 1rem;
        border-top: 1px solid #e0e0e0;
    }

    .close-button {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 0.25rem;
    }

    .close-button:hover {
        background-color: #f0f0f0;
    }
</style>
