import Foundation

/// Staging / production path constants — replace with generated OpenAPI or Proto clients as services land.
public enum ServiceEndpoints {
    public static let performanceWebSocket = URL(string: "wss://staging.wintergarden.app/v1/performance")!
    public static let authBase = URL(string: "https://staging.wintergarden.app/oauth")!
}
