export class LoginParam {
  username: string = ''
  password: string = ''
  clear() {
    this.username = ''
    this.password = ''
  }
}

export enum Role {
  UNK = 'UNK',
  DOC = 'DOC',
  PHA = 'PHA'
}

export class Envelope {
  summary: PrescriptionSummary = new PrescriptionSummary()
  data: string = ''
  token: string = ''
  stamp: number = -1
  unsealed?: boolean
}
export class PrescriptionSummary {
  id: string = ''
  patient: string = ''
  patientPhone: string = ''
  doctor: string = ''
  medicalInstitution: string = ''
  issueDate: number = -1
  stage?: string
}
