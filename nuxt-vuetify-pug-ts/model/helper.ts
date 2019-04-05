export const stageToName = (stage: string) => {
  switch (stage) {
    case 'INVALID':
      return '无效'
    case 'READY_PERMIT':
      return '待药师审核'
    case 'PERMITED':
      return '药师已审核'
    case 'READY_DISPENSE':
      return '等待配送'
    case 'DISPENSED':
      return '处理完成'
    case 'EXPIRED':
      return '已过期失效'
  }
}
