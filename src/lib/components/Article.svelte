<script>
  export let title;
  export let description;
  export let imgSrc = "";
</script>

<article class="bg-muted rounded-lg flex flex-col p-4">
  <h2 class="text-lg font-extralight leading-tight pb-1">{title}</h2>
  {#if imgSrc}
    <img src={imgSrc} alt="" class="-order-1 max-w-full" />
  {/if}
  <p class="text-sm">{description}</p>
</article>
