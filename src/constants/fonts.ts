
// Add your font family in the return statement of switch case and call fonts function like this { fonts('regular') } to use Font Family. 

export type fontTypes = 'regular' | 'medium' | 'bold' | 'light';

export const fonts: (type: fontTypes) => string = function (type = 'regular') {
  switch (type) {
    case 'regular':
      return '';

    case 'bold':
      return '';

    case 'light':
      return '';

    case 'medium':
      return '';

    default:
      return '';

  }
};
