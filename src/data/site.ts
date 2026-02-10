export type SiteSocialLink = {
  href: string;
  ariaLabel: string;
  icon: string;
};

export type SiteLinkCard = {
  href: string;
  title: string;
  subtitle: string;
  icon: string;
  trailingIcon: string;
  style: string;
};

export const site = {
  seo: {
    title: 'John Doe @johndoe',
    ogTitle: 'John Doe',
    twitterTitle: 'John Doe',
    description:
      'Full Stack Developer, creando soluciones web desde 2015. Apasionado por React, Node.js y la tecnología open source ��',
    url: 'https://links.johndoe.dev',
    image: 'https://example.com/avatar-john-doe.png',
    siteName: 'John Doe',
    locale: 'en_US',
    twitterSite: '@johndoe',
    twitterCreator: '@johndoe',
  },

  featuredLink: {
    href: 'https://johndoe.dev/consulting',
    title: '1:1 Consulting',
    subtitle: 'Schedule a personalized session with me',
  },

  profile: {
    avatarSrc: 'https://s3.us-east-1.amazonaws.com/gndx.dev/oscar-barajas-tavares-gndx.jpg',
    name: 'Binary Brains',
    handle: '@binarybrains-club',
    bio: 'Club de informatica',
  },

  socialLinks: [
    {
      href: 'https://github.com/binarybrains-club',
      ariaLabel: 'GitHub',
      icon: 'github',
    },
    {
      href: 'https://www.instagram.com/binarybrainsclub/',
      ariaLabel: 'Instagram',
      icon: 'instagram',
    },
    {
      href: 'https://www.linkedin.com/company/binary-brains-upiicsa/',
      ariaLabel: 'LinkedIn',
      icon: 'linkedin',
    },
    {
      href: 'https://www.twitch.tv/binarybrains',
      ariaLabel: 'Twitch',
      icon: 'twitch',
    },
  ] satisfies SiteSocialLink[],

  linkCards: [
    {
      href: 'https://johndoe.dev/blog',
      title: 'Blog',
      subtitle: 'Articles and tutorials about web development',
      icon: '📖',
      trailingIcon: '📖',
      style: 'background-color: rgba(250, 204, 21, 0.125); color: rgb(250, 204, 21);',
    },
    {
      href: 'https://johndoe.dev/podcast/',
      title: 'Podcast',
      subtitle: 'Conversations about technology and development',
      icon: '🎙️',
      trailingIcon: '🎙️',
      style: 'background-color: rgba(59, 130, 246, 0.125); color: rgb(59, 130, 246);',
    },
    {
      href: 'https://johndoe.dev/cursos',
      title: 'Courses',
      subtitle: 'Learn React and Node.js step by step',
      icon: '🎒',
      trailingIcon: '🎒',
      style: 'background-color: rgba(132, 204, 22, 0.125); color: rgb(132, 204, 22);',
    },
    {
      href: 'https://johndoe.dev/mediakit/',
      title: 'Sponsors (Media Kit)',
      subtitle: 'Collaborations and opportunities',
      icon: '🚀',
      trailingIcon: '🚀',
      style: 'background-color: rgba(244, 63, 94, 0.125); color: rgb(244, 63, 94);',
    },
  ] satisfies SiteLinkCard[],
} as const;
