import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  baseUrl = 'https://hk4e701wqh.execute-api.us-east-1.amazonaws.com/dev'
  messagesURL: string;

  constructor(
    private http: HttpClient
  ) { 
    this.messagesURL = this.baseUrl + '/messages'
  }

  getMessage(messageId: string) {
    // TODO: add location attributes in request
    let endpoint = this.messagesURL + `/${messageId}`;
    let options = {'headers': {'content-type': 'application/json'}};
    return this.http.get<Message>(endpoint, options);
  }

}

export interface Message {
  id: string;
  url: string;
  api_url: string;
  usdz_url: string;
  plane_orientation: string;
  message_location_image_url: string;
  latitude: string;
  longitude: string;
  location_name: string;
  location_areas_of_interest: string;
  creation_dt: string;
  user: User;
}

export interface User {
  user_id: string;
  email: string;
  first_name: string;
  last_name: string;
  creation_dt: string;
}
