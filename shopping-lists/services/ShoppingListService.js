import { sql } from "../database/database.js"

const AddShoppinglist = async (name) => {
    await sql`
    INSERT INTO shopping_lists (name) VALUES (${name})`;
}

const ListShoppinglist = async () => {
    return await sql`
    SELECT * FROM shopping_lists 
    WHERE active = (TRUE)`;
}

const RemoveShoppinglist = async (id) =>{
    return await sql`
    DELETE FROM shopping_lists
    WHERE id = (${id});`;
}

const DeactivateShoppinglist = async (id) =>{
    return await sql`
    UPDATE shopping_lists
    SET active = (FALSE)
    WHERE id = (${id});`;
}

export {AddShoppinglist, ListShoppinglist, RemoveShoppinglist, DeactivateShoppinglist}