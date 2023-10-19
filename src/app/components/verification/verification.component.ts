import { Component } from '@angular/core';
import { Verify } from 'src/app/models/verify';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',

})
export class VerificationComponent {
  nameRef:string="";
  phonenumberRef:number= 0;
  emailRef:string="";
  arrays:Verify[]=[];
  Add:string='Add';
  editId:number=0;
  add(){
    if(this.editId===0){
      let array = {
        id:this.arrays.length + 1,
        name:this.nameRef,
        phonenumber:this.phonenumberRef,
        email:this.emailRef,


      };this.arrays.push(array);
      
    }else{
       let arraynew = this.arrays.map((array) => {
        if(array.id === this.editId){
          return{
            ...array,
            id:this.editId,
            name:this.nameRef,
            phonenumber:this.phonenumberRef,
            email:this.emailRef
          };
        }else{
          return array;
        }
       });
       this.arrays=arraynew;
       this.Add="Add";
       this.editId=0;
    }
    this.emailRef="";
    this.nameRef="";
    this.phonenumberRef=0;
  }
  
  edit(id:number){
    this.editId=id;
    this.Add='Edit';
    let Arraynew = this.arrays.find((array)=>array.id == id);
    if(Arraynew){
      this.nameRef=Arraynew.name;
      this.phonenumberRef=Arraynew.phonenumber;
      this.emailRef=Arraynew.email;
      
    }
  }
  delete(id:number){
    this.arrays=this.arrays.filter((array)=> array.id !== id);
  }
}
