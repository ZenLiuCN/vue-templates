export interface MenuItem {
  title: string
  icon: string
  to?: string
  tip?: string
  child?: MenuItem[]
}
