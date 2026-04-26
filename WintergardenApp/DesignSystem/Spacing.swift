import CoreGraphics

/// 4 & 8 pt grid (web tokens + product spec).
public enum WGSpacing {
    public static let xxs: CGFloat = 4
    public static let xs: CGFloat = 8
    public static let sm: CGFloat = 12
    public static let md: CGFloat = 16
    public static let lg: CGFloat = 20
    public static let xl: CGFloat = 24
    public static let xxl: CGFloat = 32
    public static let xxxl: CGFloat = 40
    public static let huge: CGFloat = 48
    public static let massive: CGFloat = 64

    public enum Semantic {
        public static let small: CGFloat = WGSpacing.sm
        public static let medium: CGFloat = WGSpacing.md
        public static let large: CGFloat = WGSpacing.xl
        public static let xLarge: CGFloat = WGSpacing.xxl
    }
}
