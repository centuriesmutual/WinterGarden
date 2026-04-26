import AVFoundation
import Combine
import Foundation

/// Owns `AVAudioEngine` routing, buffer taps, and publishers into the analysis pipeline.
@MainActor
final class WGAudioEngine: ObservableObject {
    private let engine = AVAudioEngine()
    @Published private(set) var isRunning = false

    func start() throws {
        try WGAudioSession.configureForCapture()
        try engine.start()
        isRunning = true
    }

    func stop() {
        engine.stop()
        isRunning = false
    }
}
