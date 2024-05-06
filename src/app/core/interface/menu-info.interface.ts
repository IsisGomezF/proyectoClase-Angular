export interface MenuInfoInterface {
  path: string,
  tittle: string,
  icon?: string,
  classCss?:string,
  subMenu: MenuInfoInterface[];
}
