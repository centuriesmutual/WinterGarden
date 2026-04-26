import SwiftUI

/// Film-style grain (web: SVG `feTurbulence` at 4% opacity, overlay blend, subtle motion).
struct GrainField: View {
    var body: some View {
        Canvas { context, size in
            let step: CGFloat = 3
            var x: CGFloat = 0
            while x < size.width {
                var y: CGFloat = 0
                while y < size.height {
                    let n = hash01(x, y)
                    let o = 0.02 + n * 0.06
                    context.fill(
                        Path(CGRect(x: x, y: y, width: 1, height: 1)),
                        with: .color(Color.white.opacity(o))
                    )
                    y += step
                }
                x += step
            }
        }
        .blendMode(.overlay)
    }

    private func hash01(_ x: CGFloat, _ y: CGFloat) -> CGFloat {
        let s = x * 12.9898 + y * 78.233
        return CGFloat(sin(s).truncatingRemainder(dividingBy: 1) * 0.5 + 0.5)
    }
}

public struct GrainOverlayModifier: ViewModifier {
    @State private var phase: CGFloat = 0

    public init() {}

    public func body(content: Content) -> some View {
        content
            .overlay {
                GrainField()
                    .opacity(0.4)
                    .offset(x: phase * 0.4, y: phase * 0.3)
                    .animation(
                        .linear(duration: 0.3).repeatForever(autoreverses: false),
                        value: phase
                    )
                    .allowsHitTesting(false)
            }
            .onAppear { phase = 1 }
    }
}

public extension View {
    func wgGrainOverlay() -> some View { modifier(GrainOverlayModifier()) }
}
