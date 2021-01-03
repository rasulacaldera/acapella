import { Component, OnInit } from '@angular/core';
import { ContibuteToPatientService } from 'src/services/contibute-to-patient.service';
import { SERVER } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import marked from 'marked';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {
  patientContribution: any = [];

  constructor(
    private contibuteToPatientService: ContibuteToPatientService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.contibuteToPatientService.getAllActivePatientContributions().subscribe(
      res => {
        this.patientContribution = res;
        this.patientContribution = this.patientContribution.map(
          contribution => {
            return {
              ...contribution,
              collapased: true
            };
          }
        );
      },
      error => {
        this.toastr.error('Error fetching Contributions');
      }
    );
  }
}
