<script>
  import "./app.css";
  import Textarea from "./lib/FieldSizing.svelte";
  import Popover from "./lib/Popover.svelte";
  import AlignContent from "./lib/AlignContent.svelte";
  import Fullscreen from "./lib/Fullscreen.svelte";
  import TextBalance from "./lib/TextBalance.svelte";
  import Has from "./lib/Has.svelte";
  // https://wpt.fyi/interop-2024
  // https://webstatus.dev/
</script>

<Textarea></Textarea>

<div class="size-64">
  <Popover></Popover>
</div>

<AlignContent />
<Fullscreen />
<TextBalance />
<Has />
