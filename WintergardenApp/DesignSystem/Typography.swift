import SwiftUI

/// Dynamic Type–aware scale. Web used **Inter**; iOS uses **SF Pro** (HIG) with the same step sizes as the product spec.
public enum WGTypography {
    public static let largeTitle: Font = .system(size: 34, weight: .semibold, design: .default)
    public static let title1: Font = .system(size: 28, weight: .regular, design: .default)
    public static let title2: Font = .system(size: 22, weight: .regular, design: .default)
    public static let title3: Font = .system(size: 20, weight: .regular, design: .default)
    public static let headline: Font = .system(size: 17, weight: .semibold, design: .default)
    public static let body: Font = .system(size: 17, weight: .regular, design: .default)
    public static let callout: Font = .system(size: 16, weight: .regular, design: .default)
    public static let subheadline: Font = .system(size: 15, weight: .regular, design: .default)
    public static let footnote: Font = .system(size: 13, weight: .regular, design: .default)
    public static let caption1: Font = .system(size: 12, weight: .regular, design: .default)
    public static let caption2: Font = .system(size: 11, weight: .regular, design: .default)

    /// Technical readouts (scores, MIDI trace) — SF Mono equivalent to web `JetBrains Mono` in Treasury.
    public static func mono(_ size: CGFloat, weight: Font.Weight = .regular) -> Font {
        .system(size: size, weight: weight, design: .monospaced)
    }

    /// Conservatory “small caps” nav / tags (web `.smallcaps`)
    public static let labelSC: Font = .system(size: 11, weight: .medium, design: .default)
}

public struct WGLabelSmallCaps: ViewModifier {
    public func body(content: Content) -> some View {
        content
            .font(WGTypography.labelSC)
            .tracking(3.2)
            .textCase(.uppercase)
    }
}

public extension View {
    func wgSmallCapsLabel() -> some View { modifier(WGLabelSmallCaps()) }
}
