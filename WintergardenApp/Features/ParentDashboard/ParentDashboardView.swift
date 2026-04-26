import SwiftUI

struct ParentDashboardView: View {
    var body: some View {
        EmptyState(
            title: "Parent dashboard",
            message: "Visible when the signed-in user is a verified parent. Student oversight and controls.",
            systemImage: "person.2.fill"
        )
        .frame(maxWidth: .infinity, maxHeight: .infinity)
        .navigationTitle("Parent")
    }
}
