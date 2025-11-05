# 💼 Muhammad Luqman - Portfolio Website

<div align="center">

![Portfolio](https://img.shields.io/badge/Portfolio-Live-success?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.2-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)

**Professional Portfolio Website - Digital Marketer & Full Stack Developer**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MuhammadLuqman-99/portfolio-website)

[Live Demo](#) | [Report Bug](https://github.com/MuhammadLuqman-99/portfolio-website/issues)

</div>

---

## ✨ Features

### 🎨 **Modern Design**
- Sleek, professional UI with glassmorphism effects
- Smooth animations and transitions
- Dark theme optimized for viewing comfort
- Fully responsive on all devices

### 📊 **Dynamic Content**
- Auto-pulls project data from GitHub
- Real-time typing animation
- Interactive project filtering
- Skills visualization with progress bars

### 🚀 **Performance Optimized**
- Built with Next.js for optimal performance
- Static Site Generation (SSG)
- Image optimization
- SEO friendly

### 📱 **Sections Include**
- Hero section with typing animation
- About Me with stats
- Skills & Technologies
- Featured Projects showcase
- Services I offer
- Contact form
- Social links integration

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/)
- **Deployment**: [Vercel](https://vercel.com)

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn

### Installation

1. **Clone repository**
   ```bash
   git clone https://github.com/MuhammadLuqman-99/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open browser**
   ```
   http://localhost:3000
   ```

---

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── Hero.tsx           # Hero section with typing effect
│   │   ├── About.tsx          # About section
│   │   ├── Skills.tsx         # Skills showcase
│   │   ├── Projects.tsx       # Projects grid
│   │   ├── Services.tsx       # Services offered
│   │   ├── Contact.tsx        # Contact form
│   │   └── Footer.tsx         # Footer
│   ├── data/
│   │   ├── profile.ts         # Personal information
│   │   └── projects.ts        # Projects data
│   ├── pages/
│   │   ├── index.tsx          # Main page
│   │   └── _app.tsx           # App wrapper
│   └── styles/
│       └── globals.css        # Global styles
├── public/                    # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

---

## 🎨 Customization

### Update Personal Information

Edit `src/data/profile.ts`:

```typescript
export const profileData = {
  name: "Your Name",
  title: "Your Title",
  email: "your@email.com",
  // ... more fields
};
```

### Add New Projects

Edit `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: "Project Title",
    description: "Project description",
    technologies: ["Next.js", "React"],
    githubUrl: "https://github.com/...",
    liveUrl: "https://...",
    // ... more fields
  },
];
```

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: '#your-color',
    // ... more shades
  }
}
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy**
   - Click "Deploy with Vercel" button above
   - Or go to [vercel.com/new](https://vercel.com/new)
   - Import your repository
   - Click "Deploy"

3. **Done!** Your site will be live in ~2 minutes

### Custom Domain

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records
4. SSL certificate auto-generated

---

## 📊 Features Breakdown

### Hero Section
- Animated typing effect showing multiple titles
- Gradient text effects
- Social media links
- Statistics cards
- Smooth scroll indicator

### Projects Section
- Filterable by category
- GitHub integration ready
- Live demo links
- Technology tags
- Featured projects highlight

### Contact Form
- Email integration (mailto)
- Form validation
- Social links
- Location display

---

## 🎯 Use Cases

### For Job Applications
- Professional showcase of skills
- Live demos of projects
- Easy to share (just send URL)

### For Freelancing
- Portfolio to show clients
- Service offerings display
- Direct contact form

### For Networking
- Share on LinkedIn
- Add to email signature
- Business card QR code

---

## 📈 SEO Optimization

- Meta tags for social sharing
- OpenGraph tags
- Semantic HTML
- Performance optimized
- Mobile-friendly

---

## 🔄 Auto-Update Projects

The portfolio automatically pulls project data from the `projects.ts` file. Just update the file and redeploy!

Future enhancement: Add GitHub API integration to auto-fetch repositories.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Muhammad Luqman**
- Digital Marketer & Full Stack Developer
- Email: muhammadluqmanjobs@gmail.com
- GitHub: [@MuhammadLuqman-99](https://github.com/MuhammadLuqman-99)
- Facebook: [Muhammadluqman1999](https://www.facebook.com/Muhammadluqman1999)

---

## 🙏 Acknowledgments

- Next.js team for amazing framework
- Tailwind CSS for utility-first CSS
- Vercel for seamless deployment
- React Icons for beautiful icons

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ by Muhammad Luqman

</div>
