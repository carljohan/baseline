<script>
  import { Button } from "./components/ui/button";
</script>

<section class="grid place-items-center size-full overflow-hidden">
  <div class="relative">
    <Button popovertarget="demo-popover">Open Popover</Button>
    <div
      id="demo-popover"
      popover="auto"
      class=" bg-black text-white p-3 rounded max-w-prose"
    >
      I am a popover with more information. Hit esc or click away to close me.
    </div>
  </div>
</section>

<!-- <div>
  `popover` API: <a
    class="underline text-blue-500"
    href="https://developer.mozilla.org/en-US/docs/Web/API/Popover_API">MDN</a
  >
</div> -->
