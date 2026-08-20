# Domain component workspace

`domain/component/page/domain-playground` is the root shell used by the app route. It owns the screen state and keeps the domain menu, viewport controls, settings panel and AI panel above the current workspace surface.

`domain/component/page/domain-landing` is the landing surface for this domain. It explains why the workspace exists and routes people into the component playground instead of treating the library as a flat component dump.

## Screen Structure

```text
component/page/domain-playground          - root shell and screen switcher
├─ component/page/domain-landing          - landing page for the domain workspace
├─ molecule/domain-menu                   - persistent menu for landing, components, workspace, builder, backlog, AI, diagnostics and settings
├─ molecule/device-viewport               - story viewport control for component preview
├─ organism/domain-explorer               - component browser for domains, clusters, joints and families
│  ├─ organism/domain-sidebar             - taxonomy navigation
│  ├─ molecule/domain-toolbar             - domain selector
│  ├─ molecule/cluster-toolbar            - cluster selector
│  ├─ molecule/joint-toolbar              - joint selector
│  ├─ molecule/domain-list                - entity list
│  ├─ molecule/domain-search              - quick entity search
│  ├─ molecule/taxonomy-breadcrumbs       - selected path display
│  ├─ molecule/joint-tab-buttons          - file/story/json/markdown tabs
│  └─ organism/domain-file-preview        - selected file and story preview
├─ organism/domain-builder                - drag and drop template builder
├─ organism/domain-backlog                - backlog and sprint surface
├─ organism/domain-diagnostics            - story and domain health runner
├─ organism/domain-settings               - theme settings panel
└─ organism/domain-ai-agent               - AI assistant panel placeholder
```

## Purpose

The domain workspace makes the component library readable before it becomes gigantic. It compresses the architecture into a navigable shape: domains describe subject areas, clusters describe language-level entity types, joints describe logical roles, and families keep related implementation files together.

The landing page should introduce that model and point users toward the interactive component browser. It is not a marketing wrapper around demos; it is the front door to the system's structure.

## Landing Copy

- **Hero**: presents Stylist Svelte as a domain-shaped workspace for reading, reviewing and growing the component system.
- **CTA buttons**: both Browse Components and Interactive Playground open the component playground.
- **Why Stylist?**: explains the practical value of the workspace.
- **Atomic Design architecture**: states how atom, molecule, organism and template composition remains visible inside domain context.
- **Readable navigation**: explains why the library is navigated by domain, cluster, joint and family.
- **Story-first review**: connects stories with implementation files, markdown and JSON context.
- **Domain diagnostics**: keeps diagnostics, backlog signals and manifests part of the maintenance loop.
- **Our Mission**: make the component library readable before it becomes gigantic.

## Notes

- Selecting a domain, cluster, joint or family opens the component playground when a story preview exists.
- Component stories live next to their component source as `index.story.svelte`.
- Generated barrel `index.ts` files are maintained by the indexation workflow.
