# Authentic Gym Photography Replacement Guide
## Xtreme Muscle Gym N Physical Fitness — Balkot, Bhaktapur, Nepal

This guide provides step-by-step instructions for the gym management or developer to replace the visual asset slots with verified, authentic photographs taken on-site at the Balkot facility.

---

### 1. Photo Slots Inventory

The website features **7 designated image locations** across the homepage, facilities, and gallery sections. All image slots are centrally defined in `src/data/gymMedia.ts` and `src/data/gymConfig.ts`.

| Slot ID | Section | Placement | Recommended Subject | Target Aspect Ratio & Dimensions | Target Filename |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`hero`** | Hero Section | Main Header Visual | Wide-angle shot of the actual gym workout floor, main entrance signage on Balkot road, or primary barbell training platform | **16:9** (1920 × 1080 px) or **4:3** (1600 × 1200 px) | `hero_gym_strength.jpg` |
| **`about`** | About Section | Facility Overview | Barbell stations, deadlift platform, calibrated iron plates, or dedicated lifting area | **4:3** (1200 × 900 px) | `about_gym_training.jpg` |
| **`facilityStrength`** | Facilities Card 1 | Strength Zone | Real squat racks, power cages, benches, and Olympic barbells | **4:3** (1200 × 900 px) | `facility_strength_zone.jpg` |
| **`facilityFreeWeights`** | Facilities Card 2 | Free Weights Floor | Dumbbell rack arranged by weight pairs, flat/incline benches | **4:3** (1200 × 900 px) | `facility_freeweights.jpg` |
| **`facilityCardio`** | Facilities Card 3 | Cardio Suite | Row of treadmills, cross-trainers, stationary spin bikes, or rowers | **4:3** (1200 × 900 px) | `facility_cardio_zone.jpg` |
| **`facilityFunctional`** | Facilities Card 4 | Functional Turf | Kettlebells, sprint turf, pull-up rigs, battle ropes, or stretching area | **4:3** (1200 × 900 px) | `facility_functional_turf.jpg` |
| **`facilityCoaching`** | Facilities Card 5 | Coaching & Orientation | Trainer consultation area, form-check mirror, or personal training area | **4:3** (1200 × 900 px) | `facility_coaching.jpg` |

---

### 2. Photography Guidelines for the Gym Owner

To ensure your authentic gym photos look sleek, modern, and high-impact:

1. **Lighting & Contrast**:
   - Turn on all gym spotlights and overhead LEDs before shooting.
   - Clean mirrors and wipe down machine surfaces for a crisp, high-end appearance.
   - For evening atmosphere, capture equipment under warm/red ambient lighting if available.

2. **Angles & Composition**:
   - **Exterior / Signboard**: Take a clear horizontal photograph of the gym entrance and "XTREME MUSCLE GYM N PHYSICAL FITNESS" signboard along Balkot Main Road during daylight.
   - **Floor Overview**: Stand at the corner of the workout floor holding your phone/camera horizontally at chest height to give a spacious, welcoming perspective.
   - **Equipment Alignment**: Ensure dumbbell racks are neatly organized and weight plates are evenly racked for a clean, disciplined presentation.

3. **Privacy & Respect**:
   - Only photograph coaches, trainers, or gym members who have given explicit verbal or written consent.
   - Empty floor shots taken during early morning or midday lulls showcase the equipment clearly without privacy concerns.

---

### 3. How to Update the Website in 2 Minutes

#### Method A: Drop New Files into `src/assets/images/`
1. Save your photos in `.jpg` or `.png` format.
2. Optimize file size (under 1MB each using tools like TinyPNG or Squoosh).
3. Place your photos into the `src/assets/images/` folder.
4. Update the corresponding `import` statement in `src/data/gymMedia.ts`:
   ```typescript
   import heroImg from '../assets/images/your_new_hero_photo.jpg';
   ```

#### Method B: Direct URL / Cloud Hosting
If your photos are hosted on Cloudflare R2, AWS S3, or your verified Google Drive/business storage:
1. Open `src/data/gymMedia.ts`.
2. Set the `currentAsset` property directly to your HTTPS URL:
   ```typescript
   currentAsset: "https://your-domain.com/photos/balkot_gym_interior.jpg"
   ```

3. Run `npm run build` or deploy to Vercel/Cloud Run. All components will instantly reflect your authentic facility photography with automatic responsive optimization and fallbacks.
