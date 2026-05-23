# Denim'O - Upcycled Denim Bags

Denim'O is a modern, impact-driven e-commerce platform dedicated to sustainability. We reimagine and upcycle used denim into beautiful, long-lasting bags and accessories. Our mission is to give denim a second life, keeping it out of landfills and significantly reducing water waste in the fashion industry.

---

## 🌍 Our Mission (Non-Technical Details)

Fast fashion dumps a truckload of clothes every second—amounting to 92 million tons of solid waste every year. Denim'O is changing that narrative by turning waste into utility and style.

*   **Water Conservation**: By upcycling rather than manufacturing new materials, we save an estimated **3,781 litres of water** per pair of jeans repurposed.
*   **Waste Reduction**: We actively combat the 92M tons of annual textile waste by rescuing durable denim materials.
*   **Built to Last**: Denim was originally created in 1873 for durability. We carry that legacy forward, ensuring our bags are rugged, long-lasting, and environmentally friendly.
*   **Institutional Impact**: We cater to institutional orders, encouraging businesses and schools to choose sustainable merchandise.
*   **Donations**: A dedicated CTA encourages the community to donate their old denim directly to our upcycling program.

---

## 🚀 Features

*   **Modern UI/UX**: A highly interactive, responsive design featuring micro-animations, floating badges, and skeuomorphic elements (e.g., leather patches, denim textures).
*   **E-Commerce Capabilities**:
    *   Dynamic Product Grid
    *   Shopping Cart with Sidebar integration
    *   Checkout Modal for streamlined purchases
    *   Quick View Modals for product details
*   **Impact Tracking**: Visual representation of water saved and waste reduced to educate and inspire users.
*   **Dynamic Backgrounds & Marquees**: Framer Motion powered marquees and floating shapes create an engaging user experience.
*   **Legal Modals**: Integrated Privacy, Terms, and "Our Story" modals without navigating away from the main page.

---

## 💻 Technical Details

### Tech Stack

*   **Frontend Framework**: [React 19](https://react.dev/)
*   **Build Tool**: [Vite 6](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Language**: [TypeScript 5](https://www.typescriptlang.org/)
*   **Animations**: [Framer Motion (`motion`)](https://motion.dev/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **State Management**: React Context API (`CartContext`)

### Dependencies (Highlights)
*   `react`, `react-dom`
*   `motion` (for complex, smooth animations)
*   `lucide-react` (for SVG iconography)
*   `@tailwindcss/vite` (Tailwind v4 Vite plugin)

*(Note: The project `package.json` also includes backend/AI dependencies like `express`, `better-sqlite3`, and `@google/genai`, paving the way for future full-stack integrations or AI-assisted features).*

---

## 📂 Project Structure

```text
Denim'O/
├── index.html            # Entry HTML file
├── package.json          # Project metadata and dependencies
├── vite.config.ts        # Vite configuration (includes Tailwind & React plugins)
├── src/                  # Main source code
│   ├── main.tsx          # React application entry point
│   ├── App.tsx           # Main application layout and component orchestration
│   ├── index.css         # Global styles and Tailwind directives
│   ├── components/       # Reusable React components
│   │   ├── Navbar.tsx, Hero.tsx, Footer.tsx
│   │   ├── ProductGrid.tsx, ImpactTracker.tsx, Testimonials.tsx
│   │   ├── CartSidebar.tsx, CheckoutModal.tsx, LegalModal.tsx
│   │   └── ...
│   └── context/          # React Context providers
│       └── CartContext.tsx # Global state for shopping cart
└── public/               # Static assets (images, favicon, etc.)
```

---

## 🛠️ Setup & Installation

To run this project locally, ensure you have [Node.js](https://nodejs.org/) installed (preferably v20+).

1.  **Clone the repository** (or navigate to the project directory):
    ```bash
    cd "Denim'O"
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Set up Environment Variables**:
    *   Copy `.env.example` to `.env`.
    *   Fill in any required API keys (e.g., `GEMINI_API_KEY` if utilizing the backend AI features).

4.  **Start the development server**:
    ```bash
    npm run dev
    ```
    *The app will be available at `http://localhost:3000` (or another port if 3000 is taken).*

---

## 📜 Available Scripts

In the project directory, you can run:

*   `npm run dev`: Starts the Vite development server.
*   `npm run build`: Builds the app for production to the `dist` folder.
*   `npm run preview`: Locally previews the production build.
*   `npm run lint`: Runs TypeScript type checking (`tsc --noEmit`).
*   `npm run clean`: Removes the `dist` build directory.

---

*Designed and built with sustainability in mind. Reduce, Reuse, Recycle, Reimagine.*
