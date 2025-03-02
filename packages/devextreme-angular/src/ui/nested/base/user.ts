/* tslint:disable:max-line-length */

import { NestedOption } from 'devextreme-angular/core';
import {
    Component,
} from '@angular/core';


@Component({
    template: ''
})
export abstract class DxoUser extends NestedOption {
    get avatarAlt(): string {
        return this._getOption('avatarAlt');
    }
    set avatarAlt(value: string) {
        this._setOption('avatarAlt', value);
    }

    get avatarUrl(): string {
        return this._getOption('avatarUrl');
    }
    set avatarUrl(value: string) {
        this._setOption('avatarUrl', value);
    }

    get id(): number | string {
        return this._getOption('id');
    }
    set id(value: number | string) {
        this._setOption('id', value);
    }

    get name(): string {
        return this._getOption('name');
    }
    set name(value: string) {
        this._setOption('name', value);
    }
}
