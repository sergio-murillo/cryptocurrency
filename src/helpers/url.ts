import { IMAGES_URL } from 'src/constants/commons';
import urlTemplate from 'url-template';

export const expandUrl = (url: string, template: any): string => {
  const urlParse = urlTemplate.parse(url);

  return urlParse.expand(template);
};

export const buildImageUrl = (coin: string, path = '/img/25x25/', url = IMAGES_URL): string =>
  `${url}${path}${coin?.replace(/\s|[.]/g, '-')}.png`;