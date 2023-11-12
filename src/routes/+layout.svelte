<script>
  import "../app.css";
  import posthog from "posthog-js";
  import { page } from "$app/stores";
  import { browser } from "$app/environment";
  import { v4 as uuidv4, v4 } from "uuid";

  $page.url.pathname, browser && posthog.capture("@pageview");

  if ($page.data.session) {
    posthog.identify(uuidv4(), {
      randomID: uuidv4(),
    });
  }
</script>

<slot />
