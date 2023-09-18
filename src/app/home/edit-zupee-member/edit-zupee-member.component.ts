import { Component,OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { zupeeMember } from '../home.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-zupee-member',
  templateUrl: './edit-zupee-member.component.html',
  styleUrls: ['./edit-zupee-member.component.css']
})
export class EditZupeeMemberComponent {
  id:any;
  file:any;
  data:any;
  zupeeMember = new zupeeMember()
  path = 'http://localhost:3000/uploads/'
  constructor(private dataService:DataService,private route: ActivatedRoute,private router:Router,
    private toastr: ToastrService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']

    this.getZupeeMember();
  }

  submitForm() {
    this.editZupeeMember();
    this.showAlert();
  }
  showAlert(){
    this.toastr.success("Data Updated successfully!!!!!!");
    setTimeout(() => {
      this.router.navigate(['/zupeeMember']); // Replace '/home' with the actual route of your home page
    }, 1000);
  }
  imageUpload(event:any){
    this.file = event.target.files[0]
  }
  getZupeeMember(){
    this.dataService.getZupeeMember(this.id).subscribe((res)=>{
      this.data = res;
      this.zupeeMember = this.data
      console.log(this.zupeeMember)
    })
   }
  
   editZupeeMember(){
    let formData = new FormData();
    if(this.file){
      formData.append('image',this.file)
    }
      formData.append('id',this.zupeeMember.id)
      formData.append('image',this.zupeeMember.image)
      this.dataService.updateZupeeMemberData(formData).subscribe(res=>{
          console.log(res);
      })
   }

}
