import SwiftUI

public struct WGTextField: View {
    public enum Validation {
        case neutral
        case success
        case error(String)
    }

    let title: String
    @Binding var text: String
    var validation: Validation
    var isSecure: Bool

    public init(
        _ title: String,
        text: Binding<String>,
        validation: Validation = .neutral,
        isSecure: Bool = false
    ) {
        self.title = title
        _text = text
        self.validation = validation
        self.isSecure = isSecure
    }

    public var body: some View {
        VStack(alignment: .leading, spacing: WGSpacing.xs) {
            Text(title)
                .font(WGTypography.caption1)
                .foregroundStyle(WGColor.paperDim)
            Group {
                if isSecure {
                    SecureField("", text: $text)
                } else {
                    TextField("", text: $text)
                }
            }
            .font(WGTypography.body)
            .foregroundStyle(WGColor.paper)
            .padding(WGSpacing.md)
            .background(
                RoundedRectangle(cornerRadius: 10, style: .continuous)
                    .fill(WGColor.panel)
            )
            .overlay(
                RoundedRectangle(cornerRadius: 10, style: .continuous)
                    .stroke(borderColor, lineWidth: 1)
            )
            if case .error(let message) = validation {
                Text(message)
                    .font(WGTypography.caption2)
                    .foregroundStyle(WGColor.error)
            }
        }
    }

    private var borderColor: Color {
        switch validation {
        case .neutral: return WGColor.border
        case .success: return WGColor.success.opacity(0.6)
        case .error: return WGColor.error.opacity(0.8)
        }
    }
}
