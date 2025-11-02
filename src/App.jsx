import { Globe, Github, Mail, Coffee, Sparkles, Twitter, Code } from 'lucide-react'
import './App.css'

function App() {
  const links = [
    {
      title: "GLM Coding Plan",
      url: "https://z.ai/subscribe?ic=HYRMQQNKA0",
      Icon: Sparkles
    },
    {
      title: "Website",
      url: "https://codingsalt.com",
      Icon: Globe
    },
    {
      title: "GitHub",
      url: "https://github.com/codingsaltt",
      Icon: Github
    },
    {
      title: "CodePen",
      url: "https://codepen.io/codingsaltt",
      Icon: Code
    },
    {
      title: "Buy Me a Coffee",
      url: "https://buymeacoffee.com/codingsalt",
      Icon: Coffee
    },
    {
      title: "Contact",
      url: "mailto:info@codingsalt.com",
      Icon: Mail
    }
  ]

  const socialLinks = [
    {
      name: "Twitter",
      url: "https://x.com/codingsalt",
      Icon: Twitter
    }
  ]

  return (
    <div className="app">
      <div className="container">
        {/* Profil Bölümü */}
        <div className="profile">
          <div className="avatar">
            <img
              src="/profile-picture.png"
              alt="Profile"
            />
          </div>
          <h1>@codingsalt</h1>
          <p className="bio">Web Developer & Content Creator</p>
        </div>

        {/* Bağlantılar */}
        <div className="links">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-button"
            >
              <link.Icon className="link-icon" size={20} />
              <span className="link-title">{link.title}</span>
            </a>
          ))}
        </div>

        {/* Sosyal Medya */}
        <div className="social-links">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
              title={social.name}
            >
              <social.Icon size={22} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
