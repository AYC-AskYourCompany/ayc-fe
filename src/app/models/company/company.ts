import { CompanyMember } from './companyMember';

export class Company {
  companyId: string;
  companyName: string;
  companyDescription: string;
  ceo: string;
  companyMembers: CompanyMember[];
}
