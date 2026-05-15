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




import type { DataGridCommandInfo, DataGridPredefinedCommandNames } from 'devextreme/ui/data_grid';
import type { ResponseStatusTexts, ResponseStatus } from 'devextreme/common/grids';

import {
    DxIntegrationModule,
    NestedOptionHost,
} from 'devextreme-angular/core';
import { NestedOption } from 'devextreme-angular/core';


@Component({
    selector: 'dxo-data-grid-ai-assistant',
    template: '',
    styles: [''],
    imports: [ DxIntegrationModule ],
    providers: [NestedOptionHost]
})
export class DxoDataGridAIAssistantComponent extends NestedOption implements OnDestroy, OnInit  {
    @Input()
    get customizeResponseText(): ((command: DataGridCommandInfo) => ResponseStatusTexts) {
        return this._getOption('customizeResponseText');
    }
    set customizeResponseText(value: ((command: DataGridCommandInfo) => ResponseStatusTexts)) {
        this._setOption('customizeResponseText', value);
    }

    @Input()
    get customizeResponseTitle(): ((status: ResponseStatus, commandNames: Array<DataGridPredefinedCommandNames>) => string) {
        return this._getOption('customizeResponseTitle');
    }
    set customizeResponseTitle(value: ((status: ResponseStatus, commandNames: Array<DataGridPredefinedCommandNames>) => string)) {
        this._setOption('customizeResponseTitle', value);
    }


    protected get _optionPath() {
        return 'aiAssistant';
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
  imports: [
    DxoDataGridAIAssistantComponent
  ],
  exports: [
    DxoDataGridAIAssistantComponent
  ],
})
export class DxoDataGridAIAssistantModule { }
