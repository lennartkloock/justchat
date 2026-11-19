<script lang="ts">
    import extCode from "ts-extension?raw";
    import ExtensionSandbox from "#lib/components/extension-sandbox.svelte";
</script>

<h1>Test Page</h1>

<ExtensionSandbox id="test" code={extCode} />
