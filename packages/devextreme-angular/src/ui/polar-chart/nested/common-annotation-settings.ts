/* tslint:disable:max-line-length */


import {
    Component,
    OnInit,
    OnDestroy,
    NgModule,
    Host,
    ElementRef,
    Renderer2,
    Inject,
    AfterViewInit,
    SkipSelf,
    Input
} from '@angular/core';

import { DOCUMENT } from '@angular/common';


import { DashStyle, Font, TextOverflow, AnnotationType, WordWrap } from 'devextreme/common/charts';
import { dxPolarChartAnnotationConfig } from 'devextreme/viz/polar_chart';

import {
    NestedOptionHost,
    extractTemplate,
    DxTemplateDirective,
    IDxTemplateHost,
    DxTemplateHost
} from 'devextreme-angular/core';
import { NestedOption } from 'devextreme-angular/core';


@Component({
    selector: 'dxo-polar-chart-common-annotation-settings',
    template: '<ng-content></ng-content>',
    styles: [':host { display: block; }'],
    providers: [NestedOptionHost, DxTemplateHost]
})
export class DxoPolarChartCommonAnnotationSettingsComponent extends NestedOption implements AfterViewInit, OnDestroy, OnInit,
    IDxTemplateHost {
    @Input()
    get allowDragging(): boolean {
        return this._getOption('allowDragging');
    }
    set allowDragging(value: boolean) {
        this._setOption('allowDragging', value);
    }

    @Input()
    get angle(): number | undefined {
        return this._getOption('angle');
    }
    set angle(value: number | undefined) {
        this._setOption('angle', value);
    }

    @Input()
    get argument(): Date | number | string | undefined {
        return this._getOption('argument');
    }
    set argument(value: Date | number | string | undefined) {
        this._setOption('argument', value);
    }

    @Input()
    get arrowLength(): number {
        return this._getOption('arrowLength');
    }
    set arrowLength(value: number) {
        this._setOption('arrowLength', value);
    }

    @Input()
    get arrowWidth(): number {
        return this._getOption('arrowWidth');
    }
    set arrowWidth(value: number) {
        this._setOption('arrowWidth', value);
    }

    @Input()
    get border(): { color?: string, cornerRadius?: number, dashStyle?: DashStyle, opacity?: number | undefined, visible?: boolean, width?: number } {
        return this._getOption('border');
    }
    set border(value: { color?: string, cornerRadius?: number, dashStyle?: DashStyle, opacity?: number | undefined, visible?: boolean, width?: number }) {
        this._setOption('border', value);
    }

    @Input()
    get color(): string {
        return this._getOption('color');
    }
    set color(value: string) {
        this._setOption('color', value);
    }

    @Input()
    get customizeTooltip(): ((annotation: dxPolarChartAnnotationConfig | any) => Record<string, any>) | undefined {
        return this._getOption('customizeTooltip');
    }
    set customizeTooltip(value: ((annotation: dxPolarChartAnnotationConfig | any) => Record<string, any>) | undefined) {
        this._setOption('customizeTooltip', value);
    }

    @Input()
    get data(): any {
        return this._getOption('data');
    }
    set data(value: any) {
        this._setOption('data', value);
    }

    @Input()
    get description(): string | undefined {
        return this._getOption('description');
    }
    set description(value: string | undefined) {
        this._setOption('description', value);
    }

    @Input()
    get font(): Font {
        return this._getOption('font');
    }
    set font(value: Font) {
        this._setOption('font', value);
    }

    @Input()
    get height(): number | undefined {
        return this._getOption('height');
    }
    set height(value: number | undefined) {
        this._setOption('height', value);
    }

    @Input()
    get image(): string | { height?: number, url?: string | undefined, width?: number } {
        return this._getOption('image');
    }
    set image(value: string | { height?: number, url?: string | undefined, width?: number }) {
        this._setOption('image', value);
    }

    @Input()
    get offsetX(): number | undefined {
        return this._getOption('offsetX');
    }
    set offsetX(value: number | undefined) {
        this._setOption('offsetX', value);
    }

    @Input()
    get offsetY(): number | undefined {
        return this._getOption('offsetY');
    }
    set offsetY(value: number | undefined) {
        this._setOption('offsetY', value);
    }

    @Input()
    get opacity(): number {
        return this._getOption('opacity');
    }
    set opacity(value: number) {
        this._setOption('opacity', value);
    }

    @Input()
    get paddingLeftRight(): number {
        return this._getOption('paddingLeftRight');
    }
    set paddingLeftRight(value: number) {
        this._setOption('paddingLeftRight', value);
    }

    @Input()
    get paddingTopBottom(): number {
        return this._getOption('paddingTopBottom');
    }
    set paddingTopBottom(value: number) {
        this._setOption('paddingTopBottom', value);
    }

    @Input()
    get radius(): number | undefined {
        return this._getOption('radius');
    }
    set radius(value: number | undefined) {
        this._setOption('radius', value);
    }

    @Input()
    get series(): string | undefined {
        return this._getOption('series');
    }
    set series(value: string | undefined) {
        this._setOption('series', value);
    }

    @Input()
    get shadow(): { blur?: number, color?: string, offsetX?: number, offsetY?: number, opacity?: number } {
        return this._getOption('shadow');
    }
    set shadow(value: { blur?: number, color?: string, offsetX?: number, offsetY?: number, opacity?: number }) {
        this._setOption('shadow', value);
    }

    @Input()
    get template(): any {
        return this._getOption('template');
    }
    set template(value: any) {
        this._setOption('template', value);
    }

    @Input()
    get text(): string | undefined {
        return this._getOption('text');
    }
    set text(value: string | undefined) {
        this._setOption('text', value);
    }

    @Input()
    get textOverflow(): TextOverflow {
        return this._getOption('textOverflow');
    }
    set textOverflow(value: TextOverflow) {
        this._setOption('textOverflow', value);
    }

    @Input()
    get tooltipEnabled(): boolean {
        return this._getOption('tooltipEnabled');
    }
    set tooltipEnabled(value: boolean) {
        this._setOption('tooltipEnabled', value);
    }

    @Input()
    get tooltipTemplate(): any {
        return this._getOption('tooltipTemplate');
    }
    set tooltipTemplate(value: any) {
        this._setOption('tooltipTemplate', value);
    }

    @Input()
    get type(): AnnotationType | undefined {
        return this._getOption('type');
    }
    set type(value: AnnotationType | undefined) {
        this._setOption('type', value);
    }

    @Input()
    get value(): Date | number | string | undefined {
        return this._getOption('value');
    }
    set value(value: Date | number | string | undefined) {
        this._setOption('value', value);
    }

    @Input()
    get width(): number | undefined {
        return this._getOption('width');
    }
    set width(value: number | undefined) {
        this._setOption('width', value);
    }

    @Input()
    get wordWrap(): WordWrap {
        return this._getOption('wordWrap');
    }
    set wordWrap(value: WordWrap) {
        this._setOption('wordWrap', value);
    }

    @Input()
    get x(): number | undefined {
        return this._getOption('x');
    }
    set x(value: number | undefined) {
        this._setOption('x', value);
    }

    @Input()
    get y(): number | undefined {
        return this._getOption('y');
    }
    set y(value: number | undefined) {
        this._setOption('y', value);
    }


    protected get _optionPath() {
        return 'commonAnnotationSettings';
    }


    constructor(@SkipSelf() @Host() parentOptionHost: NestedOptionHost,
            @Host() optionHost: NestedOptionHost,
            private renderer: Renderer2,
            @Inject(DOCUMENT) private document: any,
            @Host() templateHost: DxTemplateHost,
            private element: ElementRef) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
        templateHost.setHost(this);
    }

    setTemplate(template: DxTemplateDirective) {
        this.template = template;
    }
    ngAfterViewInit() {
        extractTemplate(this, this.element, this.renderer, this.document);
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
    DxoPolarChartCommonAnnotationSettingsComponent
  ],
  exports: [
    DxoPolarChartCommonAnnotationSettingsComponent
  ],
})
export class DxoPolarChartCommonAnnotationSettingsModule { }
