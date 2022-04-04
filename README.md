## Getting Started

After cloning the repo, run:

```bash
npm install
```

to install dependencies. Next, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

By default, your server will make requests directly to 17Lands. You can optionally speed up development by using a Redis instance to cache results. Once you've set up your Redis instance, add the following line to `.env.local`:

```
REDIS_URL=<your Redis connection URL>
```

## Instructions for adding a new set

1. Add the new set to the `MagicSet` enum
2. Update `SET_LABELS` at `src/lib/constants.ts` with the user-facing name of the set
3. Update `SET_START_DATES` at `src/lib/constants.ts` with the date the set was released on Arena
4. Update `SET_ICONS` at `src/components/common/SetIcon.tsx` to import the SVG for the set
5. Once Scryfall is updated, download the Oracle Cards data file [here](https://scryfall.com/docs/api/bulk-data), gzip it, and update `data/scryfall-oracle-cards.json.gz`
6. Update the root redirect in `next.config.js` to redirect to the latest set
7. Push to GitHub

For an example, see [this commit](https://github.com/youssefm/limited-grades/commit/282c8afe31b7115bc1399cc416be2150d33d8cdc).

# What's next

- Fix double render on filter bar when switching sets
- Split useCardTableContext into two?
- Show spinner for images until they load
- Start filters all off
- Improve filter button styling?
- Allow toggling columns?
