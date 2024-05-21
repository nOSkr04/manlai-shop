const phoneTransform = (phone?: string) => {
  const transformedString = phone?.replace(/(?<=\d{4})\d{2}(?=\d{2})/, "**");

  return transformedString;
};

export { phoneTransform };
