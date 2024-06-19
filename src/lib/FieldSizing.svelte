<script>
  import Label from "./components/ui/label/label.svelte";
</script>

<div class="flex flex-col gap-8 justify-center h-full items-center">
  <div class="space-y-4">
    <div><Label for="without">Normal text area</Label></div>

    <textarea id="without" class="border" />
  </div>

  <div class="space-y-4">
    <div><Label for="field-sizing">With field sizing</Label></div>
    <textarea id="field-sizing" class="border" />
  </div>
  <div>
    `field-sizing` property: <a
      class="underline text-blue-500"
      href="https://developer.mozilla.org/en-US/docs/Web/CSS/field-sizing"
      >MDN</a
    >
  </div>
</div>

<style>
  textarea {
    width: 400px;
    /* make the height at least 3 lines */
    min-height: 3lh;
  }

  #field-sizing {
    field-sizing: content;
  }
</style>
