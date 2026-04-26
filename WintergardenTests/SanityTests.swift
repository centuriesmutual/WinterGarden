import SwiftUI
import UIKit
import XCTest
@testable import Wintergarden

final class PaletteTests: XCTestCase {
    /// Web `globals.css` and Tailwind: `--gold: #C9A961`
    func testWebGoldTokenRoundTrips() {
        let c = Color(wgHex: 0xC9A961)
        let ui = UIColor(c)
        var r: CGFloat = 0, g: CGFloat = 0, b: CGFloat = 0, a: CGFloat = 0
        ui.getRed(&r, green: &g, blue: &b, alpha: &a)
        XCTAssertEqual(Int(round(r * 255)), 0xC9)
        XCTAssertEqual(Int(round(g * 255)), 0xA9)
        XCTAssertEqual(Int(round(b * 255)), 0x61)
    }
}
