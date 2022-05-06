import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { EventService } from '../service/eventservice';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ProductService } from '../service/productservice';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./tabledemo.scss']
})
export class DashboardDemoComponent implements OnInit {

    products: any[];

    items: MenuItem[];

    chartData: any;

    chartOptions: any;

    events: any[];

    fullcalendarOptions: any;

    constructor(private eventService: EventService, private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProducts().then(data => this.products = data);

        this.items = [
            { label: 'Save', icon: 'pi pi-check' },
            { label: 'Update', icon: 'pi pi-refresh' },
            { label: 'Delete', icon: 'pi pi-trash' },
        ];

        this.chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Sales',
                data: [12, 19, 3, 5, 2, 3, 9],
                borderColor: [
                    '#0F97C7',
                ],
                borderWidth: 3,
                borderDash: [5, 5],
                fill: false,
                pointRadius: 3
            }, {
                label: 'Income',
                data: [1, 2, 5, 3, 12, 7, 15],
                backgroundColor: [
                    'rgba(187,222,251,0.2)',
                ],
                borderColor: [
                    '#578697',
                ],
                borderWidth: 3,
                fill: true
            },
            {
                label: 'Expenses',
                data: [7, 12, 15, 5, 3, 13, 21],
                borderColor: [
                    '#1BA7AF',
                ],
                borderWidth: 3,
                fill: false,
                pointRadius: [4, 6, 4, 12, 8, 0, 4]
            },
            {
                label: 'New Users',
                data: [3, 7, 2, 17, 15, 13, 19],
                borderColor: [
                    '#E2841A',
                ],
                borderWidth: 3,
                fill: false
            }]
        };

        this.chartOptions = {
            responsive: true,
            hover: {
                mode: 'index'
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Month'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                }]
            }
        };

        this.eventService.getEvents().then(events => { this.events = events; });

        this.fullcalendarOptions = {
            plugins:[dayGridPlugin, timeGridPlugin, interactionPlugin],
            defaultDate: '2017-02-12',
            header: {
                left: 'prev,next',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            editable: true
        };
    }
}
