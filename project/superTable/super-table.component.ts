import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { SuperTableConfig } from './super-table.types';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'super-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    AvatarModule
  ],
  templateUrl: './super-table.component.html',
  styleUrls: ['./super-table.component.scss']
})
export class SuperTableComponent {
  searchValue: any
  defaultAvatar = "https://primefaces.org/cdn/primeng/images/demo/avatar/walter.jpg";
  @Input({ required: true }) config!: SuperTableConfig;
  @Input() data: any[] = [];
  @Input() loading = true;

  @Output() pageChange = new EventEmitter<any>();
  @Output() sortChange = new EventEmitter<any>();
  @Output() selectionChange = new EventEmitter<any>();

  selection: any | any[] = null;
  expandedRowKeys: { [key: string]: boolean } = {};

  ngOnInit() {
       setTimeout(() => {
      this.loading = false; 
    }, 1500);
  }

  opt<T>(key: string, fallback?: T): T | undefined {
    return (this.config.options?.[key] ?? fallback) as T;
  }

  get paginator() {
    return this.opt<boolean>('paginator', false);
  }

  get rows() {
    return this.opt<number>('rows', 10);
  }

  get stripedRows() {
    return this.opt<boolean>('stripedRows', false);
  }

  get gridlines() {
    return this.opt<boolean>('showGridlines', false);
  }

  get selectionType(): string | undefined {
    return this.opt<string>('selectionMode'); // dynamic selectionMode from JSON
  }

  get selectionMode(): 'single' | 'multiple' | null {
    if (this.selectionType === 'single' || this.selectionType === 'radio') return 'single';
    if (this.selectionType === 'multiple' || this.selectionType === 'checkbox') return 'multiple';
    return null;
  }

  get frozenWidth(): string | undefined {
    return this.opt<string>('frozenWidth');
  }

  get expandableRows(): boolean {
    return this.opt<boolean>('expandableRows', false)!;
  }


  get caption(): string | undefined {
    return this.opt<string>('caption');
  }

  /* ---------------- Events ---------------- */
  onPage(e: any) {
    this.pageChange.emit(e);
  }

  onSort(e: any) {
    this.sortChange.emit(e);
  }

  onSelection(e: any) {
    this.selectionChange.emit(e);
  }

  get rowsPerPageOptions(): number[] {
    return this.opt<number[]>('rowsPerPageOptions') ?? [5, 10, 20];
  }

  get isLoading(): boolean {
    return this.loading ?? this.opt<boolean>('loading') ?? false;
  }

  get resizableColumns(): boolean {
    return this.opt<boolean>('resizableColumns') ?? true; // default true
  }

  get globalFilterFields(): string[] {
    return this.config.columns.map(col => col.field);
  }

  get sortMode(): 'single' | 'multiple' {
    return this.opt<'single' | 'multiple'>('sortMode') ?? 'single';
  }

  get sortField(): string | undefined {
    return this.opt<string>('defaultSortField');
  }

  get sortOrder(): number {
    return this.opt<number>('defaultSortOrder') ?? 1;
  }

  get sortable(): boolean {
    return this.opt<boolean>('sortable') ?? true;
  }


  clear(table: any) {
    this.searchValue = '';
    table.filterGlobal('', 'contains');
  }
}
