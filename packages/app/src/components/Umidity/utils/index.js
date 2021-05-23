export const handleColor = umidity => {
  if (umidity > 30 && umidity < 40) {
    return '#9DE686';
  }
  if (umidity === 30 || umidity === 40) {
    return '#F8E71C';
  }
  if (umidity < 30 || umidity > 40) {
    return '#EB5757';
  }
};
