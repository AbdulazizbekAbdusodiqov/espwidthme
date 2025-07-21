"use client"

import type React from "react"
import { ShoppingBag } from "lucide-react" // Savat ikonkasini import qildik
import styles from "@/styles/market-page.module.scss"

export const MarketPlaceholder: React.FC = () => {
  return (
    <div className={styles["market-page-container"]}>
      <h1 className={styles["page-header"]}>Our Market</h1>
      <div className={styles["placeholder-card"]}>
        <ShoppingBag className={styles["placeholder-icon"]} />
        <h2 className={styles["placeholder-title"]}>Coming Soon!</h2>
        <p className={styles["placeholder-message"]}>
          We're working hard to bring you an exciting new marketplace where you can find exclusive English learning
          resources, tools, and more.
          <br />
          Stay tuned for updates! We appreciate your patience.
        </p>
        <p className={styles["placeholder-message"]}>
          For any inquiries, feel free to{" "}
          <a href="mailto:support@espwithme.com" className={styles["contact-link"]}>
            contact us
          </a>
          .
        </p>
      </div>
    </div>
  )
}
