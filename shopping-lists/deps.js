//Deno
export { serve } from "https://deno.land/std@0.171.0/http/server.ts";
export { renderFile } from "https://deno.land/x/eta@v2.0.0/mod.ts";
export { configure } from "https://deno.land/x/eta@v2.0.0/mod.ts";

//Postgres 
import postgres from "https://deno.land/x/postgresjs@v3.3.3/mod.js";
export { postgres };