export const errorHandler = (error) => {
  console.log("erroorrrr", error);
  if (error && error.response && error.response.data) {
    // alert(`${error.response.data}`)
    console.log("error.response.data", error.response.data);
    return {
      status: false,
      error: getError(error.response.data?.msg) || "Something went wrong",
    };
  } else {
    return { status: false, error: "Something went wrong!" };
  }
};

const getError = (errors) => {
  try {
    for (const [key, value] of Object.entries(errors)) {
      console.log("value", value);
      return value[0];
    }
  } catch (error) {
    return undefined;
  }
};
