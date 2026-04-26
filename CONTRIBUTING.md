# Contributing to Wintergarden iOS

## Style

- **Swift 5.10+** with **strict concurrency** enabled at the “complete” level.
- Patterns: **MVVM** with `ObservableObject` + `@MainActor` view models, **async/await** for service calls, **Combine** for UI bindings where it stays clearer than async sequences.
- Follow existing naming: `WG` prefix for design tokens (`WGColor`, `WGTypography`), `Wintergarden` prefix for cross-cutting subsystems (e.g. `WintergardenVisualizationView`).
- Prefer small, testable services behind protocols; add mocks next to the test target.
- **Localization**: add copy to `Resources/Localizable.xcstrings` (not hard-coded in views when the string is user-visible).

## Commits

- Use imperative, present-tense subjects (e.g. “Add economy panel wallet stub”).
- Keep commits scoped to a single concern when possible; reference internal tickets/PRs in the body if your team uses them.

## Pull requests

- Describe the change, the testing you ran (`xcodebuild test`, devices, simulators), and any API or design-system impacts.
- Screenshots for UI changes (light/dark, compact/regular) are required for review when touching `Features/` or `DesignSystem/`.

## Review bar

- No raw backend errors surfaced to students/parents; map to `ErrorState` and analytics hooks.
- Permissions must match copy in `Info.plist` and only request in context.
- New UI must respect Dynamic Type, VoiceOver labels, and Reduced Motion (see `WGMotion` and avoid unmotivated `animation` on critical paths).

## Security

- Never commit real API keys, wallet mnemonics, or personal data from test accounts. Use `.xcconfig` (git-ignored) for local development secrets if needed.
