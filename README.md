# CareWell Hospital

A complete, responsive hospital website made with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, Lucide icons, React Hook Form, and Zod.

Includes the homepage plus **/services**, **/doctors**, and **/contact**.

## 1. Run the website on your computer

1. Install the current recommended **LTS** version of Node.js from [nodejs.org](https://nodejs.org/). Node.js 20.9 or newer is required.
2. Open this **Carewell Hospital** folder in Visual Studio Code.
3. Choose **Terminal → New Terminal**.
4. Type this and press Enter:

   ~~~sh
   npm install
   ~~~

5. Wait until it finishes. Then type:

   ~~~sh
   npm run dev
   ~~~

6. Open **http://localhost:3000** in your browser. If the terminal shows a different address, open that address instead.
7. Keep the terminal open while using the website. Press **Ctrl + C** to stop it.

To check the finished website before publishing, stop the running website and run:

~~~sh
npm run build
npm start
~~~

Other checks:

~~~sh
npm run typecheck
npm run lint
~~~

The first installation selects the newest stable packages and creates a `package-lock.json` file. Keep that file with your project so later installations use the same versions.

## 2. Change the hospital name and contact details

Open **data/site.ts**.

Find the words you want to change inside quotation marks:

~~~ts
name: "CareWell Hospital",
tagline: "Caring for you, every step of the way",
phone: "+91 98765 43210",
phoneHref: "tel:+919876543210",
~~~

- Change `name` to your hospital name.
- Change `tagline` to your preferred short message.
- Change `phone` to the number visitors see.
- Change `phoneHref` to the same number without spaces, keeping `tel:` at the beginning. This makes the Call button work.
- Update `emergency`, `emergencyPhone`, and `emergencyHref` together. `emergency` is the full displayed line, while `emergencyPhone` is just the hospital's emergency number.
- Update `address`, `email`, and `hours`.
- Update the homepage wording and statistics in the same file.
- Replace each social link with your hospital's actual profile address.

Save the file. The website refreshes while `npm run dev` is running.

Keep the commas and quotation marks in place. If something stops working, undo the most recent change.

## 3. Change doctors, services, reviews, and questions

| What to change | File to open |
| --- | --- |
| Doctor names, specialties, experience, qualifications, photos | data/doctors.ts |
| Services and their descriptions | data/services.ts |
| Patient reviews | data/testimonials.ts |
| Questions and answers | data/faqs.ts |
| Facilities and reasons to choose the hospital | data/facilities.ts |

To add a doctor, copy one complete doctor's entry and change its details. Give each doctor a different `id`. The doctor's `department` must match a service `id` in **data/services.ts**. For example, use `cardiology` for a heart specialist. This connects the doctor to the correct choice in the appointment form.

The current names, qualifications, reviews, statistics, and imagery are **illustrative placeholders**. Replace them with approved information before a real launch. Publish actual patient reviews only with permission. The short demo notice is controlled by `demoNotice` in **data/site.ts**.

## 4. Change photos

The homepage photos are in **data/site.ts**. Doctor photos are in **data/doctors.ts**.

**The easiest way to use your own photos:**

1. Place a photo inside **public/images**, for example **doctor-ananya.jpg**.
2. Replace its photo address in the data file with:

   ~~~ts
   image: "/images/doctor-ananya.jpg",
   ~~~

3. Save the file.

You can also replace a photo with another **https://images.unsplash.com/** address. These addresses are already supported. Photos from other websites need their address added to **next.config.ts**, so local photos are simpler.

Change `imageAlt` beside the homepage photos to describe the new picture. Doctor picture descriptions use their names automatically. Photos that cannot load are replaced with **public/images/image-fallback.svg**.

The Inter font uses `next/font` and is served by your website after the build. An internet connection is needed to download it during the first build.

## 5. Add your exact map location

1. Find your hospital in Google Maps.
2. Choose **Share → Embed a map**.
3. Copy the address inside the embed code's `src="..."`.
4. Paste that address into `mapEmbedUrl` in **data/site.ts**.
5. Change `mapDirectionsUrl` to the hospital's real Google Maps address.

Until then, the website shows a clearly labelled map placeholder for Nashik.

## 6. How the appointment form works

The form checks the name, Indian mobile number, department, selected doctor, date, and message length. Choosing a department limits the doctor list to the matching doctors. Choosing a doctor card fills those choices automatically.

The current form is a **demonstration**. It shows a success message, but **does not send or save personal details and does not reserve an appointment**. Visitors are invited to call reception to confirm an actual visit.

To receive requests in an inbox or booking system, connect a real appointment service in **components/sections/appointment.tsx**. Update the success wording only after the service confirms receipt. The existing demo wording prevents visitors from mistaking a demonstration for a real booking.

## 7. Put a demo online with Vercel

**Vercel's free Hobby plan is for personal, non-commercial use.** You can use it for an eligible personal demonstration. A real commercial hospital website requires a suitable paid plan. See [Vercel's Hobby plan rules](https://vercel.com/docs/plans/hobby).

For an eligible demo:

1. Create a free account at [github.com](https://github.com/).
2. Create a new repository named **carewell-hospital**. A repository is just an online folder for your project.
3. Upload the project files, including the **app**, **components**, **data**, and **public** folders. Upload the small setup files at the top level too. Do not upload **node_modules**, **.next**, **.npm-cache**, or private **.env** files.
4. Create an account at [vercel.com](https://vercel.com/) and connect your GitHub account.
5. Choose **Add New → Project**.
6. Select **carewell-hospital** and choose **Import**.
7. Vercel should recognise **Next.js**. Leave the standard settings selected.
8. Choose **Deploy**.
9. Wait for the website address, then open it.

After Vercel gives you an address:

1. Open the project's **Settings → Environment Variables**.
2. Add `NEXT_PUBLIC_SITE_URL` with your full website address, such as `https://carewell-hospital.vercel.app`. Do not add a slash at the end.
3. Open **Deployments** and choose **Redeploy** so search engines and sharing links use the right address.

When you update the files on GitHub, Vercel builds the new version automatically. More information: [Vercel Git deployments](https://vercel.com/docs/git).

## Project guide

~~~text
app/
  page.tsx             All homepage sections
  layout.tsx           Shared navigation, footer, font, and search information
  globals.css          Colours, spacing, and responsive layout
  services/page.tsx    Services page
  doctors/page.tsx     Doctors page
  contact/page.tsx     Contact page
  opengraph-image.tsx  Sharing image
  sitemap.ts           List of pages for search engines
  robots.ts            Search-engine guidance
components/
  layout/              Navigation, footer, emergency button, back to top
  sections/            Each reusable website section
  ui/                  Motion, image fallback, headings, and icons
data/                  Editable hospital content
public/images/         Your own photos and the image fallback
~~~

## Verification in this workspace

All 73 local imports resolved, and all six data modules passed a real content check covering doctor departments, service IDs, reviews, FAQs, facilities, statistics, and phone links. Installation was attempted, but this environment blocked access to **registry.npmjs.org** with **EACCES**. As a result, Next.js could not be installed, and production build, TypeScript, lint, and live browser checks could not be completed here.

Run `npm install`, `npm run build`, `npm run typecheck`, and `npm run lint` on an internet-connected computer to finish those checks. No passing production build is claimed.
