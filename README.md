# Link Tree Alternative

A modern, minimalist Linktree alternative built with React and Vite. Clean white and gray design with smooth animations.

## Features

- Clean, minimal design with white and gray color scheme
- Smooth page load animations
- Profile picture with pulse animation
- Responsive design for all devices
- Icon-based link buttons with Lucide React
- Social media links
- Accessibility support (reduced motion)
- Fast and lightweight

## Demo

Visit the live demo: [Your deployed URL here]

## Technologies Used

- **React** - UI library
- **Vite** - Build tool
- **Lucide React** - Icon library
- **CSS3** - Styling and animations

## Installation

1. Clone the repository:
```bash
git clone https://github.com/codingsaltt/link.git
cd link
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Customization

### Update Your Information

Edit `src/App.jsx` to customize your links and information:

```javascript
// Profile information
<h1>@codingsalt</h1>
<p className="bio">Web Developer & Content Creator</p>

// Main links
const links = [
  {
    title: "Your Link Title",
    url: "https://your-url.com",
    Icon: YourIcon
  },
  // Add more links...
]

// Social media links
const socialLinks = [
  {
    name: "Platform Name",
    url: "https://your-social-url.com",
    Icon: YourIcon
  },
  // Add more social links...
]
```

### Replace Profile Picture

Replace the file at `public/profile-picture.png` with your own profile picture.

### Customize Colors

Edit `src/App.css` to change the color scheme. Current palette uses white and gray tones:

- Background: `#f8f9fa` to `#e9ecef`
- Text: `#212529`
- Borders: `#dee2e6`
- Hover: `#adb5bd`

### Customize Animations

All animations are defined in `src/App.css`. You can modify:
- Animation duration
- Animation delays
- Animation effects
- Or disable animations in `prefers-reduced-motion`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready to be deployed.

## Deployment

You can deploy this project to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**codingsalt**

- Website: [codingsalt.com](https://codingsalt.com)
- GitHub: [@codingsaltt](https://github.com/codingsaltt)
- Twitter: [@codingsalt](https://x.com/codingsalt)
- Email: info@codingsalt.com

## Support

If you find this project helpful, consider:
- Giving it a star on GitHub
- [Buy me a coffee](https://buymeacoffee.com/codingsalt)
- Sharing it with others

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.
