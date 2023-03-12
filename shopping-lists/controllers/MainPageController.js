import { renderFile } 
from "../deps.js";
import { CountItems } from "../services/ShoppingListItems.js";
import { CountShoppingLists } from "../services/ShoppingListService.js";

import { responseDetails, redirectTo  } 
from "./MetaControllers.js";


const ShowMainPage = async (request) =>{
    const data = {
        shoppinglists: await CountShoppingLists(),
        items: await CountItems()
    };


    return new Response(
        await renderFile("MainPage.eta", data),
        responseDetails
    )
}


export {ShowMainPage};