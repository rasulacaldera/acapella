import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/utils/http-client.service';
import { SERVER } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContibuteToPatientService {
  private CONTRIBUTION_SERVICE: string = SERVER + '/contribute-to-patients';

  constructor(private http: HttpClientService) {}

  getAllActivePatientContributions() {
    return this.http.get(this.CONTRIBUTION_SERVICE + '?active_eq=true');
  }

  getActivePatientContributionById(id) {
    return this.http.get(
      this.CONTRIBUTION_SERVICE + '?active_eq=true&id_eq=' + id
    );
  }
}
