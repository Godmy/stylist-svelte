<script>
    import QuickAccessButtons from './QuickAccessButtons.svelte';
    
    const buttons = [
        { id: 'email', label: 'Email', icon: '✉️', action: () => console.log('Email clicked') },
        { id: 'calendar', label: 'Calendar', icon: '📅', action: () => console.log('Calendar clicked') },
        { id: 'chat', label: 'Chat', icon: '💬', action: () => console.log('Chat clicked') },
        { id: 'settings', label: 'Settings', icon: '⚙️', action: () => console.log('Settings clicked') }
    ];
</script>

<div class="p-4">
    <h1>QuickAccessButtons Stories</h1>
    
    <div class="my-4 p-4 border rounded">
        <h2>Default QuickAccessButtons</h2>
        <QuickAccessButtons
            actions={buttons}
        />
    </div>
    
    <div class="my-4 p-4 border rounded">
        <h2>QuickAccessButtons (Compact)</h2>
        <QuickAccessButtons
            actions={buttons}
            compact={true}
        />
    </div>
    
    <div class="my-4 p-4 border rounded">
        <h2>QuickAccessButtons with Disabled Action</h2>
        <QuickAccessButtons
            actions={[
                { id: 'email', label: 'Email', icon: '✉️', action: () => console.log('Email clicked') },
                { id: 'calendar', label: 'Calendar', icon: '📅', action: () => console.log('Calendar clicked') },
                { id: 'chat', label: 'Chat', icon: '💬', action: () => console.log('Chat clicked'), disabled: true },
                { id: 'settings', label: 'Settings', icon: '⚙️', action: () => console.log('Settings clicked') }
            ]}
        />
    </div>
</div>