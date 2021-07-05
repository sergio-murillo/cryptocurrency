import urlTemplate from 'url-template';

export const expandUrl = (url: string, template: any): string => {
  const urlParse = urlTemplate.parse(url);

  return urlParse.expand(template);
};