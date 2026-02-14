<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { ShieldCheck, Calendar, Clock, FileText, RotateCcw, CheckCircle, XCircle, Download, Mail } from 'lucide-svelte';
  import { Button } from '$stylist/components/atoms';

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

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

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
    if (isExpired) return 'bg-red-100 text-red-800';
    if (daysRemaining <= 30) return 'bg-yellow-100 text-yellow-800';
    return 'bg-green-100 text-green-800';
  }

  function getWarrantyStatusText(): string {
    if (isExpired) return 'Warranty Expired';
    if (daysRemaining <= 30) return `Expires Soon (${daysRemaining} days left)`;
    return `Active (${daysRemaining} days left)`;
  }
</script>

<div class={`c-warranty-info ${hostClass}`} {...restProps}>
  <div class={`border border-gray-200 rounded-lg p-6 mb-6 ${headerClass}`}>
    <div class="flex items-start">
      <div class="flex-shrink-0">
        <ShieldCheck class="h-8 w-8 text-blue-500" />
      </div>
      <div class="ml-4">
        <h2 class="text-xl font-bold text-gray-900">Warranty Information</h2>
        <p class="mt-1 text-sm text-gray-600">Product: {productName}</p>
        <p class="text-sm text-gray-600">Purchase Date: {formatDate(purchaseDate)}</p>
      </div>
      <div class="ml-auto flex flex-col items-end">
        <span class={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getWarrantyStatusClass()}`}>
          {getWarrantyStatusText()}
        </span>
        {#if !isExpired}
          <p class="mt-1 text-xs text-gray-500">Until {formatDate(warrantyExpiration())}</p>
        {/if}
      </div>
    </div>
  </div>

  <div class={`space-y-6 ${contentClass}`}>
    <!-- Warranty summary -->
    <div class="bg-white border border-gray-200 rounded-lg p-6">
      <div class="flex items-center">
        <ShieldCheck class="h-5 w-5 text-blue-500 mr-2" />
        <h3 class="text-lg font-medium text-gray-900">Warranty Coverage</h3>
      </div>

      <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="border border-gray-200 rounded-lg p-4">
          <div class="flex items-center">
            <Calendar class="h-5 w-5 text-gray-400 mr-2" />
            <div>
              <p class="text-sm font-medium text-gray-900">Warranty Period</p>
              <p class="text-sm text-gray-500">
                {warrantyPeriod.duration} months {warrantyPeriod.type === 'limited' ? '(Limited)' : warrantyPeriod.type === 'extended' ? '(Extended)' : '(Full)'}
              </p>
            </div>
          </div>
        </div>

        <div class="border border-gray-200 rounded-lg p-4">
          <div class="flex items-center">
            <Clock class="h-5 w-5 text-gray-400 mr-2" />
            <div>
              <p class="text-sm font-medium text-gray-900">Status</p>
              <p class="text-sm text-gray-500 capitalize">
                {isExpired ? 'Expired' : `Active • Expires in ${daysRemaining} days`}
              </p>
            </div>
          </div>
        </div>

        {#if serialNumber}
          <div class="border border-gray-200 rounded-lg p-4">
            <div class="flex items-center">
              <FileText class="h-5 w-5 text-gray-400 mr-2" />
              <div>
                <p class="text-sm font-medium text-gray-900">Serial Number</p>
                <p class="text-sm text-gray-500 font-mono">{serialNumber}</p>
              </div>
            </div>
          </div>
        {/if}

        {#if productId}
          <div class="border border-gray-200 rounded-lg p-4">
            <div class="flex items-center">
              <FileText class="h-5 w-5 text-gray-400 mr-2" />
              <div>
                <p class="text-sm font-medium text-gray-900">Product ID</p>
                <p class="text-sm text-gray-500 font-mono">{productId}</p>
              </div>
            </div>
          </div>
        {/if}
      </div>

      {#if warrantyPeriod.description}
        <div class="mt-4">
          <p class="text-sm text-gray-600">{warrantyPeriod.description}</p>
        </div>
      {/if}
    </div>

    <!-- Coverage details -->
    {#if showCoverageDetails && warrantyPeriod.coverage && warrantyPeriod.coverage.length > 0}
      <div class="bg-white border border-gray-200 rounded-lg p-6">
        <h3 class="text-lg font-medium text-gray-900 mb-4">What's Covered</h3>

        <ul class="space-y-2">
          {#each warrantyPeriod.coverage as item}
            <li class="flex items-start">
              <CheckCircle class="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
              <span class="text-sm text-gray-700">{item}</span>
            </li>
          {/each}
        </ul>
      </div>
    {/if}

    <!-- Exclusions -->
    {#if showExclusions && warrantyPeriod.exclusions && warrantyPeriod.exclusions.length > 0}
      <div class="bg-white border border-gray-200 rounded-lg p-6">
        <h3 class="text-lg font-medium text-gray-900 mb-4">What's Not Covered</h3>

        <ul class="space-y-2">
          {#each warrantyPeriod.exclusions as item}
            <li class="flex items-start">
              <XCircle class="h-5 w-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
              <span class="text-sm text-gray-700">{item}</span>
            </li>
          {/each}
        </ul>
      </div>
    {/if}

    <!-- Claims history -->
    {#if showClaimsHistory && claims.length > 0}
      <div class="bg-white border border-gray-200 rounded-lg p-6">
        <h3 class="text-lg font-medium text-gray-900 mb-4">Warranty Claims History</h3>

        <div class={`space-y-4 ${claimClass}`}>
          {#each claims as claim}
            <div class={`border-l-4 ${
              claim.status === 'approved' ? 'border-green-500' :
              claim.status === 'rejected' ? 'border-red-500' :
              claim.status === 'pending' ? 'border-yellow-500' :
              'border-gray-500'
            } pl-4 py-1`}>
              <div class="flex flex-wrap justify-between">
                <div>
                  <p class="font-medium text-gray-900">{claim.issue}</p>
                  <p class="text-sm text-gray-500">Claim #{claim.claimNumber} • {formatDate(claim.date)}</p>
                </div>

                <span class={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  claim.status === 'approved' ? 'bg-green-100 text-green-800' :
                  claim.status === 'rejected' ? 'bg-red-100 text-red-800' :
                  claim.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {claim.status.charAt(0).toUpperCase() + claim.status.slice(1)}
                </span>
              </div>

              {#if claim.resolution}
                <p class="mt-2 text-sm text-gray-600">{claim.resolution}</p>
              {/if}
            </div>
          {/each}
        </div>
      </div>
    {/if}

    <!-- Claim form -->
    {#if showClaimForm}
      <div class="bg-white border border-gray-200 rounded-lg p-6">
        <h3 class="text-lg font-medium text-gray-900 mb-4">File a Warranty Claim</h3>

        {#if claimSubmitted}
          <div class="rounded-md bg-green-50 p-4 mb-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <CheckCircle class="h-5 w-5 text-green-400" />
              </div>
              <div class="ml-3">
                <h3 class="text-sm font-medium text-green-800">Claim submitted successfully!</h3>
                <div class="mt-2 text-sm text-green-700">
                  <p>We've received your claim and will review it shortly. You'll receive an email with updates.</p>
                </div>
              </div>
            </div>
          </div>
        {/if}

        <form onsubmit={(e) => { e.preventDefault(); handleClaimSubmit(); }}>
          <div class="space-y-4">
            <div>
              <label for="issue" class="block text-sm font-medium text-gray-700 mb-1">
                Issue Type *
              </label>
              <select
                id="issue"
                required
                class={`block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${inputClass}`}
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
              <label for="description" class="block text-sm font-medium text-gray-700 mb-1">
                Describe the Issue
              </label>
              <textarea
                id="description"
                rows="3"
                class={`block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${inputClass}`}
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
                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label for="terms-agreement" class="ml-2 block text-sm text-gray-700">
                I agree to the <a href={termsUrl || '#'} class="text-blue-600 hover:text-blue-500">warranty terms</a>
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
    <div class="bg-white border border-gray-200 rounded-lg p-6">
      <h3 class="text-lg font-medium text-gray-900 mb-4">Warranty Resources</h3>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {#if termsUrl}
          <Button
            variant="outline"
            class="justify-start"
            onclick={onTermsClick}
          >
            <FileText class="h-4 w-4 mr-2" />
            View Warranty Terms
          </Button>
        {/if}

        {#if showFileDownload}
          <Button
            variant="outline"
            class="justify-start"
            onclick={onFileDownload}
          >
            <Download class="h-4 w-4 mr-2" />
            Download Warranty Certificate
          </Button>
        {/if}

        <Button
          variant="outline"
          class="justify-start"
          onclick={() => {}}
        >
          <RotateCcw class="h-4 w-4 mr-2" />
          Request Return Authorization
        </Button>

        <Button
          variant="outline"
          class="justify-start"
          onclick={() => {}}
        >
          <Mail class="h-4 w-4 mr-2" />
          Contact Support
        </Button>
      </div>
    </div>
  </div>
</div>

