// Angular modules
import { NgIf }                 from '@angular/common';
import { Component }            from '@angular/core';
import { OnInit }               from '@angular/core';
import {inject} from '@angular/core';

// Services
import { StoreService }         from '@services/store.service';

// Components
import { ProgressBarComponent } from '@blocks/progress-bar/progress-bar.component';
import { PageLayoutComponent }  from '@layouts/page-layout/page-layout.component';

import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

import {
  MatDialog,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {DialogJoinProject} from '../dialog-join-project/dialog-join-project';


@Component({
  selector    : 'app-project',
  templateUrl : './project.component.html',
  styleUrls   : ['./project.component.scss'],
  standalone  : true,
  imports     : [PageLayoutComponent, NgIf, ProgressBarComponent, MatTableModule, MatPaginatorModule, MatButtonModule, DialogJoinProject]
})


export class ProjectComponent implements OnInit
{
  displayedColumns: string[] = ['projectId', 'description', 'type', 'owner', 'status', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;

  dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(DialogJoinProject, {
      width: '800px',
      panelClass: 'custom-dialog',
    });
  }

  constructor
  (
    public storeService : StoreService
  )
  { }

  // -------------------------------------------------------------------------------
  // NOTE Init ---------------------------------------------------------------------
  // -------------------------------------------------------------------------------

  public ngOnInit() : void
  {
    setTimeout(_ =>
    {
      this.storeService.isLoading.set(false);
    }, 2000);
  }

  

  


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // -------------------------------------------------------------------------------
  // NOTE Actions ------------------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // NOTE Computed props -----------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // NOTE Helpers ------------------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // NOTE Requests -----------------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // NOTE Subscriptions ------------------------------------------------------------
  // -------------------------------------------------------------------------------

}

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

export interface PeriodicElement {
  projectId: number;
  description: string;
  type: number;
  owner: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {projectId: 1, description: 'Hydrogen', type: 1.0079, owner: 'H', status: 'Active'},
  {projectId: 2, description: 'Helium', type: 4.0026, owner: 'He', status: 'Active'},
  {projectId: 3, description: 'Lithium', type: 6.941, owner: 'Li', status: 'Active'},
  {projectId: 4, description: 'Beryllium', type: 9.0122, owner: 'Be', status: 'Active'},
  {projectId: 5, description: 'Boron', type: 10.811, owner: 'B', status: 'Active'},
  {projectId: 6, description: 'Carbon', type: 12.0107, owner: 'C', status: 'Active'},
  {projectId: 7, description: 'Nitrogen', type: 14.0067, owner: 'N', status: 'Active'},
  {projectId: 8, description: 'Oxygen', type: 15.9994, owner: 'O', status: 'Active'},
  {projectId: 9, description: 'Fluorine', type: 18.9984, owner: 'F', status: 'Active'},
  {projectId: 10, description: 'Neon', type: 20.1797, owner: 'Ne', status: 'Active'},
  {projectId: 11, description: 'Sodium', type: 22.9897, owner: 'Na', status: 'Active'},
  {projectId: 12, description: 'Magnesium', type: 24.305, owner: 'Mg', status: 'Active'},
  {projectId: 13, description: 'Aluminum', type: 26.9815, owner: 'Al', status: 'Active'},
  {projectId: 14, description: 'Silicon', type: 28.0855, owner: 'Si', status: 'Active'},
  {projectId: 15, description: 'Phosphorus', type: 30.9738, owner: 'P', status: 'Active'},
  {projectId: 16, description: 'Sulfur', type: 32.065, owner: 'S', status: 'Active'},
  {projectId: 17, description: 'Chlorine', type: 35.453, owner: 'Cl', status: 'Active'},
  {projectId: 18, description: 'Argon', type: 39.948, owner: 'Ar', status: 'Active'},
  {projectId: 19, description: 'Potassium', type: 39.0983, owner: 'K', status: 'Active'},
  {projectId: 20, description: 'Calcium', type: 40.078, owner: 'Ca', status: 'Active'},
];
