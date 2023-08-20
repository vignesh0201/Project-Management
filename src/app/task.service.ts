import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { moveItemInArray } from '@angular/cdk/drag-drop';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks = [
    { id: 1, title: 'Task 1', status: 'Todo' },
    { id: 2, title: 'Task 2', status: 'InProgress' },
    { id: 3, title: 'Task 3', status: 'Done' },
  ];

  draggedIndex = -1;

  private tasksSubject = new BehaviorSubject(this.tasks);

  getTasks() {
    return this.tasksSubject.asObservable();
  }

  updateTaskStatus(taskId: number, newStatus: string) {
    const task = this.tasks.find((t) => t.id === taskId);
    if (task) {
      task.status = newStatus;
      this.tasksSubject.next([...this.tasks]);
    }
  }

  moveTaskWithinList(list: string, currentIndex: number) {
    const filteredTasks = this.tasks.filter((task) => task.status === list);
    moveItemInArray(filteredTasks, this.draggedIndex, currentIndex);
    this.tasksSubject.next([...this.tasks]);
  }
}
