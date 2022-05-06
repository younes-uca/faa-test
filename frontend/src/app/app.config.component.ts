import {Component, OnInit} from '@angular/core';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-config',
    template: `
        <div class="layout-config" [ngClass]="{'layout-config-active': appMain.configActive}" (click)="appMain.onConfigClick($event)">
            <a style="cursor: pointer" id="layout-config-button" class="layout-config-button" (click)="onConfigButtonClick($event)">
                <i class="pi pi-cog"></i>
            </a>
            <div class="layout-config-header">
                <h3>Theme Customization</h3>
                <span>Roma offers different themes for layout, topbar, menu etc.</span>
            </div>
            <div class="layout-config-content">
                <div class="layout-config-section options">
                    <span class="section-name">Menu Mode</span>
                    <div class="p-formgroup-inline menu-type p-grid p-nogutter">
                        <div class="p-field-radiobutton p-md-6">
                            <p-radioButton inputId="static" name="layoutMode" value="static" [(ngModel)]="app.layoutMode"></p-radioButton>
                            <label for="static">Static</label>
                        </div>
                        <div class="p-field-radiobutton p-md-6">
                            <p-radioButton inputId="overlay" name="layoutMode" value="overlay" [(ngModel)]="app.layoutMode"></p-radioButton>
                            <label for="overlay">Overlay</label>
                        </div>
                        <div class="p-field-radiobutton p-md-6">
                            <p-radioButton inputId="horizontal" name="layoutMode" value="horizontal" [(ngModel)]="app.layoutMode" (onClick)="app.inlineUser = false"></p-radioButton>
                            <label for="horizontal">Horizontal</label>
                        </div>
                        <div class="p-field-radiobutton p-md-6">
                                    <p-radioButton inputId="slim" name="layoutMode" value="slim" [(ngModel)]="app.layoutMode"></p-radioButton>
                                    <label for="slim">Slim</label>
                        </div>
                    </div>
                </div>
                <div class="layout-config-section options">
                    <span class="section-name">Menu Color</span>
                    <div class="p-formgroup-inline p-grid p-nogutter">
                        <div class="p-field-radiobutton p-md-6">
                            <p-radioButton inputId="dark" name="menuColor" [value]="false" [(ngModel)]="app.lightMenu"></p-radioButton>
                            <label for="dark">Dark</label>
                        </div>
                        <div class="p-field-radiobutton p-md-6">
                            <p-radioButton inputId="light" name="menuColor" [value]="true" [(ngModel)]="app.lightMenu"></p-radioButton>
                            <label for="light">Light</label>
                        </div>
                    </div>
                </div>
                <div class="layout-config-section options">
                    <span class="section-name">User Profile</span>
                    <div class="p-formgroup-inline p-grid p-nogutter">
                        <div class="p-field-radiobutton p-md-6">
                            <p-radioButton inputId="inline" name="profileMode" [value]="true" [(ngModel)]="app.inlineUser" [disabled]="appMain.isHorizontal()"></p-radioButton>
                            <label for="inline">Inline</label>
                        </div>
                        <div class="p-field-radiobutton p-md-6">
                            <p-radioButton inputId="top" name="profileMode" [value]="false" [(ngModel)]="app.inlineUser"></p-radioButton>
                            <label for="top">Overlay</label>
                        </div>
                    </div>
                </div>

                <div class="layout-config-section options">
                    <span class="section-name">Input Background</span>
                    <div class="p-formgroup-inline">
                        <div class="p-field-radiobutton">
                            <p-radioButton inputId="input_outlined" name="inputstyle" [(ngModel)]="app.inputStyle"  value="outlined"></p-radioButton>
                            <label for="input_outlined">Outlined</label>
                        </div>
                        <div class="p-field-radiobutton">
                            <p-radioButton inputId="input_filled" name="inputstyle" [(ngModel)]="app.inputStyle" value="filled"></p-radioButton>
                            <label for="input_filled">Filled</label>
                        </div>
                    </div>
                </div>

                <div class="layout-config-section dark">
                    <span class="section-name">Ripple Effect</span>
                    <p-inputSwitch [ngModel]="app.ripple" (onChange)="appMain.onRippleChange($event)"></p-inputSwitch>
                </div>

                <div class="layout-config-section options">
                    <span class="section-name">Orientation</span>
                    <div class="p-formgroup-inline p-grid p-nogutter">
                        <div class="p-field-radiobutton p-md-6">
                                <p-radioButton inputId="ltr" name="isRTL" [value]="false" [(ngModel)]="app.isRTL"></p-radioButton>
                                <label for="ltr">LTR</label>
                        </div>
                        <div class="p-field-radiobutton p-md-6">
                            <p-radioButton inputId="rtl" name="isRTL" [value]="true" [(ngModel)]="app.isRTL" ></p-radioButton>
                            <label for="rtl">RTL</label>
                        </div>
                    </div>
                </div>

                <div class="layout-config-section colors">
                    <span class="section-name">Topbar Colors</span>
                    <div class="layout-themes topbar-colors">
                        <div *ngFor="let topbarColor of topbarColors">
                            <a style="cursor: pointer" class="layout-config-option-color" (click)="changeTopbarColor(topbarColor.label, topbarColor.logo)"  [ngStyle]="{'background-color': topbarColor.color}">
                                <i class="pi pi-check" *ngIf="app.topbarColor  === topbarColor.label"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="layout-config-section colors">
                    <span class="section-name">Component Themes</span>
                    <div class="layout-themes">
                            <div *ngFor="let t of themes">
                                <a style="cursor: pointer" (click)="changeTheme(t.label)" [ngStyle]="{'background-color': t.color}">
                                    <i class="pi pi-check" *ngIf="themeColor === t.label"></i>
                                </a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class AppConfigComponent implements OnInit {

    themes: any[];

    themeColor = 'blue';

    topbarColors: any[];

    constructor(public app: AppComponent, public appMain: AppMainComponent) {}

    ngOnInit() {
        this.topbarColors = [
            {label: 'layout-topbar-light', logo: 'logo-roma', color: '#ffffff'},
            {label: 'layout-topbar-dark', logo: 'logo-roma-white', color: '#252529'},
            {label: 'layout-topbar-blue', logo: 'logo-roma-white', color: '#0772B3'},
            {label: 'layout-topbar-green', logo: 'logo-roma-white', color: '#0F8C50'},
            {label: 'layout-topbar-orange', logo: 'logo-roma-white', color: '#C76D09'},
            {label: 'layout-topbar-magenta', logo: 'logo-roma-white', color: '#972BB1'},
            {label: 'layout-topbar-bluegrey', logo: 'logo-roma-white', color: '#406E7E'},
            {label: 'layout-topbar-deeppurple', logo: 'logo-roma-white', color: '#543CD9'},
            {label: 'layout-topbar-brown', logo: 'logo-roma-white', color: '#794F36'},
            {label: 'layout-topbar-lime', logo: 'logo-roma-white', color: '#849201'},
            {label: 'layout-topbar-rose', logo: 'logo-roma-white', color: '#8F3939'},
            {label: 'layout-topbar-cyan', logo: 'logo-roma-white', color: '#0C8990'},
            {label: 'layout-topbar-teal', logo: 'logo-roma-white', color: '#337E59'},
            {label: 'layout-topbar-deeporange', logo: 'logo-roma-white', color: '#D74A1D'},
            {label: 'layout-topbar-indigo', logo: 'logo-roma-white', color: '#3D53C9'},
            {label: 'layout-topbar-pink', logo: 'logo-roma-white', color: '#BF275B'},
            {label: 'layout-topbar-purple', logo: 'logo-roma-white', color: '#7F32DA'}
        ];

        this.themes = [
            {label: 'blue', color: '#0f97c7'},
            {label: 'green', color: '#10B163'},
            {label: 'orange', color: '#E2841A'},
            {label: 'magenta', color: '#B944D6'},
            {label: 'bluegrey', color: '#578697'},
            {label: 'deeppurple', color: '#6952EC'},
            {label: 'brown', color: '#97664A'},
            {label: 'lime', color: '#A5B600'},
            {label: 'rose', color: '#AB5353'},
            {label: 'cyan', color: '#1BA7AF'},
            {label: 'teal', color: '#4EA279'},
            {label: 'deeporange', color: '#F96F43'},
            {label: 'indigo', color: '#435AD8'},
            {label: 'pink', color: '#E93A76'},
            {label: 'purple', color: '#9643F9'}
        ];
    }

    changeTheme(theme: string) {
        this.changeStyleSheetsColor('layout-css', 'layout-' + theme + '.css');
        this.changeStyleSheetsColor('theme-css', 'theme-' + theme + '.css');
        this.themeColor = theme;
    }

    changeTopbarColor(topbarColor, logo) {
        this.app.topbarColor = topbarColor;
        const topbarLogoLink: HTMLImageElement = document.getElementById('topbar-logo') as HTMLImageElement;
        topbarLogoLink.src = 'assets/layout/images/' + logo + '.svg';
    }

    changeStyleSheetsColor(id, value) {
        const element = document.getElementById(id);
        const urlTokens = element.getAttribute('href').split('/');
        urlTokens[urlTokens.length - 1] = value;

        const newURL = urlTokens.join('/');

        this.replaceLink(element, newURL);
    }

    replaceLink(linkElement, href) {
        if (this.isIE()) {
            linkElement.setAttribute('href', href);
        }
        else {
            const id = linkElement.getAttribute('id');
            const cloneLinkElement = linkElement.cloneNode(true);

            cloneLinkElement.setAttribute('href', href);
            cloneLinkElement.setAttribute('id', id + '-clone');

            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);
            });
        }
    }

    isIE() {
        return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
    }

    onConfigButtonClick(event) {
        this.appMain.configActive = !this.appMain.configActive;
        event.preventDefault();
    }

    onConfigCloseClick(event) {
        this.appMain.configActive = false;
        event.preventDefault();
    }
}
