import { renderFile } 
from "../deps.js";

import { listItems, AddListItem , CollectListItem} from "../services/ShoppingListItems.js";
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

    // If name is blanck, do not call the service
    if ( ItemName === ""){
        return redirectTo(`/lists/${ListId}`); 

    // Call service
    } else{
        await AddListItem(ListId, ItemName);
        return redirectTo(`/lists/${ListId}`);   
    }
}

const CollectItem = async (request) => {

    const url = new URL(request.url);
    const ListID = url.pathname.split("/")[2];
    const ItemID = url.pathname.split("/")[4];

    await CollectListItem(ItemID);
    return redirectTo(`/lists/${ListID}`);
}




export { ShowItems, AddItem, CollectItem };