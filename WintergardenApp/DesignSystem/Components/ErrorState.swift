import SwiftUI

public struct ErrorState: View {
    let title: String
    let message: String
    var retry: (() -> Void)?

    public init(title: String, message: String, retry: (() -> Void)? = nil) {
        self.title = title
        self.message = message
        self.retry = retry
    }

    public var body: some View {
        VStack(spacing: WGSpacing.lg) {
            Image(systemName: "exclamationmark.triangle.fill")
                .font(.title)
                .foregroundStyle(WGColor.warning)
            Text(title)
                .font(WGTypography.headline)
                .foregroundStyle(WGColor.paper)
            Text(message)
                .font(WGTypography.subheadline)
                .multilineTextAlignment(.center)
                .foregroundStyle(WGColor.paperDim)
            if let retry {
                PrimaryButton("Try again", action: retry)
                    .frame(maxWidth: 280)
            }
        }
        .padding(WGSpacing.xl)
    }
}
