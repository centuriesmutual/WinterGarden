import SwiftUI

public struct PrimaryButton: View {
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
        .buttonStyle(WGPrimaryButtonStyle())
    }
}

struct WGPrimaryButtonStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .foregroundStyle(WGColor.ink)
            .background(
                Capsule()
                    .fill(WGColor.gold)
            )
            .overlay(
                Capsule()
                    .stroke(WGColor.gold, lineWidth: 1)
            )
            .shadow(color: WGColor.gold.opacity(0.35), radius: 12, y: 6)
            .scaleEffect(configuration.isPressed ? 0.98 : 1)
            .offset(y: configuration.isPressed ? 0 : -1)
            .animation(WGMotion.standardCurve, value: configuration.isPressed)
    }
}
