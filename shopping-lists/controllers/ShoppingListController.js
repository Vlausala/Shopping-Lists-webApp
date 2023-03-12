import { renderFile } 
from "../deps.js";

import { AddShoppinglist, DeactivateShoppinglist, ListShoppinglist, RemoveShoppinglist } 
from "../services/ShoppingListService.js";

import { responseDetails, redirectTo  } 
from "./MetaControllers.js";


const CreateNewList = async (request) => {
    const formData = await request.formData();
    const name = formData.get("name");
    if ( name === ""){
      return redirectTo("/lists");
    } else{
      await AddShoppinglist(name);  
      return redirectTo("/lists");
    }
};


const ShowLists = async (request) => {
    const data = {shoppingLists: await ListShoppinglist()};
    return new Response(
        await renderFile("ShoppingLists.eta", data),
        responseDetails
    )
};


const DeactivateList = async (request) => {
  const url = new URL(request.url);
  const parts = url.pathname.split("/");
  const id = parts[2];
  
  await DeactivateShoppinglist(id);
  return redirectTo("/lists");
};


export {CreateNewList, ShowLists, DeactivateList};