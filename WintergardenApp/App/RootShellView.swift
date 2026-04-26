import SwiftUI

/// Root chrome: web-matched **ink** base, gold radial glow, **grain** overlay, primary navigation.
struct RootShellView: View {
    @Environment(\.horizontalSizeClass) private var hSize
    @State private var selectedTab: MainTab = .home

    var body: some View {
        Group {
            if hSize == .regular {
                NavigationSplitView {
                    sidebar
                } detail: {
                    detail
                }
            } else {
                TabView(selection: $selectedTab) {
                    ForEach(MainTab.allCases, id: \.self) { tab in
                        NavigationStack {
                            tab.rootView
                        }
                        .tabItem { Label(tab.title, systemImage: tab.symbol) }
                        .tag(tab)
                    }
                }
            }
        }
        .background(inkBackground.ignoresSafeArea())
        .wgGrainOverlay()
    }

    private var inkBackground: some View {
        ZStack {
            WGColor.ink
            RadialGradient(
                colors: [WGColor.gold.opacity(0.08), .clear],
                center: .top,
                startRadius: 10,
                endRadius: 420
            )
            RadialGradient(
                colors: [WGColor.gold.opacity(0.05), .clear],
                center: .bottom,
                startRadius: 20,
                endRadius: 480
            )
        }
    }

    private var sidebar: some View {
        List(selection: $selectedTab) {
            ForEach(MainTab.allCases, id: \.self) { tab in
                Label(tab.title, systemImage: tab.symbol)
                    .tag(tab)
            }
        }
        .navigationTitle("Wintergarden")
        .scrollContentBackground(.hidden)
        .background(WGColor.surface)
    }

    @ViewBuilder
    private var detail: some View {
        NavigationStack {
            selectedTab.rootView
        }
    }
}

private enum MainTab: Hashable, CaseIterable {
    case home, live, composition, analysis, discovery, library, economy, settings, parent

    var title: String {
        switch self {
        case .home: return "Home"
        case .live: return "Live"
        case .composition: return "Compose"
        case .analysis: return "Analysis"
        case .discovery: return "Discover"
        case .library: return "Library"
        case .economy: return "Economy"
        case .settings: return "Settings"
        case .parent: return "Parent"
        }
    }

    var symbol: String {
        switch self {
        case .home: return "house"
        case .live: return "waveform"
        case .composition: return "music.quarternote.3"
        case .analysis: return "chart.xyaxis.line"
        case .discovery: return "sparkles"
        case .library: return "books.vertical"
        case .economy: return "bitcoinsign.circle"
        case .settings: return "gearshape"
        case .parent: return "person.2.fill"
        }
    }

    @ViewBuilder
    var rootView: some View {
        switch self {
        case .home: DashboardView()
        case .live: LivePerformanceView()
        case .composition: CompositionView()
        case .analysis: AnalysisView()
        case .discovery: DiscoveryView()
        case .library: LibraryView()
        case .economy: EconomyView()
        case .settings: SettingsView()
        case .parent: ParentDashboardView()
        }
    }
}
