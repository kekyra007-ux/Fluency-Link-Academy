document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-accordion");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");

    question.addEventListener("click", () => {
      // Toggle the visibility of the answer
      answer.style.display =
        answer.style.display === "block" ? "none" : "block";

      icon.src = "icons/plus-icon.svg"; // Revert back to plus icon
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const headerComponent = document.querySelector(".home-header-component");

  // Проверка на существование элемента
  if (!headerComponent) {
    return; // Завершение, если элемент отсутствует
  }

  const addZoomEffect = () => {
    const windowHeight = window.innerHeight;
    const elementTop = headerComponent.getBoundingClientRect().top;

    if (elementTop < windowHeight) {
      headerComponent.classList.add("zoom-in");
      window.removeEventListener("scroll", addZoomEffect); // Удаляем обработчик после активации
    }
  };

  addZoomEffect(); // Запускаем при загрузке
  window.addEventListener("scroll", addZoomEffect);
});

document.addEventListener("DOMContentLoaded", () => {
  const infoComponent = document.querySelector(".info-component");
  const imageWrapper = document.querySelector(".info-image-wrapper");
  const contentWrapper = document.querySelector(".info-content-wrapper");

  // Проверка на существование элементов
  if (!infoComponent || !imageWrapper || !contentWrapper) {
    return; // Завершение, если элементы отсутствуют
  }

  const addSlideEffect = () => {
    const windowHeight = window.innerHeight;
    const elementTop = infoComponent.getBoundingClientRect().top;

    if (elementTop < windowHeight) {
      imageWrapper.classList.add("slide-in-left");
      contentWrapper.classList.add("slide-in-right");
      window.removeEventListener("scroll", addSlideEffect); // Удаляем обработчик после активации
    }
  };

  addSlideEffect(); // Запускаем при загрузке
  window.addEventListener("scroll", addSlideEffect);
});

document.addEventListener("DOMContentLoaded", () => {
  const serviceItems = document.querySelectorAll(".home-services-item");

  if (!serviceItems || serviceItems.length === 0) return;

  const observerOptions = {
    threshold: 0.3,
  };

  const revealCard = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(revealCard, observerOptions);

  serviceItems.forEach((item) => {
    if (!item) return;
    observer.observe(item);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const storyContent = document.querySelector(".story-content-wrapper");
  const storyImage = document.querySelector(".story-lightbox-wrapper");

  if (!storyContent || !storyImage) return;

  const observerOptions = {
    threshold: 0.4,
  };

  const revealElements = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target === storyContent) {
          entry.target.classList.add("slide-in-left");
        } else if (entry.target === storyImage) {
          entry.target.classList.add("slide-in-right");
        }
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(revealElements, observerOptions);

  observer.observe(storyContent);
  observer.observe(storyImage);
});

document.addEventListener("DOMContentLoaded", () => {
  const zoomElements = document.querySelectorAll(".about-header-component > *");

  if (!zoomElements.length) return; // Проверка на наличие элементов

  const observerOptions = {
    threshold: 0.2, // Срабатывает, когда элемент видим на 20%
  };

  const revealWithZoom = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("zoom-in");
        observer.unobserve(entry.target); // Убираем наблюдение после появления
      }
    });
  };

  const observer = new IntersectionObserver(revealWithZoom, observerOptions);

  zoomElements.forEach((element) => observer.observe(element));
});

document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".approach-component");
  const content = document.querySelector(".approach-content-wrapper");
  const image = document.querySelector(".approach-image-wrapper");

  if (!section || !content || !image) return;

  const addAnimation = () => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.8) {
      content.classList.add("animate-slide-up");
      image.classList.add("animate-slide-left");
      window.removeEventListener("scroll", addAnimation);
    }
  };

  window.addEventListener("scroll", addAnimation);
});

document.addEventListener("DOMContentLoaded", () => {
  const trustSection = document.querySelector(".trust-component");
  const trustImage = document.querySelector(".trust-image-wrapper");
  const trustContent = document.querySelector(".trust-content-wrapper");

  if (!trustSection || !trustImage || !trustContent) return;

  const animateTrustSection = () => {
    const sectionTop = trustSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.8) {
      trustImage.classList.add("animate-fade-in-left");
      trustContent.classList.add("animate-fade-in-right");
      window.removeEventListener("scroll", animateTrustSection);
    }
  };

  window.addEventListener("scroll", animateTrustSection);
});

document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".section-blog-post");

  if (!section) return;

  const observerOptions = {
    threshold: 0.1,
  };

  const animateSection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        section.classList.add("animate-section");
        observer.unobserve(section);
      }
    });
  };

  const observer = new IntersectionObserver(animateSection, observerOptions);
  observer.observe(section);
});

document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".section-services-header");

  if (!section) return;

  const observerOptions = {
    threshold: 0.1,
  };

  const animateSection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        section.classList.add("animate-section");
        observer.unobserve(section);
      }
    });
  };

  const observer = new IntersectionObserver(animateSection, observerOptions);
  observer.observe(section);
});
