export type DateFormat = `${number}${number}${number}${number}-${number}${number}-${number}${number}`;

export const fade = (date: DateFormat, deadline: number) => {
  const dueDate = new Date(date);
  const now = new Date();

  const utcForDueDate = Date.UTC(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate());
  const utcForNow = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const days = Math.floor((utcForNow - utcForDueDate) / (1000 * 60 * 60 * 24));

  if (days > 0) {
    const days_late = deadline - days;
    let opacity = (days_late * 100) / deadline / 100;
    opacity = opacity < 0 ? 0 : opacity;
    opacity = opacity > 1 ? 1 : opacity;
    return opacity;
  }
  return 100;
};
