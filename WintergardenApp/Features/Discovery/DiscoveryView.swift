import SwiftUI

struct DiscoveryView: View {
    var body: some View {
        EmptyState(
            title: "Discovery",
            message: "Personalized feed with explanation cards and gestures.",
            systemImage: "sparkles"
        )
        .frame(maxWidth: .infinity, maxHeight: .infinity)
        .navigationTitle("Discover")
    }
}
