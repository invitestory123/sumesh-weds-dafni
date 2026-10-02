# Customer Editing Guide — Sumesh & Dafni Wedding Invitation

This invitation is an ivory and gold luxury wedding invitation featuring an interactive wax-seal envelope overlay, opening animation video, ambient background video, romantic background soundtrack ("Anbil Avan" from Vinnaithaandi Varuvaayaa), live countdown timer, schedule of events, venue details with dual Google Maps links, and RSVP.

---

## Normal Customer Changes

All routine customer edits are configured in:
→ [editable/wedding-data.js](./editable/wedding-data.js)

### Couple Information
Edit `couple` in `editable/wedding-data.js`:
- `groom`: "Sumesh" (Full: `Er. Sumesh Sundararaj, M.Tech., M.S. (USA)`)
- `bride`: "Dafni" (Full: `Dr. Dafni John, MBBS., MD.`)
- `subtitle`: Spiritual tagline / wedding subtitle

### Wedding Date & Invitation Note
Edit `wedding` in `editable/wedding-data.js`:
- `dateLabel`: Short date string for hero banner (`"25.10.26"`)
- `dateISO`: Event start ISO timestamp with timezone offset (`"2026-10-25T16:00:00+05:30"`). Directly drives live countdown timer and Google Calendar link.
- `invitationNote`: Main invitation message text (HTML tags like `<br />` supported)

### Schedule of Events
Edit `schedule` array in `editable/wedding-data.js`:
- Five timed event rows with `title` and `time`:
  - `Guest Arrival` (4:00 PM), `Holy Matrimony` (4:30 PM), `Wedding Reception` (7:00 PM), `Festive Dinner` (8:00 PM), `Celebrations` (9:00 PM).

### Venue & Location
Edit `venue` in `editable/wedding-data.js`:
- Church / Nuptial Mass: Our Lady of Assumption Cathedral, Kosapet, Vellore
- Reception: Don Bosco School Auditorium, Gandhi Nagar, Vellore
- Google Maps direction URLs included for both venues.

### Etiquette & Notes
Edit `details` in `editable/wedding-data.js`:
- `giftPreference`: Gift preference statement
- `dressCode`: Dress code guideline

### Media & Assets
Replace files directly in `editable/assets/` or update `media` in `wedding-data.js`:
- `overlayImage`: Wax-seal envelope graphic (`editable/assets/ChatGPT Image Jun 23, 2026, 04_40_29 PM.png`)
- `sealVideo`: Wax-seal breaking/opening MP4 (`editable/assets/1782224012851.mp4`)
- `heroVideo`: Ambient background video (`editable/assets/Swans2.mov`)
- `audio`: Background soundtrack (`editable/assets/anbil_avan.mp3`)

---

## Rules for Future Agents

1. Make customer content edits in `editable/wedding-data.js` and replace media in `editable/assets/`.
2. Do not modify bundled Tilda core scripts in `js/` or styling in `css/`.
3. Keep ISO date strings with proper timezone offsets (e.g. `-04:00`).
4. Validate changes with `node --check editable/wedding-data.js`.

## WhatsApp RSVP

Set `rsvp.whatsapp` in `editable/wedding-data.js` to the host’s WhatsApp phone number (e.g. `"+919003349865"`). The ivory-and-gold RSVP card collects the guest full name, attendance response ("Joyfully accepts" / "Regretfully declines"), and guest count before opening WhatsApp with a beautifully formatted RSVP reply message. Guests only need to tap "Send" in WhatsApp to confirm. The standalone `editable/rsvp.css`, `editable/rsvp.js`, and `editable/rsvp-form.js` power this functionality.
