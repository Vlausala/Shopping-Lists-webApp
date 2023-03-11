import { serve, configure } from "./deps.js";
import * as ShoppingListController from "./controllers/ShoppingListController.js"
//import * as ItemController from "./controllers/ItemController"
import * as MainPageController from "./controllers/MainPageController.js"

configure({
  views: `${Deno.cwd()}/views/`,
});

const RedirectFunctionality = (path) => {
  return new Response(`Redirecting to /.`, {
    status: 303,
    headers: {"Location": path,},});
};


const handleRequest = async (request) => {
  const url = new URL(request.url);

  //Show mainpage
  if (url.pathname === "/" && request.method === "GET") {
    return await MainPageController.ShowMainPage(request);

  //Create shoppinglist
  } else if (url.pathname === "/lists" && request.method === "POST" ){
    return await ShoppingListController.CreateNewList(request);

  //Show shopping lists
  } else if (url.pathname === "/lists" && request.method === "GET"){
    return await ShoppingListController.ShowLists(request);
    
  //Delete shopping list
  } else if (url.pathname.includes("lists") && url.pathname.includes("deactivate") && request.method === "POST" ) {
    return await ShoppingListController.DeactivateList(request)

  //Redirect back to mainpage
  } else {
    return RedirectFunctionality("/");
  }

};



  //TODO

  //Show shopping list items
  /*} else if (url.pathname.includes("/listItems") && request.method === "GET" ) {
    return await ShoppingListController.DeleteList(request)*/


serve(handleRequest, { port: 7777 });