export const formatDate = (date: Date) => {
  return date.toLocaleDateString('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
