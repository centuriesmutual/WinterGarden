import SwiftData
import SwiftUI

@main
struct WintergardenApp: App {
    @UIApplicationDelegateAdaptor(AppDelegate.self) private var appDelegate

    var body: some Scene {
        WindowGroup {
            RootShellView()
                .preferredColorScheme(.dark)
                .modelContainer(PersistenceController.modelContainer)
        }
    }
}
