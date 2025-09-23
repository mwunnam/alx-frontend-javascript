/// <reference path = "./crud.d.ts"/>
import { RowID, RowElement } from "./interface";
import { insertRow, updateRow, deleteRow } from "./crud";



const row: RowElement = { firstName: "John", lastName: "Doe" };

// Insert row
const id: RowId = insertRow(row);

// Update row
const updateRow: RowElement = { ...row, age: 23 };
updateRow(id, updatedRow);

// Delete row
deleteRow(id);
