function addGuest() {
  const guestInput = document.getElementById('guest-name');
  const guestList = document.getElementById('guest-list');
  const guestMessage = document.getElementById('guest-message');

  const name = guestInput.value.trim();

  if (name) {
    const message = `${name} was added to the guest list!`;
    guestList.innerHTML += `<li>${name}</li>`;
    guestMessage.innerHTML = message;
  } else {
    guestMessage.innerHTML = 'Please enter a guest name.';
  }
}
