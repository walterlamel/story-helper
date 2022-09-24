export const modifyItem = async (idea, type, requestOptions) => {
       return await fetch(
              process.env.REACT_APP_URL_API + type + "/" + idea.id,
              requestOptions,
       )
              .then((response) => response.json())
              .then(
                     (data) => {
                            console.log(data);
                            if (data.res || data === 1 || data === true) {
                                   return { res: true };
                            } else {
                                   return { res: false, error: data.text };
                            }
                     },
                     (error) => {
                            console.log(error);
                            return { res: false, error: error.message };
                     },
              );
};

export const deleteItem = async (type, id) => {
       const requestOptions = {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
       };

       return await fetch(
              process.env.REACT_APP_URL_API + type + "/" + id,
              requestOptions,
       )
              .then((response) => response.json())
              .then(
                     (data) => {
                            return data;
                     },
                     (error) => {
                            console.log(error);
                            return false;
                     },
              );
};
