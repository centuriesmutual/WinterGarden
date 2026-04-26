import SwiftUI

public struct WGProgressBar: View {
    let progress: Double

    public init(progress: Double) {
        self.progress = min(1, max(0, progress))
    }

    public var body: some View {
        GeometryReader { geo in
            ZStack(alignment: .leading) {
                Capsule()
                    .fill(WGColor.goldDeep.opacity(0.5))
                Capsule()
                    .fill(
                        LinearGradient(
                            colors: [WGColor.goldDim, WGColor.gold],
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
                    .frame(width: geo.size.width * progress)
            }
        }
        .frame(height: 6)
    }
}
