export interface Project {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
  views: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export enum AnimationVariant {
  FADE_UP = 'fadeUp',
  FADE_IN = 'fadeIn',
  SLIDE_LEFT = 'slideLeft',
  ZOOM_IN = 'zoomIn'
}