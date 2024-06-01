import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: '/'},
    { 
      text: 'Services',
      href: getPermalink('/services'),
      links: [
        {
          text: 'Listen / Demos',
          href: '/listen',
        }
      ] 
    },
    { text: 'Pricing', href: getPermalink('/pricing') },
    { text: 'About', href: getPermalink('/about') },
    { text: 'Contact', href: getPermalink('/contact') },
    { text: 'Blog', href: getBlogPermalink() }
  ],
  //actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Products',
      links: [
        { text: 'Services', href: '/services' },
        //{ text: 'Security', href: '#' },
        //{ text: 'Enterprise', href: '#' },
        //{ text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '/pricing' },
        //{ text: 'Team', href: '/team' },
        { text: 'Listen / Demo', href: '/listen' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '/docs' },
        //{ text: 'Community Forum', href: '#' },
        //{ text: 'Professional Services', href: '#' },
        //{ text: 'Skills', href: '#' },
        { text: 'Status', href: 'https://status.thackerbroadcasting.com' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Blog', href: '/blog' },
        //{ text: 'Careers', href: '#' },
        { text: 'Press', href: '/category/press' },
        //{ text: 'Inclusion', href: '#' },
        //{ text: 'Social Impact', href: '#' },
        //{ text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Disclaimer', href: getPermalink('/legal/disclaimer') },
    { text: 'Terms & Conditions', href: getPermalink('/legal/terms-conditions') },
    { text: 'Privacy Policy', href: getPermalink('/legal/privacy-policy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/thackbroadcast' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/thackerbroadcasting' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/thackerbroadcasting' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/thackerbroadcasting' },
  ],
  footNote: `
    <!--<img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>-->
    &copy 2024 Thacker Broadcasting · Site template by <a class="underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved
  `,
};
