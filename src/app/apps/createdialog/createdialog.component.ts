import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-createdialog',
  templateUrl: './createdialog.component.html',
  styleUrls: ['./createdialog.component.css']
})
export class CreatedialogComponent implements OnInit {
  projectForm: any;

  constructor(private projectService: ApiService) {}
  ngOnInit(): void {
    this.projectForm = new FormGroup({
      projectName: new FormControl('', Validators.required),
      companyName: new FormControl('', Validators.required),
      comments: new FormControl('')
    });
  }

  onSubmit() {
    if (this.projectForm.valid) {
      this.projectService.addProject(this.projectForm.value);
      this.projectForm.reset();
    }
  }
  }
