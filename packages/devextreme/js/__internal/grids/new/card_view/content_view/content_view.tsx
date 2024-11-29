/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { resizeObserverSingleton } from '@ts/core/m_resize_observer';
import type { ErrorRowProperties } from '@ts/grids/new/grid_core/content_view/error_row';
import { ErrorRow } from '@ts/grids/new/grid_core/content_view/error_row';
import type { NoDataTextProperties } from '@ts/grids/new/grid_core/content_view/no_data_text';
import { NoDataText } from '@ts/grids/new/grid_core/content_view/no_data_text';
import { LoadPanel, type LoadPanelProperties } from '@ts/grids/new/grid_core/inferno_wrappers/load_panel';
import { Scrollable } from '@ts/grids/new/grid_core/inferno_wrappers/scrollable';
import type { InfernoNode } from 'inferno';
import { Component, createRef } from 'inferno';

import type { ContentProps } from './content/content';
import { Content } from './content/content';
import { VirtualRow } from './virtual_scrolling/virtual_row';

export const CLASSES = {
  content: 'dx-gridcore-content',
  contentView: 'dx-gridcore-content-view',
};

export interface ContentViewProps {
  errorRowProps: ErrorRowProperties;
  loadPanelProps: LoadPanelProperties & { visible: boolean };
  noDataTextProps: NoDataTextProperties & { visible: boolean };

  contentProps: ContentProps;

  virtualScrollingProps?: {
    heightUp?: number;
    heightDown?: number;
  };

  onViewportHeightChange?: (value: number) => void;

  scrollTop?: number;

  onScroll?: (scrollTop: number) => void;

  onWidthChange?: (value: number) => void;
}

export class ContentView extends Component<ContentViewProps> {
  private readonly scrollableRef = createRef<Scrollable>();

  private readonly containerRef = createRef<HTMLDivElement>();

  render(props: ContentViewProps): InfernoNode {
    return (
      <div className={CLASSES.contentView} ref={this.containerRef}>
        <ErrorRow {...props.errorRowProps} />
        <LoadPanel {...props.loadPanelProps} />

        <Scrollable
          ref={this.scrollableRef}
          onScroll={(e): void => this.props.onScroll?.(e.scrollOffset.top)}
          scrollTop={this.props.scrollTop}
          direction={'both'}
        >
          {props.noDataTextProps.visible && <NoDataText {...props.noDataTextProps} />}
          <div className={CLASSES.content} tabIndex={0}>
            {
              props.virtualScrollingProps?.heightUp
                ? <VirtualRow height={props.virtualScrollingProps?.heightUp}/>
                : undefined
            }
            <Content {...props.contentProps} />
            {
              props.virtualScrollingProps?.heightDown
                ? <VirtualRow height={props.virtualScrollingProps?.heightDown}/>
                : undefined
            }
          </div>
        </Scrollable>
      </div>
    );
  }

  private updateSizesInfo(): void {
    const clientHeight = this.scrollableRef.current!.clientHeight();
    this.props?.onViewportHeightChange?.(clientHeight);
  }

  componentDidMount(): void {
    this.updateSizesInfo();
    resizeObserverSingleton.observe(
      this.containerRef.current!,
      (entry: ResizeObserverEntry) => {
        this.props.onWidthChange?.(entry.contentRect.width);
      },
    );
  }

  componentDidUpdate(): void {
    this.updateSizesInfo();
  }
}
