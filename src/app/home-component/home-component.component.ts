import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Experience1 = {
    name: "System On Grid",
    date: " May 17 - Present",
    pos: "Software Developer Intern",
    descs: ["Created an internal customer support application with Django and Python", "Converted Angular pages to static pages for better web crawling", "Created guides on all the company's features for better customer support"],
    skills: ["HTML/CSS", "JQuery", "Python", "Django", "AngularJS"],
    tools: ["Git", "Visual Code"]
  }
  About = "I am an aspiring developer at System On Grid in Hasbrouck Heights, building web applications for consumer use. In my spare time I work on a few apps, artwork or spend my time traveling. I strive to keep my development skills up to date across a full stack of new and emergent technologies. You can view my projects, skills and contact information below.";
  WebSkills = ["AngularJS", "HTML/CSS", "SASS", "Javascript", "JQuery", "Angular5", "React"];
  OtherSkills = ["C++", "Python", "SFML", "C#", "Allegro", "DirectX", "3D Modeling"];
  ToolEtc = ["Git", "Visual Studio", "Unity", "Unreal Engine", "Blender"]
}
