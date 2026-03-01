import BinaryLogo from "../assets/logo.png";

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
    title: "Binary Brains @binarybrains-club",
    ogTitle: "Binary Brains",
    twitterTitle: "Binary Brains",
    description:
      "Full Stack Developer, creando soluciones web desde 2015. Apasionado por React, Node.js y la tecnología open source ��",
    url: "https://binarybrains-club.github.io/linkytree",
    image: "https://example.com/avatar-john-doe.png",
    siteName: "Binary Brains",
    locale: "es_MX",
    /*twitterSite: '@johndoe',
    twitterCreator: '@johndoe',*/
  },

  featuredLink: {
    href:
      "https://untalbry.notion.site/Contribuidores-47bd85709a4048f0aa4b964d820a89a1",
    title: "¿Buscas apoyo en alguna rama de la programación?",
    subtitle:
      "Descubre a los colaboradores de la comunidad y sus áreas de especialidad",
  },

  profile: {
    avatarSrc: BinaryLogo,
    name: "Binary Brains",
    handle: "@binarybrains-club",
    bio: "Club de informatica",
  },

  socialLinks: [
    {
      href: "https://github.com/binarybrains-club",
      ariaLabel: "GitHub",
      icon: "github",
    },
    {
      href: "https://www.instagram.com/binarybrainsclub/",
      ariaLabel: "Instagram",
      icon: "instagram",
    },
    {
      href: "https://www.linkedin.com/company/binary-brains-upiicsa/",
      ariaLabel: "LinkedIn",
      icon: "linkedin",
    },
    {
      href: "https://www.twitch.tv/binarybrains",
      ariaLabel: "Twitch",
      icon: "twitch",
    },
  ] satisfies SiteSocialLink[],

  linkCards: [
    {
      href:
        "https://www.notion.so/Binary-Brains-7ce88d6234d94f9ca1a1cd10e8ecc2eb",
      title: "Notion",
      subtitle: "Recursos, notas y acerca de nosotros",
      icon: "📎",
      trailingIcon: "📎",
      style:
        "background-color: rgba(250, 204, 21, 0.125); color: rgb(250, 204, 21);",
    },
    {
      href: "https://chat.whatsapp.com/KUtzK0i3UfY25z1hWfuSFR",
      title: "Whatsapp",
      subtitle: "¡Unete a nuestra comunidad en Whatsapp!",
      icon: "🟢",
      trailingIcon: "🟢",
      style:
        "background-color: rgba(59, 130, 246, 0.125); color: rgb(59, 130, 246);",
    },
    {
      href: "https://discord.gg/cyXd37NTbq",
      title: "Discord",
      subtitle: "¡Unete a nuestra comunidad en Discord!",
      icon: "🔵",
      trailingIcon: "🔵",
      style:
        "background-color: rgba(132, 204, 22, 0.125); color: rgb(132, 204, 22);",
    },
    {
      href: "https://binarybrains-club.github.io",
      title: "Sitio web",
      subtitle: "Nuestro sitio web oficial",
      icon: "🌐",
      trailingIcon: "🌐",
      style:
        "background-color: rgba(244, 63, 94, 0.125); color: rgb(244, 63, 94);",
    },
  ] satisfies SiteLinkCard[],
} as const;
