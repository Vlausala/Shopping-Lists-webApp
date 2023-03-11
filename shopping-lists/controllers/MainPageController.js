import { renderFile } 
from "../deps.js";

import { responseDetails, redirectTo  } 
from "./MetaControllers.js";


const ShowMainPage = async (request) =>{
    const data = {};

    return new Response(
        await renderFile("MainPage.eta", data),
        responseDetails
    )
}


export {ShowMainPage};