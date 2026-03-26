<script lang="ts">
  import type { IExpandableCardProps } from '$stylist/information/interface/expandable-card';
  import { Icon } from '$stylist';
  import { ExpandableCardStyleManager } from '$stylist/information/class/style-manager/expandable-card';

  const ChevronDown = 'chevron-down';


  /**
   * РљРѕРјРїРѕРЅРµРЅС‚ ExpandableCard - РєР°СЂС‚РѕС‡РєР° СЃ РІРѕР·РјРѕР¶РЅРѕСЃС‚СЊСЋ СЂР°СЃРєСЂС‹С‚РёСЏ/СЃРІРѕСЂР°С‡РёРІР°РЅРёСЏ РґРµС‚Р°Р»РµР№
   *
   * РЎР»РµРґСѓРµС‚ РїСЂРёРЅС†РёРїР°Рј SOLID:
   * - РџСЂРёРЅС†РёРї РµРґРёРЅСЃС‚РІРµРЅРЅРѕР№ РѕС‚РІРµС‚СЃС‚РІРµРЅРЅРѕСЃС‚Рё (SRP): РєРѕРјРїРѕРЅРµРЅС‚ РѕС‚РІРµС‡Р°РµС‚ С‚РѕР»СЊРєРѕ Р·Р° РѕС‚РѕР±СЂР°Р¶РµРЅРёРµ СЂР°СЃРєСЂС‹РІР°РµРјРѕР№ РєР°СЂС‚РѕС‡РєРё
   * - РџСЂРёРЅС†РёРї РѕС‚РєСЂС‹С‚РѕСЃС‚Рё/Р·Р°РєСЂС‹С‚РѕСЃС‚Рё (OCP): Р»РµРіРєРѕ СЂР°СЃС€РёСЂСЏРµРј С‡РµСЂРµР· РїСЂРѕРїСЃС‹ Рё СЃС‚РёР»Рё
   * - РџСЂРёРЅС†РёРї РїРѕРґСЃС‚Р°РЅРѕРІРєРё Р›РёСЃРєРѕРІ (LSP): РјРѕР¶РЅРѕ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ РєР°Рє Р·Р°РјРµРЅСѓ СЃС‚Р°РЅРґР°СЂС‚РЅРѕР№ РєР°СЂС‚РѕС‡РєРµ
   * - РџСЂРёРЅС†РёРї СЂР°Р·РґРµР»РµРЅРёСЏ РёРЅС‚РµСЂС„РµР№СЃР° (ISP): С‡РµС‚РєРѕ РѕРїСЂРµРґРµР»РµРЅРЅС‹Р№ РёРЅС‚РµСЂС„РµР№СЃ РїСЂРѕРїСЃРѕРІ
   * - РџСЂРёРЅС†РёРї РёРЅРІРµСЂСЃРёРё Р·Р°РІРёСЃРёРјРѕСЃС‚РµР№ (DIP): Р·Р°РІРёСЃРёС‚ РѕС‚ Р°Р±СЃС‚СЂР°РєС†РёР№ (СЃС‚РёР»РµР№ С‡РµСЂРµР· ExpandableCardStyleManager)
   */

  let {
    title,
    subtitle,
    summary,
    details,
    defaultExpanded = false,
    disabled = false,
    variant = 'default',
    class: className = '',
    headerClass = '',
    summaryClass = '',
    detailsClass = '',
    chevronClass = '',
    ...restProps
  }: IExpandableCardProps = $props();

  let isExpanded = $state(defaultExpanded);

  function toggleExpanded() {
    if (!disabled) {
      isExpanded = !isExpanded;
    }
  }

  // Р’С‹С‡РёСЃР»СЏРµРј СЃС‚РёР»Рё СЃ РёСЃРїРѕР»СЊР·РѕРІР°РЅРёРµРј ExpandableCardStyleManager
  const baseClasses = $derived(ExpandableCardStyleManager.getBaseClasses());
  const themedClasses = $derived(ExpandableCardStyleManager.getThemedClasses({ variant }));
  const containerClasses = $derived(
    `${baseClasses} ${themedClasses} ${className}`.trim()
  );
  const headerClasses = $derived(
    `${ExpandableCardStyleManager.getHeaderClasses(disabled)} ${headerClass}`.trim()
  );
  const titleClasses = $derived(ExpandableCardStyleManager.getTitleClasses());
  const subtitleClasses = $derived(ExpandableCardStyleManager.getSubtitleClasses());
  const summaryContainerClasses = $derived(
    `${ExpandableCardStyleManager.getSummaryClasses()} ${summaryClass}`.trim()
  );
  const chevronClasses = $derived(
    ExpandableCardStyleManager.getChevronClasses(isExpanded, chevronClass)
  );
  const detailsContainerClasses = $derived(
    ExpandableCardStyleManager.getDetailsContainerClasses(isExpanded)
  );
  const detailsContentClasses = $derived(
    `${ExpandableCardStyleManager.getDetailsContentClasses()} ${detailsClass}`.trim()
  );
</script>

<div class={containerClasses} {...restProps}>
  <button
    class={headerClasses}
    onclick={toggleExpanded}
    aria-expanded={isExpanded}
    aria-controls="expandable-card-content"
    disabled={disabled}
  >
    <div class="flex-1">
      <h3 class={titleClasses}>{title}</h3>
      {#if subtitle}
        <p class={subtitleClasses}>{subtitle}</p>
      {/if}
      <div class={summaryContainerClasses}>
        {@render summary()}
      </div>
    </div>

    <Icon
      name={ChevronDown}
      class={chevronClasses}
    />
  </button>

  <div
    id="expandable-card-content"
    class={detailsContainerClasses}
  >
    <div class={detailsContentClasses}>
      {@render details()}
    </div>
  </div>
</div>






