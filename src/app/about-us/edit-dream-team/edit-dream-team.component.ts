import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-dream-team',
  templateUrl: './edit-dream-team.component.html',
  styleUrls: ['./edit-dream-team.component.css']
})
export class EditDreamTeamComponent {
  dreamTeamData: any;
  id:any;
  file:any;
  path: any = "http://localhost:3000/uploads/"
    constructor(private dataService:DataService,private route: ActivatedRoute,private router:Router,
      private toastr : ToastrService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']

    this.getDreamTeam();
  }
    imageUpload(event:any){
      this.file = event.target.files[0]
    }

    submitForm() {
      this.editDreamTeam();
      this.showAlert();
    }

    showAlert(){
      this.toastr.success("Data Updated successfully!!!!!!");
      setTimeout(() => {
        this.router.navigate(['/abt_dreamteam']); // Replace '/home' with the actual route of your home page
      }, 1000);
    }

  getDreamTeam(){
      this.dataService.getAbtDreamTeam(this.id).subscribe((res)=>{
        this.dreamTeamData = res
      console.log(this.dreamTeamData)
    })
  }

  editDreamTeam(){
    let formData = new FormData();
    if(this.file){
     formData.append('image',this.file) 
    }
    formData.append('id',this.dreamTeamData.id)
    formData.append('image',this.dreamTeamData.image)
    formData.append('name',this.dreamTeamData.name)
    formData.append('post',this.dreamTeamData.post)
    formData.append('description',this.dreamTeamData.description)

    this.dataService.updateDreamTeamData(formData).subscribe(res=>{
      console.log(res)
    })
    }
}
