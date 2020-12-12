import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-select-service',
  templateUrl: './select-service.component.html',
  styleUrls: ['./select-service.component.less']
})
export class SelectServiceComponent implements OnInit {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router
  ){
    this.matIconRegistry.addSvgIcon(
      "camera",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/selectIcon/undraw_fashion_photoshoot_mtq8.svg")
    )
    this.matIconRegistry.addSvgIcon(
      "makeup",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/selectIcon/undraw_makeup_artist_rxn8.svg")
    )
  }

  ngOnInit(): void {
  }

  goMakeup(){
    this.router.navigateByUrl('/makeup');
  }

  goCamera(){
    this.router.navigateByUrl('/camera');
  }

}
