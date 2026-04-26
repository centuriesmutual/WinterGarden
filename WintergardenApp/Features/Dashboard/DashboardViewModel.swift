import Combine
import Foundation

@MainActor
final class DashboardViewModel: ObservableObject {
    @Published var mockProgress: Double = 0.62
    @Published var formattedStreak: String = "7"

    private var cancellables = Set<AnyCancellable>()

    init() {
        // DiscoveryService + PedagogyService integration point
    }
}
