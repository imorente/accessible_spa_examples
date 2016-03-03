import {Component} from 'angular2/core';
import {announce_view_loaded} from '../../shared/utils';

@Component({
  selector: 'sd-about',
  moduleId: module.id,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  ngAfterViewInit() {
    announce_view_loaded();
  }
}
