const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      links: ["Home", "About", "Services", "Training", "Blogs"],
      contacts: [
        {
          info: "info@example.com",
          icon: "placeholder",
        },
        {
          info: "+1(817)9013377",
          icon: "placeholder",
        },
      ],
      logos: [
        "../img/youtube-logo.svg",
        "../img/youtube-logo.svg",
        "../img/youtube-logo.svg",
        "../img/youtube-logo.svg",
      ],
      brand: ["../img/logo.png"],
    };
  },
});

app.mount("#app");
