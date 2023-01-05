export const api =
  process.env.NODE_ENV === 'production'
    ? 'http://api.alexis-comte.com'
    : 'http://localhost:5500'
