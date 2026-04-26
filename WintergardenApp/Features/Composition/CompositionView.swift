import SwiftUI

struct CompositionView: View {
    var body: some View {
        EmptyState(
            title: "Composition",
            message: "Timeline, tools, and notation will bind to `CompositionService` and SwiftData models.",
            systemImage: "music.quarternote.3"
        )
        .frame(maxWidth: .infinity, maxHeight: .infinity)
        .navigationTitle("Composition")
    }
}
