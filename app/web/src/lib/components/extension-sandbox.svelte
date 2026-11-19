<script lang="ts">
    type ExtensionState = "idle" | "loaded";

    let { id, code }: { id: string, code: string } = $props();

    let state: ExtensionState = "idle";
    const channel = new MessageChannel();
    channel.port1.onmessage = onMessage;

    function makeSrc(code: string): string {
        const html = `<!doctype html>
<meta charset="utf-8">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline'; img-src data:; style-src 'unsafe-inline'; form-action 'none'; base-uri 'none'">
<script type="module">${code}<\/script>`;
        return URL.createObjectURL(new Blob([html], { type: "text/html" }));
    }

    function iframeOnLoad(e: Event) {
        if (e.target instanceof HTMLIFrameElement && state === "idle") {
            URL.revokeObjectURL(e.target.src);
            e.target.contentWindow?.postMessage({ type: "init" }, "*", [
                channel.port2,
            ]);
            state = "loaded";
        }
    }

    function onMessage(e: MessageEvent) {
        console.log("received from extension", e);
    }
</script>

<iframe
    class="extension-iframe"
    title="Extension {id}"
    src={makeSrc(code)}
    sandbox="allow-scripts"
    onload={iframeOnLoad}
></iframe>

<style>
    .extension-iframe {
        display: none;
    }
</style>
