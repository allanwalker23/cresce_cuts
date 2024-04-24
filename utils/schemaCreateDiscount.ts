import { ErrorFormTypes } from 'enums/erros.enum'
import { number, object, string } from 'yup'

export const schemaCreateDiscount = object().shape({
  nameDiscount: string().required(ErrorFormTypes.OBRIGATORIO),
  description: string().required(ErrorFormTypes.OBRIGATORIO),

  price: number().required(ErrorFormTypes.OBRIGATORIO),

  priceWithDiscount: number(),

  take: number(),

  pay: number(),

  activateDate: string().required(ErrorFormTypes.OBRIGATORIO),
  desactiveDate: string().required(ErrorFormTypes.OBRIGATORIO),
  typeDiscount: string().required(ErrorFormTypes.OBRIGATORIO),
  percentDiscount: number(),
})