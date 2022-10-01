export const checkItemsForCompleteness = (setItems, items) => {
  if (items.some((item) => item.value === '')) {
    return setItems((prev) => {
      return [...prev].map((item) => {
        if (item.value === '') {
          return {
            ...item,
            error: { status: true, message: "Can't be empty" },
          };
        }
        return item;
      });
    });
  }
  return false;
};
