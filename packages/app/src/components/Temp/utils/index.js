export const handleColor = temp => {
  if (temp > 2 && temp < 8) {
    return '#9DE686';
  }
  if (temp === 8 || temp === 2) {
    return '#F8E71C';
  }
  if (temp > 8 || temp < 2) {
    return '#EB5757';
  }
};
