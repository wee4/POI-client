import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoiService } from 'service/poi.service';
import { MessageService } from './messages/message.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [PoiService, MessageService]
})
export class AppComponent {
    constructor(private router: Router) {
    }
}
