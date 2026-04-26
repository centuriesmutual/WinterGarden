# Wintergarden — iOS

Native flagship client for the Wintergarden platform (Centuries Mutual LLC). The web marketing site previously in this repository has been **removed**; the visual language from that site is encoded in the Swift `DesignSystem` (see `WintergardenApp/DesignSystem/Colors.swift`).

## Design source of truth (web → iOS)

| Token (web) | iOS `WGColor` / usage |
|-------------|------------------------|
| `--ink` | `WGColor.ink` — primary background with gold radial glow in `RootShellView` |
| `--paper*`, `--gold*` | `WGColor.paper`, `WGColor.gold`, … — typography and CTA |
| `--wg-*` (Treasury) | `WGColor.treasuryMint`, `treasuryMoss`, `treasuryCream`, … — economy surfaces |
| Grain overlay (SVG noise) | `wgGrainOverlay()` + `GrainField` in `DesignSystem/Modifiers/GrainOverlayModifier.swift` |

Typography: web used **Inter**; iOS uses **SF Pro** with the scale in `DesignSystem/Typography.swift` to match the product spec.

## Requirements

- macOS with **Xcode 15+** and **XcodeGen** (recommended): `brew install xcodegen`
- iOS **17+** deployment target, iPhone + iPad (universal)

## Generate the Xcode project

```bash
cd "$(git rev-parse --show-toplevel)"
xcodegen generate
open Wintergarden.xcodeproj
```

If you do not use XcodeGen, create a new **iOS App** in Xcode, set the bundle ID to `com.centuriesmutual.wintergarden`, iOS 17, and add all files under `WintergardenApp/` to the app target, `WintergardenTests/` to the test target, enable **Swift strict concurrency** (Complete), and point **Info.plist** to `WintergardenApp/Resources/Info.plist`.

## Build and test

```bash
xcodebuild -project Wintergarden.xcodeproj -scheme Wintergarden -destination "platform=iOS Simulator,name=iPhone 16" build test
```

Replace the simulator with a connected device name when needed.

## API configuration

Point staging base URLs in `Core/Networking/Endpoints/ServiceEndpoints.swift` and inject credentials via `APIClient` + `AuthInterceptor` (Keychain storage to be expanded per the platform OAuth + PKCE flow).

## Add AudioKit (when wiring the audio engine)

In Xcode: **File → Add Package Dependencies…** → `https://github.com/AudioKit/AudioKit` (pin to a 5.6+ release), then add `AudioKit` to the `Wintergarden` target. The `WGAudioEngine` is ready to be extended to use it.

## App Clip

The App Clip target is not yet generated. Add an App Clip extension + scheme when the discovery preview flow is ready; keep the final bundle under 10 MB as required.

## License

Proprietary — Centuries Mutual LLC.

See `CONTRIBUTING.md` for engineering workflow.
