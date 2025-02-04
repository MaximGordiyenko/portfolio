
export const calculateTotalPeriodsOfExperience = (projects) => {
  const parseDate = (dateStr) => {
    const [month, year] = dateStr.split(" ");
    return new Date(`${month} 1, ${year}`);
  };
  
  const calculateMonths = (start, end) => {
    const startDate = parseDate(start);
    const endDate = parseDate(end);
    return (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth() + 1);
  };
  
  const technologyDurations = {};
  
  projects.forEach(({ period: { start, end }, technologies }) => {
    const months = calculateMonths(start, end);
    technologies.forEach((tech) => {
      technologyDurations[tech] = (technologyDurations[tech] || 0) + months;
    });
  });
  
  return technologyDurations;
};

export const formatDuration = (months) => {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  if (years === 0) {
    return `${remainingMonths} month${remainingMonths !== 1 ? "s" : ""}`;
  }
  
  return remainingMonths === 0
    ? `${years} year${years !== 1 ? "s" : ""}`
    : `${years} year${years !== 1 ? "s" : ""} and ${remainingMonths} month${remainingMonths !== 1 ? "s" : ""}`;
};
