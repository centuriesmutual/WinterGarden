import SwiftUI

struct EconomyView: View {
    var body: some View {
        ZStack {
            WGColor.treasuryInk.ignoresSafeArea()
            VStack(alignment: .leading, spacing: WGSpacing.lg) {
                Text("Treasury")
                    .font(WGTypography.title1)
                    .foregroundStyle(WGColor.treasuryCream)
                Text("WGRD balances, staking, and WalletConnect — Treasury palette (mint functional accent).")
                    .font(WGTypography.subheadline)
                    .foregroundStyle(WGColor.treasuryDim)
                ScoreBadge("— WGRD", caption: "Connect wallet")
            }
            .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .topLeading)
            .padding(WGSpacing.xl)
        }
        .navigationTitle("Economy")
    }
}
