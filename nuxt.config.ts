export default defineNuxtConfig({
  nitro: {
    static: false,
  },
  app: {
    head: {
      title: "Extending Configs is Fun!",
      meta: [
        {
          name: "description",
          content: "I am using the extends feature in nuxt 3!",
        },
      ],
    },
  },
});
