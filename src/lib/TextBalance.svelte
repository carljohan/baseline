<script>
  import { Input } from "./components/ui/input";

  let input = "The Lower Title Is A Bit Nicer";
</script>

<div class="h-full flex flex-col">
  <Input bind:value={input} />
  <div class="flex h-full w-96 mx-auto">
    <div
      class="px-4 py-16 m-0 border-x content-center w-full flex flex-col gap-12"
    >
      <!-- Title without balance -->
      <div class="flex flex-col gap-4">
        <h2 class="text-4xl">{input}</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
          perspiciatis impedit ipsum, laudantium vero quo nam obcaecati at.
          Numquam minus delectus nemo, quod illo deserunt optio quis eius vel
          totam.
        </p>
      </div>
      <!-- Title with balance -->
      <div class="flex flex-col gap-4">
        <h2 class="text-4xl text-balance">{input}</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
          perspiciatis impedit ipsum, laudantium vero quo nam obcaecati at.
          Numquam minus delectus nemo, quod illo deserunt optio quis eius vel
          totam.
        </p>
      </div>
    </div>
  </div>
</div>

<style>
  .text-balance {
    /* not supported in chrome, must use shorthand `text-wrap` */
    text-wrap-style: balance;
  }
</style>
