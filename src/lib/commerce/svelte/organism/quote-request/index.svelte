<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
const Plus = 'plus';
const Trash2 = 'trash-2';

  import { InteractionInputStyleManager } from '$stylist/input/class/style-manager/interaction-input';
  import type { ExtendedQuoteRequestProps } from '$stylist/commerce/type/struct/extended-quote-request-props';
  import { createQuoteRequestState } from '$stylist/commerce/function/state/quote-request';

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
  }: ExtendedQuoteRequestProps = $props();

  const state = createQuoteRequestState({
    title,
    description,
    class: className,
    formClass,
    sectionClass,
    inputClass,
    buttonClass,
    showCompanyFields,
    showShippingFields,
    showUrgentOption,
    showValidUntil,
    onSubmit,
    onCancel
  });
</script>

<div class={InteractionInputStyleManager.root('c-quote-request', className)} {...restProps}>
  <form class={InteractionInputStyleManager.panel(`p-4 space-y-4 ${formClass}`)} onsubmit={(e) => { e.preventDefault(); state.submit(); }}>
    <div>
      <h3 class="text-lg font-semibold">{title}</h3>
      <p class="text-sm text-[var(--color-text-secondary)]">{description}</p>
    </div>

    <div class={`grid grid-cols-1 md:grid-cols-2 gap-3 ${sectionClass}`}>
      <input class={InteractionInputStyleManager.input(`px-3 py-2 ${inputClass}`)} placeholder="Name" bind:value={state.request.requesterName} required />
      <input class={InteractionInputStyleManager.input(`px-3 py-2 ${inputClass}`)} placeholder="Email" type="email" bind:value={state.request.requesterEmail} required />
      <input class={InteractionInputStyleManager.input(`px-3 py-2 ${inputClass}`)} placeholder="Phone" bind:value={state.request.requesterPhone} />
      {#if showCompanyFields}<input class={InteractionInputStyleManager.input(`px-3 py-2 ${inputClass}`)} placeholder="Company" bind:value={state.request.companyName} />{/if}
    </div>

    <div class={sectionClass}>
      <div class="flex items-center justify-between mb-2">
        <div class="font-medium">Products</div>
        <button type="button" class="px-2 py-1 border rounded text-sm" onclick={() => state.addProduct()}><BaseIcon name={Plus} class="h-4 w-4 inline mr-1" />Add</button>
      </div>
      <div class="space-y-2">
        {#each state.request.products as product, index}
          <div class="grid grid-cols-[1fr_100px_40px] gap-2">
            <input class={InteractionInputStyleManager.input(`px-3 py-2 ${inputClass}`)} placeholder="Product" bind:value={product.name} />
            <input class={InteractionInputStyleManager.input(`px-3 py-2 ${inputClass}`)} type="number" min="1" bind:value={product.quantity} />
            <button type="button" class="border rounded" onclick={() => state.removeProduct(index)}><BaseIcon name={Trash2} class="h-4 w-4 mx-auto" /></button>
          </div>
        {/each}
      </div>
    </div>

    {#if showShippingFields}
      <textarea class={InteractionInputStyleManager.input(`w-full px-3 py-2 ${inputClass}`)} placeholder="Shipping address" bind:value={state.request.shippingAddress}></textarea>
    {/if}
    {#if showUrgentOption}
      <label class="flex items-center gap-2"><input type="checkbox" bind:checked={state.request.urgent} /> Urgent request</label>
    {/if}
    {#if showValidUntil}
      <input class={InteractionInputStyleManager.input(`px-3 py-2 ${inputClass}`)} type="date" value={state.request.validUntil ? state.request.validUntil.toISOString().split('T')[0] : ''} oninput={(e) => state.setValidUntil((e.target as HTMLInputElement).value)} />
    {/if}

    <textarea class={InteractionInputStyleManager.input(`w-full px-3 py-2 ${inputClass}`)} placeholder="Message" bind:value={state.request.message}></textarea>

    <div class="flex justify-end gap-2">
      <button type="button" class="px-3 py-2 border rounded" onclick={() => state.cancel()}>Cancel</button>
      <button type="submit" class={`px-3 py-2 rounded bg-[var(--color-primary-600)] text-[var(--color-text-inverse)] ${buttonClass}`}>Send request</button>
    </div>
  </form>
</div>







