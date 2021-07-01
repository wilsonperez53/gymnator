export const getTextColor = (color: string) => {
  switch (color) {
    case 'primary':
      return '#fff';
    case 'secondary':
      return '#0055b8';
    default:
      return '#0055b8';
  }
};

export const getButtonColor = (color: string) => {
  switch (color) {
    case 'primary':
      return '#0055b8';
    case 'secondary':
      return '#fafafa';
    default:
      return '#fff';
  }
};