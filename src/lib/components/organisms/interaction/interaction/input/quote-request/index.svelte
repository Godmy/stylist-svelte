<script lang="ts">
  import { Plus, Trash2 } from 'lucide-svelte';
  import type { QuoteRequestProps, QuoteRequestValue } from '$stylist/design-system/props/interaction-input';
  import { InteractionInputStyleManager } from '$stylist/design-system/styles/interaction-input';

  let {
    title = 'Request a Quote',
    description = 'Provide customer and product details.',
    class: className = '',
    formClass = '',
    sectionClass = '',
    inputClass = '',
    buttonClass = '',
    showCompanyFields = true,
    showShippingFields = true,
    showUrgentOption = true,
    showValidUntil = true,
    onSubmit,
    onCancel,
    ...restProps
  }: QuoteRequestProps = $props();

  let request = $state<QuoteRequestValue>({
    requesterName: '',
    requesterEmail: '',
    requesterPhone: '',
    companyName: '',
    companyAddress: '',
    shippingAddress: '',
    products: [{ id: '1', name: '', quantity: 1 }],
    message: '',
    urgent: false,
    validUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  });

  function addProduct() {
    request = { ...request, products: [...request.products, { id: `${Date.now()}`, name: '', quantity: 1 }] };
  }

  function removeProduct(index: number) {
    if (request.products.length < 2) return;
    request = { ...request, products: request.products.filter((_, i) => i !== index) };
  }
</script>

<div class={InteractionInputStyleManager.root('c-quote-request', className)} {...restProps}>
  <form class={InteractionInputStyleManager.panel(`p-4 space-y-4 ${formClass}`)} onsubmit={(e) => { e.preventDefault(); onSubmit?.(request); }}>
    <div>
      <h3 class="text-lg font-semibold">{title}</h3>
      <p class="text-sm text-gray-600">{description}</p>
    </div>

    <div class={`grid grid-cols-1 md:grid-cols-2 gap-3 ${sectionClass}`}>
      <input class={InteractionInputStyleManager.input(`px-3 py-2 ${inputClass}`)} placeholder="Name" bind:value={request.requesterName} required />
      <input class={InteractionInputStyleManager.input(`px-3 py-2 ${inputClass}`)} placeholder="Email" type="email" bind:value={request.requesterEmail} required />
      <input class={InteractionInputStyleManager.input(`px-3 py-2 ${inputClass}`)} placeholder="Phone" bind:value={request.requesterPhone} />
      {#if showCompanyFields}<input class={InteractionInputStyleManager.input(`px-3 py-2 ${inputClass}`)} placeholder="Company" bind:value={request.companyName} />{/if}
    </div>

    <div class={sectionClass}>
      <div class="flex items-center justify-between mb-2">
        <div class="font-medium">Products</div>
        <button type="button" class="px-2 py-1 border rounded text-sm" onclick={addProduct}><Plus class="h-4 w-4 inline mr-1" />Add</button>
      </div>
      <div class="space-y-2">
        {#each request.products as product, index}
          <div class="grid grid-cols-[1fr_100px_40px] gap-2">
            <input class={InteractionInputStyleManager.input(`px-3 py-2 ${inputClass}`)} placeholder="Product" bind:value={product.name} />
            <input class={InteractionInputStyleManager.input(`px-3 py-2 ${inputClass}`)} type="number" min="1" bind:value={product.quantity} />
            <button type="button" class="border rounded" onclick={() => removeProduct(index)}><Trash2 class="h-4 w-4 mx-auto" /></button>
          </div>
        {/each}
      </div>
    </div>

    {#if showShippingFields}
      <textarea class={InteractionInputStyleManager.input(`w-full px-3 py-2 ${inputClass}`)} placeholder="Shipping address" bind:value={request.shippingAddress}></textarea>
    {/if}
    {#if showUrgentOption}
      <label class="flex items-center gap-2"><input type="checkbox" bind:checked={request.urgent} /> Urgent request</label>
    {/if}
    {#if showValidUntil}
      <input class={InteractionInputStyleManager.input(`px-3 py-2 ${inputClass}`)} type="date" value={request.validUntil ? request.validUntil.toISOString().split('T')[0] : ''} oninput={(e) => (request = { ...request, validUntil: new Date((e.target as HTMLInputElement).value) })} />
    {/if}

    <textarea class={InteractionInputStyleManager.input(`w-full px-3 py-2 ${inputClass}`)} placeholder="Message" bind:value={request.message}></textarea>

    <div class="flex justify-end gap-2">
      <button type="button" class="px-3 py-2 border rounded" onclick={() => onCancel?.()}>Cancel</button>
      <button type="submit" class={`px-3 py-2 rounded bg-blue-600 text-white ${buttonClass}`}>Send request</button>
    </div>
  </form>
</div>
