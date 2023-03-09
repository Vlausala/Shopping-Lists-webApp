import { sql } from "../database/database"

const listItems = async (id) => {
    const rows = await sql`
        SELECT * FROM shopping_list_items
        WHERE shopping_list_id = ${id}`

        if (rows && rows.length > 0) {
            return rows[0];
        }
}


export {listItems}