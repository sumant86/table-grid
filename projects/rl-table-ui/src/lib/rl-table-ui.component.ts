import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
@Component({
  selector: 'rl-table-ui',
  templateUrl: 'rl-table-ui-component.html',
  styleUrls: ['rl-table-ui-component.scss'],
})
export class RlTableUiComponent implements OnInit {
  filteredtabledata: any;
  _tabledata: Array<{}>;
  _config: any;
  totalCount: any;
  skip: number;
  top: number;
  pageSize: number = 5;
  lastReached: boolean;
  constructor() {}

  @Input() coldef: any;
  @Input()
  set config(config: any) {
    this._config = config;
  }
  get config() {
    return this._config;
  }

  @Input()
  set tabledata(tabledata: Array<{}>) {
    this._tabledata = tabledata;
  }
  get tabledata() {
    return this._tabledata;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (_.isEmpty(changes['tabledata']['currentValue']) !== true) {
      this._tabledata = changes['tabledata']['currentValue'];
      this.skip = 0;
      this.top = this.skip + this.pageSize;
      console.log(this._tabledata);
      this.getPageData();
    }
    if (_.isEmpty(changes['config']['currentValue']) !== true) {
      this._config = changes['config']['currentValue'];
      if (this._config['pagination']) {
        this.pageSize = this._config.pageSize;
      } else {
        this.pageSize = this._tabledata.length;
      }
      this.top = this.skip + this.pageSize;
      this.getPageData();
    }
  }
  ngOnInit() {
    this.skip = 0;
    this.top = this.skip + this.pageSize;
  }
  sortColumn(column) {
    //Finding Actual column
    _.forEach(this.coldef, (coldef) => {
      //Setting Icon for Column when clicked.
      if (coldef.field === column.field) {
        if (coldef.sort === false) {
          coldef.sort = 'asc';
        } else if (coldef.sort === 'asc') {
          coldef.sort = 'desc';
        } else {
          coldef.sort = false;
        }
      } else {
        //Resetting All other columns to default.
        coldef.sort = false;
      }
    });
    if (column.sort) {
      //Sorting based on column & its defined order.
      this.filteredtabledata = _.orderBy(
        this._tabledata,
        [column.field.trim()],
        [column.sort]
      ).slice(this.skip, this.top);
      // this.filteredtabledata = this._tabledata.slice(this.skip, this.top);
    } else {
      //Reset of filter icons.
      this.getPageData();
    }
  }
  nextPage(head) {
    if (head === 'first') {
      this.skip = 0;
      this.top = this.skip + this.pageSize;
    } else if (head === 'last') {
      this.skip = this._tabledata.length - this.pageSize;
      this.top = this.skip + this.pageSize;
    } else if (head === 'next') {
      this.skip = this.skip + this.pageSize;
      this.top = this.skip + this.pageSize;
    } else {
      this.skip = this.skip - this.pageSize < 0 ? 0 : this.skip - this.pageSize;
      this.top = this.skip + this.pageSize;
    }
    this.lastReached = this._tabledata.length <= this.skip + this.pageSize;
    this.getPageData();
  }
  getPageData() {
    this.filteredtabledata = this._tabledata.slice(this.skip, this.top);
  }
}
