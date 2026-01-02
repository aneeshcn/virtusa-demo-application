import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperTableComponent } from '../../project/superTable';
import { SuperTableConfig } from '../../project/superTable/super-table.types';
import { SuperTableDataService } from '../services/super-table-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SuperTableComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  Object = Object;
  selectedMode = '';
  currentConfig: SuperTableConfig | null = null;
  currentData: any[] = [];
  modes: string[] = [];

  constructor(private tableService: SuperTableDataService) { }

  ngOnInit(): void {
    this.modes = this.tableService.getModes();
    this.switchMode(this.modes[0]);
  }

  switchMode(mode: string): void {
    this.selectedMode = mode;
    this.currentConfig = null as any;
    this.currentData = [];

    setTimeout(() => {
      const result = this.tableService.getModeData(mode);
      this.currentConfig = result.config;
      this.currentData = result.data;
    });
  }



  onPage(event: any) {
    console.log('Page event', event);
  }

  onSort(event: any) {
    console.log('Sort event', event);
  }

  onSelection(event: any) {
    console.log('Selection event', event);
  }
}
