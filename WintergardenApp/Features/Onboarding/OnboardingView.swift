import SwiftUI

struct OnboardingView: View {
    @StateObject private var viewModel = OnboardingViewModel()

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: WGSpacing.xl) {
                Text("Wintergarden")
                    .font(WGTypography.largeTitle)
                    .foregroundStyle(WGColor.paper)
                Text("Parent-led account setup, identity verification, and student profiles — coming online with staging APIs.")
                    .font(WGTypography.body)
                    .foregroundStyle(WGColor.paperDim)
                PrimaryButton("Continue") {
                    viewModel.advance()
                }
                .frame(maxWidth: 320)
            }
            .frame(maxWidth: .infinity, alignment: .leading)
            .padding(WGSpacing.xl)
        }
        .background(WGColor.ink)
    }
}
