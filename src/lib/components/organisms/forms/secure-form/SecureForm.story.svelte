<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import SecureForm from './SecureForm.svelte';

    type SecureField = {
        id: string;
        name: string;
        type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
        label: string;
        placeholder?: string;
        required?: boolean;
        secureInput?: boolean;
        masked?: boolean;
        hint?: string;
    };

    type Props = {
        fields?: SecureField[];
        title?: string;
        description?: string;
        submitLabel?: string;
    };

    const defaultFields: SecureField[] = [
        { id: 'username', name: 'username', label: 'Username', type: 'text', required: true },
        { id: 'password', name: 'password', label: 'Password', type: 'password', required: true, secureInput: true },
        { id: 'confirmPassword', name: 'confirmPassword', label: 'Confirm Password', type: 'password', required: true, secureInput: true }
    ];

    const controls: ControlConfig[] = [
        {
            name: 'title',
            type: 'text',
            defaultValue: 'Secure Form'
        },
        {
            name: 'description',
            type: 'text',
            defaultValue: 'A secure form with enhanced protection'
        },
        {
            name: 'submitLabel',
            type: 'text',
            defaultValue: 'Submit'
        }
    ];
</script>

<Story
    id="molecules-secure-form"
    title="SecureForm"
    component={SecureForm}
    category="Molecules"
    description="Secure form component with enhanced security features"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <SecureForm
                fields={props.fields || defaultFields}
                title={props.title}
                description={props.description}
                submitLabel={props.submitLabel}
            />
        </div>
    {/snippet}
</Story>
