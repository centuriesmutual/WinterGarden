import Foundation
import SwiftData

@Model
final class WGDataPlaceholder {
    var id: UUID
    var created: Date

    init() {
        id = UUID()
        created = Date()
    }
}
