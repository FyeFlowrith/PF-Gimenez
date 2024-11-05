import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateEditUserComponent } from './create-edit-user/create-edit-user.component';
import { User } from '../../../core/interfaces/user.interfaces';
import { UsersService } from '../../../core/services/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'createdAt', 'actions'];
  dataSource: User[] = [];
  isLoading = false;

  constructor(private matDialog: MatDialog, private usersService: UsersService){}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.isLoading = true;
    this.usersService.getUsers().subscribe({
      next: (users) => {
        this.dataSource = users;
      },
      complete: () => {
        this.isLoading = false;
      }
    })
  }

  onDelete(id: number): void {
    this.isLoading = true;
    this.usersService.removeUserById(id).subscribe({
      next: (users) => {
        this.dataSource = users;
      },
      error: (err) => {
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  openModal(editingUser?: User): void {
    this.matDialog
      .open(CreateEditUserComponent, {data: {editingUser}})
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (!!result) {
            if (editingUser) {
             this.handleUpdate(editingUser.id, result);
            } else {
              this.handleAdd(result);
          }
        }
      },
    });
  }

  handleUpdate(id: number, update: User): void {
    this.isLoading = true;
    this.usersService.updateUserById(id, update).subscribe({
      next: (users) => {
        this.dataSource = users;
      },
      error: (err) => {
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  handleAdd(newUser: User): void {
    this.isLoading = true;
    this.usersService.addUser(newUser).subscribe({
      next: (users) => {
        this.dataSource = users;
      },
      error: (err) => {
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
}