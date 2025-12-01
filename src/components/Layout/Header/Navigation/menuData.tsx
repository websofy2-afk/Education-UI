import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/schedules" },
  { label: "Courses", href: "/speakers" },
  { label: "Categories", href: "#" },
  { label: "Instructors", href: "#" },
  { label: "Pricing", href: "#" },
  {
    label: "Blog",
    href: "/blog",
    submenu: [
      { label: "Blog list", href: "/blog" },
      { label: "Blog details", href: "/blog/blog_1" },
    ],
  },
  { label: "Contact", href: "/contact" },
  // { label: "Documentation", href: "/documentation" },
];  