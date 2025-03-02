/* tslint:disable:max-line-length */


import {
    Component,
    OnInit,
    OnDestroy,
    NgModule,
    Host,
    SkipSelf,
    Input
} from '@angular/core';




import { HatchDirection } from 'devextreme/common/charts';

import {
    NestedOptionHost,
} from 'devextreme-angular/core';
import { NestedOption } from 'devextreme-angular/core';


@Component({
    selector: 'dxo-polar-chart-hatching',
    template: '',
    styles: [''],
    providers: [NestedOptionHost]
})
export class DxoPolarChartHatchingComponent extends NestedOption implements OnDestroy, OnInit  {
    @Input()
    get direction(): HatchDirection {
        return this._getOption('direction');
    }
    set direction(value: HatchDirection) {
        this._setOption('direction', value);
    }

    @Input()
    get opacity(): number {
        return this._getOption('opacity');
    }
    set opacity(value: number) {
        this._setOption('opacity', value);
    }

    @Input()
    get step(): number {
        return this._getOption('step');
    }
    set step(value: number) {
        this._setOption('step', value);
    }

    @Input()
    get width(): number {
        return this._getOption('width');
    }
    set width(value: number) {
        this._setOption('width', value);
    }


    protected get _optionPath() {
        return 'hatching';
    }


    constructor(@SkipSelf() @Host() parentOptionHost: NestedOptionHost,
            @Host() optionHost: NestedOptionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }


    ngOnInit() {
        this._addRecreatedComponent();
    }

    ngOnDestroy() {
        this._addRemovedOption(this._getOptionPath());
    }


}

@NgModule({
  declarations: [
    DxoPolarChartHatchingComponent
  ],
  exports: [
    DxoPolarChartHatchingComponent
  ],
})
export class DxoPolarChartHatchingModule { }
