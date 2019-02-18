import { Component, OnInit } from '@angular/core';
import { WorkItem } from '@rjfreund/accomplishments-models';

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.css']
})
export class WorkItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var blah = new WorkItem();
  }

}
