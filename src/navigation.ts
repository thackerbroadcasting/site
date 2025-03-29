import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

const buildDateString = import.meta.env.BUILD_TIMESTAMP;
const buildDate = new Date(buildDateString)

const formattedDate = buildDate instanceof Date && !isNaN(buildDate.getTime())
  ? buildDate.toISOString().replace('T', ' ').split('.')[0]
  : new Date().toISOString().replace('T', ' ').split('.')[0]

export const headerData = {
  links: [
    { text: 'Home', href: '/'},
    { text: 'Services', href: '/services'},
    /*
    { 
      text: 'Services',
      href: getPermalink('/services'),
      links: [
        {
          text: 'Overview',
          href: getPermalink('/services'),
        },
        {
          text: 'Listen Live',
          href: '/listen',
        },
        {
          text: 'Podcasting',
          href: 'https://podcasts.thackerbroadcasting.com'
        }
      ] 
    },
    */
    { text: 'About', href: getPermalink('/about') },
    { text: 'Contact', href: getPermalink('/contact') },
    { text: 'Blog', href: getBlogPermalink() }
  ],
  actions: [{ text: 'Broadcast Portal', href: 'https://live.thackerbroadcasting.com', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Products',
      links: [
        { text: 'Services', href: '/services' },
        { text: 'Pricing', href: '/pricing' },
        { text: 'Listen', href: '/listen' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '/docs' },
        { text: 'Support Desk', href: 'https://thackerbroadcasting.freshdesk.com' },
        { text: 'Status', href: 'https://status.thackerbroadcasting.com' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Press', href: getBlogPermalink() + getPermalink('category') + '/press' },
      ],
    },
    {
      title: 'Site Info',
      links: [
        { text: `Site built: ${formattedDate}`},
      ]
    }
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
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@ThackerBroadcastingStudios' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/thackerbroadcasting' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <!--<img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>-->
    &copy 2025 Thacker Broadcasting • Site template by <a class="underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> • All rights reserved
  `,
};
