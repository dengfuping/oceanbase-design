import zhCN from 'antd/es/locale/zh_CN';
import type { Locale } from '.';

export default {
  ...zhCN,
  global: {
    ...zhCN.global,
    inputPlaceholder: '请输入',
  },
  Pagination: {
    ...zhCN.Pagination,
    total: '共 ${total} 条',
  },
  Drawer: {
    okText: '确定',
    cancelText: '取消',
  },
  Table: {
    ...zhCN.Table,
    batchOperationBar: {
      selected: '已选',
      object: '个对象',
      cancel: '取消',
      collapse: '收起',
      open: '展开',
    },
  },
} as Locale;
