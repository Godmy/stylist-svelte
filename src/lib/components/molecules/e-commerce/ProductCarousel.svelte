<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { ChevronLeft, ChevronRight, Heart, ShoppingCart } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';
  import ProductCard from './ProductCard.svelte';

  type Product = {
    id: string;
    name: string;
    description?: string;
    price: number;
    originalPrice?: number;
    thumbnail?: string;
    rating?: number;
    reviewCount?: number;
    inStock?: boolean;
    isFeatured?: boolean;
    isNew?: boolean;
    isOnSale?: boolean;
    discountPercent?: number;
    category?: string;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    products: Product[];
    slidesToShow?: number;
    showDots?: boolean;
    showArrows?: boolean;
    autoPlay?: boolean;
    autoPlaySpeed?: number;
    infinite?: boolean;
    class?: string;
    containerClass?: string;
    slideClass?: string;
    arrowClass?: string;
    dotClass?: string;
    onProductClick?: (product: Product) => void;
    onAddToCart?: (product: Product) => void;
    onWishlistToggle?: (product: Product, inWishlist?: boolean) => void;
  };

  let {
    products = [],
    slidesToShow = 4,
    showDots = true,
    showArrows = true,
    autoPlay = false,
    autoPlaySpeed = 4000,
    infinite = true,
    class: hostClass = '',
    containerClass = '',
    slideClass = '',
    arrowClass = '',
    dotClass = '',
    onProductClick,
    onAddToCart,
    onWishlistToggle,
    ...restProps
  }: Props = $props();

  let currentIndex = $state(0);
  let autoPlayInterval: number | null = null;

  $effect(() => {
    if (autoPlay) {
      autoPlayInterval = window.setInterval(() => {
        goToNext();
      }, autoPlaySpeed) as unknown as number;
    }

    return () => {
      if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
      }
    };
  });

  function goToPrev() {
    if (currentIndex === 0) {
      currentIndex = infinite ? Math.ceil(products.length / slidesToShow) - 1 : 0;
    } else {
      currentIndex--;
    }
  }

  function goToNext() {
    const totalPages = Math.ceil(products.length / slidesToShow);
    if (currentIndex === totalPages - 1) {
      currentIndex = infinite ? 0 : totalPages - 1;
    } else {
      currentIndex++;
    }
  }

  function goToSlide(index: number) {
    const totalPages = Math.ceil(products.length / slidesToShow);
    if (index >= 0 && index < totalPages) {
      currentIndex = index;
    }
  }

  let visibleProducts = $derived.by(() => {
    const startIndex = currentIndex * slidesToShow;
    const endIndex = startIndex + slidesToShow;
    return products.slice(startIndex, endIndex);
  });

  let totalPages = $derived(Math.ceil(products.length / slidesToShow));
  let hasMultiplePages = $derived(totalPages > 1);
</script>

<div class={`product-carousel ${hostClass}`} {...restProps}>
  <div class="relative">
    {#if showArrows && hasMultiplePages}
      <button
        type="button"
        class={`absolute top-1/2 left-0 z-10 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 ${arrowClass}`}
        onclick={goToPrev}
        aria-label="Previous products"
      >
        <ChevronLeft class="h-5 w-5 text-gray-700" />
      </button>

      <button
        type="button"
        class={`absolute top-1/2 right-0 z-10 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 ${arrowClass}`}
        onclick={goToNext}
        aria-label="Next products"
      >
        <ChevronRight class="h-5 w-5 text-gray-700" />
      </button>
    {/if}

    <div class={`overflow-hidden ${containerClass}`}>
      <div class="flex transition-transform duration-300 ease-in-out" style={`transform: translateX(-${currentIndex * (100 / Math.min(slidesToShow, products.length || 1))}%);`}>
        {#each products as product, index}
          <div class={`flex-shrink-0 w-full md:w-1/${Math.min(slidesToShow, products.length || 1)} p-2 ${slideClass}`}>
            <ProductCard
              {product}
              onProductClick={() => onProductClick?.(product)}
              onAddToCart={() => onAddToCart?.(product)}
              onWishlistToggle={(item, inWishlist) => onWishlistToggle?.(item, inWishlist)}
            />
          </div>
        {/each}
      </div>
    </div>
  </div>

  {#if showDots && hasMultiplePages}
    <div class="flex justify-center mt-4 space-x-2">
      {#each Array.from({ length: totalPages }) as _, i}
        <button
          type="button"
          class={`w-3 h-3 rounded-full ${
            currentIndex === i ? 'bg-blue-600' : 'bg-gray-300'
          } ${dotClass}`}
          aria-label={`Go to slide ${i + 1}`}
          onclick={() => goToSlide(i)}
        ></button>
      {/each}
    </div>
  {/if}
</div>



