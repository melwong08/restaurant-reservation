import React from "react";
import {finishTable} from "../utils/api";

function TableRow({table, loadDashboard}){
    if(!table) return null;

    function handleFinish(){
        if(wondow.confirm("Is this table ready to seat new guests? This cannot be undone.")) {
            const abortController = new AbortController();

            finishTable(table.table_id, abortController.signal)
                .then(loadDashbaord);

            return () => abortController.abort()
        }
    }

    return(
        
    )
}

export default TableRow;