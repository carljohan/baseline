<script>
  import Article from "$lib/components/Article.svelte";
</script>

<section class="grid gap-4 m-4 grid-cols-[repeat(auto-fit,minmax(150px,1fr))]">
  <Article
    title="This is an article headline"
    description="Here's the description of this article, if you decide to click through to read it."
  />
  <Article
    title="This is a teaser for another article"
    description="This is a shorter description."
  />
  <Article
    title="Night"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    imgSrc="https://images.unsplash.com/photo-1640209253494-5e08b39e7d31?crop=entropy&cs=srgb&fm=jpg&q=85"
  />
  <Article
    title="Winter Storms"
    description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    imgSrc="https://images.unsplash.com/photo-1638727598888-9a9390754a2c?crop=entropy&cs=srgb&fm=jpg&q=85"
  />
  <Article
    title="Lorem ipsum"
    description="Duis aute irure dolor in reprehenderit in voluptate."
  />
  <Article
    title="Dawn Apollo"
    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
  />
</section>
