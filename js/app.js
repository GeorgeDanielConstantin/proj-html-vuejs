const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      links: ["Home", "About", "Services", "Training", "Blogs"],
      contacts: [
        {
          info: "info@example.com",
          icon: "ph",
        },
        {
          info: "+1(817)9013377",
          icon: "ph",
        },
      ],
      logos: [
        "../img/youtube-logo.svg",
        "../img/youtube-logo.svg",
        "../img/youtube-logo.svg",
        "../img/youtube-logo.svg",
      ],
      brand: ["../img/logo.png"],
      supports: [
        "Contact us",
        "Online chat",
        "Whatsapp",
        "Telegram",
        "Snapchat",
      ],
      abouts: ["About us", "Blog", "Career", "Job", "In press"],
      faqs: ["Account", "Order", "Delivery", "Payment", "Return"],
    };
  },
});

app.mount("#app");
