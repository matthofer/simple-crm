import { Component } from '@angular/core';
import { MaterialModule } from '../shared/material.module';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
})
export class DialogAddUserComponent {}
