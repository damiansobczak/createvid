export const durationFormat = (time: number): string => {
  const h = Math.floor(time / 60 / 60);
  const min = Math.floor((time / 60) % 60);

  return `${h}:${min}`;
};
