import SwiftUI

/// Curves & durations shared across the app (web used ~200ms on buttons; spec: 250ms standard, 150ms micro, spring emphasis).
public enum WGMotion {
    public static let standardDuration: Double = 0.25
    public static let microDuration: Double = 0.15
    public static let standardCurve: Animation = .easeInOut(duration: standardDuration)
    public static let microCurve: Animation = .easeOut(duration: microDuration)
    public static let emphasisSpring: Animation = .spring(response: 0.4, dampingFraction: 0.8)
}
