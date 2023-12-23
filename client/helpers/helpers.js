export function changeDateLocal(date) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateFormat = new Date(date);
  return dateFormat.toLocaleDateString("en-US", options);
}

export const formatUSD = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

