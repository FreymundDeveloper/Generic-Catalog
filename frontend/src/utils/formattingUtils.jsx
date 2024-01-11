export const formatToItem = (title) => {
    return title.toLowerCase().replace(/\s+/g, '_');
};

export const formatToQueryParam = (title) => {
    return title.toLowerCase()
      .replace(/\s+/g, '_')
      .replace(/_./g, match => match.charAt(1).toUpperCase());
};

export const arrayToQueryString = (title, arr) => {
    return `${title}=${arr.join(",")}`;
}

export const queryParamsBuilder = (dataArray, name = "") => {
    const parameters = ['types', 'availableSizes', 'sellers', 'sports'];
    const resultArray = [];

    dataArray.forEach((value, index) => {
        if (index < dataArray.length - 1) {
            if (Array.isArray(value) && value.length > 0) {
                const queryString = arrayToQueryString(parameters[index], value);
                resultArray.push(queryString);
            }
        } else {
            name === "" || name === "name=" ? resultArray.push(value) : resultArray.push(`${value}&${name}`);
        }
    });
    const finalResult = resultArray.join("&");

    return finalResult === "" ? `?${name}` : `?${finalResult}`;
};