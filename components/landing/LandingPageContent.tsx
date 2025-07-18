"use client"

import type React from "react"
import Link from "next/link"
import {
  BookOpen,
  Video,
  Headphones,
  Gamepad,
  Award,
  Users,
  Star,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"
import styles from "./landing.module.scss"

export const LandingPageContent: React.FC = () => {
  return (
    <div className={styles["landing-container"]}>
      <section className={`${styles.section} ${styles["hero-section"]}`}>
        <img
          src="/iamge.jpg?height=1080&width=1920&text=Dynamic+English+Learning"
          alt="Dynamic English Learning Platform"
          className={styles["hero-background"]}
        />
        <div className={styles["hero-content"]}>
          <h1 className={styles["hero-title"]}>
            Unlock Your English Potential with <br />
            <span>ESPwithme</span>
          </h1>
          <p className={styles["hero-subtitle"]}>
            Your ultimate platform for interactive English lessons, comprehensive resources, and engaging gamified
            learning. Start your journey to fluency today!
          </p>
          <div className={styles["cta-buttons"]}>
            <Link href="/auth/register" className={styles["cta-button"]}>
              Get Started for Free
            </Link>
            <Link href="/auth/login" className={`${styles["cta-button"]} ${styles.secondary}`}>
              Login
            </Link>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles["features-section"]}`}>
        <h2 className={`${styles["section-title"]} ${styles["animated-title"]}`} style={{ animationDelay: "0.3s" }}>
          What You'll Get with ESPwithme
        </h2>
        <div className={styles["features-grid"]}>
          {[
            {
              icon: BookOpen,
              title: "Extensive Library",
              description:
                "Access a vast collection of e-books, articles, and study materials tailored for all levels.",
            },
            {
              icon: Video,
              title: "Interactive Video Lessons",
              description: "Learn from engaging video lessons covering grammar, vocabulary, pronunciation, and more.",
            },
            {
              icon: Headphones,
              title: "Audio Practice",
              description: "Improve your listening skills with a wide range of audio exercises and podcasts.",
            },
            {
              icon: Gamepad,
              title: "Gamified Learning",
              description: "Stay motivated with points, badges, and leaderboards as you progress through your lessons.",
            },
            {
              icon: Award,
              title: "Progress Tracking",
              description: "Monitor your learning journey with detailed statistics and personalized insights.",
            },
            {
              icon: Users,
              title: "Community Support",
              description: "Connect with other learners and native speakers to practice and get support.",
            },
          ].map((feature, index) => (
            <div
              key={feature.title}
              className={styles["feature-card"]}
              style={{ animationDelay: `${0.2 * index + 0.5}s` }} // Staggered animation
            >
              <div className={styles["icon-wrapper"]}>
                <feature.icon className={styles.icon} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles["testimonials-section"]}`}>
        <h2 className={`${styles["section-title"]} ${styles["animated-title"]}`} style={{ animationDelay: "0.1s" }}>
          {" "}
          {/* Changed delay to 0.1s */}
          Hear From Our Successful Learners
        </h2>
        <div className={styles["testimonials-grid"]}>
          {[
            {
              quote:
                "ESPwithme transformed my English. The interactive lessons and gamified approach made learning fun and effective. My speaking confidence has skyrocketed!",
              avatar: "/placeholder.svg?height=60&width=60&text=User+1",
              name: "Sarah J.",
              title: "Beginner to Intermediate",
            },
            {
              quote:
                "The extensive library and diverse audio lessons are incredible. I've learned so much vocabulary and improved my listening comprehension significantly. Highly recommend!",
              avatar: "/placeholder.svg?height=60&width=60&text=User+2",
              name: "David L.",
              title: "Intermediate Learner",
            },
            {
              quote:
                "I struggled with English for years, but ESPwithme's structured path and engaging content finally helped me break through. The progress tracking keeps me motivated every day.",
              avatar: "/placeholder.svg?height=60&width=60&text=User+3",
              name: "Emily R.",
              title: "Advanced Learner",
            },
          ].map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={styles["testimonial-card"]}
              style={{ animationDelay: `${0.2 * index + 0.8}s` }} // Staggered animation
            >
              <p className={styles.quote}>{testimonial.quote}</p>
              <div className={styles["author-info"]}>
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={`${testimonial.name} Avatar`}
                  className={styles.avatar}
                />
                <div className={styles["author-details"]}>
                  <p className={styles["author-name"]}>{testimonial.name}</p>
                  <p className={styles["author-title"]}>{testimonial.title}</p>
                </div>
              </div>
              <div className={styles.rating}>
                <Star fill="#FFD700" strokeWidth={0} size={20} />
                <Star fill="#FFD700" strokeWidth={0} size={20} />
                <Star fill="#FFD700" strokeWidth={0} size={20} />
                <Star fill="#FFD700" strokeWidth={0} size={20} />
                <Star fill="#FFD700" strokeWidth={0} size={20} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className={styles["footer-section"]}>
        <div className={styles["footer-content"]}>
          <div className={styles["footer-column"]}>
            <div className={styles["footer-brand"]}>
              <div className={styles.logo}>ESPwithme</div>
              <p>Your journey to English fluency starts here. Learn, grow, and connect with our vibrant community.</p>
            </div>
          </div>
          <div className={styles["footer-column"]}>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link href="/landing#hero">Home</Link>
              </li>
              <li>
                <Link href="/landing#features">Features</Link>
              </li>
              <li>
                <Link href="/landing#testimonials">Testimonials</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className={styles["footer-column"]}>
            <h4>Resources</h4>
            <ul>
              <li>
                <Link href="#">Books</Link>
              </li>
              <li>
                <Link href="#">Video Lessons</Link>
              </li>
              <li>
                <Link href="#">Audio Lessons</Link>
              </li>
              <li>
                <Link href="#">Presentations</Link>
              </li>
              <li>
                <Link href="#">Market</Link>
              </li>
            </ul>
          </div>
          <div className={styles["footer-column"]}>
            <h4>Legal</h4>
            <ul>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms of Service</Link>
              </li>
            </ul>
            <div className={styles["social-links"]}>
              <a href="#" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        <p className={styles.copyright}>&copy; {new Date().getFullYear()} ESPwithme. All rights reserved.</p>
      </footer>
    </div>
  )
}
