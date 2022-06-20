const useTodayDate = () => {
  const today = new Date();
  const todayMls = Math.round(new Date() / 1000);

  const LocalDate = today.toLocaleDateString();

  return {
    LocalDate,
    todayMls,
  };
};

export default useTodayDate;
