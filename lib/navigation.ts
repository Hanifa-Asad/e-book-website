export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

export const navItems: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  {
    label: "BOOK PUBLISHING",
    children: [
      { label: "Book Publishing",             href: "/book-publishing" },
      { label: "Amazon KDP Publishing",       href: "/book-publishing/amazon-kdp" },
      { label: "Barnes and Noble Publishing", href: "/book-publishing/barnes-and-noble" },
      { label: "Kobo Book Publishing",        href: "/book-publishing/kobo" },
      { label: "Apple Book Publishing",       href: "/book-publishing/apple" },
      { label: "Draft2Digital Publishing",    href: "/book-publishing/draft2digital" },
    ],
  },
  { label: "BOOK MARKETING",              href: "/book-marketing" },
  { label: "CHILDREN BOOK ILLUSTRATION", href: "/children-book-illustration" },
  {
    label: "OTHER SERVICES",
    children: [
      { label: "Audio Books",       href: "/other-services/audio-books" },
      { label: "Author Web Design", href: "/other-services/author-web-design" },
      { label: "Book Cover Design", href: "/other-services/book-cover-design" },
      { label: "Book Editing",      href: "/other-services/book-editing" },
      { label: "Book Formatting",   href: "/other-services/book-formatting" },
      { label: "Ghostwriting",      href: "/other-services/ghostwriting" },
    ],
  },
  { label: "REVIEWS", href: "/reviews" },
  { label: "BLOGS",   href: "/blog" },
  { label: "CONTACT", href: "/contact" },
];

export const socialLinks = [
  { label: "Instagram",  href: "#", icon: "instagram"  },
  { label: "Facebook",   href: "#", icon: "facebook"   },
  { label: "Twitter/X",  href: "#", icon: "twitter"    },
  { label: "LinkedIn",   href: "#", icon: "linkedin"   },
  { label: "TikTok",     href: "#", icon: "tiktok"     },
  { label: "YouTube",    href: "#", icon: "youtube"    },
  { label: "Threads",    href: "#", icon: "threads"    },
  { label: "Pinterest",  href: "#", icon: "pinterest"  },
  { label: "Behance",    href: "#", icon: "behance"    },
  { label: "Dribbble",   href: "#", icon: "dribbble"   },
  { label: "Trustpilot", href: "#", icon: "trustpilot" },
  { label: "Patreon",    href: "#", icon: "patreon"    },
  { label: "Twitch",     href: "#", icon: "twitch"     },
  { label: "Kick",       href: "#", icon: "kick"       },
];
