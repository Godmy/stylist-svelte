<script lang="ts">
  // @ts-nocheck
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import WarrantyInfo from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'showCoverageDetails', type: 'boolean', defaultValue: true },
      { name: 'showClaimsHistory', type: 'boolean', defaultValue: true }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  // Sample warranty data
  const coverageDetails = [
    'Electronic components and batteries',
    'Housing materials and headband',
    'Cables and adapters included in the package',
    'Firmware update support'
  ];

  const exclusions = [
    'Wear caused by improper storage',
    'Damage from water exposure',
    'Modifications or disassembly without authorized service'
  ];

  const claims = [
    {
      id: 'claim-1',
      date: new Date('2024-06-12'),
      status: 'resolved',
      issue: 'Battery drain',
      description: 'Device drains quickly, battery replacement required.',
      resolution: 'Battery replaced and firmware updated.',
      claimNumber: 'WC-10452'
    },
    {
      id: 'claim-2',
      date: new Date('2024-08-03'),
      status: 'approved',
      issue: 'Audio imbalance',
      description: 'Right channel sounds quieter.',
      claimNumber: 'WC-10988'
    }
  ];

  const warrantyData = {
    productName: 'Aurora Pro Headphones',
    purchaseDate: new Date('2023-03-18'),
    warrantyPeriod: {
      type: 'extended' as const,
      duration: 24,
      description: 'Extended protection for premium electronics.',
      coverage: coverageDetails,
      exclusions
    },
    claims,
    serialNumber: 'AP-4482-NEBULA',
    productId: 'SKY-2048',
    termsUrl: 'https://example.com/warranty'
  };
</script>

<Story
  {id}
  {title}
  {description}
  component={WarrantyInfo}
  category="Organisms"
  controls={controls}
>
  {#snippet children(props)}
    <section class="sb-organisms-warranty-info grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Warranty Info Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Warranty information with coverage and claims history.</p>

        <div class="mt-6">
          <WarrantyInfo
            {...warrantyData}
            showCoverageDetails={props.showCoverageDetails}
            showExclusions={true}
            showClaimsHistory={props.showClaimsHistory}
            showFileDownload={true}
            showClaimForm={true}
            onClaimSubmit={(claim) => console.log('Submitting warranty claim:', claim)}
            onTermsClick={() => console.log('Viewing warranty terms')}
            onFileDownload={() => console.log('Downloading warranty certificate')}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Warranty Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different warranty configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Basic Warranty</p>
            <div>
              <WarrantyInfo
                {...warrantyData}
                warrantyPeriod={{
                  ...warrantyData.warrantyPeriod,
                  type: 'limited',
                  duration: 12
                }}
                showCoverageDetails={true}
                showExclusions={false}
                showClaimsHistory={false}
                showFileDownload={false}
                showClaimForm={false}
                onClaimSubmit={(claim) => console.log('Submitting basic warranty claim:', claim)}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Extended Warranty</p>
            <div>
              <WarrantyInfo
                {...warrantyData}
                warrantyPeriod={{
                  ...warrantyData.warrantyPeriod,
                  type: 'extended',
                  duration: 36,
                  description: 'Comprehensive 3-year protection plan with premium support.'
                }}
                showCoverageDetails={true}
                showExclusions={true}
                showClaimsHistory={true}
                showFileDownload={true}
                showClaimForm={true}
                onClaimSubmit={(claim) => console.log('Submitting extended warranty claim:', claim)}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>



