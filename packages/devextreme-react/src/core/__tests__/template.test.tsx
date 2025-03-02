/* eslint-disable max-classes-per-file */
import { cleanup, render, screen } from '@testing-library/react';
import * as React from 'react';
import { memo, forwardRef, ForwardedRef } from 'react';
import { act } from 'react-dom/test-utils';
import { Component, NestedComponentMeta } from '../component';
import ConfigurationComponent from '../nested-option';
import { Template } from '../template';
import {
  TestComponent,
  Widget,
  WidgetClass,
} from './test-component';

jest.useFakeTimers();

const waitForceUpdateFromTemplateRenderer = () => {
  act(() => {
    new Promise((ok: any) => {
      requestAnimationFrame(ok);
    });
  });
}


const templateProps = [{
  tmplOption: 'item',
  render: 'itemRender',
  component: 'itemComponent',
}];


const ComponentWithTemplates = memo(forwardRef(function ComponentWithTemplates(props: any, ref: ForwardedRef<any>) {
  return (
    <TestComponent
      templateProps={templateProps}
      ref={ref}
      {...props}
    />
  );
}));

const ComponentWithAsyncTemplates = memo(function ComponentWithAsyncTemplates(props: any) {
  return (
    <Component
      WidgetClass={WidgetClass}
      templateProps={templateProps}
      {...props}
    />
  );
});

function renderTemplate(
  name: string,
  model?: any,
  container?: any,
  index?: number,
  onRendered?: () => void,
): Element {
  model = model || {};
  container = container || document.createElement('div');
  const { render } = WidgetClass.mock.calls[0][1].integrationOptions.templates[name];
  return render({
    container, model, ...index && { index }, onRendered,
  });
}

function renderItemTemplate(
  model?: any,
  container?: any,
  index?: number,
  onRendered?: () => void,
): Element {
  return renderTemplate('item', model, container, index, onRendered);
}

function testTemplateOption(testedOption: string) {
  let prepareTemplate = (render) => render;

  if (testedOption === 'itemComponent') {
    prepareTemplate = (render) => {
      const ItemComponent = memo(function ItemComponent(props: { data: any; index?: number }) {
        const { data, index } = props;
        return render(data, index);
      });
      return ItemComponent;
    };
  }

  it('pass integrationOptions to widget', () => {
    const ref = React.createRef<HTMLDivElement>();
    const elementOptions: Record<string, any> = {};
    elementOptions[testedOption] = () => <div>Template</div>;
    render(
      <ComponentWithTemplates {...elementOptions}>
        <div ref={ref} />
      </ComponentWithTemplates>,
    );

    const options = WidgetClass.mock.calls[0][1];

    expect(options.item).toBe('item');

    const { integrationOptions } = options;

    expect(integrationOptions).toBeDefined();
    expect(integrationOptions.templates).toBeDefined();
    expect(integrationOptions.templates.item).toBeDefined();
    expect(typeof integrationOptions.templates.item.render).toBe('function');
  });

  it('renders', () => {
    const ref = React.createRef<HTMLDivElement>();
    const elementOptions: Record<string, any> = {};
    elementOptions[testedOption] = prepareTemplate((data: any) => (
      <div className="template">
        Template
        {' '}
        {data.text}
      </div>
    ));

    const { container } = render(
      <ComponentWithTemplates {...elementOptions}>
        <div ref={ref} />
      </ComponentWithTemplates>,
    );

    act(() => { renderItemTemplate({ text: 'with data' }, ref.current); });

    expect(container.querySelector('.template')?.outerHTML).toBe('<div class="template">Template with data</div>');
  });

  it('renders with text node inside component', () => {
    const ref = React.createRef<HTMLDivElement>();
    const elementOptions: Record<string, any> = {};
    elementOptions[testedOption] = () => <div>Template</div>;

    render(
      <ComponentWithTemplates {...elementOptions}>
        Text
        <div ref={ref} />
      </ComponentWithTemplates>,
    );

    act(() => { renderItemTemplate({ text: 'with data' }, ref.current); });

    expect(screen.getByText('Text')?.outerHTML)
      .toBe('<div>Text<div><div>Template</div><div style=\"display: none;\"></div></div></div>');
  });

  it('renders new template after component change', () => {
    const ref = React.createRef<HTMLDivElement>();
    const containerRef = React.createRef<HTMLDivElement>();
    const elementOptions: Record<string, any> = { ref };
    elementOptions[testedOption] = () => <div className="template">First Template</div>;
    const { rerender, container } = render(
      <ComponentWithTemplates {...elementOptions} />,
    );

    const changedElementOptions: Record<string, any> = { ref };
    changedElementOptions[testedOption] = () => <div className="template">Second Template</div>;
    rerender(
      <ComponentWithTemplates {...changedElementOptions}>
        <div ref={containerRef} className="container" />
      </ComponentWithTemplates>,
    );

    act(() => { renderItemTemplate(undefined, containerRef.current); });

    expect(container.querySelector('.template')?.outerHTML).toBe('<div class="template">Second Template</div>');
  });

  it('passes component option changes to widget', () => {
    const elementOptions: Record<string, any> = {};
    elementOptions[testedOption] = () => <div className="template">First Template</div>;
    const { rerender } = render(
      <ComponentWithTemplates {...elementOptions} />,
    );

    const changedElementOptions: Record<string, any> = {};
    changedElementOptions[testedOption] = () => <div className="template">Second Template</div>;
    rerender(
      <ComponentWithTemplates {...changedElementOptions} />,
    );

    jest.runAllTimers();
    const optionCalls = Widget.option.mock.calls;
    expect(optionCalls.length).toBe(1);

    expect(optionCalls[0][0]).toBe('integrationOptions');
    expect(typeof optionCalls[0][1].templates.item.render).toBe('function');
  });

  it('renders inside unwrapped container', () => {
    const ref = React.createRef<HTMLDivElement>();
    const elementOptions: Record<string, any> = {};
    elementOptions[testedOption] = () => <div className="template">Template</div>;
    const { container } = render(
      <ComponentWithTemplates {...elementOptions}>
        <div ref={ref} />
      </ComponentWithTemplates>,
    );

    act(() => { renderItemTemplate({}, ref.current); });

    expect(container.querySelector('.template')?.outerHTML).toBe('<div class="template">Template</div>');
  });

  it('renders template removeEvent listener', () => {
    const ref = React.createRef<HTMLDivElement>();

    const elementOptions: Record<string, any> = {};
    elementOptions[testedOption] = prepareTemplate((data: any) => (
      <>
        Template
        {' '}
        {data.text}
      </>
    ));
    const { container } = render(
      <ComponentWithTemplates {...elementOptions}>
        <div ref={ref} />
      </ComponentWithTemplates>,
    );

    act(() => { renderItemTemplate({ text: 'with data' }, ref.current); });

    expect((container.firstChild?.firstChild as HTMLDivElement).outerHTML)
      .toContain('<div>Template with data<div style=\"display: none;\"></div><span style=\"display: none;\"></span></div>');
  });

  it('does not render template removeEvent listener', () => {
    const ref = React.createRef<HTMLDivElement>();

    const elementOptions: Record<string, any> = {};
    elementOptions[testedOption] = prepareTemplate((data: any) => (
      <tbody>
        <tr>
          <td>
            Template
            {' '}
            {data.text}
          </td>
        </tr>
      </tbody>
    ));
    render(
      <ComponentWithTemplates {...elementOptions}>
        <div ref={ref} />
      </ComponentWithTemplates>,
    );

    const table = document.createElement('table');
    act(() => { renderItemTemplate({ text: 'with data' }, table); });

    expect(table.innerHTML)
      .toBe('<tbody><tr><td>Template with data</td></tr></tbody><tbody style=\"display: none;\"></tbody>');
  });

  it('render invisible element as tr tag', () => {
    const ref = React.createRef<HTMLDivElement>();

    const elementOptions: Record<string, any> = {};
    elementOptions[testedOption] = prepareTemplate((data: any) => (
      <tr>
        <td>
          Template
          {' '}
          {data.text}
        </td>
      </tr>
    ));
    render(
      <ComponentWithTemplates {...elementOptions}>
        <div ref={ref} />
      </ComponentWithTemplates>,
    );

    const table = document.createElement('tbody');
    act(() => { renderItemTemplate({ text: 'with data' }, table); });

    expect(table.innerHTML)
      .toBe('<tr><td>Template with data</td></tr><tr style=\"display: none;\"></tr>');
  });

  it('calls onRendered callback', () => {
    const ref = React.createRef<HTMLDivElement>();

    const elementOptions: Record<string, any> = {};
    elementOptions[testedOption] = prepareTemplate((data: any) => (
      <div className="template">
        Template
        {data.text}
      </div>
    ));
    render(
      <ComponentWithTemplates {...elementOptions}>
        <div ref={ref} />
      </ComponentWithTemplates>,
    );
    const onRendered: () => void = jest.fn();

    act(() => { renderItemTemplate({ text: 'with data' }, undefined, undefined, onRendered); });

    jest.runAllTimers();
    expect(onRendered).toBeCalled();
  });

  it('renders empty template without errors', () => {
    const ref = React.createRef<HTMLDivElement>();

    const elementOptions: Record<string, any> = {};
    elementOptions[testedOption] = () => null;

    const { rerender } = render(
      <ComponentWithTemplates {...elementOptions}>
        <div ref={ref} />
      </ComponentWithTemplates>,
    );

    act(() => { renderItemTemplate({ text: 1 }, ref.current); });
    expect(() => rerender(
      <ComponentWithTemplates {...elementOptions} />,
    )).not.toThrow();
  });

  it('has templates with unique ids', () => {
    const ref = React.createRef<any>();
    const refContainer = React.createRef<HTMLDivElement>();

    const elementOptions: Record<string, any> = {};
    elementOptions[testedOption] = prepareTemplate((data: any) => (
      <div className="template">
        Template
        <span>{data.text}</span>
      </div>
    ));

    render(
      <ComponentWithTemplates {...elementOptions} ref={ref}>
        <div ref={refContainer} />
      </ComponentWithTemplates>,
    );

    act(() => { renderItemTemplate({ text: 'First item' }, refContainer.current); });
    act(() => { renderItemTemplate({ text: 'Second item' }, refContainer.current); });

    expect(screen.getByText('First item')).toBeTruthy();
    expect(screen.getByText('Second item')).toBeTruthy();
  });
}

describe('function template', () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  testTemplateOption('itemRender');

  it('renders simple item', () => {
    const ref = React.createRef<HTMLDivElement>();
    const itemRender: any = jest.fn((text: string) => (
      <div className="template">
        Template
        {' '}
        {text}
      </div>
    ));
    const { container } = render(
      <ComponentWithTemplates itemRender={itemRender}>
        <div ref={ref} />
      </ComponentWithTemplates>,
    );
    act(() => { renderItemTemplate('with data', ref.current); });
    expect(itemRender).toBeCalled();

    expect(container.querySelector('.template')?.outerHTML).toBe('<div class="template">Template with data</div>');
  });

  it('renders index', () => {
    const ref = React.createRef<HTMLDivElement>();
    const itemRender: any = jest.fn((_, index: number) => (
      <div className="template">
        Index
        {' '}
        {index}
      </div>
    ));
    const { container } = render(
      <ComponentWithTemplates itemRender={itemRender}>
        <div ref={ref} />
      </ComponentWithTemplates>,
    );
    act(() => { renderItemTemplate(undefined, ref.current, 5); });
    expect(itemRender).toBeCalled();
    expect(container.querySelector('.template')?.outerHTML).toBe('<div class="template">Index 5</div>');
  });
});

describe('component template', () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  testTemplateOption('itemComponent');

  it('renders index', () => {
    const ref = React.createRef<HTMLDivElement>();
    const ItemTemplate = (props: any) => {
      const { data, index } = props;
      return (
        <div className="template">
          value:
          {' '}
          {data.value}
          , index:
          {' '}
          {index}
        </div>
      );
    };

    const { container } = render(
      <ComponentWithTemplates itemComponent={ItemTemplate}>
        <div ref={ref} />
      </ComponentWithTemplates>,
    );

    act(() => { renderItemTemplate({ value: 'Value' }, ref.current, 5); });

    expect(container.querySelector('.template')?.textContent).toBe('value: Value, index: 5');
  });
});

describe('nested template', () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  it('pass integrationOptions to widget', () => {
    const ItemTemplate = () => <div>Template</div>;
    render(
      <ComponentWithTemplates>
        <Template name="item1" render={ItemTemplate} />
        <Template name="item2" component={ItemTemplate} />
        <Template name="item3">
          <ItemTemplate />
        </Template>
      </ComponentWithTemplates>,
    );

    const options = WidgetClass.mock.calls[0][1];

    expect(options.item).toBeUndefined();

    const { integrationOptions } = options;

    expect(integrationOptions).toBeDefined();
    expect(integrationOptions.templates).toBeDefined();

    expect(integrationOptions.templates.item1).toBeDefined();
    expect(typeof integrationOptions.templates.item1.render).toBe('function');

    expect(integrationOptions.templates.item2).toBeDefined();
    expect(typeof integrationOptions.templates.item2.render).toBe('function');

    expect(integrationOptions.templates.item3).toBeDefined();
    expect(typeof integrationOptions.templates.item3.render).toBe('function');
  });

  it('renders nested templates', () => {
    const ref = React.createRef<HTMLDivElement>();
    const FirstTemplate = () => <div className="template">Template</div>;
    const { container } = render(
      <ComponentWithTemplates>
        <Template name="item1" render={FirstTemplate} />
        <div ref={ref} />
      </ComponentWithTemplates>,
    );
    act(() => { renderTemplate('item1', undefined, ref.current); });

    expect(container.querySelector('.template')?.outerHTML).toBe('<div class="template">Template</div>');
  });

  it('renders children of nested template', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(
      <ComponentWithTemplates>
        <Template name="item1">
          <div className="template">Template</div>
        </Template>
        <div ref={ref} />
      </ComponentWithTemplates>,
    );
    act(() => { renderTemplate('item1', undefined, ref.current); });

    expect(container.querySelector('.template')?.outerHTML)
      .toBe('<div class="template">Template</div>');
  });

  it('renders new templates after component change', () => {
    const ref = React.createRef<HTMLDivElement>();

    const FirstTemplate = () => <div className="template">First Template</div>;
    const { container, rerender } = render(
      <ComponentWithTemplates>
        <Template name="item1" render={FirstTemplate} />
        <div ref={ref} />
      </ComponentWithTemplates>,
    );
    act(() => { renderTemplate('item1', undefined, ref.current); });

    expect(container.querySelector('.template')?.outerHTML).toBe('<div class="template">First Template</div>');

    const SecondTemplate = () => <div className="template">Second Template</div>;

    rerender(
      <ComponentWithTemplates>
        <Template name="item1" render={SecondTemplate} />
        <div ref={ref} />
      </ComponentWithTemplates>,
    );

    expect(container.querySelector('.template')?.outerHTML).toBe('<div class="template">Second Template</div>');
  });

  it('renders new templates after children change', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container, rerender } = render(
      <ComponentWithTemplates>
        <Template name="item1">
          <div className="template">First Template</div>
        </Template>
        <div ref={ref} />
      </ComponentWithTemplates>,
    );
    act(() => { renderTemplate('item1', undefined, ref.current); });

    expect(container.querySelector('.template')?.outerHTML).toBe('<div class="template">First Template</div>');

    rerender(
      <ComponentWithTemplates>
        <Template name="item1">
          <div className="template">Second Template</div>
        </Template>
        <div ref={ref} />
      </ComponentWithTemplates>,
    );

    expect(container.querySelector('.template')?.outerHTML).toBe('<div class="template">Second Template</div>');
  });
});

describe('component/render in nested options', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
    cleanup();
  });

  const NestedComponent = function NestedComponent(props: any) {
    return (
      <ConfigurationComponent<{
        item?: any;
        itemRender?: any;
        itemComponent?: any;
      } & React.PropsWithChildren>
        elementDescriptor={{
          OptionName: 'option',
          TemplateProps: [{
            tmplOption: 'item',
            render: 'itemRender',
            component: 'itemComponent',
          }],
          ExpectedChildren: {
            test: { optionName: "test", isCollectionItem: false },
          },
        }}
        {...props}
      />
    );
  } as React.ComponentType<any> & NestedComponentMeta;

  NestedComponent.componentType = 'option';

  const CollectionNestedComponent = function CollectionNestedComponent(props: any) {
    return (
      <ConfigurationComponent<{
        template?: any;
        render?: any;
        component?: any;
      } & React.PropsWithChildren>
        elementDescriptor={{
          OptionName: 'collection',
          IsCollectionItem: true,
          TemplateProps: [{
            tmplOption: 'template',
            render: 'render',
            component: 'component',
          }],
          ExpectedChildren: {
            test: { optionName: "test", isCollectionItem: false },
          },
        }}
        {...props}
      />
    );
  } as React.ComponentType<any> & NestedComponentMeta;

  CollectionNestedComponent.componentType = 'option';

  it('pass integrationOptions options to widget', () => {
    const ItemTemplate = () => <div>Template</div>;
    render(
      <TestComponent>
        <NestedComponent itemComponent={ItemTemplate} />
      </TestComponent>,
    );

    const options = WidgetClass.mock.calls[0][1];
    expect(options.option.item).toBe('option.item');

    const { integrationOptions } = options;

    expect(integrationOptions).toBeDefined();
    expect(integrationOptions.templates).toBeDefined();
    expect(integrationOptions.templates['option.item']).toBeDefined();
    expect(typeof integrationOptions.templates['option.item'].render).toBe('function');
  });

  it('pass integrationOptions to widget with Template component', () => {
    const ItemTemplate = () => <div>Template</div>;
    render(
      <ComponentWithTemplates itemComponent={ItemTemplate}>
        <NestedComponent itemComponent={ItemTemplate} />
        <Template name="nested" render={ItemTemplate} />
      </ComponentWithTemplates>,
    );

    const options = WidgetClass.mock.calls[0][1];
    const { integrationOptions } = options;

    expect(integrationOptions.templates.nested).toBeDefined();
    expect(typeof integrationOptions.templates.nested.render).toBe('function');

    expect(integrationOptions.templates.item).toBeDefined();
    expect(typeof integrationOptions.templates.item.render).toBe('function');

    expect(integrationOptions.templates['option.item']).toBeDefined();
    expect(typeof integrationOptions.templates['option.item'].render).toBe('function');
  });

  it('pass integrationOptions options to widget with several templates', () => {
    const UserTemplate = () => <div>Template</div>;
    render(
      <TestComponent>
        <NestedComponent itemComponent={UserTemplate} />
        <CollectionNestedComponent render={UserTemplate} />
      </TestComponent>,
    );

    const options = WidgetClass.mock.calls[0][1];

    expect(options.option.item).toBe('option.item');
    expect(options.collection[0].template).toBe('collection[0].template');

    const { integrationOptions } = options;

    expect(Object.keys(integrationOptions.templates)).toEqual(['option.item', 'collection[0].template']);
  });

  it('pass integrationOptions options for collection nested components', () => {
    const UserTemplate = () => <div>Template</div>;

    render(
      <TestComponent>
        <CollectionNestedComponent render={UserTemplate} />
        <CollectionNestedComponent render={UserTemplate} />
        // @ts-expect-error TS2769
        <CollectionNestedComponent>
          <NestedComponent itemRender={UserTemplate} />
        </CollectionNestedComponent>
        // @ts-expect-error TS2769
        <CollectionNestedComponent>
          <NestedComponent prop='value' />
          abc
        </CollectionNestedComponent>
        <CollectionNestedComponent>
          <NestedComponent prop='value' />
        </CollectionNestedComponent>
        // @ts-expect-error TS2769
        <NestedComponent>
          <CollectionNestedComponent render={UserTemplate} />
        </NestedComponent>
      </TestComponent>,
    );

    const options = WidgetClass.mock.calls[0][1];

    expect(options.collection[0].template).toBe('collection[0].template');
    expect(options.collection[1].template).toBe('collection[1].template');
    expect(options.collection[2].option.item).toBe('collection[2].option.item');
    expect(options.collection[3].option.prop).toBe('value');
    expect(options.collection[4].option.prop).toBe('value');
    expect(options.option.collection[0].template).toBe('option.collection[0].template');
    
    const { integrationOptions } = options;

    expect(Object.keys(integrationOptions.templates)).toEqual([
      'option.collection[0].template',
      'collection[0].template',
      'collection[1].template',
      'collection[2].option.item',
      'collection[3].template',
    ]);
  });

  it('pass integrationOptions options for collection nested components with custom components', () => {
    const UserTemplate = () => <div>Template</div>;

    const CustomComponentWithTemplate = () => <NestedComponent itemRender={UserTemplate} />;
    const CustomComponentWithProp = () => <NestedComponent prop='value' />;

    render(
      <TestComponent>
        <CollectionNestedComponent>
          <CustomComponentWithTemplate />
        </CollectionNestedComponent>
        // @ts-expect-error TS2769
        <CollectionNestedComponent>
          <CustomComponentWithProp />
          abc
        </CollectionNestedComponent>
        <CollectionNestedComponent>
          <CustomComponentWithProp />
        </CollectionNestedComponent>
        <CollectionNestedComponent>
          <CustomComponentWithProp />
          <UserTemplate />
        </CollectionNestedComponent>
      </TestComponent>,
    );

    const options = WidgetClass.mock.calls[0][1];

    expect(options.collection[0].option.item).toBe('collection[0].option.item');
    expect(options.collection[1].option.prop).toBe('value');
    expect(options.collection[1].template).toBe('collection[1].template');
    expect(options.collection[2].option.prop).toBe('value');
    expect(options.collection[3].option.prop).toBe('value');
    expect(options.collection[3].template).toBe('collection[3].template');

    const { integrationOptions } = options;

    expect(Object.keys(integrationOptions.templates)).toEqual([
      'collection[0].option.item',
      'collection[1].template',
      'collection[3].template',
    ]);
  });

  it('pass integrationOptions for collection nested component with \'template\' option if a child defined', () => {
    const UserTemplate = () => <div>Template</div>;
    render(
      <TestComponent>
        <NestedComponent>
          <UserTemplate />
        </NestedComponent>
        <CollectionNestedComponent>
          <UserTemplate />
        </CollectionNestedComponent>
        <CollectionNestedComponent>
          <UserTemplate />
        </CollectionNestedComponent>
        <CollectionNestedComponent>
          <NestedComponent />
          <UserTemplate />
        </CollectionNestedComponent>
        <CollectionNestedComponent>
          <NestedComponent />
          abc
        </CollectionNestedComponent>
        <CollectionNestedComponent>
          <NestedComponent />
        </CollectionNestedComponent>

        <CollectionNestedComponent />
        <CollectionNestedComponent>
          <CollectionNestedComponent />
          <CollectionNestedComponent />
        </CollectionNestedComponent>
      </TestComponent>,
    );

    const options = WidgetClass.mock.calls[0][1];

    expect(options.collection[0].template).toBe('collection[0].template');
    expect(options.collection[1].template).toBe('collection[1].template');
    expect(options.collection[2].template).toBe('collection[2].template');
    expect(options.collection[3].template).toBe('collection[3].template');
    expect(options.collection[4].template).toBe(undefined);
    expect(options.collection[5].template).toBe(undefined);
    expect(options.collection[6].template).toBe(undefined);
    expect(options.option.item).toBe(undefined);
    expect(options.option.template).toBe(undefined);

    const { integrationOptions } = options;
    expect(Object.keys(integrationOptions.templates)).toEqual([
      'collection[0].template',
      'collection[1].template',
      'collection[2].template',
      'collection[3].template',
    ]);
  });

  it('pass integrationOptions for collection nested component with \'template\' option for different transcluded content', () => {
    const UserTemplate = () => <div>Template</div>;
    render(
      <TestComponent>
        <CollectionNestedComponent>
          <NestedComponent />
          <div>
            SampleText
          </div>
        </CollectionNestedComponent>
        <CollectionNestedComponent>
          {42}
        </CollectionNestedComponent>
        <CollectionNestedComponent>
          <>
            {null}
          </>
        </CollectionNestedComponent>
        <CollectionNestedComponent>
          <NestedComponent />
          {undefined}
          {null}
          {false}
          Text
        </CollectionNestedComponent>
        <CollectionNestedComponent>
          <NestedComponent />
          {undefined}
          {null}
          {false}
          <UserTemplate />
        </CollectionNestedComponent>
        <CollectionNestedComponent>
          <NestedComponent />
          {false}
          {undefined}
          {null}
        </CollectionNestedComponent>
      </TestComponent>,
    );

    const options = WidgetClass.mock.calls[0][1];

    expect(options.collection[0].template).toBe('collection[0].template');
    expect(options.collection[1].template).toBe('collection[1].template');
    expect(options.collection[3].template).toBe('collection[3].template');
    expect(options.collection[4].template).toBe('collection[4].template');

    const { integrationOptions } = options;
    expect(Object.keys(integrationOptions.templates)).toEqual([
      'collection[0].template',
      'collection[1].template',
      'collection[3].template',
      'collection[4].template',
    ]);
  });

  it('renders templates', () => {
    const ref = React.createRef<HTMLDivElement>();

    const FirstTemplate = () => <div className="template">First Template</div>;
    const { container, rerender } = render(
      <TestComponent>
        <NestedComponent itemComponent={FirstTemplate} />
        <div ref={ref} />
      </TestComponent>,
    );
    act(() => { renderTemplate('option.item', undefined, ref.current); });

    expect(container.querySelector('.template')?.outerHTML).toBe('<div class="template">First Template</div>');

    const SecondTemplate = () => <div className="template">Second Template</div>;
    rerender(
      <TestComponent>
        <NestedComponent itemComponent={SecondTemplate} />
        <div ref={ref} />
      </TestComponent>,
    );

    expect(container.querySelector('.template')?.outerHTML).toBe('<div class="template">Second Template</div>');
  });

  it('renders static templates', () => {
    const ref = React.createRef<HTMLDivElement>();

    const FirstTemplate = () => <div className="template">First Template</div>;
    const { container, rerender } = render(
      <TestComponent>
        <CollectionNestedComponent>
          <FirstTemplate />
        </CollectionNestedComponent>
        <div ref={ref} />
      </TestComponent>,
    );
    act(() => { renderTemplate('collection[0].template', undefined, ref.current); });

    expect(container.querySelector('.template')?.outerHTML).toBe('<div class="template">First Template</div>');

    const SecondTemplate = () => <div className="template">Second Template</div>;
    rerender(
      <TestComponent>
        <CollectionNestedComponent>
          <SecondTemplate />
        </CollectionNestedComponent>
        <div ref={ref} />
      </TestComponent>,
    );

    expect(container.querySelector('.template')?.outerHTML)
      .toBe('<div class="template">Second Template</div>');
  });

  // T748280
  it('renders updates in deeply nested templates', () => {
    const ref = React.createRef<HTMLDivElement>();

    const getTemplate = (arg: string) => () => <div className="template">{arg}</div>;
    const TestContainer = (props: any) => {
      const { value } = props;
      return (
        <TestComponent>
          <CollectionNestedComponent>
            <NestedComponent itemComponent={getTemplate(value)} />
          </CollectionNestedComponent>
          <div ref={ref} />
        </TestComponent>
      );
    };
    const { container, rerender } = render(<TestContainer value="test" />);
    rerender(
      <TestContainer value="test2" />,
    );

    act(() => { renderTemplate('collection[0].option.item', undefined, ref.current); });

    expect(container.querySelector('.template')?.outerHTML).toBe('<div class="template">test2</div>');
  });

  it('adds nested components dynamically', () => {
    const renderItem = () => <div>Template</div>;
    const items = [{ id: 1, render: renderItem }];

    const TestContainer = (props: any) => {
      const { items: propItems } = props;
      return (
        <TestComponent>
          {propItems.map(
            (item) => <CollectionNestedComponent key={item.id} render={item.render} />,
          )}
        </TestComponent>
      );
    };

    const { rerender } = render(<TestContainer items={items} />);

    rerender(<TestContainer items={[
      ...items,
      { id: 2, render: renderItem },
    ]}
    />);

    const updatedOptions = Widget.option.mock.calls;

    expect(updatedOptions[1][0]).toBe('collection');
    expect(updatedOptions[1][1].length).toBe(2);
    expect(updatedOptions[1][1][0].template).toBe('collection[0].template');
    expect(updatedOptions[1][1][1].template).toBe('collection[1].template');
    expect(updatedOptions[0][0]).toBe('integrationOptions');
    expect(Object.keys(updatedOptions[0][1].templates)).toEqual([
      'collection[0].template',
      'collection[1].template',
    ]);
  });

  it('removes nested components dynamically', () => {
    const renderItem = () => <div>Template</div>;
    const items = [{ id: 1, render: renderItem }, { id: 2, render: renderItem }];

    const TestContainer = (props: any) => {
      const { items: propItems } = props;
      return (
        <TestComponent>
          {propItems.map(
            (item) => <CollectionNestedComponent key={item.id} render={item.render} />,
          )}
        </TestComponent>
      );
    };

    const { rerender } = render(<TestContainer items={items} />);
    rerender(
      <TestContainer items={items.slice(0, 1)} />,
    );

    const updatedOptions = Widget.option.mock.calls;

    expect(updatedOptions[1][0]).toBe('collection');
    expect(updatedOptions[1][1].length).toBe(1);
    expect(updatedOptions[1][1][0].template).toBe('collection[0].template');
  });

  xit('removes deleted tempalates from integrationOptions', () => {
    const ItemTemplate = () => <div>Template</div>;
    const items = [{ id: 1, render: ItemTemplate }, { id: 2, render: ItemTemplate }];

    const TestContainer = (props: any) => {
      const { items: propItems } = props;
      return (
        <TestComponent>
          {propItems.map(
            (item) => <CollectionNestedComponent key={item.id} render={item.render} />,
          )}
        </TestComponent>
      );
    };

    const { rerender } = render(<TestContainer items={items} />);
    rerender(
      <TestContainer items={items.slice(0, 1)} />,
    );

    const updatedOptions = Widget.option.mock.calls;

    expect(updatedOptions[0][0]).toBe('integrationOptions');
    expect(Object.keys(updatedOptions[0][1].templates).length).toBe(1);
    expect(Object.keys(updatedOptions[0][1].templates)[0]).toBe(
      'collection[0].template',
    );
  });

  it('does not create template for widget transcluded content', () => {
    const ComponentWithTranscludedContent = memo(function ComponentWithTranscludedContent(props: any) {
      return (
        <TestComponent
          templateProps={
            [{
              tmplOption: 'template',
              render: 'render',
              component: 'component',
            }]
          }
          {...props}
        />
      );
    });

    render(
      <ComponentWithTranscludedContent>
        Widget Transcluded Content
      </ComponentWithTranscludedContent>,
    );

    const { integrationOptions } = WidgetClass.mock.calls[0][1];
    expect(integrationOptions).toBe(undefined);
  });
});

describe('async template', () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  it('renders', async () => {
    const elementOptions: Record<string, any> = {};
    elementOptions.itemRender = (data: any) => (
      <div className="template">
        Template
        {' '}
        {data.text}
      </div>
    );

    const ref = React.createRef<HTMLDivElement>();

    const { container } = render(
      <ComponentWithAsyncTemplates {...elementOptions}>
        <div ref={ref} />
      </ComponentWithAsyncTemplates>,
    );

    act(() => { renderItemTemplate({ text: 'with data' }, ref.current); });

    expect(container.querySelector('.template')?.outerHTML)
      .toBe('<div class="template">Template with data</div>');
  });

  /* T1124149 */
  it('should render template if it is added while previous rendering', async () => {
    const ref = React.createRef<HTMLDivElement>();
    const elementOptions: Record<string, any> = {};
    elementOptions.itemRender = (data: any) => (
      <div className={`template ${data.cls}`}>
        Template
      </div>
    );

    const { container } = render(
      <ComponentWithAsyncTemplates {...elementOptions}>
        <div ref={ref} />
      </ComponentWithAsyncTemplates>,
    );

    act(() => {
      renderItemTemplate({ cls: 'data1' }, ref.current, 0, () => {
        renderItemTemplate({ cls: 'data2' }, ref.current, 0);
      });
    });

    await waitForceUpdateFromTemplateRenderer();

    await waitForceUpdateFromTemplateRenderer(); // sometimes first call not helps

    expect(container.querySelector('.template.data2')?.outerHTML).toBe('<div class="template data2">Template</div>');
  });
});
