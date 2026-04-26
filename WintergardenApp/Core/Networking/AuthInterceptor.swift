import Foundation

public struct AuthInterceptor: Sendable {
    public var accessToken: String?

    public init(accessToken: String? = nil) {
        self.accessToken = accessToken
    }
}
