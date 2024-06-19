<script lang="ts">
  import { Separator } from "$lib/components/ui/separator";
  import type { Item } from "$lib/data";

  export let item: Item | null = null;
</script>

<div class="flex h-full flex-col">
  {#if item}
    <div class="flex h-full flex-1 flex-col overflow-hidden">
      <div class="flex items-start p-4 w-full">
        <div class="flex items-start gap-4 text-sm w-full">
          <div class="grid gap-1 w-full">
            <div class="flex w-full">
              <div class="font-semibold">{item.title}</div>
              <div class="ml-auto text-foreground">
                {item.since
                  ? `Baseline since ${item.since}`
                  : "Not baseline as of June 2024"}
              </div>
            </div>
            <div class="text-muted-foreground w-2/3">
              {item.description}
            </div>
            <div>
              <a
                class="underline text-blue-500"
                href={item.link}
                target="_blank"
              >
                Documentation
              </a>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <Separator />
      <div class="flex-1 overflow-y-auto p-4">
        <svelte:component this={item.component} />
      </div>
    </div>
  {:else}
    <div class="p-8 text-center text-muted-foreground">No item selected</div>
  {/if}
</div>
