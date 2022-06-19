const useTodayDate = () => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const today = new Date();
  const todayMls = Math.round(new Date() / 1000);

  const LocalDate = today.toLocaleDateString("fr-FR", options);

  return {
    LocalDate,
    todayMls,
  };
};

export default useTodayDate;
