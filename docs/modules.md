# Module ownership and local development

The current ownership map, physical checkout commands, nested repositories and
public/private boundaries are maintained in [modules/readme.md](../modules/readme.md).
The registry is [modules.json](../modules.json).

Source implementations live in `modules/`; `src/lib` contains generated umbrella
entrypoints and documentation. Preparation validates physical sources without
creating projections. Package assembly writes `.package-input` and translates
only its copied root entrypoint.

At umbrella revision `681e886ea`, generated roots still reference removed
`./<domain>` folders. Regeneration and verification remain release prerequisites.
The earlier migration-session file counts, error totals and HTTP checks are
historical observations, not validation of this checkout. Current evidence and
completion criteria are in [src/backlog.md](../src/backlog.md).

Dmitrii runs `yarn stylist:manifest` from the parent **site root** when source
changes are ready. It is not a standalone library script, and agents do not run
it. Package builds and publication follow [AGENTS.md](../AGENTS.md).
