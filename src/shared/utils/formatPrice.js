export function formatPrice(value) {
  const [integer, decimal] = Number(value || 0).toFixed(2).split(".");
  const grouped = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `₺${grouped},${decimal}`;
}
