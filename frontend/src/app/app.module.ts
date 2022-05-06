import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LocationStrategy, HashLocationStrategy, CommonModule, DatePipe} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './controller/interceptors/jwt.interceptor';
import {MenuItem, MessageService, SelectItemGroup} from 'primeng/api';

import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { GalleriaModule } from 'primeng/galleria';
import { InplaceModule } from 'primeng/inplace';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { KnobModule } from 'primeng/knob';
import { LightboxModule } from 'primeng/lightbox';
import { ListboxModule } from 'primeng/listbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { PickListModule } from 'primeng/picklist';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { SkeletonModule } from 'primeng/skeleton';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderModule } from 'primeng/slider';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SplitterModule } from 'primeng/splitter';
import { StepsModule } from 'primeng/steps';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { TerminalModule } from 'primeng/terminal';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TimelineModule } from 'primeng/timeline';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { AppComponent } from './app.component';
import { AppCodeModule } from './app.code.component';
import { AppMainComponent } from './app.main.component';
import { AppConfigComponent } from './app.config.component';
import { AppCrudComponent } from './pages/app.crud.component';
import { AppCalendarComponent } from './pages/app.calendar.component';
import { AppTimelineDemoComponent } from './pages/app.timelinedemo.component';
import { AppNotfoundComponent } from './pages/app.notfound.component';
import { AppErrorComponent } from './pages/app.error.component';
import { AppAccessdeniedComponent } from './pages/app.accessdenied.component';
import { AppMenuComponent } from './app.menu.component';
import { AppMenuitemComponent } from './app.menuitem.component';
import { AppRightMenuComponent } from './app.right-menu.component';
import { AppTopBarComponent } from './app.topbar.component';
import { AppFooterComponent } from './app.footer.component';
import { FloatLabelDemoComponent } from './demo/view/floatlabeldemo.component';
import { InvalidStateDemoComponent } from './demo/view/invalidstatedemo.component';
import { InputDemoComponent } from './demo/view/inputdemo.component';
import { ButtonDemoComponent } from './demo/view/buttondemo.component';
import { EmptyDemoComponent } from './demo/view/emptydemo.component';
import { ChartsDemoComponent } from './demo/view/chartsdemo.component';
import { FileDemoComponent } from './demo/view/filedemo.component';
import { DashboardDemoComponent } from './demo/view/dashboarddemo.component';
import { DocumentationComponent } from './demo/view/documentation.component';
import { CountryService } from './demo/service/countryservice';
import { EventService } from './demo/service/eventservice';
import { NodeService } from './demo/service/nodeservice';
import { MenuService } from './app.menu.service';
import { CustomerService } from './demo/service/customerservice';
import { PhotoService } from './demo/service/photoservice';
import { ProductService } from './demo/service/productservice';
import { IconService } from './demo/service/iconservice';
import { ConfirmationService, SharedModule } from 'primeng/api';
import { CodeEditorModule } from '@ngstack/code-editor';

import { AccessDeniedComponent } from './auth/access-denied/access-denied.component';
import { UserListComponent } from './module/user-list/user-list.component';
import { UserService } from './controller/service/user.service';
import { RoleService } from './controller/service/role.service';
import { HomeComponent } from './demo/view/home/home.component';
import {InputSwitchModule} from 'primeng/inputswitch';

import {ChercheurModule} from './module/chercheur/chercheur.module';
import {ChercheurRoutingModule} from './module/chercheur/chercheur-routing.module';
import {AdminModule} from './module/admin/admin.module';
import {AdminRoutingModule} from './module/admin/admin-routing.module';
@NgModule({
  imports: [
    ButtonModule,
    PasswordModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    PanelMenuModule,
    RadioButtonModule,
    InputTextModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    SplitButtonModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    CardModule,
    ChercheurModule,
    ChercheurRoutingModule,
    AdminModule,
    AdminRoutingModule,
  ],
  declarations: [
    AppComponent,
    AccessDeniedComponent,

    AppMainComponent,
    AppMenuComponent,
    AppMenuitemComponent,
    AppConfigComponent,
    AppRightMenuComponent,
    AppTopBarComponent,
    AppFooterComponent,
    DashboardDemoComponent,
    FloatLabelDemoComponent,
    InvalidStateDemoComponent,
    InputDemoComponent,
    ButtonDemoComponent,
    ChartsDemoComponent,
    EmptyDemoComponent,
    FileDemoComponent,
    DocumentationComponent,
    AppCalendarComponent,
    AppTimelineDemoComponent,
    AppNotfoundComponent,
    AppErrorComponent,
    AppAccessdeniedComponent,
    UserListComponent,
    HomeComponent
  ],
  providers: [
    /*    { provide: LocationStrategy, useClass: HashLocationStrategy }, */
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    CountryService,
    CustomerService,
    EventService,
    UserService,
    IconService,
    NodeService,
    PhotoService,
    ProductService,
    MenuService,
    RoleService,
    MessageService,
    ConfirmationService,
    DatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
