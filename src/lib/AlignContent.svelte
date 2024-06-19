<script lang="ts">
  import { Label } from "./components/ui/label";
  import { Switch } from "./components/ui/switch";
</script>

<div class=" h-full grid place-items-center">
  <div>
    <div class="text-xl">Center item without flex or grid</div>
    <p>with `align-content: center;`</p>
    <div>
      <div id="container" class="size-64 border">
        <div id="item" class="size-8 bg-purple-500"></div>
      </div>

      <div class="w-64 flex flex-col justify-center items-center gap-2 pt-2">
        <div class="w-full flex items-center gap-2">
          <Switch
            id="center"
            on:click={() =>
              document
                .querySelector("#container")
                ?.classList.toggle("align-content")}
          ></Switch>
          <Label for="center">align-content: center</Label>
        </div>
        <div class="w-full flex items-center gap-2">
          <Switch
            id="auto"
            on:click={() =>
              document.querySelector("#item")?.classList.toggle("margin-auto")}
          ></Switch>
          <Label for="center">margin: auto</Label>
        </div>
      </div>
    </div>
  </div>
</div>
