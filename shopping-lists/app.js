import { serve, configure } from "./deps.js";
import * as ShoppingListController from "./controllers/controllers.js"


configure({
  views: `${Deno.cwd()}/views/`,
});


const handleRequest = async (request) => {
  const url = new URL(request.url);

  if (url.pathname === "/" && request.method === "GET") {
    return new Response(`Redirecting to /shoppinglists.`, {
      status: 303,
      headers: {"Location": "/shoppinglists",},});

  } else if (url.pathname === "/shoppinglists" && request.method === "POST" ){
    return await ShoppingListController.CreateNewList(request);

  } else if (url.pathname === "/shoppinglists" && request.method === "GET"){
    return await ShoppingListController.ShowLists(request);

  } else {
    return new Response("Not found", {status: 404});
  }

};




serve(handleRequest, { port: 7777 });