import SwiftUI

public struct LoadingState: View {
    let message: String

    public init(_ message: String = "Loading") {
        self.message = message
    }

    public var body: some View {
        VStack(spacing: WGSpacing.md) {
            ProgressView()
                .tint(WGColor.gold)
            Text(message)
                .font(WGTypography.subheadline)
                .foregroundStyle(WGColor.paperDim)
        }
        .padding(WGSpacing.xl)
    }
}
