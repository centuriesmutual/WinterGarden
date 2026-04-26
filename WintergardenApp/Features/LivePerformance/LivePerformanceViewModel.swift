import Combine
import Foundation

@MainActor
final class LivePerformanceViewModel: ObservableObject {
    enum Mode { case practice, concert, analysis }

    @Published var mode: Mode = .practice
}
