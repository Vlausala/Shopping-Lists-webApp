import { sql } from "../database/database.js"

const AddShoppinglist = async (name) => {
    await sql`INSERT INTO shopping_lists (name) VALUES (${name})`;
}

const ListShoppinglist = async () => {
    return await sql`SELECT * FROM shopping_lists`;
}

export {AddShoppinglist, ListShoppinglist}