<script lang="ts">
    import { greet } from "poc-extension";

    async function send() {
        let res = await fetch("https://api.twitch.tv/helix/chat/messages", {
            method: "POST",
            headers: {
                Authorization: "Bearer",
                "Client-Id": "",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                broadcaster_id: "416534884",
                sender_id: "416534884",
                message: "Hello World",
            }),
        });
        console.log(res);
    }
</script>

<h1>Welcome to SvelteKit</h1>
<p>
    Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
    documentation
</p>

<h2>{greet("TEST")}</h2>

<button onclick={send}>Test send</button>
