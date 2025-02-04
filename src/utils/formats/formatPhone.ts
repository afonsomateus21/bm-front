export function formatPhone(value: string) {
  const cleaned = value.replace(/\D/g, "");

  let formatted = cleaned;
  if (cleaned.length > 0) formatted = `(${cleaned.substring(0, 2)}`;
  if (cleaned.length > 2) formatted += `) ${cleaned.substring(2, 7)}`;
  if (cleaned.length > 7) formatted += `-${cleaned.substring(7, 11)}`;

  return formatted;
}