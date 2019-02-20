/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, OnInit } from "@angular/core";
import { Vehicle } from "models/vehicle";
import { PoiService } from "service/poi.service";
import { MessageService } from "app/messages/message.service";

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
    providers: [PoiService, MessageService]
})
export class HomeComponent implements OnInit {

    selectVehicle: Vehicle

    vehicles: Vehicle[]

    constructor(private poiService: PoiService) { }

    ngOnInit(): void {
        this.getVehicles();
    }


    getVehicles(): void {
        this.poiService.getVehicles()
            .subscribe(vehicles => this.vehicles = vehicles);
    }

}
