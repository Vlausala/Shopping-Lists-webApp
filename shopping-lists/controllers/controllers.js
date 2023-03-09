import { renderFile } from "../deps.js";
import { AddShoppinglist, ListShoppinglist } from "../services/ShoppingListService.js";

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

const CreateNewList = async (request) => {
    const formData = await request.formData();
    const name = formData.get("name");
    if ( name === ""){
      return redirectTo("/shoppinglists");
    } else{
      await AddShoppinglist(name);  
      return redirectTo("/shoppinglists");
    }
 
};

const ShowLists = async (request) => {
    const data = {
        shoppingLists: await ListShoppinglist(),
    };

    return new Response(
        await renderFile("ShoppingLists.eta", data),
        responseDetails
    )
};


export {CreateNewList, ShowLists};