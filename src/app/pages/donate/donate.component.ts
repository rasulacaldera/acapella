import { Component, OnInit } from '@angular/core';
import { ContibuteToPatientService } from 'src/services/contibute-to-patient.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {
  constructor(private contibuteToPatientService: ContibuteToPatientService) {}

  ngOnInit() {
    this.contibuteToPatientService.getAllActivePatientContributions().subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.error(error);
      }
    );
  }
}
