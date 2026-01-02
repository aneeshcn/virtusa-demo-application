import { Injectable } from '@angular/core';
import { SuperTableConfig } from '../../project/superTable';

@Injectable({
  providedIn: 'root'
})
export class SuperTableDataService {

  constructor() { }
  private modes: Record<string, { config: SuperTableConfig; data: any[] }> = {
    "Customers": {
      "config": {
        "columns": [
          { "field": "id", "header": "ID", "sortable": true },
          { "field": "name", "header": "Name", "sortable": true },
          { "field": "country", "header": "Country", "sortable": true },
          { "field": "company", "header": "Company", "sortable": true },
          { "field": "status", "header": "Status", "sortable": true },
          { "field": "representative", "header": "Representative", "sortable": true },
          { "field": "date", "header": "Registration Date", "sortable": true }
        ],
        "options": {
          "paginator": true,
          "rows": 10,
          "rowsPerPageOptions": [5, 10, 20],
          "selectionMode": "checkbox",
          "caption": "Customer Table",
          "resizableColumns": true,
          "stripedRows": true,
          "showGridlines": true,
          "frozenWidth": "150px",
          "expandableRows": true,
          "loading": true,
          "filterable": true,
          "sortable": true,
          "sortMode": 'single',
          "defaultSortField": 'id',
          "defaultSortOrder": 1
        }
      },
      "data": [
        { "id": 1, "name": "Alice", "country": "USA", "company": "Acme", "status": "Active", "representative": "John Doe", "date": "2026-01-01" },
        { "id": 2, "name": "Bob", "country": "Germany", "company": "Globex", "status": "Active", "representative": "Jane Smith", "date": "2025-12-15" },
        { "id": 3, "name": "Charlie", "country": "UK", "company": "Initech", "status": "Inactive", "representative": "Jim Brown", "date": "2025-11-20" },
        { "id": 4, "name": "Diana", "country": "France", "company": "Umbrella", "status": "Active", "representative": "Sara White", "date": "2026-01-03" },
        { "id": 5, "name": "Ethan", "country": "Canada", "company": "Soylent", "status": "Pending", "representative": "Mike Green", "date": "2025-12-30" },
        { "id": 6, "name": "Fiona", "country": "Italy", "company": "Hooli", "status": "Active", "representative": "Anna Blue", "date": "2025-12-25" },
        { "id": 7, "name": "George", "country": "Spain", "company": "Vehement", "status": "Inactive", "representative": "Tom Black", "date": "2025-12-10" },
        { "id": 8, "name": "Hannah", "country": "Australia", "company": "Stark Industries", "status": "Active", "representative": "Linda Grey", "date": "2026-01-02" },
        { "id": 9, "name": "Ian", "country": "Brazil", "company": "Wonka", "status": "Pending", "representative": "Mark White", "date": "2025-12-28" },
        { "id": 10, "name": "Jane", "country": "Netherlands", "company": "Oscorp", "status": "Active", "representative": "Cathy Brown", "date": "2025-12-18" },
        { "id": 11, "name": "Kevin", "country": "Sweden", "company": "Tyrell", "status": "Inactive", "representative": "Steve Green", "date": "2025-11-30" },
        { "id": 12, "name": "Laura", "country": "Norway", "company": "Cyberdyne", "status": "Active", "representative": "Nina Blue", "date": "2026-01-04" },
        { "id": 13, "name": "Michael", "country": "Japan", "company": "Umbrella", "status": "Pending", "representative": "Paul Red", "date": "2025-12-22" },
        { "id": 14, "name": "Nina", "country": "India", "company": "Globex", "status": "Active", "representative": "Rachel Black", "date": "2025-12-12" },
        { "id": 15, "name": "Oscar", "country": "Mexico", "company": "Acme", "status": "Inactive", "representative": "Sam White", "date": "2025-12-05" }
      ]
    },

    "Products": {
      "config": {
        "columns": [
          { "field": "id", "header": "ID" },
          { "field": "product", "header": "Product" },
          { "field": "category", "header": "Category" },
          { "field": "price", "header": "Price" },
          { "field": "inventoryStatus", "header": "Inventory Status" },
          { "field": "avatar", "header": "" },
        ], "options": {
          "paginator": true,
          "rows": 10,
          "rowsPerPageOptions": [5, 10, 20],
          "selectionMode": "checkbox",
          "caption": "Product Table",
          "resizableColumns": true,
          "stripedRows": true,
          "showGridlines": true,
          "frozenWidth": "150px",
          "expandableRows": true,
          "loading": true
        }
      },
      "data": [
        { "id": 1, "product": "Laptop", "category": "Electronics", "price": 1200, "inventoryStatus": "In Stock","avatar": "https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" },
        { "id": 2, "product": "Phone", "category": "Electronics", "price": 800, "inventoryStatus": "Low Stock" ,"avatar": "https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png"},
        { "id": 3, "product": "Desk Chair", "category": "Furniture", "price": 150, "inventoryStatus": "In Stock" },
        { "id": 4, "product": "Headphones", "category": "Electronics", "price": 200, "inventoryStatus": "Out of Stock" },
        { "id": 5, "product": "Notebook", "category": "Stationery", "price": 5, "inventoryStatus": "In Stock" },
        { "id": 6, "product": "Monitor", "category": "Electronics", "price": 300, "inventoryStatus": "In Stock" },
        { "id": 7, "product": "Keyboard", "category": "Electronics", "price": 50, "inventoryStatus": "Low Stock" },
        { "id": 8, "product": "Mouse", "category": "Electronics", "price": 25, "inventoryStatus": "In Stock" },
        { "id": 9, "product": "Table Lamp", "category": "Furniture", "price": 40, "inventoryStatus": "In Stock" },
        { "id": 10, "product": "Printer", "category": "Electronics", "price": 220, "inventoryStatus": "Out of Stock" },
        { "id": 11, "product": "Pen Set", "category": "Stationery", "price": 10, "inventoryStatus": "In Stock" },
        { "id": 12, "product": "Backpack", "category": "Accessories", "price": 70, "inventoryStatus": "In Stock" },
        { "id": 13, "product": "Coffee Maker", "category": "Home Appliances", "price": 80, "inventoryStatus": "Low Stock" },
        { "id": 14, "product": "Water Bottle", "category": "Accessories", "price": 15, "inventoryStatus": "In Stock" },
        { "id": 15, "product": "Desk Organizer", "category": "Stationery", "price": 20, "inventoryStatus": "In Stock" }
      ]
    },

    "Orders": {
      "config": {
        "columns": [
          { "field": "id", "header": "ID" },
          { "field": "customer", "header": "Customer" },
          { "field": "product", "header": "Product" },
          { "field": "quantity", "header": "Quantity" },
          { "field": "price", "header": "Price" },
          { "field": "status", "header": "Status" },
          { "field": "date", "header": "Order Date" }
        ],
        "options": {
          "paginator": true,
          "rows": 10,
          "rowsPerPageOptions": [5, 10, 20],
          "selectionMode": "single",
          "caption": "Order Table",
          "resizableColumns": true,
          "stripedRows": true,
          "showGridlines": true,
          "frozenWidth": "150px",
          "expandableRows": true,
          "loading": false
        }
      },
      "data": [
        { "id": 1, "customer": "Alice", "product": "Laptop", "quantity": 1, "price": 1200, "status": "Delivered", "date": "2026-01-02" },
        { "id": 2, "customer": "Bob", "product": "Phone", "quantity": 2, "price": 1600, "status": "Pending", "date": "2025-12-28" },
        { "id": 3, "customer": "Charlie", "product": "Desk Chair", "quantity": 1, "price": 150, "status": "Cancelled", "date": "2025-12-20" },
        { "id": 4, "customer": "Diana", "product": "Headphones", "quantity": 3, "price": 600, "status": "Delivered", "date": "2026-01-01" },
        { "id": 5, "customer": "Ethan", "product": "Notebook", "quantity": 10, "price": 50, "status": "Pending", "date": "2025-12-30" },
        { "id": 6, "customer": "Fiona", "product": "Monitor", "quantity": 2, "price": 600, "status": "Delivered", "date": "2025-12-25" },
        { "id": 7, "customer": "George", "product": "Keyboard", "quantity": 5, "price": 250, "status": "Pending", "date": "2025-12-12" },
        { "id": 8, "customer": "Hannah", "product": "Mouse", "quantity": 4, "price": 100, "status": "Delivered", "date": "2026-01-03" },
        { "id": 9, "customer": "Ian", "product": "Table Lamp", "quantity": 2, "price": 80, "status": "Cancelled", "date": "2025-12-29" },
        { "id": 10, "customer": "Jane", "product": "Printer", "quantity": 1, "price": 220, "status": "Pending", "date": "2025-12-18" },
        { "id": 11, "customer": "Kevin", "product": "Pen Set", "quantity": 10, "price": 100, "status": "Delivered", "date": "2025-12-05" },
        { "id": 12, "customer": "Laura", "product": "Backpack", "quantity": 3, "price": 210, "status": "Delivered", "date": "2026-01-04" },
        { "id": 13, "customer": "Michael", "product": "Coffee Maker", "quantity": 1, "price": 80, "status": "Pending", "date": "2025-12-22" },
        { "id": 14, "customer": "Nina", "product": "Water Bottle", "quantity": 5, "price": 75, "status": "Delivered", "date": "2025-12-12" },
        { "id": 15, "customer": "Oscar", "product": "Desk Organizer", "quantity": 2, "price": 40, "status": "Pending", "date": "2025-12-08" }
      ]
    }
  }


  getModes(): string[] {
    return Object.keys(this.modes);
  }


  getModeData(mode: string): { config: SuperTableConfig; data: any[] } {
    return this.modes[mode];
  }
}
