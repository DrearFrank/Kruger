import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { isSameDay, isSameMonth } from 'date-fns';
import { Subject, from, Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import { MatDialog, MatSelect, MatSnackBar } from '@angular/material';
import { DatosReservas } from '../reservas-model';
import { ReservasService } from '../reservas.service';
import { Espadatos } from '../../espacios/espacios-model';
import { EspaciosService } from '../../espacios/espacios.service';
import { DatosDocente } from '../../docente/docente-model';
import { DocenteService } from '../../docente/docente.service';
import { DatosPersona } from '../../personas/personas-model';
import { PersonasService } from '../../personas/personas.service';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

   public ihoras: string;
   public iminutos: string;
   public fhoras: string;
   public fminutos: string;
  // variables para el select
  public lista: string[] = [
    'Defensas',
    'Reunioes',
    'Capacitaciones',
    'Eventos culturales',
    'Jornadas Academicas'];
  public lhoras: string[] = [
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20'
  ];
  public minutos: string [] = [
    '00',
    '15',
    '30',
    '45',
    ];

  @ViewChild('modalContent')
  modalContent: TemplateRef<any>;
  atributos: DatosReservas[]; // atributos proviene de los servicios
  editAtrib: DatosReservas; // variale de
  doceatributo: DatosDocente[];
  espacioatributo: Espadatos[];

  mytime: Date = new Date();

  credenciales: DatosReservas = {
    id_regresv: 0,
    id_persona: 0,
    id_ciclo: 0,
    id_ubicacion: 0,
    id_docente_res: 0,
    fecha_inicio: new Date,
    fecha_fin: new Date,
    hora_inicio: '',
    hora_fin: '',
    reservacion: ''
  };


  @ViewChild('selectHours')
  hourSelector: MatSelect;
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  eventsLoadingForMonth = true;
  reserving = false;
  reserveError = '';
  isValidSelection = false;
  modalData: {
    action: string;
    event: CalendarEvent;
  };

  changedData = 0;
  startDate: Date;
  peopleCount = 0;
  durationHours = 0;
  package;
  price;
  eventsForCurrentMonth = [];
  eventForUser = [];


  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        //     this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];
  refresh: Subject<any> = new Subject();

  activeDayIsOpen = true;

  constructor(private modal: NgbModal, public dialog: MatDialog, public snackBar: MatSnackBar,
    private serviService: ReservasService, private docenteservice: DocenteService, private espaservices: EspaciosService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getDatosDocente();
    this.getDatosEspacios();
  }
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  getDatosDocente(): void {
    this.docenteservice.getSdatosdocente().subscribe(doceatributo =>
      (this.doceatributo = doceatributo));
  }
  getDatosEspacios(): void {
    this.espaservices.getSdatosEspa().subscribe(espacioatributo =>
      (this.espacioatributo = espacioatributo));
  }
  addReserva() {
    this.serviService.addSdatoreserva(this.credenciales).subscribe(
      atributo => this.atributos.push(atributo),
      err => {
        console.error(err);
      }
    );
  }

}
