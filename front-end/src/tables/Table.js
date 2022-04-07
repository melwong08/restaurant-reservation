import React from "react";

function Table({table, clearTable}){
    function handleClick() {
         clearTable(table.table_id);
    }

    return (
        <div className="card mx-1 my-2">
            
        </div>
    )
}