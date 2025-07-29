import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MaterialModule } from '../shared/material.module';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
