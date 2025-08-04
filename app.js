const testimonials = [
    {
      name: "Kate Rogers",
      title: "Content Creator",
      stars: "★★★★★",
      message: "I needed a refund for tickets to an event that was changed last minute. I experienced great customer service and the issue was resolved in a timely manner. Thanks to agent Sandra!",
      image: "./images/Ellipse9.png"
    },
    {
      name: "David Smith",
      title: "Photographer",
      stars: "★★★★☆",
      message: "Quick and friendly support when my booking details were incorrect. Impressed!",
      image: "./images/testimonial3.png"
    },
    {
      name: "Lana Wells",
      title: "Entrepreneur",
      stars: "★★★★★",
      message: "Loved the smooth refund process. The agent was very helpful and polite.",
      image: "./images/testimonial4.png"
    }
  ];

  let currentIndex = 0;

  const nameEl = document.getElementById("clientName");
  const titleEl = document.getElementById("clientTitle");
  const starsEl = document.getElementById("clientStars");
  const messageEl = document.getElementById("clientMessage");
  const imageEl = document.getElementById("mainImage");

  function updateTestimonial(index) {
    const t = testimonials[index];
    nameEl.textContent = t.name;
    titleEl.textContent = t.title;
    starsEl.textContent = t.stars;
    messageEl.textContent = t.message;
    imageEl.src = t.image;
  }

  document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
  });

  document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentIndex);
  });

  // Load first testimonial
  updateTestimonial(currentIndex);