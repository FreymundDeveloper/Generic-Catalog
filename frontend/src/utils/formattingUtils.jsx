export const formatToItem = (title) => {
    return title.toLowerCase().replace(/\s+/g, '_');
};

export const formatToQueryParam = (title) => {
    return title.toLowerCase()
      .replace(/\s+/g, '_')
      .replace(/_./g, match => match.charAt(1).toUpperCase());
};
  