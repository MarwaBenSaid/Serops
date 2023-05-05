import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataprojectService } from 'src/app/services/dataproject.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-updateproject',
  templateUrl: './updateproject.component.html',
  styleUrls: ['./updateproject.component.css']
})
export class UpdateprojectComponent implements OnInit {

  id: any;
  project: any;

  constructor( private activatedRoute: ActivatedRoute , 
               private data: DataprojectService ,
               private router: Router
    ) { }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.data.getbyid(this.id)
      .subscribe(
        res=>{
          this.project = res;
          console.log(this.project);
          
        }
      );


  }

  update(){

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to update this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update it!'
    }).then((result) => {
      if (result.isConfirmed) {
      
        this.data.update( this.id , this.project )
          .subscribe(
            res=>{
              this.router.navigate(['/dashboard/project/list']);
            }
          )

      }
    })

  }


}
