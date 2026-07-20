document.getElementById("year").textContent = new Date().getFullYear();

const contactButton = document.getElementById("contactButton");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactButton) {
  contactButton.addEventListener("click", async (event) => {
    event.preventDefault();

    const email = "alwinalon0@gmail.com";
    const mailtoLink = `mailto:${email}?subject=Portfolio%20Inquiry`;

    window.location.href = mailtoLink;

    try {
      await navigator.clipboard.writeText(email);
      contactButton.textContent = "Email copied";
      setTimeout(() => {
        contactButton.textContent = "Contact Me";
      }, 1800);
    } catch (error) {
      console.warn("Clipboard copy unavailable", error);
    }
  });
}

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    const mailtoLink = `mailto:alwinalon0@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
    formStatus.textContent = "Opening your email app…";
    contactForm.reset();
  });
}

// const cursorBlur = document.createElement("div");
// cursorBlur.className = "cursor-blur";
// document.body.appendChild(cursorBlur);

// window.addEventListener("mousemove", (event) => {
//   cursorBlur.style.left = `${event.clientX}px`;
//   cursorBlur.style.top = `${event.clientY}px`;
// });

// window.addEventListener("mousedown", () => {
//   cursorBlur.classList.add("cursor-blur--small");
// });

// window.addEventListener("mouseup", () => {
//   cursorBlur.classList.remove("cursor-blur--small");
// });
