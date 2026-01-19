# Ed Skoviak Computing

Personal portfolio website showcasing expertise in enterprise architecture.

## Tech Stack

- **Framework:** Angular 20.0.0 with standalone components
- **UI:** Angular Material 20.0.1 (azure-blue theme)
- **Language:** TypeScript 5.8.3
- **Build:** Angular CLI

## Project Structure

```
src/
├── app/
│   ├── app.component.ts      # Root layout + navigation
│   ├── app.routes.ts         # Route definitions
│   ├── home/                 # Home page
│   ├── business/             # Business architecture
│   ├── data/                 # Data architecture
│   ├── application/          # Application architecture
│   ├── technology/           # Technology architecture
│   ├── contact-us/           # Contact form
│   └── dialogs/              # Reusable dialogs
├── main.ts                   # Bootstrap entry
└── styles.css                # Global styles
public/
└── assets/pages/             # HTML content files
```

## Key Patterns

1. **Dynamic content loading** - Pages load HTML from `assets/pages/` via HTTP
2. **Material Design UI** - Toolbar, dialogs, icons, forms
3. **Backend integration** - Contact form posts to Google Cloud Run service
4. **Standalone components** - Modern Angular architecture (no NgModules)

## Scripts

- `npm start` - Dev server on localhost:4200
- `npm run build` - Production build to `dist/myapp`
- `npm run lint` - ESLint
- `npm test` - Karma/Jasmine tests
