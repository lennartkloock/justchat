use wasm_bindgen::prelude::*;
use web_sys::{MessageEvent, console};

#[wasm_bindgen(start)]
fn run() -> Result<(), JsValue> {
    console::log_1(&"extension start".into());
    let window = web_sys::window().expect("missing window");
    let callback: Closure<dyn FnMut(MessageEvent)> = Closure::new(|event: MessageEvent| {
        console::log_2(&"received in extension".into(), &event);
    });
    window.set_onmessage(Some(callback.as_ref().unchecked_ref()));
    Ok(())
}
