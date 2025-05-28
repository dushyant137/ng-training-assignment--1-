// src/app/components/task-form/task-form.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task = { title: '', description: '' };
  isEdit = false;
  taskId: string | null = null;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.taskId = params['id'];
      if (this.taskId) {
        this.isEdit = true;
        this.fetchTask(this.taskId);
      }
    });
  }

  fetchTask(id: string) {
    // Fetch the task for editing
    this.taskService.getTasks().subscribe(tasks => {
      this.task = tasks.find(t => t._id === id);
    });
  }

  saveTask() {
    if (this.isEdit && this.taskId) {
      this.taskService.updateTask(this.taskId, this.task).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.taskService.addTask(this.task).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
