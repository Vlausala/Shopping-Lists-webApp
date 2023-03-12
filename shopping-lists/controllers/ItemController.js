import { renderFile } 
from "../deps.js";

import { listItems, AddListItem } from "../services/ShoppingListItems.js";
import { GetListName } from "../services/ShoppingListService.js";

import { responseDetails, redirectTo  } 
from "./MetaControllers.js";



const ShowItems = async (request) => {
    const url = new URL(request.url);
    const id = url.pathname.split("/")[2];
    const data = {
        ListId : id,
        items: await listItems(id),
        shoppinglistname: await GetListName(id)};

    return new Response(
        await renderFile("Items.eta", data),
        responseDetails
    )
};

const AddItem = async (request) => {
    
    const url = new URL(request.url);
    const ListId = url.pathname.split("/")[2];

    const formData = await request.formData();
    const ItemName = formData.get("itemName");

    await AddListItem(ListId, ItemName);
    return redirectTo(url.pathname);
}




export { ShowItems, AddItem };