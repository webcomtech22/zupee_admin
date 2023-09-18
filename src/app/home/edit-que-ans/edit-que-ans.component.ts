import { Component,OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { queAns } from '../home.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-que-ans',
  templateUrl: './edit-que-ans.component.html',
  styleUrls: ['./edit-que-ans.component.css']
})
export class EditQueAnsComponent implements OnInit{
  id:any;
  file:any;
  data:any;
  queAns = new queAns()
  path = 'http://localhost:3000/uploads/'
  constructor(private dataService:DataService,private route: ActivatedRoute,private router:Router,
    private toastr:ToastrService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']

    this.getOurGame();
  }

  submitForm() {
    this.editQueAns();
    this.showAlert();
  }
  showAlert(){
    this.toastr.success("Data Updated successfully!!!!!!");
    setTimeout(() => {
      this.router.navigate(['/queAns']); // Replace '/home' with the actual route of your home page
    }, 1000);
  }
  imageUpload(event:any){
    this.file = event.target.files[0]
  }
  getOurGame(){
    this.dataService.getQueAns(this.id).subscribe((res)=>{
      this.data = res;
      this.queAns = this.data
      console.log(this.queAns)
    })
   }

   editQueAns(){
    let formData = new FormData();
      formData.append('id',this.queAns.id)
      formData.append('question',this.queAns.question)
      formData.append('answer',this.queAns.answer)

      this.dataService.updateQueAnsData(formData).subscribe(res=>{
          console.log(res);
      })
   }
  
}
