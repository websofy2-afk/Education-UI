import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from "react-icons/fa";

export const speakers = [
  {
    id: 1,
    src: "/images/world-class-speakers/speakers_1.png",
    alt: "work class speakers",
    name: "Darrell Steward",
    designation: "Designation",
  },
  {
    id: 2,
    src: "/images/world-class-speakers/speakers_2.png",
    alt: "work class speakers",
    name: "Darrell Steward",
    designation: "Designation",
  },
  {
    id: 3,
    src: "/images/world-class-speakers/speakers_3.png",
    alt: "work class speakers",
    name: "Darrell Steward",
    designation: "Designation",
  },
  {
    id: 4,
    src: "/images/world-class-speakers/speakers_4.png",
    alt: "work class speakers",
    name: "Darrell Steward",
    designation: "Designation",
  },
  {
    id: 5,
    src: "/images/world-class-speakers/speakers_5.png",
    alt: "work class speakers",
    name: "Darrell Steward",
    designation: "Designation",
  },
];

export const conferences = [
  {
    title: "Google",
    profiles: [
      "/images/upcoming/profile-1.png",
      "/images/upcoming/profile-3.png"
    ],
    speakers: "Reena John & Lorance",
    buttonText: "Book Ticket",
    buttonLink: "/"
  }, // Profile-1
  {
    title: "Microsoft",
    profiles: [
      "/images/upcoming/profile-2.png"
    ],
    speakers: "Martin Luthar",
    buttonText: "Book Ticket",
    buttonLink: "/"
  }, // Profile-2
  {
    title: "Udemy",
    profiles: [
      "/images/upcoming/profile-4.png"
    ],
    speakers: "Martin Luthar",
    buttonText: "Book Ticket",
    buttonLink: "/"
  }, // Profile-3
  {
    title: "Coursera",
    profiles: [
      "/images/upcoming/profile-7.png"
    ],
    speakers: "Martin Luthar",
    buttonText: "Book Ticket",
    buttonLink: "/"
  }, // Profile-4
  {
    title: "LinkedIn",
    profiles: [
      "/images/upcoming/profile-6.png",
      "/images/upcoming/profile-5.png",
    ],
    speakers: "Reena John & Lorance",
    buttonText: "Book Ticket",
    buttonLink: "/"
  }, // Profile-5
  {
    title: "Skillshare",
    profiles: [
      "/images/upcoming/profile-2.png"
    ],
    speakers: "Martin Luthar",
    buttonText: "Book Ticket",
    buttonLink: "/"
  }, // Profile-6
  {
    title: "Cultural Exchange in the Digital Age",
    profiles: [
      "/images/upcoming/profile-4.png"
    ],
    speakers: "Martin Luthar",
    buttonText: "Book Ticket",
    buttonLink: "/"
  }, // Profile-7
  {
    title: "Education for Tomorrow",
    profiles: [
      "/images/upcoming/profile-7.png"
    ],
    speakers: "Martin Luthar",
    buttonText: "Book Ticket",
    buttonLink: "/"
  }, // Profile-8
];

export const intermissions = [
  {
    title: "Coffee Break",
    image: "/images/upcoming/alarm.svg",
    time: "10:00 - 10:30",
  },
  {
    title: "Lunch Time",
    image: "/images/upcoming/alarm.svg",
    time: "12:30 - 13:30",
  },
];

export const categories = [
  {
    title: "Web Development",
    description: "Learn modern tools, frameworks, and coding practices.",
    image: "/ThumbnailSlider/web-development.avif",
  },
  {
    title: "Data Science",
    description: "Master data analysis, visualization, and machine learning.",
    image: "/ThumbnailSlider/data-science.avif",
  },
  {
    title: "UI/UX Design",
    description: "Build user-centered designs with practical workflows.",
    image: "/ThumbnailSlider/uiux-design.avif",
  },
  {
    title: "Digital Marketing",
    description: "Explore SEO, ads, and social media marketing strategies.",
    image: "/ThumbnailSlider/digital-marketing.avif",
  },
  {
    title: "Cloud Computing",
    description: "Understand cloud services, deployment, and scalability.",
    image: "/ThumbnailSlider/cloud-computing.avif",
  },
  {
    title: "Cyber Security",
    description: "Learn threats, protection methods, and security tools.",
    image: "/ThumbnailSlider/cyber-security.avif",
  },
  {
    title: "Business Management",
    description: "Develop leadership, strategy, and operational skills.",
    image: "/ThumbnailSlider/business-management.avif",
  },
  {
    title: "Programming Fundamentals",
    description: "Start coding with clear concepts and hands-on practice.",
    image: "/ThumbnailSlider/programming-undamentals.avif",
  }
];

export const trendingCourses = [
  {
    title: "Full-Stack Web Development",
    category: "Web Development",
    image: "/trending-courses/full-stack-web-development.avif",
    lessons: 48,
    students: 1200,
  },
  {
    title: "Data Science & Machine Learning",
    category: "Data Science",
    image: "/trending-courses/ds-ml.avif",
    lessons: 52,
    students: 980,
  },
  {
    title: "UI/UX Design Mastery",
    category: "Design",
    image: "/trending-courses/ui-ux.avif",
    lessons: 36,
    students: 850,
  },
  {
    title: "Digital Marketing Essentials",
    category: "Marketing",
    image: "/trending-courses/digital-marketing.avif",
    lessons: 40,
    students: 760,
  },
];

export const featuredInstructors = [
  {
    name: "Alex Johnson",
    role: "Senior Web Developer",
    image: "/images/world-class-speakers/speakers_1.png",
    courses: 12,
    rating: 4.6,
  },
  {
    name: "Sophia Martinez",
    role: "UI/UX Design Expert",
    image: "/images/world-class-speakers/speakers_2.png",
    courses: 8,
    rating: 3,
  },
  {
    name: "David Carter",
    role: "Data Science Mentor",
    image: "/images/world-class-speakers/speakers_3.png",
    courses: 10,
    rating: 4.95,
  },
  {
    name: "Emily Watson",
    role: "Digital Marketing Coach",
    image: "/images/world-class-speakers/speakers_4.png",
    courses: 7,
    rating: 4.7,
  },
  {
    name: "Darrell Steward",
    role: "Digital Marketing Coach",
    image: "/images/world-class-speakers/speakers_5.png",
    courses: 7,
    rating: 4.7,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Amit Sharma",
    course: "Full Stack Development",
    rating: 5,
    review:
      "Edunexa helped me understand complex concepts easily. The instructors are experienced and very supportive!",
    image: "/world-class-speakers/speakers_1.png",
  },
  {
    id: 2,
    name: "Priya Verma",
    course: "UI/UX Design",
    rating: 2,
    review:
      "Amazing learning platform! The course structure is well organized and interactive.",
    image: "/world-class-speakers/speakers_5.png",
  },
  {
    id: 3,
    name: "Rahul Singh",
    course: "Data Science",
    rating: 3,
    review:
      "Great experience! The assignments and live sessions helped me upgrade my skills.",
    image: "/world-class-speakers/speakers_3.png",
  },
];

export const partners = [
  { name: "Google", logo: "/images/partners/google.avif" },
  { name: "Microsoft", logo: "/images/partners/microsoft.avif" },
  { name: "Udemy", logo: "/images/partners/udemy.png" },
  { name: "Coursera", logo: "/images/partners/coursera-rounded.webp" },
  { name: "LinkedIn", logo: "/images/partners/linkedIn.avif" },
  { name: "Skillshare", logo: "/images/partners/skilshare.png" },
];

export const statsData = [
  { label: "Students Enrolled", value: 25000, suffix: "+" },
  { label: "Courses", value: 380, suffix: "+" },
  { label: "Instructors", value: 120, suffix: "+" },
];

export const footer = {
  socialMedia: [
    {
      icon: <FaFacebook />,
      title: "Facebook",
      url: "#"
    },
    {
      icon: <FaInstagram />,
      title: "Instagram",
      url: "#"
    },
    {
      icon: <FaTwitter />,
      title: "Twitter",
      url: "#"
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      url: "#"
    },
  ],
  quickLinks: [
    {
      title: "About Us",
      url: "#"
    },
    {
      title: "Courses",
      url: "#"
    },
    {
      title: "Instructors",
      url: "#"
    },
    {
      title: "Blog",
      url: "#"
    },
  ],
  support: [
    {
      title: "Help Center",
      url: "#"
    },
    {
      title: "Terms & Conditions",
      url: "#"
    },
    {
      title: "Privacy Policy",
      url: "#"
    },
    {
      title: "Contact Us",
      url: "#"
    },
  ],
  contactDetails: [
    {
      icon: <FaMapMarkerAlt className="text-primary mt-1" size={25} />,
      title: "Websofy Software Pvt. Ltd., Indira Nagar, Lucknow, Uttar Pradesh",
      url: `https://www.google.com/maps?q=${encodeURIComponent("Websofy Software Pvt. Ltd., Indira Nagar, Lucknow, Uttar Pradesh")}`
    },
    {
      icon: <FaPhoneAlt className="text-primary" />,
      title: "+91-7030513954",
      url: "tel:+917030513954"
    },
    {
      icon: <FaEnvelope className="text-primary" />,
      title: "info@gmail.com",
      url: "mailto:info@gmail.com"
    },
  ]
}

