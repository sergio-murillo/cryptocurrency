/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference types="jest" />

declare namespace jest {
  interface Matchers<R, T> {
    toHaveStyle(css: any): R;
    toBeInTheDocument(): R;
    toHaveAttribute(attribute: string, value?: any);
  }
}
