const form = document.querySelector("#contact-form");
const statusEl = document.querySelector("#form-status");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const opportunity = String(data.get("opportunity") || "").trim();
  const message = String(data.get("message") || "").trim();

  if (!name || !email || !opportunity || !message) {
    statusEl.textContent = "Please complete all fields before sending your message.";
    return;
  }

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailIsValid) {
    statusEl.textContent = "Please enter a valid email address.";
    form.elements.email.focus();
    return;
  }

  const subject = encodeURIComponent(`Blockchain opportunity: ${opportunity}`);
  const body = encodeURIComponent(
    `Hello Ugo,\n\nMy name is ${name}.\n\nOpportunity type: ${opportunity}\nContact email: ${email}\n\n${message}`
  );

  statusEl.textContent = "Opening your email app. Please press Send there to complete your message.";
  window.location.href = `mailto:christianugo4@gmail.com?subject=${subject}&body=${body}`;
});
