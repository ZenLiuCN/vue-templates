export interface Response<T> {
  status: number | string
  message?: string
  data: T
}

export interface UserInfo {
  id: number
  name: string
  username: string
  password: string
  institution: string
  role: string
  token?: string
}

export interface DrugDict {
  uid: string
  py: string
  name: string
  insureLevel: string
  productName: string
  strength: string
  form: string
  unit: string
  permitCode: string
  manufacturer: string
}

export interface ICDDict {
  code: string
  py: string
  value: string
}
export interface Crypto {
  token: string
  key: string
}
