import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import DataGrid from 'devextreme-testcafe-models/dataGrid';
import { createWidget } from '../../../helpers/createWidget';
import url from '../../../helpers/getPageUrl';
import { getData } from '../helpers/generateDataSourceData';
import { Themes } from '../../../helpers/themes';
import { changeTheme } from '../../../helpers/changeTheme';

const DATA_GRID_SELECTOR = '#container';

fixture.disablePageReloads`FixedColumns - appearance`
  .page(url(__dirname, '../../container.html'));

([
  [Themes.genericLight, false],
  [Themes.genericLightCompact, false],
  [Themes.materialBlue, false],
  [Themes.materialBlueCompact, false],
  [Themes.fluentBlue, false],
  [Themes.fluentBlueCompact, false],
  [Themes.genericLight, true],
  [Themes.genericLightCompact, true],
  [Themes.materialBlue, true],
  [Themes.materialBlueCompact, true],
  [Themes.fluentBlue, true],
  [Themes.fluentBlueCompact, true],
] as const).forEach(
  ([theme, showRowLines]) => {
    // T1268664
    const showRowLinesState = `showRowLines=${showRowLines ? 'true' : 'false'}`;
    test(`Row height for selected, focus and edit state should not differ from the default one if ${showRowLinesState}`, async (t) => {
      const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

      const dataGrid = new DataGrid(DATA_GRID_SELECTOR);

      await t.expect(dataGrid.isReady()).ok();

      await takeScreenshot(`datagrid_default_state_with_${showRowLinesState}_(${theme}).png`, dataGrid.element);

      await t
        .click(dataGrid.getDataRow(2).getCommandCell(41).getButton(0))
        .click(dataGrid.getDataRow(3).getCommandCell(0).element)
        .click(dataGrid.getDataRow(4).getDataCell(4).element);

      await t.debug();

      await takeScreenshot(`datagrid_selected_focused_edit_state_with_${showRowLinesState}_(${theme}).png`, dataGrid.element);

      await t
        .expect(compareResults.isValid())
        .ok(compareResults.errorMessages());
    }).before(async () => {
      await changeTheme(theme);

      return createWidget('dxDataGrid', {
        dataSource: getData(13, 40),
        keyExpr: 'field_0',
        columnFixing: {
          enabled: true,
        },
        groupPanel: {
          visible: true,
        },
        editing: {
          allowUpdating: true,
          mode: 'row',
        },
        showColumnHeaders: true,
        columnAutoWidth: true,
        allowColumnReordering: true,
        allowColumnResizing: true,
        focusedRowEnabled: true,
        showRowLines,
        selection: {
          mode: 'multiple',
        },
        customizeColumns(columns) {
          columns[5].fixed = true;
          columns[6].fixed = true;

          columns[11].fixed = true;
          columns[11].fixedPosition = 'right';
          columns[12].fixed = true;
          columns[12].fixedPosition = 'right';
        },
      });
    }).after(async () => {
      await changeTheme(Themes.genericLight);
    });
  },
);
