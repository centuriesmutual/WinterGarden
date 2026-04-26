import Foundation

public struct Performance: Sendable, Identifiable {
    public var id: UUID
    public var title: String
    public var recorded: Date
}
