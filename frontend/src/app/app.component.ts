import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
//import { TranslateService } from '@ngx-translate/core';
import {Observable} from 'rxjs';
import {RoleService} from './controller/service/role.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
    layoutMode = 'static';
    lightMenu = true;
    topbarColor = 'layout-topbar-blue';
    inlineUser = false;
    isRTL = false;
    inputStyle = 'outlined';
    ripple = true;
    private role$: Observable<string>;

    // constructor(private primengConfig: PrimeNGConfig, public translateService: TranslateService) {
    //     translateService.addLangs(['en', 'fr']);
    //     translateService.setDefaultLang('fr');
    //     const browserLang = translateService.getBrowserLang();
    //     translateService.use(browserLang.match(/en|fr/) ? browserLang : 'fr');
    // }

    constructor(private primengConfig: PrimeNGConfig, private roleService: RoleService) {
    }

    ngOnInit() {
        this.primengConfig.ripple = true;
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            if(role.toLowerCase()==='admin') {
                this.topbarColor='layout-topbar-green';
            }else{
                this.topbarColor='layout-topbar-blue';
            }

        });
    }


}
