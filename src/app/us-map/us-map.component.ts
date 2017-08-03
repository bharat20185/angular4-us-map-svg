import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsMapService } from './us-map.service';

@Component({
  selector: 'us-map',
  templateUrl: './us-map.component.html',
  styleUrls: ['./us-map.component.css']
})
export class UsMapComponent implements OnInit {
	coordinates: object;
	@Input() fillColor: string = "#FFFFFF";
	@Input() fillStateColor: string = "#FF9900";
	@Input() strokeColor: string = "#000000";
  	@Output('onMapClick') click = new EventEmitter();

  	constructor(private usMapService: UsMapService) { }

  	ngOnInit() {
    	this.usMapService.getUsMapCoordinates().then(data => this.coordinates = data);
  	}

  	onUsMapClick(state){
		this.click.emit({"state-abbr":state});
  	}
}
