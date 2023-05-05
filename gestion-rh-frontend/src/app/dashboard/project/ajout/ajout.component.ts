import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataprojectService } from 'src/app/services/dataproject.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  constructor(private data: DataprojectService, private router: Router) { }

  project = {

    name: '',
    proglanguage:'',
    technology:'',
    codelink: '',
    ciTools: [],
    cdTools: []

  }

  ajouter(){

    this.data.create(this.project)
      .subscribe(
        res=>{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your dep has been saved',
            showConfirmButton: false,
            timer: 1500
          })

          this.router.navigate(['/dashboard/project/list'])
    
        }
      );

  }


  ngOnInit(): void {
  }

}
