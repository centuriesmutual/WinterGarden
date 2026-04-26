import SwiftUI

public struct EmptyState: View {
    let title: String
    let message: String
    let systemImage: String

    public init(title: String, message: String, systemImage: String = "tray") {
        self.title = title
        self.message = message
        self.systemImage = systemImage
    }

    public var body: some View {
        VStack(spacing: WGSpacing.md) {
            Image(systemName: systemImage)
                .font(.system(size: 40, weight: .light))
                .foregroundStyle(WGColor.goldDim)
            Text(title)
                .font(WGTypography.headline)
                .foregroundStyle(WGColor.paper)
            Text(message)
                .font(WGTypography.subheadline)
                .multilineTextAlignment(.center)
                .foregroundStyle(WGColor.paperGhost)
        }
        .padding(WGSpacing.xl)
    }
}
