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

<style>
  [popover] {
    &:popover-open {
      /*   0. BEFORE-OPEN STATE   */
      /*  initial state for what we're animating *in* from  */
      @starting-style {
        opacity: 0;
        transform: translateY(100%);
      }

      /*   1. OPEN STATE   */
      /*  state when popover is open, BOTH:
        what we're transitioning *in* to 
        and transitioning *out* from */
      opacity: 1;
      transform: translateY(0);
    }

    /*   2. AFTER-OPEN-IS-CLOSED STATE   */
    /*  initial state for what we're animating *out* to */
    opacity: 0;
    transform: translateY(100%);

    /*  enumarate transitioning properties, including display */
    transition:
      transform 0.5s,
      opacity 0.5s,
      display 0.5s;
  }

  [popover]:popover-open {
    width: 200px;
    position: absolute;
    inset: unset;
    margin: 0;
    right: 16px;
    bottom: 16px;
  }
  /* ::backdrop {
    backdrop-filter: blur(3px);
  } */
</style>
