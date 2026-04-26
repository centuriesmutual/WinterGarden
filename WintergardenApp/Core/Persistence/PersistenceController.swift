import SwiftData
import SwiftUI

/// App-wide SwiftData container. Models in `Core/Persistence/Models/`.
@MainActor
enum PersistenceController {
    static let modelContainer: ModelContainer = {
        let schema = Schema([WGDataPlaceholder.self])
        return try! ModelContainer(for: schema, configurations: ModelConfiguration())
    }()
}
