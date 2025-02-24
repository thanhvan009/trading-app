import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class BreadcrumbService {
  public newBreadCrumbs: BehaviorSubject<any> = new BehaviorSubject<any>({});

  updateBreadcrumb(data: any) {
    this.newBreadCrumbs.next(data);
  }
}

