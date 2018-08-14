import { Component, OnInit } from '@angular/core';

// For HTTP
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

// For Route: Accesses routing parameter for id
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  // user$: Object;
  // Changed to any, to overcome error while running "ng build --prod" 
  // (https://stackoverflow.com/questions/18961203/typescript-any-vs-object)
  // ERROR in src\app\details\details.component.html(5,5): : Property 'name' does not exist on type 'Object'.
  user$: any;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe( params => this.user$ = params.id);
  }

  ngOnInit() {
    this.data.getUser(this.user$).subscribe(
      data => this.user$ = data
    );
  }

}
