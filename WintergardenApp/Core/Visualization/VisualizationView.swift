import MetalKit
import SwiftUI

/// Hosts the neural-music-space Metal canvas (shaders in `Shaders/*.metal`). Stub uses ink-clear only until pipelines wire up.
struct WintergardenVisualizationView: UIViewRepresentable {
    func makeUIView(context: Context) -> MTKView {
        let v = MTKView()
        v.enableSetNeedsDisplay = true
        v.isPaused = true
        v.framebufferOnly = true
        v.clearColor = MTLClearColor(
            red: 0.027,
            green: 0.02,
            blue: 0.012,
            alpha: 1
        ) // `WGColor.ink`
        v.delegate = context.coordinator
        if let device = MTLCreateSystemDefaultDevice() {
            v.device = device
        }
        return v
    }

    func updateUIView(_ uiView: MTKView, context: Context) {}

    func makeCoordinator() -> Coordinator { Coordinator() }

    final class Coordinator: NSObject, MTKViewDelegate {
        func mtkView(_ view: MTKView, drawableSizeWillChange size: CGSize) {}

        func draw(in view: MTKView) {
            guard let drawable = view.currentDrawable,
                  let queue = view.device?.makeCommandQueue(),
                  let buffer = queue.makeCommandBuffer(),
                  let pass = view.currentRenderPassDescriptor
            else { return }
            pass.colorAttachments[0].clearColor = view.clearColor
            pass.colorAttachments[0].loadAction = .clear
            if let enc = buffer.makeRenderCommandEncoder(descriptor: pass) {
                enc.endEncoding()
            }
            buffer.present(drawable)
            buffer.commit()
        }
    }
}
