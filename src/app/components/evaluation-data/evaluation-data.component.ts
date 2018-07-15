import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluation-data',
  templateUrl: './evaluation-data.component.html',
  styleUrls: ['./evaluation-data.component.scss']
})
export class EvaluationDataComponent implements OnInit {

	show: boolean = true;

	constructor() { }

	ngOnInit() {
	}

	handleChanges(){
		this.show = ! this.show;
	}
}
