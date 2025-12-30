# InotekNextjs

This project appears to be a web application built with Next.js, React, and TypeScript, potentially connected to a Strapi backend. It leverages Tailwind CSS for styling and Flowbite React for UI components. The application seems to include features like a product catalog, contact form submission, and distributor information.

## Key Features & Benefits

- **Modern Web Framework:** Built with Next.js, offering server-side rendering, static site generation, and optimized performance.
- **Typed JavaScript:** Uses TypeScript for improved code maintainability and reduced runtime errors.
- **UI Components:** Integrates Flowbite React for pre-built, responsive UI elements.
- **Styling:** Utilizes Tailwind CSS for rapid UI development and customization.
- **API Integrations:** Communicates with a Strapi backend for data management and content delivery.
- **Contact Form:** Includes a contact form functionality, potentially using Resend for email sending.
- **Catalog display:** Displays products fetched from the Strapi backend.
- **Distributor Information:** Fetches and displays information about distributors, likely from Strapi.

## Prerequisites & Dependencies

Before you begin, ensure you have the following installed:

- **Node.js:** (Version 18 or higher recommended) - [https://nodejs.org/](https://nodejs.org/)
- **npm** or **yarn** or **pnpm** or **bun:** Package managers for JavaScript.
- **Git:** For version control - [https://git-scm.com/](https://git-scm.com/)

## Installation & Setup Instructions

1.  **Clone the repository:**

    ```bash
    git clone git@github.com:stebern17/inoteknextjs.git
    cd inoteknextjs
    ```

2.  **Install dependencies:**

    Choose one of the following package managers:
    - **npm:**

      ```bash
      npm install
      ```

    - **yarn:**

      ```bash
      yarn install
      ```

    - **pnpm:**

      ```bash
      pnpm install
      ```

    - **bun:**
      ```bash
      bun install
      ```

3.  **Configure environment variables:**

    Create a `.env.local` file in the root directory and add the following environment variables:

    ```
    NEXT_PUBLIC_API_URL=<Your Strapi API URL>
    NEXT_TOKEN_STRAPI=<Your Strapi API Token>
    RESEND_API_KEY=<Your Resend API Key>
    ```

    Replace the placeholders with your actual Strapi API URL, Strapi API Token, and Resend API Key.

4.  **Run the development server:**

    Choose one of the following package managers:
    - **npm:**

      ```bash
      npm run dev
      ```

    - **yarn:**

      ```bash
      yarn dev
      ```

    - **pnpm:**

      ```bash
      pnpm dev
      ```

    - **bun:**
      ```bash
      bun dev
      ```

5.  **Access the application:**

    Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Usage Examples & API Documentation

### Dynamic Sitemap

This project exposes a dynamic sitemap at `/sitemap.xml` using Next.js App Router.

- Source: [src/app/sitemap.js](src/app/sitemap.js)
- Includes: static pages, news articles from Strapi, and product detail pages.
- Base URL: reads `NEXT_PUBLIC_SITE_URL` (falls back to `NEXT_PUBLIC_APP_URL`).

Quick verify locally:

```bash
npm run dev
# then visit http://localhost:3000/sitemap.xml
```

### Fetching Catalog Data

The `/src/app/api/catalog/route.js` file demonstrates fetching catalog data from a Strapi backend:

```javascript
// src/app/api/catalog/route.js
import { NextResponse } from "next/server";

const STRAPI_URL = process.env.NEXT_PUBLIC_API_URL;
const STRAPI_TOKEN = process.env.NEXT_TOKEN_STRAPI;

export async function GET() {
  try {
    const res = await fetch(
      `${STRAPI_URL}/api/types?populate=*&pagination[pageSize]=1000`,
      {
        headers: STRAPI_TOKEN
          ? { Authorization: `Bearer ${STRAPI_TOKEN}` }
          : {},
        cache: "force-cache",
      }
    );

    if (!res.ok) {
      // Handle error
    }

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    // Handle error
    return NextResponse.json(
      { error: "Failed to fetch catalog data" },
      { status: 500 }
    );
  }
}
```

### Submitting Contact Form Data

The `/src/app/api/contact/route.js` file showcases how to handle contact form submissions:

```javascript
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { data } = await request.json();

    console.log("📩 Data diterima di API Next.js:", data);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user-forms`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_TOKEN_STRAPI}`,
        },
        body: JSON.stringify({ data: data }),
      }
    );
    //rest of code
  } catch (error) {
    //error handling
  }
}
```

### Fetching Distributor Data

The `/src/app/api/distributor/route.js` file demonstrates fetching distributor data from a Strapi backend:

```javascript
import { NextResponse } from "next/server";

const STRAPI_URL = process.env.NEXT_PUBLIC_API_URL;
const STRAPI_TOKEN = process.env.NEXT_TOKEN_STRAPI;

export async function GET() {
  if (!STRAPI_URL) {
    return NextResponse.json(
      { error: "Strapi URL is not configured" },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(`${STRAPI_URL}/api/distributors?populate=*`, {
      headers: STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {},
      cache: "force-cache",
    });

    if (!res.ok) {
      //error handling
    }
    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    //error handling
    return NextResponse.json(
      { error: "Failed to fetch distributor data" },
      { status: 500 }
    );
  }
}
```

## Configuration Options

The project uses several environment variables for configuration:

- `NEXT_PUBLIC_API_URL`: The URL of your Strapi API.
- `NEXT_TOKEN_STRAPI`: Your Strapi API token for authentication.
- `RESEND_API_KEY`: Your Resend API key for sending emails.

You can configure these variables in the `.env.local` file.

## Contributing Guidelines

We welcome contributions to this project! To contribute:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Implement your changes.
4.  Write tests for your changes.
5.  Submit a pull request.

## License Information

The license for this project is not specified. All rights are reserved unless otherwise stated.

## Acknowledgments

This project uses the following third-party libraries and resources:

- Next.js: [https://nextjs.org/](https://nextjs.org/)
- React: [https://react.dev/](https://react.dev/)
- TypeScript: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)
- Tailwind CSS: [https://tailwindcss.com/](https://tailwindcss.com/)
- Flowbite React: [https://www.flowbite-react.com/](https://www.flowbite-react.com/)
- Resend: [https://resend.com/](https://resend.com/)
- Strapi: [https://strapi.io/](https://strapi.io/)
- Vercel Speed Insights: [https://vercel.com/speed-insights](https://vercel.com/speed-insights)
