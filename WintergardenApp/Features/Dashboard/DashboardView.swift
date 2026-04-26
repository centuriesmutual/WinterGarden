import SwiftUI

struct DashboardView: View {
    @StateObject private var viewModel = DashboardViewModel()

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: WGSpacing.lg) {
                Text("Dashboard")
                    .font(WGTypography.title1)
                    .foregroundStyle(WGColor.paper)
                Text("Trajectory, practice, notifications, and activity — wired to `DashboardViewModel` + services.")
                    .font(WGTypography.subheadline)
                    .foregroundStyle(WGColor.paperGhost)
                WGProgressBar(progress: viewModel.mockProgress)
                HStack {
                    ScoreBadge("92", caption: "Snow index")
                    ScoreBadge(viewModel.formattedStreak, caption: "Day streak")
                }
            }
            .frame(maxWidth: .infinity, alignment: .leading)
            .padding(WGSpacing.xl)
        }
        .navigationTitle("Home")
        .toolbarBackground(WGColor.surface, for: .navigationBar)
    }
}
