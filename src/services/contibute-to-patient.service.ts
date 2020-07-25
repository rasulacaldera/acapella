import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/utils/http-client.service';
import { env } from 'process';
import { environment, SERVER } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContibuteToPatientService {
  private CONTRIBUTION_SERVICE: string = SERVER + 'contribute-to-patients';

  constructor(private http: HttpClientService) {}

  getAllActivePatientContributions() {
    return this.http.get(this.CONTRIBUTION_SERVICE);
  }
}
