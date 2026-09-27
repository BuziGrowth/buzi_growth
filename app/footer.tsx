import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footerTop">
        <div>
          <Link href="/" className="logo">
            Buzi<span>Growth</span>
          </Link>

          <p>Automate the work. Grow your business.</p>
        </div>

        <div className="footerLinks">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About Us</Link>
        </div>

        <div className="footerContact">
          <small>GET IN TOUCH</small>
          <a href="mailto:support@buzigrowth.com">
            support@buzigrowth.com
          </a>
        </div>
      </div>

      <div className="footerBottom">
        <span>© 2026 BuziGrowth. All rights reserved.</span>
         <span>Automate the work. Grow your business.</span>

        <span>Built for businesses that want to move faster.</span>
      </div>
    </footer>
  );
}