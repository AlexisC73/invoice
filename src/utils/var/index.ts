export const api =
  process.env.NODE_ENV === 'production'
    ? 'https://api.alexis-comte.com'
    : 'http://localhost:5500'
