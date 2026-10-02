(() => {
  'use strict';
  if (document.getElementById('email-rsvp')) return;

  const data = window.WEDDING_DATA || {};
  const rsvp = data.rsvp || {};
  const section = document.createElement('section');
  section.id = 'email-rsvp';
  section.setAttribute('aria-labelledby', 'reply-title');
  section.innerHTML = `
    <div class="reply-card-wrapper">
      <img src="images/cdn/noroot_6.png" class="rsvp-flourish rsvp-flourish-top" alt="" aria-hidden="true" />
      <div class="reply-card">
        <h2 id="reply-title"></h2>
        <p class="reply-note"></p>
        <p class="reply-deadline" hidden></p>
        <form class="rsvp-form"></form>
      </div>
      <img src="images/cdn/noroot_11.png" class="rsvp-flourish rsvp-flourish-bottom" alt="" aria-hidden="true" />
    </div>
  `;

  section.querySelector('#reply-title').textContent = rsvp.heading || 'With joy, we await your reply';
  section.querySelector('.reply-note').textContent = rsvp.note || 'Kindly let us know if you can join our celebration.';
  if (rsvp.deadline) {
    const deadline = section.querySelector('.reply-deadline');
    deadline.textContent = `Kindly reply by ${rsvp.deadline}`;
    deadline.hidden = false;
  }

  const form = section.querySelector('form');
  if (typeof window.initWeddingRSVP === 'function') {
    window.initWeddingRSVP(form, rsvp, `${data.couple?.groom || 'Sumesh S'} & ${data.couple?.bride || 'Dafni John'}`);
  }

  (document.getElementById('allrecords') || document.body).appendChild(section);
})();
