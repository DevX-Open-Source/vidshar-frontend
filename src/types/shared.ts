export type Accountant = {
  accountantId: number
  accountantName: string
  address: Address
  cellphone: string | null
  cnpj: string
  cpf: string | null
  email: string
  filled: boolean
  phone: string | null
}

export type Address = {
  addressId: number
  addressName: string
  city: string
  complement: string | null
  neighborhood: string
  number: number | null
  state: string
  stateSymbol: string
  zipcode: string
}

export type ViacepAddress = {
  bairro?: string | null
  cep?: string | null
  complemento?: string | null
  ddd?: string | null
  erro?: boolean
  gia?: string | null
  ibge?: string | null
  localidade?: string | null
  logradouro?: string | null
  siafi?: string | null
  uf?: string | null
}

export type Department = {
  departmentId: number
  departmentName: string
}

export type SelectOption = {
  label: string
  value: string
}

export type SelectGroupOption = {
  groupName: string
} & SelectOption

export enum ToastTypeMessage {
  error = 'error',
  success = 'success'
}

export type EnvironmentTheme = {
  environmentTheme: 'dark' | 'light'
}

export type SetFieldErrorTypes = (field: string, value: string) => void

export enum ToastTypePosition {
  top = 'top',
  bottom = 'bottom'
}
