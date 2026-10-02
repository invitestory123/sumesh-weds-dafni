(() => {
  'use strict';
  const data = window.WEDDING_DATA || {};
  const rsvp = data.rsvp || {};
  const section = document.createElement('section');
  section.id = 'email-rsvp';
  section.setAttribute('aria-labelledby', 'reply-title');
  section.innerHTML = `<div class="reply-card"><span class="reply-kicker">Kindly reply</span><svg viewBox="0 0 48 36" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true"><rect x="2" y="3" width="44" height="30" rx="2"/><path d="m3 5 21 16L45 5M3 32l14-14m28 14L31 18"/></svg><h2 id="reply-title"></h2><p class="reply-note"></p><p class="reply-deadline" hidden></p><form class="rsvp-form"></form></div>`;
  section.querySelector('h2').textContent = rsvp.heading || 'With joy, we await your reply';
  section.querySelector('.reply-note').textContent = rsvp.note || 'Kindly let us know if you can join our celebration.';
  if (rsvp.deadline) {
    const deadline = section.querySelector('.reply-deadline');
    deadline.textContent = `Kindly reply by ${rsvp.deadline}`;
    deadline.hidden = false;
  }
  window.initWeddingRSVP(section.querySelector('form'), rsvp, `${data.couple?.groom || ''} & ${data.couple?.bride || ''}`);
  (document.getElementById('allrecords') || document.body).appendChild(section);
})();
