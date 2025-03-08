# 👨‍💻 Resume

A modern, responsive digital resume built with Next.js, TypeScript, and TailwindCSS.

## 🌐 Live Demo

[View the live demo](https://highest.dev)

## 📋 Overview

This project is a digital resume/portfolio website designed to showcase professional experience, education, projects, and skills. It features a clean, responsive design with animations and a modern UI.

## ✨ Features

- **Responsive Design**: Optimized for all device sizes
- **Interactive Components**: Smooth animations and transitions
- **TypeScript Support**: Strong typing for better code quality
- **Docker Integration**: Easy deployment with containerization
- **Component Architecture**: Modular and reusable components for each resume section

## 🧱 Project Structure

```
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── page.tsx    # Main resume page
│   │   ├── layout.tsx  # Root layout template
│   │   └── globals.css # Global styles
│   ├── components/     # Reusable UI components
│   │   ├── EducationRenderer.tsx
│   │   ├── ExperienceRenderer.tsx
│   │   └── ProjectRenderer.tsx
│   └── dto/            # Data transfer object types
│       ├── EducationItem.dto.ts
│       ├── ExperienceItem.dto.ts
│       ├── ProjectItem.dto.ts
│       └── SoftSkillItem.dto.ts
├── public/             # Static assets
├── Dockerfile          # Docker configuration
├── docker-compose.yml  # Docker Compose configuration
├── next.config.ts      # Next.js configuration
└── package.json        # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun 1.0+
- Docker (optional, for containerized deployment)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/highesttt/Resume.git
cd Resume
```

2. Install dependencies:

```bash
# Using npm
npm install

# Using Bun (recommended)
bun install
```

3. Start the development server:

```bash
# Using npm
npm run dev

# Using Bun
bun run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🐳 Docker Deployment

This project includes Docker configurations for easy deployment:

```bash
# Build and start the container
docker-compose up -d

# The resume will be available at http://localhost:9898
```

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Motion](https://motion.dev/) - Animation library
- [Bun](https://bun.sh/) - JavaScript runtime & package manager

## 📄 License

This project is licensed under the GNU Affero General Public License v3.0 - see the [LICENSE](LICENSE) file for details.
