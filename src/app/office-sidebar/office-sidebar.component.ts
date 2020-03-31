import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-office-sidebar',
  templateUrl: './office-sidebar.component.html',
  styleUrls: ['./office-sidebar.component.css']
})
export class OfficeSidebarComponent implements OnInit {
  panelStatus:boolean = false;
  selectedTab: string = 'Clauses';
  toggled: boolean = false;
  searchparams: string;
  selectedindex:any;
  isPanelOpen: boolean = true;
  itemsToShow:any;

  data: any =
  [
    {
      name: "Parent One",
      childProperties:
        [
          { name: "Property One" },
          { name: "Property Two" }
        ]
    },
    {
      name: "Parent Two",
      childProperties:
        [
          { name: "Property Three" },
          { name: "Property Four" },
          { name: "Property Five" },
        ]
    },
    {
      name: "Parent Three",
      childProperties:
        [
          { name: "Property Six" },
          { name: "Property Seven" },
          { name: "Property Eight" },
        ]
    }
  ]
  
  constructor() {
   

   }

  ngOnInit() {
  
  }
  
  OpenSidePanel() {
    this.panelStatus = !this.panelStatus;
    this.clearData();
  }
  selectTab(value) {
    if(value == this.selectedTab) {
       console.log("Do Nothing")
    }
    else {
      this.clearData();
    }
    if(value == "Clauses") {
      this.selectedTab = "Clauses";
      
    }
    else if (value == "Variables") {
      this.selectedTab = "Variables";
    }

  }
  search(identifier,searchparameter: HTMLInputElement){
    this.searchparams = searchparameter.value;
    if(this.searchparams != '' && this.searchparams != undefined){
      console.log(identifier);
      console.log(searchparameter.value);
      const regExp = new RegExp(searchparameter.value, 'i');
 
      const result = this.itemsToShow.reduce((acc, { name, childProperties = [] }) => {
          const next = childProperties.filter(child => child.name.match(regExp));
      
          if (name.match(regExp) || next.length > 0) {
              acc.push({ name, childProperties: next });
          }
          return acc;
      }, []);
     this.itemsToShow = result;
    }
    else {
      this.itemsToShow = this.data;
    }
    

  }

  clearData() {
    this.searchparams = '';
    this.itemsToShow = this.data;
    
  }

  toggleAccordian() {
    console.log(this.data);
    this.toggled= !this.toggled;
}
calClass(index){
    
    
  if(this.selectedindex == index && this.isPanelOpen != true){
    this.selectedindex = '';
    this.isPanelOpen = true;
  }
  else{
    this.selectedindex = index;
    this.isPanelOpen = false;
  }
  
  }

}
