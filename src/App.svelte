<script lang="ts">
  import { itemStore } from "$lib/store";
  import { type Item, items } from "$lib/data";

  import * as Resizable from "$lib/components/ui/resizable";

  import Sidebar from "./Sidebar.svelte";
  import { Separator } from "$lib/components/ui/separator";
  import Display from "./Display.svelte";

  export let defaultLayout = [30, 70];

  function onLayoutChange(sizes: number[]) {
    document.cookie = `PaneForge:layout=${JSON.stringify(sizes)}`;
  }
</script>

<div class="">
  <Resizable.PaneGroup
    direction="horizontal"
    {onLayoutChange}
    class="h-full max-h-screen items-stretch"
  >
    <Resizable.Pane defaultSize={defaultLayout[0]} minSize={20}>
      <div class="flex items-center px-4 py-3">
        <h1 class="text-xl font-bold">New baselines features</h1>
      </div>
      <Separator class="mb-4" />

      <Sidebar {items} />
    </Resizable.Pane>
    <Resizable.Handle withHandle />
    <Resizable.Pane defaultSize={defaultLayout[1]} minSize={30}>
      <Display
        item={items.find((item) => item.id === $itemStore.selected) || null}
      />
    </Resizable.Pane>
  </Resizable.PaneGroup>
</div>
