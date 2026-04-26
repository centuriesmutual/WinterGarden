import SwiftUI

public struct ScoreBadge: View {
    let value: String
    let caption: String?

    public init(_ value: String, caption: String? = nil) {
        self.value = value
        self.caption = caption
    }

    public var body: some View {
        VStack(alignment: .leading, spacing: 2) {
            Text(value)
                .font(WGTypography.mono(20, weight: .semibold))
                .foregroundStyle(WGColor.treasuryMint)
            if let caption {
                Text(caption)
                    .font(WGTypography.caption2)
                    .foregroundStyle(WGColor.paperGhost)
            }
        }
        .padding(.vertical, WGSpacing.xs)
        .padding(.horizontal, WGSpacing.sm)
        .background(
            RoundedRectangle(cornerRadius: 8, style: .continuous)
                .fill(WGColor.treasuryMoss.opacity(0.4))
        )
        .overlay(
            RoundedRectangle(cornerRadius: 8, style: .continuous)
                .stroke(WGColor.treasuryRule, lineWidth: 1)
        )
    }
}
