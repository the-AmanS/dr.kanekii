import { Project } from './types';

export const NAV_ITEMS = [
  { label: 'HOME', path: '/' },
  { label: 'EDITS', path: '/gallery' },
  { label: 'ABOUT', path: '/about' },
  { label: 'COMMISSIONS', path: '/contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'TOKYO GHOUL: UNRAVEL',
    thumbnail: 'https://picsum.photos/seed/anime1/600/400',
    category: 'AMV',
    views: '125K'
  },
  {
    id: '2',
    title: 'JUJUTSU KAISEN // DOMAIN',
    thumbnail: 'https://picsum.photos/seed/anime2/600/400',
    category: 'EDIT',
    views: '89K'
  },
  {
    id: '3',
    title: 'CHAINSAW MAN RAMPAGE',
    thumbnail: 'https://picsum.photos/seed/anime3/600/400',
    category: 'AMV',
    views: '210K'
  },
  {
    id: '4',
    title: 'ATTACK ON TITAN: FINAL',
    thumbnail: 'https://picsum.photos/seed/anime4/600/400',
    category: 'LOOP',
    views: '45K'
  },
  {
    id: '5',
    title: 'DEMON SLAYER - ZENITSU',
    thumbnail: 'https://picsum.photos/seed/anime5/600/400',
    category: 'FX HEAVY',
    views: '300K'
  },
  {
    id: '6',
    title: 'CYBERPUNK EDGERUNNERS',
    thumbnail: 'https://picsum.photos/seed/anime6/600/400',
    category: 'VIBE',
    views: '150K'
  },
];

export const SOCIALS = {
  instagram: '@amman._11'
};