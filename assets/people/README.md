# People photos

To show headshots on the site:

1. Add a square-ish image (e.g., 512×512) to `assets/people/` (PNG/JPG/WebP all work).
2. Update the person entry in `_data/speakers.yml` or `_data/organizers.yml`:

   - `photo: "/assets/people/<your-file>"`

Notes:
- Prefer official headshots or photos you have permission to reuse.
- The site crops images into a circle (`object-fit: cover`), so square images work best.
