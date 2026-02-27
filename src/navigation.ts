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
        { text: 'FAQ', href: getPermalink('/info/faq') },
        { text: 'Policies', href: getPermalink('/info/policies') },
        { text: 'Posts', href: getBlogPermalink() },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Contact Us',
      links: [
        {
          text: '📍 4900 W 6th St, Lawrence, KS 66049',
          href: 'https://maps.google.com/?q=4900+W+6th+St,+Lawrence,+KS+66049',
          ariaLabel: 'View on Google Maps',
        },
        {
          text: '📞 (785) 760-0679',
          href: 'tel:+17857600679',
          ariaLabel: 'Call Lawrence Piano Studio',
        },
        {
          text: '✉ info@lawrencepianostudio.com',
          href: 'mailto:info@lawrencepianostudio.com',
          ariaLabel: 'Email Lawrence Piano Studio',
        },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/lawrencepianostudio/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/lawrencepianostudio/' },
    {
      ariaLabel: 'Leave us a review on Google',
      icon: 'tabler:star',
      href: 'https://g.page/r/lawrencepianostudio/review',
    },
  ],
  googleReviewLink: 'https://g.page/r/lawrencepianostudio/review',
  footNote: `© ${new Date().getFullYear()} Lawrence Piano Studio · All rights reserved.`,
};
