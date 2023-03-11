const responseDetails = {
    headers: { "Content-Type": "text/html;charset=UTF-8" },
};
  
const redirectTo = (path) => {
    return new Response(`Redirecting to ${path}.`, {
      status: 303,
      headers: {
        "Location": path,
      },
    });
};

export {responseDetails, redirectTo};