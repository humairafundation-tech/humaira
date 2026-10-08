# Humaira Foundation

The website for **Humaira Foundation**, a community initiative by **Norsom ImpoEx**.

Norsom ImpoEx works with natural resins and the people who harvest and prepare them. Humaira Foundation is the company's commitment to give back to those communities. Funding comes from the business itself, and the foundation plans to support practical projects shaped by local needs and to report on its progress openly.

This repository contains the foundation's public website: a single-page site that explains the foundation's purpose and how it intends to work, and that will later share project updates.

> **Note:** The site does not ask for or accept donations. It exists to inform and to report progress.

---

## What the site covers

The page is split into these sections:

| Section | Anchor | What it shows |
| --- | --- | --- |
| **Hero** | — | The headline message ("Our work should give back.") and a short note on the self-funded, community-focused approach |
| **Our purpose** | `#purpose` | Why the foundation exists and its connection to Norsom ImpoEx |
| **Areas of focus** | `#focus` | The three focus areas: Education, Health & wellbeing, and Livelihoods & environment |
| **How we intend to work** | — | The working principles: *Listen locally. Act responsibly. Share what changes.* |
| **Leadership messages** | `#leadership` | Messages from the CEO and COO of Norsom ImpoEx |
| **Impact updates** | `#impact` | Project updates and outcomes. Right now this shows an "updates are coming" placeholder |

---

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- [`clsx`](https://github.com/lukeed/clsx) + [`tailwind-merge`](https://github.com/dcastil/tailwind-merge) for combining class names (see `src/lib/cn.js`)
- ESLint with `eslint-config-next`

---

## Getting started

**Requirements:** Node.js (a recent LTS version) and npm.

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Available scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the development server with hot reload |
| `npm run build` | Builds the site for production |
| `npm run start` | Runs the production build |
| `npm run lint` | Checks the code with ESLint |

---

## Project structure

```
src/
├── app/
│   ├── layout.js          # Root layout: Header, <main>, Footer and page metadata
│   ├── page.js            # The home page: puts all the sections together in order
│   └── globals.css        # Tailwind setup, theme colors and fonts
│
├── components/
│   ├── layout/            # Header (navigation + hero) and Footer
│   ├── sections/          # One component per page section
│   │   ├── Purpose.jsx
│   │   ├── AreasOfFocus.jsx
│   │   ├── HowWeWork.jsx
│   │   ├── LeadershipMessages.jsx
│   │   └── ImpactUpdates.jsx
│   └── ui/                # Small reusable building blocks
│       ├── Button.jsx
│       ├── Container.js
│       ├── Eyebrow.jsx
│       ├── FocusCard.jsx
│       ├── MessageBlock.jsx
│       └── Section.jsx
│
├── content/               # All the text on the site lives here
│   ├── site.js            # Navigation, hero, purpose, how we work, impact, footer
│   ├── areas.js           # The three areas of focus
│   └── leadership.js      # CEO and COO messages
│
└── lib/
    └── cn.js              # Helper for combining Tailwind class names
```

---

## Editing content

All of the site's text is kept separate from the components, in `src/content/`. To change wording, update the right content file. You don't need to touch the components.

| To change… | Edit |
| --- | --- |
| Navigation links, hero text, purpose, "how we work", impact text, footer | `src/content/site.js` |
| The areas of focus | `src/content/areas.js` |
| The leadership messages | `src/content/leadership.js` |

### Adding impact updates

The impact section shows a placeholder until updates are added. To publish updates, fill in the `updates` array in `src/components/sections/ImpactUpdates.jsx`. Each update has a `title`, a `date` and a `text`:

```js
const updates = [
  {
    title: "Community listening sessions",
    date: "October 2026",
    text: "A first round of conversations with local harvesters and families.",
  },
];
```

Once the array has at least one item, the placeholder is replaced by a grid of update cards.

---

## Project status

The foundation is in its early stage, and the site reflects that: the purpose, focus areas and leadership messages are in place, and the impact section is ready for the first real project updates.

---

## About

**Humaira Foundation** — Giving back to communities in the regions where Norsom ImpoEx works.

An initiative by **Norsom ImpoEx**.
