import { expandUrl, buildImageUrl } from 'src/helpers/url';
import { IMAGES_URL } from 'src/constants/commons';

describe('Helpers Url', () => {

  describe('Expand Url', () => {
    it('should expand url', () => {
      const template = 'http://example.com/?id={id}';
      const expected = 'http://example.com/?id=2';
      const response = expandUrl(template, { id: 2 });
      expect(response).toBe(expected);
    });
  
    it('should expand url with missing parameter', () => {
      const template = 'http://example.com/?id={id}&name={name}';
      const expected = 'http://example.com/?id=2&name=';
      const response = expandUrl(template, { id: 2 });
      expect(response).toBe(expected);
    });
  });

  describe('Image Url', () => {
    it('should get url of images without spaces in name', () => {
      const coinName = 'btc';
      const response = buildImageUrl(coinName);
      const expected = `${IMAGES_URL}/img/25x25/${coinName}.png`;
      expect(response).toBe(expected);
    });
  
    it('should get url of images with spaces in name', () => {
      const coinName = 'btc new';
      const response = buildImageUrl(coinName);
      const expected = `${IMAGES_URL}/img/25x25/btc-new.png`;
      expect(response).toBe(expected);
    });
  });
});