import AVFoundation
import Foundation

/// Configures `AVAudioSession` for measurement / low-latency capture (category `.playAndRecord`, mode `.measurement`).
enum WGAudioSession {
    static func configureForCapture() throws {
        let session = AVAudioSession.sharedInstance()
        try session.setCategory(.playAndRecord, mode: .measurement, options: [.allowBluetooth, .defaultToSpeaker])
        try session.setPreferredIOBufferDuration(0.0029) // ≈128 frames @ 44.1kHz when supported
        try session.setActive(true, options: [])
    }
}
