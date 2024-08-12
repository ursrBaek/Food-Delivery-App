export const isThisMonth = (date: number): boolean => {
  const todaysDate = new Date();
  const checkDate = new Date(date);

  return todaysDate.getFullYear() === checkDate.getFullYear() && todaysDate.getMonth() === checkDate.getMonth();
};
