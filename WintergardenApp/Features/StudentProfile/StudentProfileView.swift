import SwiftUI

struct StudentProfileView: View {
    var body: some View {
        EmptyState(
            title: "Student profile",
            message: "Instrument, level, and pathway under verified parental consent (COPPA).",
            systemImage: "person.crop.circle"
        )
        .frame(maxWidth: .infinity, maxHeight: .infinity)
        .navigationTitle("Student")
    }
}
