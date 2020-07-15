import { Component, OnInit } from '@angular/core';
interface Student{
  id:number,
  name:string,
  age:number
}
@Component({
  selector: 'app-flighs-home',
  templateUrl: './flighs-home.component.html',
  styleUrls: ['./flighs-home.component.scss']
})
export class FlighsHomeComponent implements OnInit {

  public students:Array<Student>;
  constructor() { 
    this.students = [
      {
        id:1,
        name:"ahmed",
        age:26
      },
      {
        id:2,
        name:"ali",
        age:25
      },
      {
        id:3,
        name:"amr",
        age:27
      },
    ]
  }
  
  addStudent(){
    return this.students = [
      {
        id:1,
        name:"ahmed",
        age:26
      },
      {
        id:2,
        name:"ali",
        age:25
      },
      {
        id:3,
        name:"amr",
        age:27
      },
      {
        id:4,
        name:"Tamer",
        age:30
      }
    ]
  }
  track(student:Student){
    return student.id
  }
  ngOnInit(): void {
  }

}

