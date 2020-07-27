import { Component, OnInit } from '@angular/core';
import { ContibuteToPatientService } from 'src/services/contibute-to-patient.service';
import { SERVER } from 'src/environments/environment';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {
  patientContribution: any = [];

  constructor(private contibuteToPatientService: ContibuteToPatientService) {}

  ngOnInit() {
    this.contibuteToPatientService.getAllActivePatientContributions().subscribe(
      res => {
        this.patientContribution = res;
        console.log(this.patientContribution);
      },
      error => {
        console.error(error);
      }
    );
  }

  openFile(document) {
    console.log('Clicked');

    window.open(SERVER + document.url, '_blank');
  }
}
