import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN'
import { simpleValidate, forceValidate, validateErrorParse } from './chinaId'

Vue.use(VeeValidate)
Validator.localize('zh_CN', zh)
Validator.extend('cn_phone', {
  getMessage: (field: string, [args]) => `请输入正确的手机号码`,
  validate: (value: string, [args]) =>
    /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
})
Validator.extend('cn_age', {
  getMessage: (field: string, [args]) => `请输入正确的年龄`,
  validate: (value: string, [args]) => {
    // return /^([1-9][0-9]岁|1[01][0-9]岁|[1-9]月|1[0-2]月|[0-9]+天)$/.test(value)
    return /^((([1-9][0-9]?|1[01][0-9]|120)岁?)?(([1-9]|1[0-2])月)?([0-3]?[0-9]天)?|([1-3]?[0-9]?[0-9]天))$/.test(
      value
    )
  }
})

Validator.extend('cn_citizenId_s', {
  getMessage: (field: any, params: any, data: any) =>
    (data && data.message) || '请输入正确的身份证号码',
  validate: (code: string, [args]) => {
    if (code == '*') return true
    let status = simpleValidate(code)
    return new Promise(resolve => {
      resolve({
        valid: status === 0 ? true : false,
        data: status === 0 ? undefined : { message: validateErrorParse(status) }
      })
    })
  }
})
Validator.extend('cn_citizenId', {
  getMessage: (field: any, params: any, data: any) =>
    (data && data.message) || '请输入正确的身份证号码',
  validate: (code: string, [args]) => {
    if (code == '*') return true
    let status = forceValidate(code)
    return new Promise(resolve => {
      resolve({
        valid: status === 0 ? true : false,
        data: status === 0 ? undefined : { message: validateErrorParse(status) }
      })
    })
  }
})
