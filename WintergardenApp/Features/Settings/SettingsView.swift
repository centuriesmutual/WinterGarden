import SwiftUI

struct SettingsView: View {
    var body: some View {
        List {
            Section("Account") {
                Text("Subscription & billing (StoreKit 2)")
            }
            Section("Devices") {
                Text("Audio / MIDI setup")
            }
            Section("Privacy") {
                Text("Export & deletion (GDPR)")
            }
        }
        .scrollContentBackground(.hidden)
        .background(WGColor.ink)
        .navigationTitle("Settings")
    }
}
