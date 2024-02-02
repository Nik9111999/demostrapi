import type { Schema, Attribute } from '@strapi/strapi';

export interface SocialLinksLink extends Schema.Component {
  collectionName: 'components_social_links_links';
  info: {
    displayName: 'link';
    icon: 'link';
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'social-links.link': SocialLinksLink;
    }
  }
}
