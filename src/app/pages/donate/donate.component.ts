import { Component, OnInit } from '@angular/core';
import { ContibuteToPatientService } from 'src/services/contibute-to-patient.service';
import { SERVER } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import marked from 'marked';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {
  patientContribution: any = [];

  constructor(
    private contibuteToPatientService: ContibuteToPatientService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      let id = params['id'];
      id ? this.loadDonationById(id) : this.loadAllDonations();
    });
  }

  loadDonationById(id) {
    this.contibuteToPatientService
      .getActivePatientContributionById(id)
      .subscribe(
        res => {
          this.patientContribution = res;
          if (this.patientContribution.length == 0) {
            this.toastr.error('Specific Donation no longer exists');
            this.loadAllDonations();
          }
        },
        error => {
          this.toastr.error('Error fetching Specific Donation');
          this.loadAllDonations();
        }
      );
  }

  loadAllDonations() {
    this.contibuteToPatientService.getAllActivePatientContributions().subscribe(
      res => {
        this.patientContribution = res;
      },
      error => {
        this.toastr.error('Error fetching Contributions');
      }
    );
  }
}
