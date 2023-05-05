import { Component, OnInit } from '@angular/core';
import { DataprojectService } from 'src/app/services/dataproject.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-listproject',
  templateUrl: './listproject.component.html',
  styleUrls: ['./listproject.component.css']
})
export class ListprojectComponent implements OnInit {

  constructor(private data: DataprojectService) { }

  projects:any;

  ngOnInit(): void {

    this.data.getall()
      .subscribe(
        res=>{
          this.projects = res;
        },
        err=>{
          
        }
      );

  }

  delete(id: any){

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
     
        this.data.supprimer(id)
          .subscribe(
            res=>{
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              this.ngOnInit();
            }
          )


      }
    })

  }

}
