import Foundation

@MainActor
public final class TrustScoreManager: ObservableObject {
    @Published public private(set) var score: Double = 1.0
}
