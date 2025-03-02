/* tslint:disable:max-line-length */


import {
    Component,
    OnInit,
    OnDestroy,
    NgModule,
    Host,
    SkipSelf,
    Input,
    ContentChildren,
    forwardRef,
    QueryList
} from '@angular/core';




import { dxChartCommonSeriesSettings } from 'devextreme/viz/chart';
import { Palette, PaletteExtensionMode, ChartsDataType } from 'devextreme/common/charts';
import { ChartSeries } from 'devextreme/viz/common';
import { ChartAxisScale } from 'devextreme/viz/range_selector';

import {
    NestedOptionHost,
} from 'devextreme-angular/core';
import { NestedOption } from 'devextreme-angular/core';
import { DxiRangeSelectorSeriesComponent } from './series-dxi';


@Component({
    selector: 'dxo-range-selector-chart',
    template: '',
    styles: [''],
    providers: [NestedOptionHost]
})
export class DxoRangeSelectorChartComponent extends NestedOption implements OnDestroy, OnInit  {
    @Input()
    get barGroupPadding(): number {
        return this._getOption('barGroupPadding');
    }
    set barGroupPadding(value: number) {
        this._setOption('barGroupPadding', value);
    }

    @Input()
    get barGroupWidth(): number | undefined {
        return this._getOption('barGroupWidth');
    }
    set barGroupWidth(value: number | undefined) {
        this._setOption('barGroupWidth', value);
    }

    @Input()
    get bottomIndent(): number {
        return this._getOption('bottomIndent');
    }
    set bottomIndent(value: number) {
        this._setOption('bottomIndent', value);
    }

    @Input()
    get commonSeriesSettings(): dxChartCommonSeriesSettings {
        return this._getOption('commonSeriesSettings');
    }
    set commonSeriesSettings(value: dxChartCommonSeriesSettings) {
        this._setOption('commonSeriesSettings', value);
    }

    @Input()
    get dataPrepareSettings(): { checkTypeForAllData?: boolean, convertToAxisDataType?: boolean, sortingMethod?: boolean | ((a: { arg: Date | number | string, val: Date | number | string }, b: { arg: Date | number | string, val: Date | number | string }) => number) } {
        return this._getOption('dataPrepareSettings');
    }
    set dataPrepareSettings(value: { checkTypeForAllData?: boolean, convertToAxisDataType?: boolean, sortingMethod?: boolean | ((a: { arg: Date | number | string, val: Date | number | string }, b: { arg: Date | number | string, val: Date | number | string }) => number) }) {
        this._setOption('dataPrepareSettings', value);
    }

    @Input()
    get maxBubbleSize(): number {
        return this._getOption('maxBubbleSize');
    }
    set maxBubbleSize(value: number) {
        this._setOption('maxBubbleSize', value);
    }

    @Input()
    get minBubbleSize(): number {
        return this._getOption('minBubbleSize');
    }
    set minBubbleSize(value: number) {
        this._setOption('minBubbleSize', value);
    }

    @Input()
    get negativesAsZeroes(): boolean {
        return this._getOption('negativesAsZeroes');
    }
    set negativesAsZeroes(value: boolean) {
        this._setOption('negativesAsZeroes', value);
    }

    @Input()
    get palette(): Array<string> | Palette {
        return this._getOption('palette');
    }
    set palette(value: Array<string> | Palette) {
        this._setOption('palette', value);
    }

    @Input()
    get paletteExtensionMode(): PaletteExtensionMode {
        return this._getOption('paletteExtensionMode');
    }
    set paletteExtensionMode(value: PaletteExtensionMode) {
        this._setOption('paletteExtensionMode', value);
    }

    @Input()
    get series(): Array<ChartSeries> | ChartSeries | undefined {
        return this._getOption('series');
    }
    set series(value: Array<ChartSeries> | ChartSeries | undefined) {
        this._setOption('series', value);
    }

    @Input()
    get seriesTemplate(): any {
        return this._getOption('seriesTemplate');
    }
    set seriesTemplate(value: any) {
        this._setOption('seriesTemplate', value);
    }

    @Input()
    get topIndent(): number {
        return this._getOption('topIndent');
    }
    set topIndent(value: number) {
        this._setOption('topIndent', value);
    }

    @Input()
    get valueAxis(): { inverted?: boolean, logarithmBase?: number, max?: number | undefined, min?: number | undefined, type?: ChartAxisScale | undefined, valueType?: ChartsDataType | undefined } {
        return this._getOption('valueAxis');
    }
    set valueAxis(value: { inverted?: boolean, logarithmBase?: number, max?: number | undefined, min?: number | undefined, type?: ChartAxisScale | undefined, valueType?: ChartsDataType | undefined }) {
        this._setOption('valueAxis', value);
    }


    protected get _optionPath() {
        return 'chart';
    }


    @ContentChildren(forwardRef(() => DxiRangeSelectorSeriesComponent))
    get seriesChildren(): QueryList<DxiRangeSelectorSeriesComponent> {
        return this._getOption('series');
    }
    set seriesChildren(value) {
        this.setChildren('series', value);
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
    DxoRangeSelectorChartComponent
  ],
  exports: [
    DxoRangeSelectorChartComponent
  ],
})
export class DxoRangeSelectorChartModule { }
