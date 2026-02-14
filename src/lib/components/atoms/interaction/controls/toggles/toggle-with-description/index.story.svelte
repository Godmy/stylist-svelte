<script lang="ts">
    import ToggleWithDescription from './index.svelte';

    let isChecked = false;
    let isDisabled = false;

    function handleToggleChange(checked: boolean) {
        isChecked = checked;
        console.log('Toggle changed to:', checked);
    }
</script>

<div class="p-4">
    <h1>ToggleWithDescription Stories</h1>

    <div class="my-4 p-4 border rounded">
        <h2>Default ToggleWithDescription</h2>
        <ToggleWithDescription
            checked={isChecked}
            label="Enable notifications"
            description="You'll receive alerts for important updates"
            onValueChange={handleToggleChange}
        />
        <p class="mt-2">Toggle state: {isChecked ? 'ON' : 'OFF'}</p>
    </div>

    <div class="my-4 p-4 border rounded">
        <h2>ToggleWithDescription (Disabled)</h2>
        <ToggleWithDescription
            checked={isChecked}
            label="Enable dark mode"
            description="Apply dark theme to the entire application"
            disabled={true}
            onValueChange={handleToggleChange}
        />
        <p class="mt-2">Toggle state: {isChecked ? 'ON' : 'OFF'}</p>
    </div>

    <div class="my-4 p-4 border rounded">
        <h2>ToggleWithDescription with Dynamic State</h2>
        <div class="flex items-center mb-4">
            <label for="disable-toggle" class="mr-2">Disable toggle:</label>
            <input
                id="disable-toggle"
                type="checkbox"
                bind:checked={isDisabled}
                class="form-checkbox"
            />
        </div>
        <ToggleWithDescription
            checked={isChecked}
            label="Enable auto-save"
            description="Automatically saves your work every 5 minutes"
            disabled={isDisabled}
            onValueChange={handleToggleChange}
        />
        <p class="mt-2">Toggle state: {isChecked ? 'ON' : 'OFF'}, Disabled: {isDisabled ? 'YES' : 'NO'}</p>
    </div>
</div>


