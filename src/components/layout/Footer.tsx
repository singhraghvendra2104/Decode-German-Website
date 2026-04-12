import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { siteConfig, footerLinks, footerDescription, socialLinks } from "@/lib/constants";

export default function Footer() {
  const socialIcons: Record<string, React.ReactNode> = {
    instagram: <FaInstagram size={20} />,
    facebook: <FaFacebook size={20} />,
    youtube: <FaYoutube size={20} />,
    linkedin: <FaLinkedin size={20} />,
  };

  return (
    <footer className="bg-white py-10 md:py-16 lg:py-24 px-4 md:px-10 border-t border-accent">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-20">
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <Image
              src="/new-logo.svg"
              alt={`${siteConfig.name} logo`}
              width={200}
              height={100}
              className="h-14 md:h-16 w-auto mix-blend-multiply"
            />
          </div>
          <p className="text-gray-500 max-w-md text-base md:text-lg leading-relaxed mb-8">
            {footerDescription}
          </p>
          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-gray-400 hover:text-primary transition-colors duration-300"
              >
                {socialIcons[social.icon]}
              </a>
            ))}
          </div>
        </div>

        {/* Explorer Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-6 md:mb-8">
            Explorer
          </h4>
          <ul className="space-y-3 md:space-y-4 text-sm font-medium">
            {footerLinks.explorer.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-gray-500 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-6 md:mb-8">
            Contact
          </h4>
          <address className="text-sm text-gray-500 leading-relaxed not-italic space-y-4">
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-charcoal mb-1">
                Email
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-primary transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-charcoal mb-1">
                Phone / WhatsApp
              </p>
              <a
                href={`tel:${siteConfig.whatsappNumber}`}
                className="hover:text-primary transition-colors block"
              >
                +49 15900 4836675
              </a>
              <a
                href={`tel:${siteConfig.phoneIndia}`}
                className="hover:text-primary transition-colors block mt-1"
              >
                +91 98712 05947
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-charcoal mb-1">
                Address
              </p>
              <p>Village Tharet, Madhya Pradesh, India, 475673</p>
            </div>
          </address>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1400px] mx-auto mt-12 md:mt-24 pt-8 md:pt-10 border-t border-accent flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">
        <p>{siteConfig.copyright}</p>
        <div className="flex gap-6 md:gap-10">
          {footerLinks.legal.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
