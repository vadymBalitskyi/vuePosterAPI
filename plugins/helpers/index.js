export const key = '4824fed92cd4d1e4811281fff405f758';

export const truncate = (str, limit = 120) => str.substring(0, (limit - 3)) + '...';

export const getImgUrl = prop => `https://image.tmdb.org/t/p/w500/${prop}`;

export const divideByTwo = prop => Number( prop/2 ).toFixed(1);