import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactDataService {

  public nom: string | null = null;
  public prenom: string = "";
  public age: string = "";
  public email : string = "";
  public commentaire: string = "";

}
