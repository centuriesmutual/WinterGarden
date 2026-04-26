import Combine
import Foundation

@MainActor
final class OnboardingViewModel: ObservableObject {
    @Published private(set) var step: Int = 0

    func advance() {
        step += 1
    }
}
