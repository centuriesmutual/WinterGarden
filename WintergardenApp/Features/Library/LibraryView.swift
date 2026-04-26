import SwiftUI

struct LibraryView: View {
    var body: some View {
        EmptyState(
            title: "Library",
            message: "Performances, saved works, and history — offline-first via SwiftData.",
            systemImage: "books.vertical"
        )
        .frame(maxWidth: .infinity, maxHeight: .infinity)
        .navigationTitle("Library")
    }
}
