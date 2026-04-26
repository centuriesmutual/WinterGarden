import SwiftUI

struct LivePerformanceView: View {
    @StateObject private var viewModel = LivePerformanceViewModel()

    var body: some View {
        VStack(spacing: WGSpacing.lg) {
            Text("Live performance")
                .font(WGTypography.title2)
                .foregroundStyle(WGColor.paper)
            Text("Audio engine + Metal viz + real-time scoring — mock transport below.")
                .font(WGTypography.footnote)
                .foregroundStyle(WGColor.paperGhost)
            HStack(spacing: WGSpacing.md) {
                SecondaryButton("Practice") { viewModel.mode = .practice }
                PrimaryButton("Concert") { viewModel.mode = .concert }
            }
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
        .padding()
        .navigationTitle("Live")
    }
}
