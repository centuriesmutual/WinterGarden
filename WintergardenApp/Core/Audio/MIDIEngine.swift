import CoreMIDI
import Foundation

/// CoreMIDI client + device discovery. Timestamps forward to the trust + scoring stack.
@MainActor
final class WGMIDIEngine: ObservableObject {
    @Published private(set) var connectedSources: [String] = []

    init() {
        _ = MIDIGetNumberOfSources()
    }
}
