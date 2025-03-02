/* tslint:disable:max-line-length */


import {
    Component,
    NgModule,
    Host,
    SkipSelf,
    Input
} from '@angular/core';




import { dxFilterBuilderField } from 'devextreme/ui/filter_builder';
import { DataType } from 'devextreme/common';

import {
    NestedOptionHost,
} from 'devextreme-angular/core';
import { CollectionNestedOption } from 'devextreme-angular/core';


@Component({
    selector: 'dxi-filter-builder-custom-operation',
    template: '',
    styles: [''],
    providers: [NestedOptionHost]
})
export class DxiFilterBuilderCustomOperationComponent extends CollectionNestedOption {
    @Input()
    get calculateFilterExpression(): ((filterValue: any, field: dxFilterBuilderField) => string | Function | Array<any>) {
        return this._getOption('calculateFilterExpression');
    }
    set calculateFilterExpression(value: ((filterValue: any, field: dxFilterBuilderField) => string | Function | Array<any>)) {
        this._setOption('calculateFilterExpression', value);
    }

    @Input()
    get caption(): string | undefined {
        return this._getOption('caption');
    }
    set caption(value: string | undefined) {
        this._setOption('caption', value);
    }

    @Input()
    get customizeText(): ((fieldInfo: { field: dxFilterBuilderField, value: string | number | Date, valueText: string }) => string) {
        return this._getOption('customizeText');
    }
    set customizeText(value: ((fieldInfo: { field: dxFilterBuilderField, value: string | number | Date, valueText: string }) => string)) {
        this._setOption('customizeText', value);
    }

    @Input()
    get dataTypes(): Array<DataType> | undefined {
        return this._getOption('dataTypes');
    }
    set dataTypes(value: Array<DataType> | undefined) {
        this._setOption('dataTypes', value);
    }

    @Input()
    get editorTemplate(): any {
        return this._getOption('editorTemplate');
    }
    set editorTemplate(value: any) {
        this._setOption('editorTemplate', value);
    }

    @Input()
    get hasValue(): boolean {
        return this._getOption('hasValue');
    }
    set hasValue(value: boolean) {
        this._setOption('hasValue', value);
    }

    @Input()
    get icon(): string | undefined {
        return this._getOption('icon');
    }
    set icon(value: string | undefined) {
        this._setOption('icon', value);
    }

    @Input()
    get name(): string | undefined {
        return this._getOption('name');
    }
    set name(value: string | undefined) {
        this._setOption('name', value);
    }


    protected get _optionPath() {
        return 'customOperations';
    }


    constructor(@SkipSelf() @Host() parentOptionHost: NestedOptionHost,
            @Host() optionHost: NestedOptionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }



    ngOnDestroy() {
        this._deleteRemovedOptions(this._fullOptionPath());
    }

}

@NgModule({
  declarations: [
    DxiFilterBuilderCustomOperationComponent
  ],
  exports: [
    DxiFilterBuilderCustomOperationComponent
  ],
})
export class DxiFilterBuilderCustomOperationModule { }
