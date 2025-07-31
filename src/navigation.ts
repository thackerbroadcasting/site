import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

const buildDateString = import.meta.env.BUILD_TIMESTAMP;
const buildDate = new Date(buildDateString)
const formattedDate = buildDate instanceof Date && !isNaN(buildDate.getTime())
  ? new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'UTC',
    hour12: false,
    timeZoneName: 'short'
    }).format(buildDate)
  : new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'UTC',
    hour12: false,
    timeZoneName: 'short'
    }).format(new Date()
  );

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/')},
    { text: 'Services', href: getPermalink('/services')},
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
  actions: [{ text: 'Broadcasting Portal', href: 'https://live.thackerbroadcasting.com', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Products',
      links: [
        { text: 'Services', href: getPermalink('/services') },
        { text: 'Listen', href: getPermalink('/listen') },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: getPermalink('/docs') },
        { text: 'Support Desk', href: 'https://support.thackerbroadcasting.com' },
        { text: 'Status', href: 'https://status.thackerbroadcasting.com' },
        { text: 'Email', href: 'mailto:support@thackerbroadcasting.com?Subject=Support Request:' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Blog', href: getBlogPermalink() },
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
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@ThackerBroadcastingStudios' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/thackerbroadcasting' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `<center>&copy 2025 Thacker Broadcasting • Site template by <a class="underline dark:text-muted" href="https://onwidget.com/">onWidget</a> • All rights reserved<br>Updated ${formattedDate}</center>`,
};
