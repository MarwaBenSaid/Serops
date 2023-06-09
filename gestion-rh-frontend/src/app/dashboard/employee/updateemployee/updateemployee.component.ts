import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataprojectService } from 'src/app/services/dataproject.service';
import { DataemployeeService } from 'src/app/services/dataemployee.service';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {

  id: any;
  employee: any;
  projects: any;

  photo: any;
  constructor(private actRoute: ActivatedRoute , 
    private dataemp: DataemployeeService,
    private dataproject: DataprojectService,
    private router: Router
    ) { }

  select(e:any){
    this.photo = e.target.files;
  }  

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.dataemp.getbyid(this.id)
      .subscribe(
        res=>{
          this.employee = res;
        }
      );
    this.dataproject.getall()
      .subscribe(
        res=>{
          this.projects = res;
        }
      );    

  }


  update(){

    let form = new FormData();
    form.append('name', this.employee.name);
    form.append('lastname', this.employee.lastname);
    form.append('email', this.employee.email);
    form.append('tel', this.employee.tel);
    form.append('address', this.employee.address);
    form.append('idPr', this.employee.idPr);
    if(this.photo){
      form.append('image', this.photo);
    }else{
      form.append('image', this.employee.image);
    }

    this.dataemp.update( this.id, this.employee )
      .subscribe(
        res=>{
          this.router.navigate(['/dashboard/employee/list']);
        }
      );


  }

}
