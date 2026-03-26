<script lang="ts">
  import type { InformationHTMLAttributes } from '$stylist/information/type/attribute/item';
  import { Icon as BaseIcon } from '$stylist';
const ShieldCheck = 'shield-check';
const Calendar = 'calendar';
const Clock = 'clock';
const FileText = 'file-text';
const RotateCcw = 'rotate-ccw';
const CheckCircle = 'check-circle';
const XCircle = 'x-circle';
const Download = 'download';
const Mail = 'mail';

  import { Button } from '$stylist';

  type WarrantyPeriod = {
    type: 'limited' | 'full' | 'extended';
    duration: number; // in months
    description?: string;
    coverage?: string[];
    exclusions?: string[];
  };

  type WarrantyClaim = {
    id: string;
    date: Date;
    status: 'pending' | 'approved' | 'rejected' | 'resolved';
    issue: string;
    description?: string;
    resolution?: string;
    claimNumber: string;
  };

  type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    productName: string;
    purchaseDate: Date;
    warrantyPeriod: WarrantyPeriod;
    claims?: WarrantyClaim[];
    serialNumber?: string;
    productId?: string;
    termsUrl?: string;
    showCoverageDetails?: boolean;
    showExclusions?: boolean;
    showClaimsHistory?: boolean;
    showFileDownload?: boolean;
    showClaimForm?: boolean;
    class?: string;
    headerClass?: string;
    contentClass?: string;
    claimClass?: string;
    inputClass?: string;
    onClaimSubmit?: (claim: Omit<WarrantyClaim, 'id' | 'date' | 'status'>) => void;
    onTermsClick?: () => void;
    onFileDownload?: () => void;
    locale?: string;
  };

  let {
    productName,
    purchaseDate,
    warrantyPeriod,
    claims = [],
    serialNumber,
    productId,
    termsUrl,
    showCoverageDetails = true,
    showExclusions = true,
    showClaimsHistory = true,
    showFileDownload = true,
    showClaimForm = true,
    class: hostClass = '',
    headerClass = '',
    contentClass = '',
    claimClass = '',
    inputClass = '',
    onClaimSubmit,
    onTermsClick,
    onFileDownload,
    locale = 'en-US',
    ...restProps
  }: Props = $props();

  let newClaim = $state({
    issue: '',
    description: ''
  });
  let claimSubmitted = $state(false);

  let warrantyExpiration = $derived(() => {
    const expiration = new Date(purchaseDate);
    expiration.setMonth(expiration.getMonth() + warrantyPeriod.duration);
    return expiration;
  });

  let isExpired = $derived(new Date() > warrantyExpiration());
  let daysRemaining = $derived(isExpired ? 0 : Math.ceil((warrantyExpiration().getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)));
  let daysSincePurchase = $derived(Math.ceil((new Date().getTime() - new Date(purchaseDate).getTime()) / (1000 * 60 * 60 * 24)));

  function handleClaimSubmit() {
    if (newClaim.issue.trim() === '') return;

    onClaimSubmit?.({
      issue: newClaim.issue,
      description: newClaim.description,
      claimNumber: `WC-${Date.now()}`
    });

    newClaim = { issue: '', description: '' };
    claimSubmitted = true;
    setTimeout(() => claimSubmitted = false, 3000);
  }

  function formatDate(date: Date): string {
    return new Date(date).toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  function formatCurrency(amount: number, currency: string) {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(amount);
  }

  function getWarrantyStatusClass(): string {
    if (isExpired) return 'bg-[var(--color-danger-100)] text-[var(--color-danger-800)]';
    if (daysRemaining <= 30) return 'bg-yellow-100 text-yellow-800';
    return 'bg-[var(--color-success-100)] text-[var(--color-success-800)]';
  }

  function getWarrantyStatusText(): string {
    if (isExpired) return 'Warranty Expired';
    if (daysRemaining <= 30) return `Expires Soon (${daysRemaining} days left)`;
    return `Active (${daysRemaining} days left)`;
  }
</script>

<div class={`c-warranty-info ${hostClass}`} {...restProps}>
  <div class={`border border-[var(--color-border-primary)] rounded-lg p-6 mb-6 ${headerClass}`}>
    <div class="flex items-start">
      <div class="flex-shrink-0">
        <BaseIcon name={ShieldCheck} class="h-8 w-8 text-[var(--color-primary-500)]" />
      </div>
      <div class="ml-4">
        <h2 class="text-xl font-bold text-[var(--color-text-primary)]">Warranty Information</h2>
        <p class="mt-1 text-sm text-[var(--color-text-secondary)]">Product: {productName}</p>
        <p class="text-sm text-[var(--color-text-secondary)]">Purchase Date: {formatDate(purchaseDate)}</p>
      </div>
      <div class="ml-auto flex flex-col items-end">
        <span class={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getWarrantyStatusClass()}`}>
          {getWarrantyStatusText()}
        </span>
        {#if !isExpired}
          <p class="mt-1 text-xs text-[var(--color-text-secondary)]">Until {formatDate(warrantyExpiration())}</p>
        {/if}
      </div>
    </div>
  </div>

  <div class={`space-y-6 ${contentClass}`}>
    <!-- Warranty summary -->
    <div class="bg-[var(--color-background-primary)] border border-[var(--color-border-primary)] rounded-lg p-6">
      <div class="flex items-center">
        <BaseIcon name={ShieldCheck} class="h-5 w-5 text-[var(--color-primary-500)] mr-2" />
        <h3 class="text-lg font-medium text-[var(--color-text-primary)]">Warranty Coverage</h3>
      </div>

      <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="border border-[var(--color-border-primary)] rounded-lg p-4">
          <div class="flex items-center">
            <BaseIcon name={Calendar} class="h-5 w-5 text-[var(--color-text-tertiary)] mr-2" />
            <div>
              <p class="text-sm font-medium text-[var(--color-text-primary)]">Warranty Period</p>
              <p class="text-sm text-[var(--color-text-secondary)]">
                {warrantyPeriod.duration} months {warrantyPeriod.type === 'limited' ? '(Limited)' : warrantyPeriod.type === 'extended' ? '(Extended)' : '(Full)'}
              </p>
            </div>
          </div>
        </div>

        <div class="border border-[var(--color-border-primary)] rounded-lg p-4">
          <div class="flex items-center">
            <BaseIcon name={Clock} class="h-5 w-5 text-[var(--color-text-tertiary)] mr-2" />
            <div>
              <p class="text-sm font-medium text-[var(--color-text-primary)]">Status</p>
              <p class="text-sm text-[var(--color-text-secondary)] capitalize">
                {isExpired ? 'Expired' : `Active вЂў Expires in ${daysRemaining} days`}
              </p>
            </div>
          </div>
        </div>

        {#if serialNumber}
          <div class="border border-[var(--color-border-primary)] rounded-lg p-4">
            <div class="flex items-center">
              <BaseIcon name={FileText} class="h-5 w-5 text-[var(--color-text-tertiary)] mr-2" />
              <div>
                <p class="text-sm font-medium text-[var(--color-text-primary)]">Serial Number</p>
                <p class="text-sm text-[var(--color-text-secondary)] font-mono">{serialNumber}</p>
              </div>
            </div>
          </div>
        {/if}

        {#if productId}
          <div class="border border-[var(--color-border-primary)] rounded-lg p-4">
            <div class="flex items-center">
              <BaseIcon name={FileText} class="h-5 w-5 text-[var(--color-text-tertiary)] mr-2" />
              <div>
                <p class="text-sm font-medium text-[var(--color-text-primary)]">Product ID</p>
                <p class="text-sm text-[var(--color-text-secondary)] font-mono">{productId}</p>
              </div>
            </div>
          </div>
        {/if}
      </div>

      {#if warrantyPeriod.description}
        <div class="mt-4">
          <p class="text-sm text-[var(--color-text-secondary)]">{warrantyPeriod.description}</p>
        </div>
      {/if}
    </div>

    <!-- Coverage details -->
    {#if showCoverageDetails && warrantyPeriod.coverage && warrantyPeriod.coverage.length > 0}
      <div class="bg-[var(--color-background-primary)] border border-[var(--color-border-primary)] rounded-lg p-6">
        <h3 class="text-lg font-medium text-[var(--color-text-primary)] mb-4">What's Covered</h3>

        <ul class="space-y-2">
          {#each warrantyPeriod.coverage as item}
            <li class="flex items-start">
              <BaseIcon name={CheckCircle} class="h-5 w-5 text-[var(--color-success-500)] mt-0.5 mr-2 flex-shrink-0" />
              <span class="text-sm text-[var(--color-text-primary)]">{item}</span>
            </li>
          {/each}
        </ul>
      </div>
    {/if}

    <!-- Exclusions -->
    {#if showExclusions && warrantyPeriod.exclusions && warrantyPeriod.exclusions.length > 0}
      <div class="bg-[var(--color-background-primary)] border border-[var(--color-border-primary)] rounded-lg p-6">
        <h3 class="text-lg font-medium text-[var(--color-text-primary)] mb-4">What's Not Covered</h3>

        <ul class="space-y-2">
          {#each warrantyPeriod.exclusions as item}
            <li class="flex items-start">
              <BaseIcon name={XCircle} class="h-5 w-5 text-[var(--color-danger-500)] mt-0.5 mr-2 flex-shrink-0" />
              <span class="text-sm text-[var(--color-text-primary)]">{item}</span>
            </li>
          {/each}
        </ul>
      </div>
    {/if}

    <!-- Claims history -->
    {#if showClaimsHistory && claims.length > 0}
      <div class="bg-[var(--color-background-primary)] border border-[var(--color-border-primary)] rounded-lg p-6">
        <h3 class="text-lg font-medium text-[var(--color-text-primary)] mb-4">Warranty Claims History</h3>

        <div class={`space-y-4 ${claimClass}`}>
          {#each claims as claim}
            <div class={`border-l-4 ${
              claim.status === 'approved' ? 'border-[var(--color-success-500)]' :
              claim.status === 'rejected' ? 'border-[var(--color-danger-500)]' :
              claim.status === 'pending' ? 'border-yellow-500' :
              'border-[var(--color-border-primary)]'
            } pl-4 py-1`}>
              <div class="flex flex-wrap justify-between">
                <div>
                  <p class="font-medium text-[var(--color-text-primary)]">{claim.issue}</p>
                  <p class="text-sm text-[var(--color-text-secondary)]">Claim #{claim.claimNumber} вЂў {formatDate(claim.date)}</p>
                </div>

                <span class={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  claim.status === 'approved' ? 'bg-[var(--color-success-100)] text-[var(--color-success-800)]' :
                  claim.status === 'rejected' ? 'bg-[var(--color-danger-100)] text-[var(--color-danger-800)]' :
                  claim.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)]'
                }`}>
                  {claim.status.charAt(0).toUpperCase() + claim.status.slice(1)}
                </span>
              </div>

              {#if claim.resolution}
                <p class="mt-2 text-sm text-[var(--color-text-secondary)]">{claim.resolution}</p>
              {/if}
            </div>
          {/each}
        </div>
      </div>
    {/if}

    <!-- Claim form -->
    {#if showClaimForm}
      <div class="bg-[var(--color-background-primary)] border border-[var(--color-border-primary)] rounded-lg p-6">
        <h3 class="text-lg font-medium text-[var(--color-text-primary)] mb-4">File a Warranty Claim</h3>

        {#if claimSubmitted}
          <div class="rounded-md bg-[var(--color-success-50)] p-4 mb-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <BaseIcon name={CheckCircle} class="h-5 w-5 text-[var(--color-success-400)]" />
              </div>
              <div class="ml-3">
                <h3 class="text-sm font-medium text-[var(--color-success-800)]">Claim submitted successfully!</h3>
                <div class="mt-2 text-sm text-[var(--color-success-700)]">
                  <p>We've received your claim and will review it shortly. You'll receive an email with updates.</p>
                </div>
              </div>
            </div>
          </div>
        {/if}

        <form onsubmit={(e) => { e.preventDefault(); handleClaimSubmit(); }}>
          <div class="space-y-4">
            <div>
              <label for="issue" class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
                Issue Type *
              </label>
              <select
                id="issue"
                required
                class={`block w-full px-3 py-2 border border-[var(--color-border-primary)] rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm ${inputClass}`}
                value={newClaim.issue}
                onchange={(e) => newClaim = { ...newClaim, issue: (e.target as HTMLSelectElement).value }}
              >
                <option value="">Select an issue</option>
                <option value="defect">Manufacturing Defect</option>
                <option value="malfunction">Product Malfunction</option>
                <option value="not-working">Product Not Working Properly</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label for="description" class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
                Describe the Issue
              </label>
              <textarea
                id="description"
                rows="3"
                class={`block w-full px-3 py-2 border border-[var(--color-border-primary)] rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm ${inputClass}`}
                placeholder="Describe the issue with your product..."
                value={newClaim.description}
                oninput={(e) => newClaim = { ...newClaim, description: (e.target as HTMLTextAreaElement).value }}
              ></textarea>
            </div>

            <div class="flex items-center">
              <input
                id="terms-agreement"
                type="checkbox"
                required
                class="h-4 w-4 text-[var(--color-primary-600)] focus:ring-blue-500 border-[var(--color-border-primary)] rounded"
              />
              <label for="terms-agreement" class="ml-2 block text-sm text-[var(--color-text-primary)]">
                I agree to the <a href={termsUrl || '#'} class="text-[var(--color-primary-600)] hover:text-[var(--color-primary-500)]">warranty terms</a>
              </label>
            </div>

            <div class="flex space-x-3">
              <Button
                variant="primary"
                type="submit"
                disabled={newClaim.issue === ''}
              >
                Submit Claim
              </Button>

              <Button
                variant="outline"
                onclick={() => newClaim = { issue: '', description: '' }}
              >
                Clear
              </Button>
            </div>
          </div>
        </form>
      </div>
    {/if}

    <!-- Additional resources -->
    <div class="bg-[var(--color-background-primary)] border border-[var(--color-border-primary)] rounded-lg p-6">
      <h3 class="text-lg font-medium text-[var(--color-text-primary)] mb-4">Warranty Resources</h3>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {#if termsUrl}
          <Button
            variant="outline"
            class="justify-start"
            onclick={onTermsClick}
          >
            <BaseIcon name={FileText} class="h-4 w-4 mr-2" />
            View Warranty Terms
          </Button>
        {/if}

        {#if showFileDownload}
          <Button
            variant="outline"
            class="justify-start"
            onclick={onFileDownload}
          >
            <BaseIcon name={Download} class="h-4 w-4 mr-2" />
            Download Warranty Certificate
          </Button>
        {/if}

        <Button
          variant="outline"
          class="justify-start"
          onclick={() => {}}
        >
          <BaseIcon name={RotateCcw} class="h-4 w-4 mr-2" />
          Request Return Authorization
        </Button>

        <Button
          variant="outline"
          class="justify-start"
          onclick={() => {}}
        >
          <BaseIcon name={Mail} class="h-4 w-4 mr-2" />
          Contact Support
        </Button>
      </div>
    </div>
  </div>
</div>






