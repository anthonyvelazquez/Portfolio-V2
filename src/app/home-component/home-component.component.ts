import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor() { }
  Projects = []
  //1: All, 2: Web Apps, 3: Desktop Apps, 4: 3D Models
  CurrentProjectDisplay = 1;

  ngOnInit() {
    this.Projects.push({
      type: 2,
      title1: "GroupMe",
      title2: "Downloader",
      link: "https://groupme-downloader-av.netlify.com/",
      image: "../../assets/GroupMe.jpg",
      desc: "GroupMe Downloader is an Angular web application that allows you to view images from your GroupMe groups and download them as long as you provide your GroupMe Access Token."
    })
    this.Projects.push({
      type: 2,
      title1: "DJ Rooms",
      title2: "",
      link: "https://github.com/anthonyvelazquez/Dj-Rooms",
      image: "../../assets/DJRooms.jpg",
      desc: "DJ Rooms is an Angular web app that allows you to create a Spotify device or (DJ Room) with a key you specify and it will begin playing music that you add to a playlist. People can then use the key to listen from their devices."
    })
    this.Projects.push({
      type: 3,
      title1: "SmartHub",
      title2: "",
      link: "https://github.com/anthonyvelazquez/SmartHub",
      image: "../../assets/SmartHub.jpg",
      desc: "SmartHub is a Django web app that is meant to be used on a Raspberry Pi. I developed the application and build a Smart Mirror with this web app to be able to tell the time, listen to voice commands, and set alarms and reminders."
    })
    this.Projects.push({
      type: 2,
      title1: "Melanie Mena",
      title2: "Portfolio",
      link: "https://mena.netlify.com/",
      image: "../../assets/DJRooms.jpg",
      desc: "Very basic portfolio page that was requested by a friend to be done in only HTML and CSS with no Javascript."
    })
    this.Projects.push({
      type: 2,
      title1: "Life Assistant",
      title2: "Angular App",
      link: "https://github.com/anthonyvelazquez/lifeassistant",
      image: "../../assets/DJRooms.jpg",
      desc: "(WIP) - Web app that allows you to control many aspects of life like; finances, social media, events, etc..."
    })
    this.Projects.push({
      type: 2,
      title1: "Life Assistant",
      title2: "Django Server",
      link: "https://github.com/anthonyvelazquez/lifeassistant-server-django",
      image: "../../assets/DJRooms.jpg",
      desc: "(New/WIP) - Django Server for LifeAssistant Application. Has events and full account creation implemented with reddit api as well."
    })
    this.Projects.push({
      type: 2,
      title1: "Life Assistant",
      title2: "Node Server",
      link: "https://github.com/anthonyvelazquez/lifeassistant-server",
      image: "../../assets/DJRooms.jpg",
      desc: "(Old) - Basic Node Server for LifeAssistant Application. Has Events and basic account creation implemented. Stopped development and switched to Django Server."
    })
    this.Projects.push({
      type: 2,
      title1: "Web Helper",
      title2: "Django Server",
      link: "https://github.com/anthonyvelazquez/helper_server",
      image: "../../assets/DJRooms.jpg",
      desc: "Django Server with functionality and helpers for all my projects"
    })
  }

  Experience1 = {
    name: "System On Grid",
    date: " April 2016 - May 2018",
    pos: "Software Developer Intern",
    descs: ["Created an internal customer support application with Django and Python", "Converted Angular pages to static pages for better web crawling", "Created guides on all the company's features for better customer support"],
    skills: ["HTML/CSS", "JQuery", "Python", "Django", "AngularJS"],
    tools: ["Git", "Visual Code"]
  }
  About = "I am an aspiring developer at System On Grid in Hasbrouck Heights, building web applications for consumer use. In my spare time I work on a few apps, artwork or spend my time traveling. I strive to keep my development skills up to date across a full stack of new and emergent technologies. You can view my projects, skills and contact information below.";
  WebSkills = ["AngularJS", "HTML/CSS", "SASS", "Javascript", "JQuery", "Angular5", "React"];
  OtherSkills = ["C++", "Python", "SFML", "C#", "Allegro", "DirectX", "3D Modeling"];
  ToolEtc = ["Git", "Visual Studio", "Unity", "Unreal Engine", "Blender"]

  SetDisplay(type) {
    this.CurrentProjectDisplay = type;
  }

}
