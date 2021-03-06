import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountUpModule } from 'countup.js-angular2';
import { ChartsModule } from 'ng2-charts';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import {ScheduleModule, AgendaService, DayService, WeekService, WorkWeekService, MonthService } from '@syncfusion/ej2-angular-schedule';
import { CalendarModule, DateAdapter } from 'angular-calendar';


import { DashboardGeneralComponent } from './components/dashboard-general/dashboard-general.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { HomeComponent } from './components/home/home.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { DashboardClientComponent } from './components/dashboard-client/dashboard-client.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { StatistiquesComponent } from './components/statistiques/statistiques.component';
import { ParametresComponent } from './components/parametres/parametres.component';
import { ClientsListComponent } from './components/jobs/clients/clients-list/clients-list.component';
import { ClientsAddComponent } from './components/jobs/clients/clients-add/clients-add.component';
import { ClientsOneComponent } from './components/jobs/clients/clients-one/clients-one.component';
import { ClientUpdateComponent } from './components/jobs/clients/client-update/client-update.component';
import { ProspectsListComponent } from './components/jobs/prospects/prospects-list/prospects-list.component';
import { ProspectsOneComponent } from './components/jobs/prospects/prospects-one/prospects-one.component';
import { ProspectsAddComponent } from './components/jobs/prospects/prospects-add/prospects-add.component';
import { ProspectsUpdateComponent } from './components/jobs/prospects/prospects-update/prospects-update.component';
import { ProjetsComponent } from './components/projets/projets.component';
import { JournalComponent } from './components/journal/journal.component';
import { ClientStatComponent } from './components/client-stat/client-stat.component';
import { ClientContactComponent } from './components/client-contact/client-contact.component';
import { AgendaLocalComponent } from './components/agenda-local/agenda-local.component';
import { FilterPipe } from './filter.pipe';






@NgModule({
  declarations: [
    AppComponent,
    DashboardGeneralComponent,
    ConnexionComponent,
    HomeComponent,
    InscriptionComponent,
    DashboardClientComponent,
    SidenavComponent,
    AgendaComponent,
    StatistiquesComponent,
    ParametresComponent,
    ClientsListComponent,
    ClientsAddComponent,
    ClientsOneComponent,
    ClientUpdateComponent,
    ProspectsListComponent,
    ProspectsOneComponent,
    ProspectsAddComponent,
    ProspectsUpdateComponent,
    ProjetsComponent,
    JournalComponent,
    ClientStatComponent,
    ClientContactComponent,
    AgendaLocalComponent,
    FilterPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ChartsModule,
    CountUpModule,
    LeafletModule.forRoot(),
    ScheduleModule,

  ],
  providers: [AgendaService, DayService, WeekService, WorkWeekService, MonthService],
  bootstrap: [AppComponent],

})
export class AppModule { }
