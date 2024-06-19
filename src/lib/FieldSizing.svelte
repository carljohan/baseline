<script>
  import Label from "./components/ui/label/label.svelte";
</script>

<div class="flex flex-col gap-8 justify-center h-full items-center">
  <div class="space-y-4">
    <div><Label for="without">Normal text area</Label></div>

    <textarea id="without" class="border rounded-lg" />
  </div>

  <div class="space-y-4">
    <div><Label for="field-sizing">With field sizing</Label></div>
    <textarea id="field-sizing" class="border rounded-lg" />
  </div>
</div>
