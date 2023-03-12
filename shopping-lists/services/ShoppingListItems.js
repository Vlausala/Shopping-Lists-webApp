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

const CollectListItem = async(id) => {
    return await sql`
    UPDATE shopping_list_items
    SET collected = (TRUE)
    WHERE id = (${id});`;
} 

const CountItems = async () => {
    const rows = await sql`SELECT COUNT(id) as items FROM shopping_list_items;`;
    if (rows && rows.length > 0) {
        return rows[0];
    }
}

export {listItems, AddListItem, CollectListItem, CountItems};