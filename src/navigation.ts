import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'Lessons', href: getPermalink('/lessons') },
    {
      text: 'Teachers',
      href: getPermalink('/teachers'),
      links: [
        { text: 'Eric Sakumura', href: getPermalink('/teachers/eric') },
        { text: 'Laura King', href: getPermalink('/teachers/laura') },
        { text: 'Jen Hosler', href: getPermalink('/teachers/jen') },
        { text: 'Gina Lorenz', href: getPermalink('/teachers/gina') },
        { text: 'John Eldridge', href: getPermalink('/teachers/john') },
      ],
    },
    {
      text: 'Info',
      href: getPermalink('/info'),
      links: [
        { text: 'FAQ', href: getPermalink('/info/faq') },
        { text: 'Policies', href: getPermalink('/info/policies') },
      ],
    },
    { text: 'Posts', href: getBlogPermalink() },
    { text: 'Contact', href: getPermalink('/contact') },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Navigate',
      links: [
        { text: 'Home', href: getPermalink('/') },
        { text: 'Lessons', href: getPermalink('/lessons') },
        { text: 'Teachers', href: getPermalink('/teachers') },
      ],
    },
    {
      title: 'More',
      links: [
        { text: 'Info', href: getPermalink('/info') },
        { text: 'Posts', href: getBlogPermalink() },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Contact Us',
      links: [
        {
          text: '2512 W 6th St. Suite B, Lawrence, KS 66049',
          href: 'https://maps.google.com/?q=2512+W+6th+St+Suite+B,+Lawrence,+KS+66049',
          ariaLabel: 'View on Google Maps',
        },
        {
          text: '📞 (785) 842-2182',
          href: 'tel:+17858422182',
          ariaLabel: 'Call Lawrence Piano Studio',
        },
        {
          text: '✉ info@lawrencepianostudio.com',
          href: 'mailto:info@lawrencepianostudio.com',
          ariaLabel: 'Email Lawrence Piano Studio',
        },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/lawrencepianostudio/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/lawrencepianostudio/' },
    {
      ariaLabel: 'Leave us a review on Google',
      icon: 'tabler:star',
      href: 'https://search.google.com/local/writereview?placeid=ChIJ8_z_LgDFuocRkHwB8Xl-b9Q',
    },
  ],
  googleReviewLink: 'https://search.google.com/local/writereview?placeid=ChIJ8_z_LgDFuocRkHwB8Xl-b9Q',
  footNote: `© ${new Date().getFullYear()} Lawrence Piano Studio · All rights reserved.`,
};
