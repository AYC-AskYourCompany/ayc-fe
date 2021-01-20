import { Skills } from '../forms/skills';

export class OptionalData {
  companyId: string;
  skills: Skills[];
  professionalPosition: string;
  personalDescription: string;

  constructor() {
    this.companyId = '';
    this.skills = [];
    this.professionalPosition = '';
    this.personalDescription = '';
  }
}
