<script lang="ts">
  import type { WarrantyInfoContract } from '$stylist/commerce/interface/component/warranty-info';
  import { createWarrantyInfoState as stateFn } from '$stylist/commerce/function/state/warranty-info';

  let props: WarrantyInfoContract = $props();
  const state = stateFn(props);
</script>

<div class={state.containerClasses}>
  <header class={state.headerClasses}>
    <div>
      <h3 class={state.titleClasses}>Warranty Information</h3>
      <p class={state.claimTitleClasses}>{props.productName}</p>
    </div>
    <span class={state.warrantyPeriodBadgeClasses}>{props.warrantyPeriod.type}</span>
  </header>

  <div class={state.contentContainerClasses}>
    <section class={state.sectionClasses}>
      <h4 class={state.sectionTitleClasses}>Coverage Summary</h4>
      <div class="space-y-2">
        <p>Purchased: {state.formatDate(props.purchaseDate)}</p>
        {#if props.serialNumber}
          <p>Serial: {props.serialNumber}</p>
        {/if}
        <p>Duration: {props.warrantyPeriod.duration} year(s)</p>
        {#if state.getWarrantyEndDate()}
          <p>Ends: {state.formatDate(state.getWarrantyEndDate() ?? undefined)}</p>
        {/if}
      </div>
    </section>

    {#if props.showCoverageDetails !== false && state.coverage.length}
      <section class={state.sectionClasses}>
        <h4 class={state.sectionTitleClasses}>Covered</h4>
        <div class={state.coverageListClasses}>
          {#each state.coverage as item}
            <div class={state.coverageItemClasses}>
              <span class={state.coverageTextClasses}>{item}</span>
            </div>
          {/each}
        </div>
      </section>
    {/if}

    {#if props.showExclusions && state.exclusions.length}
      <section class={state.sectionClasses}>
        <h4 class={state.sectionTitleClasses}>Exclusions</h4>
        <div class={state.exclusionsListClasses}>
          {#each state.exclusions as item}
            <div class={state.exclusionItemClasses}>
              <span class={state.exclusionTextClasses}>{item}</span>
            </div>
          {/each}
        </div>
      </section>
    {/if}

    {#if props.showClaimsHistory && state.claims.length}
      <section class={state.sectionClasses}>
        <h4 class={state.sectionTitleClasses}>Claims History</h4>
        <div class={state.claimsContainerClasses}>
          {#each state.claims as claim}
            <article class={state.claimItemClasses}>
              <div class="flex items-center justify-between gap-3">
                <h5 class={state.claimTitleClasses}>{claim.issue}</h5>
                <span class={state.getClaimStatusBadgeClasses(claim.status)}>{claim.status}</span>
              </div>
              <p class="text-sm text-[var(--color-text-secondary)]">{claim.claimNumber}</p>
              {#if claim.description}
                <p>{claim.description}</p>
              {/if}
            </article>
          {/each}
        </div>
      </section>
    {/if}

    {#if props.showClaimForm !== false}
      <section class={state.sectionClasses}>
        <h4 class={state.sectionTitleClasses}>Submit a Claim</h4>
        <div class={state.formContainerClasses}>
          <input class={state.inputClasses} type="text" placeholder="Issue" bind:value={state.claimIssue} />
          <textarea class={state.textAreaClasses} rows={4} placeholder="Describe the issue" bind:value={state.claimDescription}></textarea>
          <div class="flex flex-wrap gap-3">
            <button type="button" class={state.getButtonClasses('primary')} onclick={state.handleSubmitClaim}>
              Submit Claim
            </button>
            {#if props.termsUrl}
              <button type="button" class={state.getButtonClasses('secondary')} onclick={props.onTermsClick}>
                Warranty Terms
              </button>
            {/if}
            {#if props.showFileDownload}
              <button type="button" class={state.getButtonClasses('secondary')} onclick={props.onFileDownload}>
                Download PDF
              </button>
            {/if}
          </div>
        </div>
      </section>
    {/if}
  </div>
</div>
