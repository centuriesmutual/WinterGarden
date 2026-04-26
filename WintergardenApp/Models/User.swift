import Foundation

public struct User: Sendable, Identifiable {
    public var id: UUID
    public var displayName: String
    public var isParent: Bool

    public init(id: UUID = UUID(), displayName: String, isParent: Bool) {
        self.id = id
        self.displayName = displayName
        self.isParent = isParent
    }
}
