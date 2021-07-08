import { IMAGES_URL } from 'src/constants/commons';
import urlTemplate from 'url-template';

export const expandUrl = (url: string, template: any): string => {
  const urlParse = urlTemplate.parse(url);

  return urlParse.expand(template);
};

export const buildImageUrl = (coin: string): string => `${IMAGES_URL}/img/25x25/${coin.replace(/\s|[.]/g, '-')}.png`;