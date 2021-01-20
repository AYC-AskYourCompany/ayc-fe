import { OptionalData } from './optional-data';
import { AuthService } from '../../shared/services/auth.service';

export class PersonalData {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  optionalData: OptionalData;

  constructor(username: string, email: string) {
    this.username = username;
    this.email = email;
    this.firstName = '';
    this.lastName = '';
    this.optionalData = new OptionalData();
  }
}
