(() => {
  'use strict';
  const data = window.WEDDING_DATA || {};
  const rsvp = data.rsvp || {};
  const section = document.createElement('section');
  section.id = 'email-rsvp';
  section.setAttribute('aria-labelledby', 'reply-title');
  section.innerHTML = `<div class="reply-card"><span class="reply-kicker">Kindly reply</span><svg viewBox="0 0 24 24" fill="currentColor" style="width:38px;height:38px;display:block;margin:20px auto;color:#25D366;" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.44C8.94 7.44 8.68 7.5 8.46 7.74C8.24 7.97 7.64 8.53 7.64 9.69C7.64 10.84 8.48 11.96 8.6 12.11C8.72 12.27 10.25 14.62 12.61 15.63C13.17 15.87 13.61 16.02 13.95 16.13C14.51 16.31 15.03 16.28 15.43 16.22C15.88 16.15 16.82 15.65 17.02 15.09C17.22 14.53 17.22 14.05 17.16 13.95C17.1 13.85 16.95 13.79 16.72 13.68C16.5 13.57 15.39 13.02 15.18 12.95C14.97 12.87 14.82 12.84 14.67 13.07C14.52 13.29 14.1 13.79 13.97 13.94C13.85 14.09 13.72 14.11 13.5 14C13.28 13.89 12.56 13.65 11.71 12.89C11.05 12.3 10.6 11.58 10.47 11.36C10.35 11.13 10.46 11.01 10.57 10.9C10.67 10.8 10.8 10.63 10.91 10.5C11.03 10.38 11.07 10.29 11.14 10.14C11.22 10 11.18 9.87 11.12 9.76C11.07 9.65 10.61 8.53 10.43 8.08C10.24 7.64 10.05 7.7 9.9 7.7L9.46 7.69C9.28 7.69 9.11 7.44 9.11 7.44Z"/></svg><h2 id="reply-title"></h2><p class="reply-note"></p><p class="reply-deadline" hidden></p><form class="rsvp-form"></form></div>`;
  section.querySelector('h2').textContent = rsvp.heading || 'With joy, we await your reply';
  section.querySelector('.reply-note').textContent = rsvp.note || 'Kindly let us know if you can join our celebration.';
  if (rsvp.deadline) {
    const deadline = section.querySelector('.reply-deadline');
    deadline.textContent = `Kindly reply by ${rsvp.deadline}`;
    deadline.hidden = false;
  }
  window.initWeddingRSVP(section.querySelector('form'), rsvp, `${data.couple?.groom || 'Sumesh'} & ${data.couple?.bride || 'Dafni'}`);
  (document.getElementById('allrecords') || document.body).appendChild(section);
})();
