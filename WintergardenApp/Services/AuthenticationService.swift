import Foundation

@MainActor
public final class AuthenticationService: ObservableObject {
    @Published public private(set) var isSignedIn: Bool = false
}
