<script>
    import GeneralToolbar from './index.svelte';
    
    const toolbarItems = [
        { id: 'new', label: 'New', icon: '📄', action: () => console.log('New clicked') },
        { id: 'open', label: 'Open', icon: '📂', action: () => console.log('Open clicked') },
        { id: 'save', label: 'Save', icon: '💾', action: () => console.log('Save clicked') },
        { id: 'cut', label: 'Cut', icon: '✂️', action: () => console.log('Cut clicked') },
        { id: 'copy', label: 'Copy', icon: '📋', action: () => console.log('Copy clicked') },
        { id: 'paste', label: 'Paste', icon: '📌', action: () => console.log('Paste clicked') }
    ];
</script>

<div class="p-4">
    <h1>GeneralToolbar Stories</h1>
    
    <div class="my-4 p-4 border rounded">
        <h2>Default GeneralToolbar</h2>
        <GeneralToolbar 
            {toolbarItems}
        />
    </div>
    
    <div class="my-4 p-4 border rounded">
        <h2>Compact GeneralToolbar</h2>
        <GeneralToolbar 
            {toolbarItems}
            compact={true}
        />
    </div>
    
    <div class="my-4 p-4 border rounded">
        <h2>Disabled GeneralToolbar</h2>
        <GeneralToolbar 
            {toolbarItems}
            disabled={true}
        />
    </div>
</div>