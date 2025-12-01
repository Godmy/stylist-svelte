<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { FileText, Eye, Download, ZoomIn, ZoomOut, RotateCw, Search, Printer } from 'lucide-svelte';

  type DocumentType = 'pdf' | 'doc' | 'docx' | 'txt' | 'xls' | 'xlsx' | 'ppt' | 'pptx' | 'image';

  type DocumentPreviewProps = {
    src?: string;
    title?: string;
    type?: DocumentType;
    showToolbar?: boolean;
    showDownload?: boolean;
    showPrint?: boolean;
    showZoomControls?: boolean;
    initialZoom?: number;
    class?: string;
    toolbarClass?: string;
    viewerClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    src,
    title = 'Document Preview',
    type = 'pdf',
    showToolbar = true,
    showDownload = true,
    showPrint = true,
    showZoomControls = true,
    initialZoom = 1,
    class: className = '',
    toolbarClass = '',
    viewerClass = '',
    ...restProps
  } = $props();

  let zoomLevel = $state(initialZoom);
  let rotation = $state(0);
  let currentPage = $state(1);
  let totalPages = $state(10); // This would come from the document in a real implementation
  let searchQuery = $state('');

  function zoomIn() {
    zoomLevel = Math.min(zoomLevel + 0.2, 3);
  }

  function zoomOut() {
    zoomLevel = Math.max(zoomLevel - 0.2, 0.5);
  }

  function rotate() {
    rotation = (rotation + 90) % 360;
  }

  function handleDownload() {
    if (src) {
      const link = document.createElement('a');
      link.href = src;
      link.download = title;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  function handlePrint() {
    window.print();
  }

  function handleSearch() {
    // In a real implementation, this would search the document content
    console.log('Searching for:', searchQuery);
  }

  function goToPage(page: number) {
    if (page >= 1 && page <= totalPages) {
      currentPage = page;
    }
  }
</script>

<div class={`border border-gray-200 rounded-lg overflow-hidden ${className}`} {...restProps}>
  {#if showToolbar}
    <div class={`flex items-center p-2 border-b border-gray-200 bg-gray-50 space-x-2 ${toolbarClass}`}>
      <div class="flex items-center">
        <FileText class="h-5 w-5 text-gray-500 mr-2" />
        <h3 class="text-sm font-medium text-gray-900 truncate max-w-xs">{title}</h3>
      </div>
      
      <div class="flex-1"></div>
      
      <div class="flex items-center space-x-1">
        {#if showZoomControls}
          <button
            type="button"
            class="p-2 rounded hover:bg-gray-200"
            onclick={zoomOut}
            title="Zoom out"
          >
            <ZoomOut class="h-4 w-4" />
          </button>
          <span class="text-sm text-gray-700 mx-1">{Math.round(zoomLevel * 100)}%</span>
          <button
            type="button"
            class="p-2 rounded hover:bg-gray-200"
            onclick={zoomIn}
            title="Zoom in"
          >
            <ZoomIn class="h-4 w-4" />
          </button>
        {/if}
        
        <button
          type="button"
          class="p-2 rounded hover:bg-gray-200"
          onclick={rotate}
          title="Rotate"
        >
          <RotateCw class="h-4 w-4" />
        </button>
        
        <div class="h-5 border-l border-gray-300 mx-1"></div>
        
        <button
          type="button"
          class="p-2 rounded hover:bg-gray-200"
          onclick={handleSearch}
          title="Search"
        >
          <Search class="h-4 w-4" />
        </button>
        
        <div class="h-5 border-l border-gray-300 mx-1"></div>
        
        {#if showDownload}
          <button
            type="button"
            class="p-2 rounded hover:bg-gray-200"
            onclick={handleDownload}
            title="Download"
          >
            <Download class="h-4 w-4" />
          </button>
        {/if}
        
        {#if showPrint}
          <button
            type="button"
            class="p-2 rounded hover:bg-gray-200"
            onclick={handlePrint}
            title="Print"
          >
            <Printer class="h-4 w-4" />
          </button>
        {/if}
      </div>
    </div>
  {/if}

  <div class={`p-4 bg-gray-100 overflow-auto ${viewerClass}`}>
    <!-- Document preview area -->
    <div class="flex flex-col items-center">
      <!-- Page navigation -->
      <div class="flex items-center mb-4">
        <button
          type="button"
          class="px-3 py-1 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50"
          onclick={() => goToPage(currentPage - 1)}
          disabled={currentPage <= 1}
        >
          &lt;
        </button>
        <div class="border-t border-b border-gray-300 px-4 py-1 text-sm text-gray-700">
          {currentPage} / {totalPages}
        </div>
        <button
          type="button"
          class="px-3 py-1 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50"
          onclick={() => goToPage(currentPage + 1)}
          disabled={currentPage >= totalPages}
        >
          &gt;
        </button>
      </div>

      <!-- Document content -->
      <div 
        class="border border-gray-300 bg-white shadow-md"
        style={`transform: scale(${zoomLevel}) rotate(${rotation}deg); transform-origin: center; transition: transform 0.2s;`}
      >
        {#if type === 'pdf' || type === 'image'}
          {#if src}
            <div class="relative">
              {#if type === 'image'}
                <img 
                  src={src} 
                  alt="Document preview" 
                  class="max-w-full h-auto"
                />
              {:else}
                <div class="w-full h-96 flex items-center justify-center bg-gray-100">
                  <div class="text-center">
                    <FileText class="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p class="text-gray-500">PDF Preview would appear here</p>
                    <p class="text-xs text-gray-400 mt-2">Document: {title}</p>
                  </div>
                </div>
              {/if}
            </div>
          {:else}
            <div class="w-full h-96 flex items-center justify-center bg-gray-100">
              <div class="text-center">
                <FileText class="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p class="text-gray-500">No document to preview</p>
              </div>
            </div>
          {/if}
        {:else}
          <div class="w-full h-96 flex items-center justify-center bg-gray-100">
            <div class="text-center">
              <FileText class="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p class="text-gray-500">{type.toUpperCase()} preview not supported</p>
              <p class="text-xs text-gray-400 mt-2">Document: {title}</p>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>

  <!-- Additional document info -->
  <div class="border-t px-4 py-2 bg-gray-50 text-xs text-gray-500 flex justify-between">
    <div>Type: {type.toUpperCase()}</div>
    <div>Pages: {totalPages}</div>
  </div>
</div>
