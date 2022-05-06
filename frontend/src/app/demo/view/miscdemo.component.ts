import {Component, OnInit} from '@angular/core';

@Component({
    templateUrl: './miscdemo.component.html',
    styles: [`
		:host ::ng-deep .misc-demo .p-button.p-widget {
		    min-width: 6rem;
	    }

		:host ::ng-deep .misc-demo .badges .p-badge {
		    margin-right: .5rem;
		}

		:host ::ng-deep .misc-demo .badges .p-tag {
			margin-right: .5rem;
		}
    `]
})
export class MiscDemoComponent implements OnInit {

    value = 0;

    ngOnInit() {
        const interval = setInterval(() => {
            this.value = this.value + Math.floor(Math.random() * 10) + 1;
            if (this.value >= 100) {
                this.value = 100;
                clearInterval(interval);
            }
        }, 2000);
    }
}
