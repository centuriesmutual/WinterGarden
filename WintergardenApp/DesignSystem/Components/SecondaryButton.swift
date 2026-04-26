import SwiftUI

public struct SecondaryButton: View {
    let title: String
    var action: () -> Void

    public init(_ title: String, action: @escaping () -> Void) {
        self.title = title
        self.action = action
    }

    public var body: some View {
        Button {
            WGHaptics.impact(.light)
            action()
        } label: {
            Text(title)
                .font(WGTypography.callout.weight(.medium))
                .frame(maxWidth: .infinity)
                .padding(.vertical, WGSpacing.md)
                .padding(.horizontal, WGSpacing.xl)
        }
        .buttonStyle(WGSecondaryButtonStyle())
    }
}

struct WGSecondaryButtonStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .foregroundStyle(WGColor.gold)
            .background(
                Capsule()
                    .fill(Color.clear)
            )
            .overlay(
                Capsule()
                    .stroke(WGColor.goldDeep, lineWidth: 1)
            )
            .background(
                Capsule()
                    .fill(WGColor.gold.opacity(configuration.isPressed ? 0.12 : 0.06))
            )
            .scaleEffect(configuration.isPressed ? 0.99 : 1)
            .animation(WGMotion.standardCurve, value: configuration.isPressed)
    }
}
