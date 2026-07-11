"use client";

import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { useTheme } from "./ThemeProvider";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Notes", href: "#notes" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "About", href: "#about" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-[var(--nav-bg)] backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#home"
            className="text-sm font-bold tracking-[0.2em] text-foreground"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            HAN NENG
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-secondary-text transition-colors duration-200 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://github.com/hanneng"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-secondary-text transition-colors duration-200 hover:bg-card hover:text-foreground"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <button
              onClick={toggleTheme}
              className="rounded-lg p-2 text-secondary-text transition-colors duration-200 hover:bg-card hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-1 md:hidden">
            <button
              onClick={toggleTheme}
              className="rounded-lg p-2.5 text-secondary-text transition-colors hover:bg-card hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2.5 text-secondary-text transition-colors hover:bg-card hover:text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="border-t border-border pb-4 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-sm text-secondary-text transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://github.com/hanneng"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 py-3 text-sm text-secondary-text transition-colors hover:text-foreground"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
