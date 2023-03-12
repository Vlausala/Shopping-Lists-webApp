import { sql } from "../database/database.js"

const listItems = async (id) => {
    return await sql`
    SELECT * FROM shopping_list_items 
    WHERE shopping_list_id = (${id})`;
};

const AddListItem = async (shopping_list_id, itemName) => {
    return await sql`
    INSERT INTO shopping_list_items (shopping_list_id, name) VALUES (${shopping_list_id}, ${itemName})`;
};

export {listItems, AddListItem};