# NewsLight Website

A modern React-based website for NewsLight, built with Vite, TypeScript, and Tailwind CSS.

## Technologies Used

- **Vite** - Build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - UI framework
- **shadcn/ui** - Component library
- **Tailwind CSS** - Utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```sh
git clone https://github.com/NewsLight/newslight-website.git
```

2. Navigate to the project directory:
```sh
cd newslight-website
```

3. Install dependencies:
```sh
npm install
```

4. Start the development server:
```sh
npm run dev
```

The application will be available at `http://localhost:5173`.

## Project Structure

- `src/components/` - React components
- `src/pages/` - Page components
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions
- `public/` - Static assets

## Building for Production

```sh
npm run build
```

The built files will be in the `dist/` directory.

## Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### GitHub Pages Setup

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "GitHub Actions"
4. Set the custom domain to `newslight.com` (optional, but recommended)
5. Push your changes to the `main` branch to trigger deployment

The site will be available at `https://newslight.github.io/newslight-website/` or your custom domain.

### GoDaddy DNS Configuration

To connect your GoDaddy domain (`newslight.com`) to GitHub Pages:

1. Log in to your GoDaddy account
2. Go to your Domain Settings
3. Click on "DNS" or "Manage DNS"
4. Add the following records:

   **For apex domain (newslight.com):**
   - Type: A
   - Name: @
   - Value: 185.199.108.153
   - TTL: 600

   Add three more A records with the same settings but these values:
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153

   **For www subdomain (optional):**
   - Type: CNAME
   - Name: www
   - Value: newslight.github.io
   - TTL: 600

5. Save the changes

DNS propagation may take up to 24-48 hours.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
