/* tslint:disable:max-line-length */


import {
    TransferState,
    Component,
    NgModule,
    ElementRef,
    NgZone,
    PLATFORM_ID,
    Inject,

    Input,
    Output,
    OnDestroy,
    EventEmitter,
    forwardRef,
    HostListener,
    OnChanges,
    DoCheck,
    SimpleChanges,
    ContentChildren,
    QueryList
} from '@angular/core';


import dxDateBox from 'devextreme/ui/date_box';
import { ApplyValueMode, TextEditorButton, LabelMode, EditorStyle, ValidationMessageMode, Mode, Position, ValidationStatus } from 'devextreme/common';
import { DropDownPredefinedButton } from 'devextreme/ui/drop_down_editor/ui.drop_down_editor';
import { dxCalendarOptions } from 'devextreme/ui/calendar';
import { Format } from 'devextreme/common/core/localization';
import { dxPopupOptions } from 'devextreme/ui/popup';
import { ChangeEvent, ClosedEvent, ContentReadyEvent, CopyEvent, CutEvent, DisposingEvent, EnterKeyEvent, FocusInEvent, FocusOutEvent, InitializedEvent, InputEvent, KeyDownEvent, KeyUpEvent, OpenedEvent, OptionChangedEvent, PasteEvent, ValueChangedEvent, DatePickerType, DateType } from 'devextreme/ui/date_box';

import DxDateBox from 'devextreme/ui/date_box';

import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR
} from '@angular/forms';

import {
    DxComponent,
    DxTemplateHost,
    DxIntegrationModule,
    DxTemplateModule,
    NestedOptionHost,
    IterableDifferHelper,
    WatcherHelper
} from 'devextreme-angular/core';

import { DxiButtonModule } from 'devextreme-angular/ui/nested';
import { DxoOptionsModule } from 'devextreme-angular/ui/nested';
import { DxoCalendarOptionsModule } from 'devextreme-angular/ui/nested';
import { DxoDisplayFormatModule } from 'devextreme-angular/ui/nested';
import { DxoDropDownOptionsModule } from 'devextreme-angular/ui/nested';
import { DxoAnimationModule } from 'devextreme-angular/ui/nested';
import { DxoHideModule } from 'devextreme-angular/ui/nested';
import { DxoFromModule } from 'devextreme-angular/ui/nested';
import { DxoPositionModule } from 'devextreme-angular/ui/nested';
import { DxoAtModule } from 'devextreme-angular/ui/nested';
import { DxoBoundaryOffsetModule } from 'devextreme-angular/ui/nested';
import { DxoCollisionModule } from 'devextreme-angular/ui/nested';
import { DxoMyModule } from 'devextreme-angular/ui/nested';
import { DxoOffsetModule } from 'devextreme-angular/ui/nested';
import { DxoToModule } from 'devextreme-angular/ui/nested';
import { DxoShowModule } from 'devextreme-angular/ui/nested';

import { DxoDateBoxAnimationModule } from 'devextreme-angular/ui/date-box/nested';
import { DxoDateBoxAtModule } from 'devextreme-angular/ui/date-box/nested';
import { DxoDateBoxBoundaryOffsetModule } from 'devextreme-angular/ui/date-box/nested';
import { DxiDateBoxButtonModule } from 'devextreme-angular/ui/date-box/nested';
import { DxoDateBoxCalendarOptionsModule } from 'devextreme-angular/ui/date-box/nested';
import { DxoDateBoxCollisionModule } from 'devextreme-angular/ui/date-box/nested';
import { DxoDateBoxDisplayFormatModule } from 'devextreme-angular/ui/date-box/nested';
import { DxoDateBoxDropDownOptionsModule } from 'devextreme-angular/ui/date-box/nested';
import { DxoDateBoxFromModule } from 'devextreme-angular/ui/date-box/nested';
import { DxoDateBoxHideModule } from 'devextreme-angular/ui/date-box/nested';
import { DxoDateBoxMyModule } from 'devextreme-angular/ui/date-box/nested';
import { DxoDateBoxOffsetModule } from 'devextreme-angular/ui/date-box/nested';
import { DxoDateBoxOptionsModule } from 'devextreme-angular/ui/date-box/nested';
import { DxoDateBoxPositionModule } from 'devextreme-angular/ui/date-box/nested';
import { DxoDateBoxShowModule } from 'devextreme-angular/ui/date-box/nested';
import { DxoDateBoxToModule } from 'devextreme-angular/ui/date-box/nested';
import { DxiDateBoxToolbarItemModule } from 'devextreme-angular/ui/date-box/nested';

import { DxiButtonComponent } from 'devextreme-angular/ui/nested';

import { DxiDateBoxButtonComponent } from 'devextreme-angular/ui/date-box/nested';



const CUSTOM_VALUE_ACCESSOR_PROVIDER = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DxDateBoxComponent),
    multi: true
};
/**
 * [descr:dxDateBox]

 */
@Component({
    selector: 'dx-date-box',
    template: '',
    host: { ngSkipHydration: 'true' },
    providers: [
        DxTemplateHost,
        WatcherHelper,
        CUSTOM_VALUE_ACCESSOR_PROVIDER,
        NestedOptionHost,
        IterableDifferHelper
    ]
})
export class DxDateBoxComponent extends DxComponent implements OnDestroy, ControlValueAccessor, OnChanges, DoCheck {
    instance: DxDateBox = null;

    /**
     * [descr:dxDropDownEditorOptions.acceptCustomValue]
    
     */
    @Input()
    get acceptCustomValue(): boolean {
        return this._getOption('acceptCustomValue');
    }
    set acceptCustomValue(value: boolean) {
        this._setOption('acceptCustomValue', value);
    }


    /**
     * [descr:WidgetOptions.accessKey]
    
     */
    @Input()
    get accessKey(): string | undefined {
        return this._getOption('accessKey');
    }
    set accessKey(value: string | undefined) {
        this._setOption('accessKey', value);
    }


    /**
     * [descr:dxDropDownEditorOptions.activeStateEnabled]
    
     */
    @Input()
    get activeStateEnabled(): boolean {
        return this._getOption('activeStateEnabled');
    }
    set activeStateEnabled(value: boolean) {
        this._setOption('activeStateEnabled', value);
    }


    /**
     * [descr:dxDateBoxOptions.adaptivityEnabled]
    
     */
    @Input()
    get adaptivityEnabled(): boolean {
        return this._getOption('adaptivityEnabled');
    }
    set adaptivityEnabled(value: boolean) {
        this._setOption('adaptivityEnabled', value);
    }


    /**
     * [descr:DateBoxBaseOptions.applyButtonText]
    
     */
    @Input()
    get applyButtonText(): string {
        return this._getOption('applyButtonText');
    }
    set applyButtonText(value: string) {
        this._setOption('applyButtonText', value);
    }


    /**
     * [descr:dxDropDownEditorOptions.applyValueMode]
    
     */
    @Input()
    get applyValueMode(): ApplyValueMode {
        return this._getOption('applyValueMode');
    }
    set applyValueMode(value: ApplyValueMode) {
        this._setOption('applyValueMode', value);
    }


    /**
     * [descr:dxDropDownEditorOptions.buttons]
    
     */
    @Input()
    get buttons(): Array<DropDownPredefinedButton | TextEditorButton> {
        return this._getOption('buttons');
    }
    set buttons(value: Array<DropDownPredefinedButton | TextEditorButton>) {
        this._setOption('buttons', value);
    }


    /**
     * [descr:DateBoxBaseOptions.calendarOptions]
    
     */
    @Input()
    get calendarOptions(): dxCalendarOptions {
        return this._getOption('calendarOptions');
    }
    set calendarOptions(value: dxCalendarOptions) {
        this._setOption('calendarOptions', value);
    }


    /**
     * [descr:DateBoxBaseOptions.cancelButtonText]
    
     */
    @Input()
    get cancelButtonText(): string {
        return this._getOption('cancelButtonText');
    }
    set cancelButtonText(value: string) {
        this._setOption('cancelButtonText', value);
    }


    /**
     * [descr:dxDateBoxOptions.dateOutOfRangeMessage]
    
     */
    @Input()
    get dateOutOfRangeMessage(): string {
        return this._getOption('dateOutOfRangeMessage');
    }
    set dateOutOfRangeMessage(value: string) {
        this._setOption('dateOutOfRangeMessage', value);
    }


    /**
     * [descr:DateBoxBaseOptions.dateSerializationFormat]
    
     */
    @Input()
    get dateSerializationFormat(): string | undefined {
        return this._getOption('dateSerializationFormat');
    }
    set dateSerializationFormat(value: string | undefined) {
        this._setOption('dateSerializationFormat', value);
    }


    /**
     * [descr:dxDropDownEditorOptions.deferRendering]
    
     */
    @Input()
    get deferRendering(): boolean {
        return this._getOption('deferRendering');
    }
    set deferRendering(value: boolean) {
        this._setOption('deferRendering', value);
    }


    /**
     * [descr:WidgetOptions.disabled]
    
     */
    @Input()
    get disabled(): boolean {
        return this._getOption('disabled');
    }
    set disabled(value: boolean) {
        this._setOption('disabled', value);
    }


    /**
     * [descr:dxDateBoxOptions.disabledDates]
    
     */
    @Input()
    get disabledDates(): Array<Date> | ((data: { component: dxDateBox, date: Date, view: string }) => boolean) {
        return this._getOption('disabledDates');
    }
    set disabledDates(value: Array<Date> | ((data: { component: dxDateBox, date: Date, view: string }) => boolean)) {
        this._setOption('disabledDates', value);
    }


    /**
     * [descr:DateBoxBaseOptions.displayFormat]
    
     */
    @Input()
    get displayFormat(): Format {
        return this._getOption('displayFormat');
    }
    set displayFormat(value: Format) {
        this._setOption('displayFormat', value);
    }


    /**
     * [descr:dxDropDownEditorOptions.dropDownButtonTemplate]
    
     */
    @Input()
    get dropDownButtonTemplate(): any {
        return this._getOption('dropDownButtonTemplate');
    }
    set dropDownButtonTemplate(value: any) {
        this._setOption('dropDownButtonTemplate', value);
    }


    /**
     * [descr:DateBoxBaseOptions.dropDownOptions]
    
     */
    @Input()
    get dropDownOptions(): dxPopupOptions<any> {
        return this._getOption('dropDownOptions');
    }
    set dropDownOptions(value: dxPopupOptions<any>) {
        this._setOption('dropDownOptions', value);
    }


    /**
     * [descr:DOMComponentOptions.elementAttr]
    
     */
    @Input()
    get elementAttr(): Record<string, any> {
        return this._getOption('elementAttr');
    }
    set elementAttr(value: Record<string, any>) {
        this._setOption('elementAttr', value);
    }


    /**
     * [descr:dxTextEditorOptions.focusStateEnabled]
    
     */
    @Input()
    get focusStateEnabled(): boolean {
        return this._getOption('focusStateEnabled');
    }
    set focusStateEnabled(value: boolean) {
        this._setOption('focusStateEnabled', value);
    }


    /**
     * [descr:DOMComponentOptions.height]
    
     */
    @Input()
    get height(): (() => number | string) | number | string | undefined {
        return this._getOption('height');
    }
    set height(value: (() => number | string) | number | string | undefined) {
        this._setOption('height', value);
    }


    /**
     * [descr:WidgetOptions.hint]
    
     */
    @Input()
    get hint(): string | undefined {
        return this._getOption('hint');
    }
    set hint(value: string | undefined) {
        this._setOption('hint', value);
    }


    /**
     * [descr:dxTextEditorOptions.hoverStateEnabled]
    
     */
    @Input()
    get hoverStateEnabled(): boolean {
        return this._getOption('hoverStateEnabled');
    }
    set hoverStateEnabled(value: boolean) {
        this._setOption('hoverStateEnabled', value);
    }


    /**
     * [descr:dxDateBoxOptions.inputAttr]
    
     */
    @Input()
    get inputAttr(): any {
        return this._getOption('inputAttr');
    }
    set inputAttr(value: any) {
        this._setOption('inputAttr', value);
    }


    /**
     * [descr:dxDateBoxOptions.interval]
    
     */
    @Input()
    get interval(): number {
        return this._getOption('interval');
    }
    set interval(value: number) {
        this._setOption('interval', value);
    }


    /**
     * [descr:dxDateBoxOptions.invalidDateMessage]
    
     */
    @Input()
    get invalidDateMessage(): string {
        return this._getOption('invalidDateMessage');
    }
    set invalidDateMessage(value: string) {
        this._setOption('invalidDateMessage', value);
    }


    /**
     * [descr:EditorOptions.isDirty]
    
     */
    @Input()
    get isDirty(): boolean {
        return this._getOption('isDirty');
    }
    set isDirty(value: boolean) {
        this._setOption('isDirty', value);
    }


    /**
     * [descr:EditorOptions.isValid]
    
     */
    @Input()
    get isValid(): boolean {
        return this._getOption('isValid');
    }
    set isValid(value: boolean) {
        this._setOption('isValid', value);
    }


    /**
     * [descr:dxDateBoxOptions.label]
    
     */
    @Input()
    get label(): string {
        return this._getOption('label');
    }
    set label(value: string) {
        this._setOption('label', value);
    }


    /**
     * [descr:dxTextEditorOptions.labelMode]
    
     */
    @Input()
    get labelMode(): LabelMode {
        return this._getOption('labelMode');
    }
    set labelMode(value: LabelMode) {
        this._setOption('labelMode', value);
    }


    /**
     * [descr:DateBoxBaseOptions.max]
    
     */
    @Input()
    get max(): Date | number | string | undefined {
        return this._getOption('max');
    }
    set max(value: Date | number | string | undefined) {
        this._setOption('max', value);
    }


    /**
     * [descr:dxDateBoxOptions.maxLength]
    
     */
    @Input()
    get maxLength(): number | string {
        return this._getOption('maxLength');
    }
    set maxLength(value: number | string) {
        this._setOption('maxLength', value);
    }


    /**
     * [descr:DateBoxBaseOptions.min]
    
     */
    @Input()
    get min(): Date | number | string | undefined {
        return this._getOption('min');
    }
    set min(value: Date | number | string | undefined) {
        this._setOption('min', value);
    }


    /**
     * [descr:dxDateBoxOptions.name]
    
     */
    @Input()
    get name(): string {
        return this._getOption('name');
    }
    set name(value: string) {
        this._setOption('name', value);
    }


    /**
     * [descr:dxDropDownEditorOptions.opened]
    
     */
    @Input()
    get opened(): boolean {
        return this._getOption('opened');
    }
    set opened(value: boolean) {
        this._setOption('opened', value);
    }


    /**
     * [descr:dxDropDownEditorOptions.openOnFieldClick]
    
     */
    @Input()
    get openOnFieldClick(): boolean {
        return this._getOption('openOnFieldClick');
    }
    set openOnFieldClick(value: boolean) {
        this._setOption('openOnFieldClick', value);
    }


    /**
     * [descr:dxDateBoxOptions.pickerType]
    
     */
    @Input()
    get pickerType(): DatePickerType {
        return this._getOption('pickerType');
    }
    set pickerType(value: DatePickerType) {
        this._setOption('pickerType', value);
    }


    /**
     * [descr:dxDateBoxOptions.placeholder]
    
     */
    @Input()
    get placeholder(): string {
        return this._getOption('placeholder');
    }
    set placeholder(value: string) {
        this._setOption('placeholder', value);
    }


    /**
     * [descr:EditorOptions.readOnly]
    
     */
    @Input()
    get readOnly(): boolean {
        return this._getOption('readOnly');
    }
    set readOnly(value: boolean) {
        this._setOption('readOnly', value);
    }


    /**
     * [descr:DOMComponentOptions.rtlEnabled]
    
     */
    @Input()
    get rtlEnabled(): boolean {
        return this._getOption('rtlEnabled');
    }
    set rtlEnabled(value: boolean) {
        this._setOption('rtlEnabled', value);
    }


    /**
     * [descr:dxDateBoxOptions.showAnalogClock]
    
     */
    @Input()
    get showAnalogClock(): boolean {
        return this._getOption('showAnalogClock');
    }
    set showAnalogClock(value: boolean) {
        this._setOption('showAnalogClock', value);
    }


    /**
     * [descr:dxTextEditorOptions.showClearButton]
    
     */
    @Input()
    get showClearButton(): boolean {
        return this._getOption('showClearButton');
    }
    set showClearButton(value: boolean) {
        this._setOption('showClearButton', value);
    }


    /**
     * [descr:dxDropDownEditorOptions.showDropDownButton]
    
     */
    @Input()
    get showDropDownButton(): boolean {
        return this._getOption('showDropDownButton');
    }
    set showDropDownButton(value: boolean) {
        this._setOption('showDropDownButton', value);
    }


    /**
     * [descr:dxTextEditorOptions.spellcheck]
    
     */
    @Input()
    get spellcheck(): boolean {
        return this._getOption('spellcheck');
    }
    set spellcheck(value: boolean) {
        this._setOption('spellcheck', value);
    }


    /**
     * [descr:dxTextEditorOptions.stylingMode]
    
     */
    @Input()
    get stylingMode(): EditorStyle {
        return this._getOption('stylingMode');
    }
    set stylingMode(value: EditorStyle) {
        this._setOption('stylingMode', value);
    }


    /**
     * [descr:WidgetOptions.tabIndex]
    
     */
    @Input()
    get tabIndex(): number {
        return this._getOption('tabIndex');
    }
    set tabIndex(value: number) {
        this._setOption('tabIndex', value);
    }


    /**
     * [descr:dxDateBoxOptions.text]
    
     */
    @Input()
    get text(): string {
        return this._getOption('text');
    }
    set text(value: string) {
        this._setOption('text', value);
    }


    /**
     * [descr:DateBoxBaseOptions.todayButtonText]
    
     */
    @Input()
    get todayButtonText(): string {
        return this._getOption('todayButtonText');
    }
    set todayButtonText(value: string) {
        this._setOption('todayButtonText', value);
    }


    /**
     * [descr:dxDateBoxOptions.type]
    
     */
    @Input()
    get type(): DateType {
        return this._getOption('type');
    }
    set type(value: DateType) {
        this._setOption('type', value);
    }


    /**
     * [descr:DateBoxBaseOptions.useMaskBehavior]
    
     */
    @Input()
    get useMaskBehavior(): boolean {
        return this._getOption('useMaskBehavior');
    }
    set useMaskBehavior(value: boolean) {
        this._setOption('useMaskBehavior', value);
    }


    /**
     * [descr:EditorOptions.validationError]
    
     */
    @Input()
    get validationError(): any {
        return this._getOption('validationError');
    }
    set validationError(value: any) {
        this._setOption('validationError', value);
    }


    /**
     * [descr:EditorOptions.validationErrors]
    
     */
    @Input()
    get validationErrors(): Array<any> {
        return this._getOption('validationErrors');
    }
    set validationErrors(value: Array<any>) {
        this._setOption('validationErrors', value);
    }


    /**
     * [descr:EditorOptions.validationMessageMode]
    
     */
    @Input()
    get validationMessageMode(): ValidationMessageMode {
        return this._getOption('validationMessageMode');
    }
    set validationMessageMode(value: ValidationMessageMode) {
        this._setOption('validationMessageMode', value);
    }


    /**
     * [descr:dxDropDownEditorOptions.validationMessagePosition]
    
     */
    @Input()
    get validationMessagePosition(): Mode | Position {
        return this._getOption('validationMessagePosition');
    }
    set validationMessagePosition(value: Mode | Position) {
        this._setOption('validationMessagePosition', value);
    }


    /**
     * [descr:EditorOptions.validationStatus]
    
     */
    @Input()
    get validationStatus(): ValidationStatus {
        return this._getOption('validationStatus');
    }
    set validationStatus(value: ValidationStatus) {
        this._setOption('validationStatus', value);
    }


    /**
     * [descr:dxDateBoxOptions.value]
    
     */
    @Input()
    get value(): Date | number | string {
        return this._getOption('value');
    }
    set value(value: Date | number | string) {
        this._setOption('value', value);
    }


    /**
     * [descr:dxTextEditorOptions.valueChangeEvent]
    
     */
    @Input()
    get valueChangeEvent(): string {
        return this._getOption('valueChangeEvent');
    }
    set valueChangeEvent(value: string) {
        this._setOption('valueChangeEvent', value);
    }


    /**
     * [descr:WidgetOptions.visible]
    
     */
    @Input()
    get visible(): boolean {
        return this._getOption('visible');
    }
    set visible(value: boolean) {
        this._setOption('visible', value);
    }


    /**
     * [descr:DOMComponentOptions.width]
    
     */
    @Input()
    get width(): (() => number | string) | number | string | undefined {
        return this._getOption('width');
    }
    set width(value: (() => number | string) | number | string | undefined) {
        this._setOption('width', value);
    }

    /**
    
     * [descr:dxDateBoxOptions.onChange]
    
    
     */
    @Output() onChange: EventEmitter<ChangeEvent>;

    /**
    
     * [descr:dxDateBoxOptions.onClosed]
    
    
     */
    @Output() onClosed: EventEmitter<ClosedEvent>;

    /**
    
     * [descr:dxDateBoxOptions.onContentReady]
    
    
     */
    @Output() onContentReady: EventEmitter<ContentReadyEvent>;

    /**
    
     * [descr:dxDateBoxOptions.onCopy]
    
    
     */
    @Output() onCopy: EventEmitter<CopyEvent>;

    /**
    
     * [descr:dxDateBoxOptions.onCut]
    
    
     */
    @Output() onCut: EventEmitter<CutEvent>;

    /**
    
     * [descr:dxDateBoxOptions.onDisposing]
    
    
     */
    @Output() onDisposing: EventEmitter<DisposingEvent>;

    /**
    
     * [descr:dxDateBoxOptions.onEnterKey]
    
    
     */
    @Output() onEnterKey: EventEmitter<EnterKeyEvent>;

    /**
    
     * [descr:dxDateBoxOptions.onFocusIn]
    
    
     */
    @Output() onFocusIn: EventEmitter<FocusInEvent>;

    /**
    
     * [descr:dxDateBoxOptions.onFocusOut]
    
    
     */
    @Output() onFocusOut: EventEmitter<FocusOutEvent>;

    /**
    
     * [descr:dxDateBoxOptions.onInitialized]
    
    
     */
    @Output() onInitialized: EventEmitter<InitializedEvent>;

    /**
    
     * [descr:dxDateBoxOptions.onInput]
    
    
     */
    @Output() onInput: EventEmitter<InputEvent>;

    /**
    
     * [descr:dxDateBoxOptions.onKeyDown]
    
    
     */
    @Output() onKeyDown: EventEmitter<KeyDownEvent>;

    /**
    
     * [descr:dxDateBoxOptions.onKeyUp]
    
    
     */
    @Output() onKeyUp: EventEmitter<KeyUpEvent>;

    /**
    
     * [descr:dxDateBoxOptions.onOpened]
    
    
     */
    @Output() onOpened: EventEmitter<OpenedEvent>;

    /**
    
     * [descr:dxDateBoxOptions.onOptionChanged]
    
    
     */
    @Output() onOptionChanged: EventEmitter<OptionChangedEvent>;

    /**
    
     * [descr:dxDateBoxOptions.onPaste]
    
    
     */
    @Output() onPaste: EventEmitter<PasteEvent>;

    /**
    
     * [descr:dxDateBoxOptions.onValueChanged]
    
    
     */
    @Output() onValueChanged: EventEmitter<ValueChangedEvent>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() acceptCustomValueChange: EventEmitter<boolean>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() accessKeyChange: EventEmitter<string | undefined>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() activeStateEnabledChange: EventEmitter<boolean>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() adaptivityEnabledChange: EventEmitter<boolean>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() applyButtonTextChange: EventEmitter<string>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() applyValueModeChange: EventEmitter<ApplyValueMode>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() buttonsChange: EventEmitter<Array<DropDownPredefinedButton | TextEditorButton>>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() calendarOptionsChange: EventEmitter<dxCalendarOptions>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() cancelButtonTextChange: EventEmitter<string>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() dateOutOfRangeMessageChange: EventEmitter<string>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() dateSerializationFormatChange: EventEmitter<string | undefined>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() deferRenderingChange: EventEmitter<boolean>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() disabledChange: EventEmitter<boolean>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() disabledDatesChange: EventEmitter<Array<Date> | ((data: { component: dxDateBox, date: Date, view: string }) => boolean)>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() displayFormatChange: EventEmitter<Format>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() dropDownButtonTemplateChange: EventEmitter<any>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() dropDownOptionsChange: EventEmitter<dxPopupOptions<any>>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() elementAttrChange: EventEmitter<Record<string, any>>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() focusStateEnabledChange: EventEmitter<boolean>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() heightChange: EventEmitter<(() => number | string) | number | string | undefined>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() hintChange: EventEmitter<string | undefined>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() hoverStateEnabledChange: EventEmitter<boolean>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() inputAttrChange: EventEmitter<any>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() intervalChange: EventEmitter<number>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() invalidDateMessageChange: EventEmitter<string>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() isDirtyChange: EventEmitter<boolean>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() isValidChange: EventEmitter<boolean>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() labelChange: EventEmitter<string>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() labelModeChange: EventEmitter<LabelMode>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() maxChange: EventEmitter<Date | number | string | undefined>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() maxLengthChange: EventEmitter<number | string>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() minChange: EventEmitter<Date | number | string | undefined>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() nameChange: EventEmitter<string>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() openedChange: EventEmitter<boolean>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() openOnFieldClickChange: EventEmitter<boolean>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() pickerTypeChange: EventEmitter<DatePickerType>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() placeholderChange: EventEmitter<string>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() readOnlyChange: EventEmitter<boolean>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() rtlEnabledChange: EventEmitter<boolean>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() showAnalogClockChange: EventEmitter<boolean>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() showClearButtonChange: EventEmitter<boolean>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() showDropDownButtonChange: EventEmitter<boolean>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() spellcheckChange: EventEmitter<boolean>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() stylingModeChange: EventEmitter<EditorStyle>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() tabIndexChange: EventEmitter<number>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() textChange: EventEmitter<string>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() todayButtonTextChange: EventEmitter<string>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() typeChange: EventEmitter<DateType>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() useMaskBehaviorChange: EventEmitter<boolean>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() validationErrorChange: EventEmitter<any>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() validationErrorsChange: EventEmitter<Array<any>>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() validationMessageModeChange: EventEmitter<ValidationMessageMode>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() validationMessagePositionChange: EventEmitter<Mode | Position>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() validationStatusChange: EventEmitter<ValidationStatus>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() valueChange: EventEmitter<Date | number | string>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() valueChangeEventChange: EventEmitter<string>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() visibleChange: EventEmitter<boolean>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() widthChange: EventEmitter<(() => number | string) | number | string | undefined>;

    /**
    
     * [descr:undefined]
    
    
     */
    @Output() onBlur: EventEmitter<any>;


    @HostListener('valueChange', ['$event']) change(_) { }
    @HostListener('onBlur', ['$event']) touched = (_) => {};


    @ContentChildren(DxiDateBoxButtonComponent)
    get buttonsChildren(): QueryList<DxiDateBoxButtonComponent> {
        return this._getOption('buttons');
    }
    set buttonsChildren(value) {
        this._setChildren('buttons', value, 'DxiDateBoxButtonComponent');
    }


    @ContentChildren(DxiButtonComponent)
    get buttonsLegacyChildren(): QueryList<DxiButtonComponent> {
        return this._getOption('buttons');
    }
    set buttonsLegacyChildren(value) {
        this._setChildren('buttons', value, 'DxiButtonComponent');
    }




    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost,
            private _watcherHelper: WatcherHelper,
            private _idh: IterableDifferHelper,
            optionHost: NestedOptionHost,
            transferState: TransferState,
            @Inject(PLATFORM_ID) platformId: any) {

        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);

        this._createEventEmitters([
            { subscribe: 'change', emit: 'onChange' },
            { subscribe: 'closed', emit: 'onClosed' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'copy', emit: 'onCopy' },
            { subscribe: 'cut', emit: 'onCut' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'enterKey', emit: 'onEnterKey' },
            { subscribe: 'focusIn', emit: 'onFocusIn' },
            { subscribe: 'focusOut', emit: 'onFocusOut' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'input', emit: 'onInput' },
            { subscribe: 'keyDown', emit: 'onKeyDown' },
            { subscribe: 'keyUp', emit: 'onKeyUp' },
            { subscribe: 'opened', emit: 'onOpened' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'paste', emit: 'onPaste' },
            { subscribe: 'valueChanged', emit: 'onValueChanged' },
            { emit: 'acceptCustomValueChange' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'adaptivityEnabledChange' },
            { emit: 'applyButtonTextChange' },
            { emit: 'applyValueModeChange' },
            { emit: 'buttonsChange' },
            { emit: 'calendarOptionsChange' },
            { emit: 'cancelButtonTextChange' },
            { emit: 'dateOutOfRangeMessageChange' },
            { emit: 'dateSerializationFormatChange' },
            { emit: 'deferRenderingChange' },
            { emit: 'disabledChange' },
            { emit: 'disabledDatesChange' },
            { emit: 'displayFormatChange' },
            { emit: 'dropDownButtonTemplateChange' },
            { emit: 'dropDownOptionsChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'inputAttrChange' },
            { emit: 'intervalChange' },
            { emit: 'invalidDateMessageChange' },
            { emit: 'isDirtyChange' },
            { emit: 'isValidChange' },
            { emit: 'labelChange' },
            { emit: 'labelModeChange' },
            { emit: 'maxChange' },
            { emit: 'maxLengthChange' },
            { emit: 'minChange' },
            { emit: 'nameChange' },
            { emit: 'openedChange' },
            { emit: 'openOnFieldClickChange' },
            { emit: 'pickerTypeChange' },
            { emit: 'placeholderChange' },
            { emit: 'readOnlyChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'showAnalogClockChange' },
            { emit: 'showClearButtonChange' },
            { emit: 'showDropDownButtonChange' },
            { emit: 'spellcheckChange' },
            { emit: 'stylingModeChange' },
            { emit: 'tabIndexChange' },
            { emit: 'textChange' },
            { emit: 'todayButtonTextChange' },
            { emit: 'typeChange' },
            { emit: 'useMaskBehaviorChange' },
            { emit: 'validationErrorChange' },
            { emit: 'validationErrorsChange' },
            { emit: 'validationMessageModeChange' },
            { emit: 'validationMessagePositionChange' },
            { emit: 'validationStatusChange' },
            { emit: 'valueChange' },
            { emit: 'valueChangeEventChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' },
            { emit: 'onBlur' }
        ]);

        this._idh.setHost(this);
        optionHost.setHost(this);
    }

    protected _createInstance(element, options) {

        return new DxDateBox(element, options);
    }


    writeValue(value: any): void {
        this.eventHelper.lockedValueChangeEvent = true;
        this.value = value;
        this.eventHelper.lockedValueChangeEvent = false;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    registerOnChange(fn: (_: any) => void): void { this.change = fn; }
    registerOnTouched(fn: () => void): void { this.touched = fn; }

    _createWidget(element: any) {
        super._createWidget(element);
        this.instance.on('focusOut', (e) => {
            this.eventHelper.fireNgEvent('onBlur', [e]);
        });
    }

    ngOnDestroy() {
        this._destroyWidget();
    }

    ngOnChanges(changes: SimpleChanges) {
        super.ngOnChanges(changes);
        this.setupChanges('buttons', changes);
        this.setupChanges('disabledDates', changes);
        this.setupChanges('validationErrors', changes);
    }

    setupChanges(prop: string, changes: SimpleChanges) {
        if (!(prop in this._optionsToUpdate)) {
            this._idh.setup(prop, changes);
        }
    }

    ngDoCheck() {
        this._idh.doCheck('buttons');
        this._idh.doCheck('disabledDates');
        this._idh.doCheck('validationErrors');
        this._watcherHelper.checkWatchers();
        super.ngDoCheck();
        super.clearChangedOptions();
    }

    _setOption(name: string, value: any) {
        let isSetup = this._idh.setupSingle(name, value);
        let isChanged = this._idh.getChanges(name, value) !== null;

        if (isSetup || isChanged) {
            super._setOption(name, value);
        }
    }
}

@NgModule({
  imports: [
    DxiButtonModule,
    DxoOptionsModule,
    DxoCalendarOptionsModule,
    DxoDisplayFormatModule,
    DxoDropDownOptionsModule,
    DxoAnimationModule,
    DxoHideModule,
    DxoFromModule,
    DxoPositionModule,
    DxoAtModule,
    DxoBoundaryOffsetModule,
    DxoCollisionModule,
    DxoMyModule,
    DxoOffsetModule,
    DxoToModule,
    DxoShowModule,
    DxoDateBoxAnimationModule,
    DxoDateBoxAtModule,
    DxoDateBoxBoundaryOffsetModule,
    DxiDateBoxButtonModule,
    DxoDateBoxCalendarOptionsModule,
    DxoDateBoxCollisionModule,
    DxoDateBoxDisplayFormatModule,
    DxoDateBoxDropDownOptionsModule,
    DxoDateBoxFromModule,
    DxoDateBoxHideModule,
    DxoDateBoxMyModule,
    DxoDateBoxOffsetModule,
    DxoDateBoxOptionsModule,
    DxoDateBoxPositionModule,
    DxoDateBoxShowModule,
    DxoDateBoxToModule,
    DxiDateBoxToolbarItemModule,
    DxIntegrationModule,
    DxTemplateModule
  ],
  declarations: [
    DxDateBoxComponent
  ],
  exports: [
    DxDateBoxComponent,
    DxiButtonModule,
    DxoOptionsModule,
    DxoCalendarOptionsModule,
    DxoDisplayFormatModule,
    DxoDropDownOptionsModule,
    DxoAnimationModule,
    DxoHideModule,
    DxoFromModule,
    DxoPositionModule,
    DxoAtModule,
    DxoBoundaryOffsetModule,
    DxoCollisionModule,
    DxoMyModule,
    DxoOffsetModule,
    DxoToModule,
    DxoShowModule,
    DxoDateBoxAnimationModule,
    DxoDateBoxAtModule,
    DxoDateBoxBoundaryOffsetModule,
    DxiDateBoxButtonModule,
    DxoDateBoxCalendarOptionsModule,
    DxoDateBoxCollisionModule,
    DxoDateBoxDisplayFormatModule,
    DxoDateBoxDropDownOptionsModule,
    DxoDateBoxFromModule,
    DxoDateBoxHideModule,
    DxoDateBoxMyModule,
    DxoDateBoxOffsetModule,
    DxoDateBoxOptionsModule,
    DxoDateBoxPositionModule,
    DxoDateBoxShowModule,
    DxoDateBoxToModule,
    DxiDateBoxToolbarItemModule,
    DxTemplateModule
  ]
})
export class DxDateBoxModule { }

import type * as DxDateBoxTypes from "devextreme/ui/date_box_types";
export { DxDateBoxTypes };


