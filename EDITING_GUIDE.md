# Editing Guide (Organizers)

This website is meant for workshop audiences (authors + attendees), not the CVPR workshop review committee. Keep pages lightweight, scannable, and action-oriented.

## Where to edit content (non-HTML)
- Key workshop messaging: `_data/site.yml`
- Navigation items: `_data/navigation.yml`
- About section: `_data/about.yml`
- Topics list: `_data/topics.yml`
- Important dates: `_data/dates.yml`
- Speakers (and their links/photos): `_data/speakers.yml`
- Program schedule: `_data/program.yml`
- Submission (CFP) details: `_data/submission.yml`
- Organizers (and their links/photos): `_data/organizers.yml`
- FAQ: `_data/faq.yml`

Photos can be stored in `assets/people/` and referenced from the relevant YAML as `photo: "/assets/people/<file>"`.

## What to optimize for
1) **Submissions**: make the “why submit”, deadlines, and “how to submit” obvious in the first screen.
2) **Clarity**: remove proposal-style prose; use short sections, bullets, and FAQs.
3) **Trust**: show confirmed speakers, organizers, and clear policies/formatting requirements.
4) **Findability**: keep nav labels familiar (CFP, Program, Speakers, Dates) and use the built-in site search.

## Recommended content pattern
- **Home**: 1-2 sentence description + primary CTA (Submit) + countdown + “What we want” bullets.
- **Call for Papers**: “We’re looking for …” + topic tags + formatting + dates + submission link.
- **Program**: schedule + what’s in each block (keynotes, posters, panel).
- **Speakers**: photos + links (homepage/scholar/linkedin).
- **FAQ**: short, direct answers; link to deeper pages when needed.
