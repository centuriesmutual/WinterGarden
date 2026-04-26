import SwiftUI

// MARK: - Wintergarden visual theme (mapped from web: `tailwind.config.js`, `app/globals.css`, `app/treasury/layout.tsx`)
//
// Primary surface: warm dark "ink" with "paper" typography and signature "gold" accents.
// Treasury / economy secondary: deep green "moss" ink, "mint" functional accent, "cream" text, "copper" warning.
// Web grain + gold radial glow are applied at the root shell (see `GrainOverlayModifier` + `RootShellView`).

public enum WGColor {
    // Homepage + global tokens
    public static let void = Color(wgHex: 0x000000)
    public static let ink = Color(wgHex: 0x070503)
    public static let black = Color(wgHex: 0x0A0806)
    public static let deep = Color(wgHex: 0x120E09)
    public static let surface = Color(wgHex: 0x18130C)
    public static let panel = Color(wgHex: 0x1F1810)
    public static let sepia = Color(wgHex: 0x2B211A)
    public static let border = Color(wgHex: 0x2A2118)
    public static let borderLit = Color(wgHex: 0x3A2E22)

    public static let paper = Color(wgHex: 0xEFE8D8)
    public static let paperDim = Color(wgHex: 0xB8AD96)
    public static let paperGhost = Color(wgHex: 0x5A5142)
    public static let paperShadow = Color(wgHex: 0x342D22)

    public static let gold = Color(wgHex: 0xC9A961)
    public static let goldDim = Color(wgHex: 0x8A7644)
    public static let goldDeep = Color(wgHex: 0x3E331B)
    public static let goldGhost = Color(wgHex: 0x1F1A0F)

    /// Radial highlight (web body background) — use in soft gradients over `ink`.
    public static let goldGlow = Color(wgHex: 0xC9A961).opacity(0.04)

    // Harmonic semantic layer (product spec + HIG) — paired with brand gold
    /// Tonic / warm anchor (brand gold)
    public static let harmonicTonic = gold
    /// Dominant function — cool blue for contrast on dark surfaces
    public static let harmonicDominant = Color(wgHex: 0x6BA3E0)
    /// Subdominant — muted forest (web illustrations used `#2d6a4f`)
    public static let harmonicSubdominant = Color(wgHex: 0x2D6A4F)

    // Treasury scope (from `treasury/layout.tsx` inline CSS variables)
    public static let treasuryInk = Color(wgHex: 0x0F1F1A)
    public static let treasuryInk2 = Color(wgHex: 0x0A1613)
    public static let treasuryMoss = Color(wgHex: 0x1A3A2E)
    public static let treasuryCream = Color(wgHex: 0xF5EDE0)
    public static let treasuryCopper = Color(wgHex: 0xB87333)
    /// Functional accent (web calls this “tiffany” in README; mint in code)
    public static let treasuryMint = Color(wgHex: 0x7FFFB4)
    public static let treasuryRule = Color(wgHex: 0x223027)
    public static let treasuryDim = Color(wgHex: 0x8A9A91)

    // System-adaptive semantic states
    public static let success = Color(uiColor: .systemGreen)
    public static let warning = Color(uiColor: .systemOrange)
    public static let error = Color(uiColor: .systemRed)
    public static let informational = Color(uiColor: .systemBlue)
}

public extension Color {
    init(wgHex: UInt32, alpha: Double = 1) {
        let r = Double((wgHex >> 16) & 0xFF) / 255
        let g = Double((wgHex >> 8) & 0xFF) / 255
        let b = Double(wgHex & 0xFF) / 255
        self.init(.sRGB, red: r, green: g, blue: b, opacity: alpha)
    }
}
