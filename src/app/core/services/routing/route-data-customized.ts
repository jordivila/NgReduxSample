export interface IRouteDataCustomized {
  icon: string;
  title: string;
  isMenuItem: boolean;
}

export class RouteDataCustomized {
  constructor(
    public icon: string,
    public title: string,
    public isMenuItem: boolean) {

  }

  toRouteData(): IRouteDataCustomized {
    // due to an issue in @angular 2.3.1
    // routes containing data = new SomeObject()
    // make app to crash
    // https://github.com/angular/angular/issues/13565

    // remove these lines and return "this" when the bug is solved
    // workaround -> return simpleObject & update all routes to use this method
    return (Object.assign({}, this));
    // return  { icon: 'home', title: 'Home', isMenuItem: true };




  }
}
