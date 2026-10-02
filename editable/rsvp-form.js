/* WhatsApp RSVP behavior */
window.initWeddingRSVP = (form, config, names) => {
  form.innerHTML = `<label for="rsvp-name">Your full name</label>
    <input id="rsvp-name" name="guestName" autocomplete="name" maxlength="120" placeholder="First and last name" required>
    <label for="rsvp-attendance">Will you be joining us?</label>
    <select id="rsvp-attendance" name="attendance" required>
      <option value="">Please select your response</option>
      <option value="yes">Joyfully accepts</option>
      <option value="no">Regretfully declines</option>
    </select>
    <div id="rsvp-party" hidden><label for="rsvp-count">Number of guests attending</label>
      <input id="rsvp-count" name="guestCount" type="number" min="1" max="100" step="1" value="1" disabled aria-describedby="rsvp-count-help">
      <small id="rsvp-count-help">Including yourself</small></div>
    <button type="submit" class="action rsvp-link">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.44C8.94 7.44 8.68 7.5 8.46 7.74C8.24 7.97 7.64 8.53 7.64 9.69C7.64 10.84 8.48 11.96 8.6 12.11C8.72 12.27 10.25 14.62 12.61 15.63C13.17 15.87 13.61 16.02 13.95 16.13C14.51 16.31 15.03 16.28 15.43 16.22C15.88 16.15 16.82 15.65 17.02 15.09C17.22 14.53 17.22 14.05 17.16 13.95C17.1 13.85 16.95 13.79 16.72 13.68C16.5 13.57 15.39 13.02 15.18 12.95C14.97 12.87 14.82 12.84 14.67 13.07C14.52 13.29 14.1 13.79 13.97 13.94C13.85 14.09 13.72 14.11 13.5 14C13.28 13.89 12.56 13.65 11.71 12.89C11.05 12.3 10.6 11.58 10.47 11.36C10.35 11.13 10.46 11.01 10.57 10.9C10.67 10.8 10.8 10.63 10.91 10.5C11.03 10.38 11.07 10.29 11.14 10.14C11.22 10 11.18 9.87 11.12 9.76C11.07 9.65 10.61 8.53 10.43 8.08C10.24 7.64 10.05 7.7 9.9 7.7L9.46 7.69C9.28 7.69 9.11 7.44 9.11 7.44Z"/></svg>
      <span>Send RSVP via WhatsApp</span>
    </button>
    <p class="rsvp-help" role="status"></p>`;
  const name = form.querySelector('#rsvp-name');
  const attendance = form.querySelector('#rsvp-attendance');
  const count = form.querySelector('#rsvp-count');
  const party = form.querySelector('#rsvp-party');
  const help = form.querySelector('.rsvp-help');
  const rawPhone = String(config.whatsapp || config.phone || '+919003349865').trim();
  const phone = rawPhone.replace(/[^\d]/g, '');
  const hasPhone = phone.length >= 10;

  const sync = () => {
    const attending = attendance.value === 'yes';
    party.hidden = !attending;
    count.disabled = !attending;
    count.required = attending;
  };
  attendance.addEventListener('change', sync);
  name.addEventListener('input', () => name.setCustomValidity(''));
  sync();

  help.textContent = hasPhone
    ? 'WhatsApp will open with your pre-filled reply. Please send the message to confirm your RSVP.'
    : 'Please configure host WhatsApp phone number.';

  form.addEventListener('submit', event => {
    event.preventDefault();
    name.setCustomValidity(name.value.trim() ? '' : 'Please enter your full name.');
    if (!form.reportValidity()) return;

    const attending = attendance.value === 'yes';
    const guestCount = attending ? count.value : '0';
    const guestName = name.value.trim();

    const message = `*Wedding RSVP — ${names}*\n\n` +
      `Dear ${names},\n\n` +
      `Thank you for the wonderful invitation!\n\n` +
      `👤 *Guest Name:* ${guestName}\n` +
      `✨ *Response:* ${attending ? 'Joyfully accepts 🎉' : 'Regretfully declines'}\n` +
      (attending ? `👥 *Guests Attending:* ${guestCount} (including myself)\n\n` : '\n') +
      `With warm wishes & blessings,\n${guestName}`;

    const waUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
    help.textContent = 'WhatsApp is opening with your reply. Please press Send there to confirm your RSVP.';
  });
};
