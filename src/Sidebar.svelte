<script lang="ts">
  // import type { Mail } from "../data.js";
  import { cn } from "$lib/utils";
  import { ScrollArea } from "$lib/components/ui/scroll-area";
  import { itemStore } from "./lib/store";
  import type { Item } from "$lib/data";

  export let items: Item[];
</script>

<ScrollArea class="h-screen">
  <div class="flex flex-col gap-2 p-4 pt-0">
    {#each items as item}
      <button
        class={cn(
          "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
          $itemStore.selected === item.id && "bg-muted"
        )}
        on:click={() => itemStore.setItem(item.id)}
      >
        <div class="flex w-full flex-col gap-1">
          <div class="flex items-center">
            <div class="flex items-center gap-2">
              <div class="font-semibold">{item.title}</div>
            </div>
            <div class="ml-auto text-xs text-muted-foreground">
              {item.since ?? ""}
            </div>
          </div>
        </div>
        <div class="line-clamp-2 text-xs text-muted-foreground">
          {item.description.substring(0, 300)}
        </div>
        <div>
          {#if item.baseline === "newly"}
            <div class="flex items-center gap-2">
              <svg
                class="w-5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 111 61"
                ><path
                  d="M30.833 0 37 6.1l-6.167 6.1-6.166-6.1L30.833 0Zm12.334 12.2 6.166 6.1-6.166 6.1L37 18.3l6.167-6.1Zm49.333 0 6.167 6.1-6.167 6.1-6.167-6.1 6.167-6.1Zm12.333 12.2L111 30.5l-6.167 6.1-6.166-6.1 6.166-6.1ZM92.5 36.6l6.167 6.1-6.167 6.1-6.167-6.1 6.167-6.1ZM80.167 48.8l6.166 6.1-6.166 6.1L74 54.9l6.167-6.1ZM67.833 36.6 74 42.7l-6.167 6.1-6.166-6.1 6.166-6.1ZM18.5 12.2l6.167 6.1-6.167 6.1-6.167-6.1 6.167-6.1Z"
                  fill="#A9C1EA"
                /><path
                  d="m80.167 0 6.166 6.1-55.5 54.9L0 30.5l6.167-6.1 24.666 24.4L80.167 0Z"
                  fill="#1671F1"
                /></svg
              >
              <div class="text-xs text-muted-foreground">Newly available</div>
            </div>
          {:else if item.baseline === "limited"}
            <div class="flex items-center gap-2">
              <svg
                class="w-5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 111 62"
                ><path
                  d="m30.833 0 18.5 18.6-6.166 6.2-18.5-18.6L30.833 0Z"
                  fill="#D78000"
                /><path
                  d="M86.333 6.2 111 31 86.333 55.8l-6.166-6.2 18.5-18.6-18.5-18.6 6.166-6.2Z"
                  fill="#E5D0AC"
                /><path
                  d="m67.833 37.2-6.166 6.2 18.5 18.6 6.166-6.2-18.5-18.6Z"
                  fill="#D78000"
                /><path
                  d="m24.667 6.2 6.166 6.2-18.5 18.6 18.5 18.6-6.166 6.2L0 31 24.667 6.2Z"
                  fill="#E5D0AC"
                /><path
                  d="m80.167 0 6.166 6.2-55.5 55.8-6.166-6.2L80.167 0Z"
                  fill="#D78000"
                /></svg
              >
              <div class="text-xs text-muted-foreground">Limited</div>
            </div>
          {/if}
        </div>
      </button>
    {/each}
  </div>
</ScrollArea>
