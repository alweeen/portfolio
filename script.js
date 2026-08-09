// ==========================================================================
// ALWIN A. ALON PORTFOLIO - DYNAMIC INTERACTIVITY SCRIPT
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // 1. Dynamic Footer Copyright Year
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. Header Scroll Effect
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // 3. Interactive Cursor Ambient Light Track
  const cursorGlow = document.getElementById("cursorGlow");
  if (cursorGlow && window.innerWidth > 768) {
    window.addEventListener("mousemove", (e) => {
      cursorGlow.style.left = `${e.clientX}px`;
      cursorGlow.style.top = `${e.clientY}px`;
    });
  }

  // 4. Mobile Navigation Drawer Toggle
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      mobileToggle.classList.toggle("active");
    });

    // Close menu when clicking links
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        mobileToggle.classList.remove("active");
      });
    });
  }

  // 5. ScrollSpy - Active Navigation Link Highlighting
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -70% 0px",
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));

  // 6. Copy Email Button Feedback
  const copyEmailBtn = document.getElementById("copyEmailBtn");
  const copyEmailText = document.getElementById("copyEmailText");

  if (copyEmailBtn && copyEmailText) {
    copyEmailBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      const email = "alwinalon0@gmail.com";

      try {
        await navigator.clipboard.writeText(email);
        const originalText = copyEmailText.textContent;
        copyEmailText.textContent = "Email Copied! ✓";
        copyEmailBtn.style.borderColor = "var(--accent-cyan)";

        setTimeout(() => {
          copyEmailText.textContent = originalText;
          copyEmailBtn.style.borderColor = "";
        }, 2200);
      } catch (err) {
        // Fallback: trigger mailto
        window.location.href = `mailto:${email}`;
      }
    });
  }

  // 7. Contact Form Handling
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        formStatus.textContent = "Please complete all fields before sending.";
        formStatus.style.color = "#ef4444";
        return;
      }

      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      const mailtoUrl = `mailto:alwinalon0@gmail.com?subject=${subject}&body=${body}`;

      formStatus.style.color = "var(--accent-cyan)";
      formStatus.textContent = "Opening your email client...";
      
      window.location.href = mailtoUrl;

      setTimeout(() => {
        contactForm.reset();
        formStatus.textContent = "Thank you! Check your email client to send the message.";
      }, 1500);
    });
  }

  // 8. Scroll Progress Bar
  const scrollProgressBar = document.getElementById("scrollProgressBar");
  if (scrollProgressBar) {
    window.addEventListener("scroll", () => {
      const scrollTotal = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollProgress = height > 0 ? (scrollTotal / height) * 100 : 0;
      scrollProgressBar.style.width = scrollProgress + "%";
    });
  }

  // 9. Scroll Reveal Animations (Animate Once)
  const revealElements = document.querySelectorAll(".reveal");
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // Unobserve to animate only once
        }
      });
    }, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }
});
