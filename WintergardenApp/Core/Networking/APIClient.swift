import Foundation

/// `URLSession`-backed client with async/await; inject `AuthInterceptor` for tokens.
public actor APIClient {
    public let baseURL: URL
    public let session: URLSession

    public init(baseURL: URL, session: URLSession = .shared) {
        self.baseURL = baseURL
        self.session = session
    }
}
