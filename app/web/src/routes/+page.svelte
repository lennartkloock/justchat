<script lang="ts">
    import code from "ts-extension?raw";
    //     let iframe = $state<HTMLIFrameElement>();
    //     const iframeSrc = makeSrc(pocExtension);
    //     const channel = new MessageChannel();
    //     channel.port1.onmessage = onMessage;

    //     function makeSrc(code: string): string {
    //         const html = `<!doctype html>
    // <meta charset="utf-8">
    // <meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline' 'wasm-unsafe-eval'; connect-src 'none'; img-src data:; style-src 'unsafe-inline'">
    // <script type="module">${code}<\/script>`;
    //         return URL.createObjectURL(new Blob([html], { type: "text/html" }));
    //     }

    // function iframeOnLoad() {
    //     URL.revokeObjectURL(iframeSrc);
    //     console.log("sending init");
    //     iframe?.contentWindow?.postMessage({ type: "init" }, "*", [
    //         channel.port2,
    //     ]);
    // }

    // function onMessage(e: MessageEvent) {
    //     console.log("received from extension", e);
    // }
</script>

<!--
<iframe
    bind:this={iframe}
    id="extension-iframe"
    title="Extension"
    src={iframeSrc}
    sandbox="allow-scripts"
    onload={iframeOnLoad}
></iframe>

<style>
    #extension-iframe {
        display: none;
    }
</style>
-->
