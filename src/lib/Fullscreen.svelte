<script>
  let isFullscreen = false;

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      isFullscreen = true;
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      isFullscreen = false;
    }
  }
</script>

<div class="flex items-center justify-center h-full">
  <div class="">
    <button
      class="mx-auto bg-black text-white p-3 rounded"
      on:click={toggleFullscreen}
    >
      {isFullscreen ? "Exit Fullscreen" : "Open Fullscreen"}
    </button>
  </div>

  <div class="absolute bottom-4 right-4">
    *On iOS, only available on iPad, not on iPhone.
  </div>
</div>

<style>
  :global(:fullscreen) {
    background-color: pink;
  }
</style>
