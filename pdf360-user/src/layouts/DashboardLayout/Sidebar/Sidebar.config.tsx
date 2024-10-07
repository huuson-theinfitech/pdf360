import { DiamondSvg, PDFSvg } from '@/assets/icons';

export const FOLD_BREAKPOINT = '2xl';
export const SIDEBAR_WIDTH = { lg: '80px', [FOLD_BREAKPOINT]: '220px' };

export const NAVIGATION = [
  {
    title: 'PDF Translation',
    icon: <PDFSvg />,
    url: '/',
  },
  {
    title: 'Products',
    slug: 'products',
    icon: <DiamondSvg />,
    add: true,
    dropdown: [
      {
        title: 'Dashboard',
        url: '/products/dashboard',
      },
      {
        title: 'Comments',
        url: '/products/comments',
        counter: '2',
        colorCounter: '#FFBC99',
      },
    ],
  },
];
