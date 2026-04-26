import SwiftUI

struct AnalysisView: View {
    var body: some View {
        EmptyState(
            title: "Analysis",
            message: "Structural overlays, comparative listening, and Snow metrics.",
            systemImage: "chart.xyaxis.line"
        )
        .frame(maxWidth: .infinity, maxHeight: .infinity)
        .navigationTitle("Analysis")
    }
}
