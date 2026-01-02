// super-table.types.ts
export interface SuperTableColumn {
    field: string;
    header: string;
    sortable?: boolean;
    sortOrder?: 1 | -1;
    sortField?: string;
    filter?: boolean;
    width?: string;
    editable?: boolean;
    editor?: 'text' | 'number' | 'dropdown';
    editorOptions?: any[];
    frozen?: boolean;
    filterable?: boolean;
    template?: (row: any) => string;
}

export interface SuperTableConfig {
    columns: SuperTableColumn[];
    data?: any[];
    options?: {
        paginator?: boolean;
        rows?: number;
        selectionMode?: 'single' | 'multiple' | 'checkbox' | 'radio';
        [key: string]: any;
    };
}
