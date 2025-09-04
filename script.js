function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const message = document.getElementById('form-message');

  // Simulate success
  message.classList.remove('hidden');
  form.classList.add('hidden');

  // Optional: Open email client
  const name = form[0].value;
  const email = form[1].value;
  const offer = form[2].value;
  const body = `Name: ${name}\nEmail: ${email}\nOffer: $${offer}`;
  window.location.href = `mailto:domains@outlook.com?subject=Offer for OutloudChat.com&body=${encodeURIComponent(body)}`;
}
