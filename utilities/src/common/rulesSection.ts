export const 必填 = { required: true, message: '必填' };
export const max = (ct) => ({
  max: ct, message: `最多可填写${ct}个字符`
});
export const REG_INTEGER = /^-?[0-9]\d*$/;
export const REG_TWO_FRACTION = /^(0|[1-9]\d*)(\.\d{1,2})?$/;
export const REG_MOBILE = /^1[34578]\d{9}$/;

export const 整数 = { pattern: REG_INTEGER, message: '只能填写整数' };
export const 最多两位小数 = { pattern: REG_TWO_FRACTION, message: '最多两位小数' };
export const 手机 = { pattern: REG_MOBILE, message: '请填写正确的手机号' };
