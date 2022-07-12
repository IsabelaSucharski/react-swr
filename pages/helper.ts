export function formatNumbers(num: any) {
  const type = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return type.format(num);
}
