"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Drawer, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { navLinks, ctaButton, siteConfig } from "@/lib/constants";

export default function Header() {
  const [opened, { open, close }] = useDisclosure(false);
  const pathname = usePathname();

  return (
    <>
      <header className="fixed top-0 z-[100] w-full backdrop-blur-md bg-background/40 border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10 h-16 md:h-24 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt={`${siteConfig.name} logo`}
              width={48}
              height={48}
              className="h-9 md:h-12 w-auto"
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
          <Link
            href={ctaButton.href}
            className="hidden md:block bg-primary text-white border border-primary px-8 py-3 text-xs font-bold tracking-widest uppercase hover:bg-transparent hover:text-primary transition-all"
          >
            {ctaButton.label}
          </Link>

          {/* Mobile Burger */}
          <Burger
            opened={opened}
            onClick={open}
            className="md:hidden"
            aria-label="Open navigation menu"
            color="#e2725b"
          />
        </div>
      </header>

      {/* Mobile Drawer */}
      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        size="xs"
        title={
          <Image
            src="/logo.png"
            alt={`${siteConfig.name} logo`}
            width={40}
            height={40}
            className="h-10 w-auto"
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
                onClick={close}
                className={`text-sm font-bold tracking-widest uppercase hover:text-primary transition-colors ${
                  isActive ? "text-primary" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href={ctaButton.href}
            onClick={close}
            className="mt-4 bg-primary text-white border border-primary px-8 py-3 text-xs font-bold tracking-widest uppercase text-center hover:bg-transparent hover:text-primary transition-all"
          >
            {ctaButton.label}
          </Link>
        </nav>
      </Drawer>
    </>
  );
}
