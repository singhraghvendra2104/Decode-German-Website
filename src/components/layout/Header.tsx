"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Drawer, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { navLinks, ctaButton, siteConfig, headerContent } from "@/lib/constants";
import ContactFormModal from "./ContactFormModal";

export default function Header() {
  const [drawerOpened, { open: openDrawer, close: closeDrawer, toggle: toggleDrawer }] =
    useDisclosure(false);
  const [modalOpened, { open: openModal, close: closeModal }] =
    useDisclosure(false);
  const pathname = usePathname();

  return (
    <>
      <header className="fixed top-0 z-[100] w-full backdrop-blur-md bg-background/40 border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10 h-16 md:h-24 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/final-logo.svg"
              alt={`${siteConfig.name} logo`}
              width={200}
              height={100}
              className="h-12 md:h-16 w-auto mix-blend-multiply"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-xs font-bold tracking-widest uppercase hover:text-primary transition-colors ${
                    isActive
                      ? "text-primary border-b-2 border-primary pb-0.5"
                      : "text-stone-gray"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <button
            onClick={openModal}
            className="hidden md:block bg-primary text-white border border-primary px-8 py-3 text-xs font-bold tracking-widest uppercase hover:bg-transparent hover:text-primary transition-all cursor-pointer"
          >
            {ctaButton.label}
          </button>

          {/* Mobile Burger */}
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className="md:hidden"
            aria-label={headerContent.mobileMenuAriaLabel}
            color="#e2725b"
          />
        </div>
      </header>

      {/* Mobile Drawer */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        position="right"
        size="xs"
        title={
          <Image
            src="/final-logo.svg"
            alt={`${siteConfig.name} logo`}
            width={160}
            height={80}
            className="h-14 w-auto mix-blend-multiply"
          />
        }
        overlayProps={{ backgroundOpacity: 0.3 }}
      >
        <nav className="flex flex-col gap-6 mt-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeDrawer}
                className={`text-sm font-bold tracking-widest uppercase hover:text-primary transition-colors ${
                  isActive ? "text-primary" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <button
            onClick={() => {
              closeDrawer();
              openModal();
            }}
            className="mt-4 bg-primary text-white border border-primary px-8 py-3 text-xs font-bold tracking-widest uppercase text-center hover:bg-transparent hover:text-primary transition-all cursor-pointer"
          >
            {ctaButton.label}
          </button>
        </nav>
      </Drawer>

      {/* Contact Form Modal */}
      <ContactFormModal opened={modalOpened} onClose={closeModal} />
    </>
  );
}
