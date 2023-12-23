const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Xandria Crosland",
    image: "/profile.jpeg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Designer and Developer",
    bio: "I want to become an industry leading game developer ⚛︎",
    email: "xandria.crosland@gmail.com",
    linkedin: "xandria-crosland007",
    github: "RadicalEntity",
  },
  projects: [
    {
      name: `the-entity-files`,
      href: "https://github.com/RadicalEntity/the-entity-files",
    },
  ],
  // blog setting (required)
  blog: {
    title: "The Entity Files",
    description: "Welcome to The Entity Files.",
  },

  // CONFIG configration (required)
  link: "https://the-entity-files.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords:[
      "Blog", "Portfolio", "Notion", "Computer Science Research", "Game Development", "Game Design", "Game Research",
      "Gamification", "Computer Graphics", "Data Visualization", "3D Modeling", "Technical Art", "Graphic Design",
      "UX/UI", "User Centered Design", "UX Research", "Interactive Media", "Generative AI", "Artificial Intelligence", 
      "Game AI", "Human-AI Interaction", "Academic Research"
    ]
  },
  
  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: true,
    config: {
      host: "https://cusdis.com",
      appid: "e2c47dd5-e3cb-44b4-a47e-162ee8ddef30", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 1, // revalidate time for [slug], index
}

module.exports = { CONFIG }
