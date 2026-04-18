# Architecture

## РќР°Р·РЅР°С‡РµРЅРёРµ

Р”РѕРјРµРЅ `architecture` вЂ” С„СѓРЅРґР°РјРµРЅС‚ СЃРёСЃС‚РµРјС‹. РћС‚РІРµС‡Р°РµС‚ Р·Р° **РїРµСЂРµРјРµС‰РµРЅРёРµ РєР°РјРµСЂС‹ РїРѕ СЃС†РµРЅРµ**: СѓРїСЂР°РІР»РµРЅРёРµ РїРѕР·РёС†РёРµР№, Р·СѓРјРѕРј, СЃРµРјР°РЅС‚РёС‡РµСЃРєРёРј РјР°СЃС€С‚Р°Р±РѕРј (depth stages). Р’СЃРµ РѕСЃС‚Р°Р»СЊРЅС‹Рµ РґРѕРјРµРЅС‹ СЃС‚СЂРѕСЏС‚СЃСЏ РїРѕРІРµСЂС… РЅРµРіРѕ.

```
architecture          в†ђ РєР°РјРµСЂР°, СЃС†РµРЅР°, WebGL, semantic zoom, LEGO-РїСЂРёРјРёС‚РёРІС‹
  в””в”Ђв”Ђ layout          в†ђ СЂР°СЃРєР»Р°РґРєРё (grid, stack, flex)
       в”њв”Ђв”Ђ information    в†ђ СЃР»РѕС‚С‹ РґР°РЅРЅС‹С… (icon, badge, label)
       в”њв”Ђв”Ђ interaction    в†ђ РїРѕРІРµРґРµРЅРёРµ (click, focus, drag)
       в””в”Ђв”Ђ theme          в†ђ РІРёР·СѓР°Р»СЊРЅС‹Рµ С‚РѕРєРµРЅС‹ (С†РІРµС‚, С‚РµРЅСЊ)
            в””в”Ђв”Ђ ...       в†ђ commerce Рё РґСЂСѓРіРёРµ СЃРѕСЃС‚Р°РІРЅС‹Рµ РґРѕРјРµРЅС‹
```

---

## РЎС‚СЂСѓРєС‚СѓСЂР°

```
architecture/
в”њв”Ђв”Ђ class/           # РљР»Р°СЃСЃС‹ СѓРїСЂР°РІР»РµРЅРёСЏ СЃС‚РёР»СЏРјРё Рё РѕР±СЉРµРєС‚Р°РјРё СЃС†РµРЅ
в”њв”Ђв”Ђ const/           # РўРѕРєРµРЅС‹, РїРµСЂРµС‡РёСЃР»РµРЅРёСЏ, РјР°РїРїРёРЅРіРё
в”њв”Ђв”Ђ data/            # WebGL-С€РµР№РґРµСЂС‹, SVG-СЂРµСЃСѓСЂСЃС‹
в”њв”Ђв”Ђ function/        # Р›РѕРіРёРєР° РєР°РјРµСЂС‹, СЃС†РµРЅС‹, semantic zoom, СЃРѕСЃС‚РѕСЏРЅРёРµ
в”њв”Ђв”Ђ interface/       # LEGO-РїСЂРёРјРёС‚РёРІС‹ (proto) Рё СЂРµС†РµРїС‚С‹ РєРѕРјРїРѕРЅРµРЅС‚РѕРІ (recipe)
в”њв”Ђв”Ђ svelte/          # Svelte-РєРѕРјРїРѕРЅРµРЅС‚С‹ СЃС†РµРЅ (molecule/organism)
в”њв”Ђв”Ђ type/            # TypeScript-С‚РёРїС‹
в””в”Ђв”Ђ index.ts
```

---

## РљР»СЋС‡РµРІС‹Рµ РєРѕРЅС†РµРїС†РёРё

### Camera & Semantic Zoom

РљР°РјРµСЂР° РґРІРёР¶РµС‚СЃСЏ РїРѕ РѕСЃРё Z (depth). Р’ Р·Р°РІРёСЃРёРјРѕСЃС‚Рё РѕС‚ СЂР°СЃСЃС‚РѕСЏРЅРёСЏ РґРѕ РѕР±СЉРµРєС‚Р° Р°РєС‚РёРІРёСЂСѓРµС‚СЃСЏ РѕРґРёРЅ РёР· 7 РІРёР·СѓР°Р»СЊРЅС‹С… СЃС‚РµР№РґР¶РµР№:

```
dot в†’ icon в†’ pill в†’ minimal в†’ compact в†’ detailed в†’ screen
```

- `function/script/depth/` вЂ” РїРѕСЂРѕРіРё Рё Р»РѕРіРёРєР° СЃС‚РµР№РґР¶РµР№
- `function/script/camera/` вЂ” Camera API
- `function/script/camera-state/` вЂ” СЃРѕСЃС‚РѕСЏРЅРёРµ РєР°РјРµСЂС‹
- `function/script/semantic-zoom/` вЂ” `resolveSemanticZoomNode`, `useSemanticZoom`
- `function/state/camera/` вЂ” `useCamera` (Svelte store)

### Scene & WebGL

- `svelte/organism/scene/` вЂ” `<Scene>` вЂ” Р±Р°Р·РѕРІС‹Р№ WebGL-РєР°РЅРІР°СЃ
- `svelte/organism/prezi-scene/` вЂ” `<PreziScene>` вЂ” Prezi-СЂРµР¶РёРј РЅР°РІРёРіР°С†РёРё
- `svelte/organism/canvas/presenter-scene/` вЂ” `<PresenterScene>` вЂ” presenter-РѕР±РѕР»РѕС‡РєР°
- `svelte/molecule/canvas/presenter-node-shell/` вЂ” `<PresenterNodeShell>` вЂ” СѓР·РµР» СЃС†РµРЅС‹
- `function/script/scene/` вЂ” Р±СѓС„РµСЂС‹, РіРµРѕРјРµС‚СЂРёСЏ, WebGL-РїСЂРѕРіСЂР°РјРјС‹
- `function/script/math/`, `function/script/matrix4/` вЂ” РјР°С‚РµРјР°С‚РёРєР° РґР»СЏ 3D
- `data/shaders/` вЂ” GLSL С€РµР№РґРµСЂС‹ (vert/frag)

### LEGO-РёРЅС‚РµСЂС„РµР№СЃС‹

РЎРёСЃС‚РµРјР° С‚РёРїРѕРІ СЃС‚СЂРѕРёС‚СЃСЏ РїРѕ РїСЂРёРЅС†РёРїСѓ LEGO: Р°С‚РѕРјР°СЂРЅС‹Рµ `proto`-РёРЅС‚РµСЂС„РµР№СЃС‹ СЃРѕР±РёСЂР°СЋС‚СЃСЏ РІ `recipe`-СЂРµС†РµРїС‚С‹ С‡РµСЂРµР· `StructIntersectAll`.

```typescript
// proto/ вЂ” Р°С‚РѕРјР°СЂРЅС‹Рµ РєРёСЂРїРёС‡Рё
interface ISizable { size: TokenSize; density: TokenDensity; shape: TokenShape }
interface IPositionable { x: number; y: number }

// recipe/ вЂ” СЃРѕСЃС‚Р°РІРЅС‹Рµ РєРѕРЅС‚СЂР°РєС‚С‹
interface ButtonRecipe extends StructIntersectAll<[
  LabelRecipe, IIconSlot, IClickable, IFocusable, ISizable, IBadgeSlot
]> {}
```

- `interface/proto/` вЂ” `ISizable`, `IPositionable`, `IScrollable`, `IElevatable`, `IDimensionable`, `IBorderToken`
- `interface/recipe/` вЂ” `ButtonRecipe`, `CardRecipe`, `InputFieldRecipe`, `AlertRecipe`, `AvatarRecipe`, `BadgeRecipe`, `IconButtonRecipe`, `LabelRecipe`, `MediaItemRecipe`, `SelectRecipe`, `ToggleRecipe`, `DraggableItemRecipe`
- `type/record/architecture-merge/` вЂ” `StructIntersectAll<T>` вЂ” СѓС‚РёР»РёС‚Р° СЃР»РёСЏРЅРёСЏ РєРѕРЅС‚СЂР°РєС‚РѕРІ

### РўРѕРєРµРЅС‹ Рё РєРѕРЅСЃС‚Р°РЅС‚С‹

- `const/enum/` вЂ” С‚РѕРєРµРЅС‹: `axes`, `component-type`, `connector`, `functional-taxonomy`, `line-type`, `marker`, `node-type`, `ownership`, `pan-mode`, `relationship`, `skeleton`, `tier`, `trajectory`
- `const/map/` вЂ” РјР°РїРїРёРЅРіРё: `easing`, `letter-spacing`, `line-height`, `opacity`, `zoom`
- `const/record/` вЂ” Р·Р°РїРёСЃРё Р·РЅР°С‡РµРЅРёР№: `density`, `frame`, `icon-size`, `layer`, `level`, `shape`, `size`, `text-size`
- `const/struct/scene/` вЂ” РєРѕРЅСЃС‚Р°РЅС‚С‹ РєРѕРЅС‚РµРЅС‚Р° СЃС†РµРЅС‹

### Style Managers

- `class/style-manager/base/` вЂ” `StyleManagerBase` вЂ” Р±Р°Р·РѕРІС‹Рµ CSS-СѓС‚РёР»РёС‚С‹
- `class/style-manager/scene/` вЂ” СЃС‚РёР»Рё СЃС†РµРЅС‹
- `class/style-manager/presenter-scene/` вЂ” СЃС‚РёР»Рё presenter-СЃС†РµРЅС‹
- `class/style-manager/presenter-node-shell/` вЂ” СЃС‚РёР»Рё СѓР·Р»Р° presenter
- `class/style-manager/state/` вЂ” СѓРїСЂР°РІР»РµРЅРёРµ СЃРѕСЃС‚РѕСЏРЅРёРµРј СЃС‚РёР»РµР№
- `class/object-manager/scene/` вЂ” `SceneObjectManager` вЂ” СѓРїСЂР°РІР»РµРЅРёРµ РѕР±СЉРµРєС‚Р°РјРё СЃС†РµРЅС‹

### РЎРѕСЃС‚РѕСЏРЅРёРµ

- `function/state/camera/` вЂ” `useCamera`
- `function/state/focus/` вЂ” `useFocus`
- `function/state/presentation/` вЂ” `usePresentation`
- `function/state/prezi-scene/` вЂ” `usePreziState`
- `function/state/selection/` вЂ” `useSelection`
- `function/state/presenter-node-shell/` вЂ” СЃРѕСЃС‚РѕСЏРЅРёРµ СѓР·Р»Р° presenter
- `function/state/presenter-scene/` вЂ” СЃРѕСЃС‚РѕСЏРЅРёРµ presenter-СЃС†РµРЅС‹
- `function/state/scene/` вЂ” СЃРѕСЃС‚РѕСЏРЅРёРµ СЃС†РµРЅС‹

---

## РЎРІСЏР·СЊ СЃ РґСЂСѓРіРёРјРё РґРѕРјРµРЅР°РјРё

`architecture` вЂ” С‚РѕР»СЊРєРѕ РїРѕСЃС‚Р°РІС‰РёРє. РћРЅ РЅРµ РёРјРїРѕСЂС‚РёСЂСѓРµС‚ Р±РёР·РЅРµСЃ-Р»РѕРіРёРєСѓ РёР· РґСЂСѓРіРёС… РґРѕРјРµРЅРѕРІ.

| Р”РѕРјРµРЅ | РСЃРїРѕР»СЊР·СѓРµС‚ РёР· architecture |
|---|---|
| `layout` | `ISizable`, `StructIntersectAll`, С‚РѕРєРµРЅС‹ СЂР°Р·РјРµСЂРѕРІ |
| `information` | `StructIntersectAll`, proto-РёРЅС‚РµСЂС„РµР№СЃС‹ |
| `interaction` | `StructIntersectAll`, `ISizable`, `IScrollable` |
| `commerce` | СЂРµС†РµРїС‚С‹ РєРѕРјРїРѕРЅРµРЅС‚РѕРІ РєР°Рє Р±Р°Р·Сѓ РєРѕРЅС‚СЂР°РєС‚РѕРІ |

