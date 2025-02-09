/* eslint-disable @typescript-eslint/no-floating-promises */
import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import DataGrid from 'devextreme-testcafe-models/dataGrid';
import url from '../../../helpers/getPageUrl';
import { createWidget } from '../../../helpers/createWidget';
import { changeTheme } from '../../../helpers/changeTheme';
import { Themes } from '../../../helpers/themes';
import { getData } from '../helpers/generateDataSourceData';

fixture.disablePageReloads`Column Fixing`.page(
  url(__dirname, '../../container.html'),
);

[Themes.genericLight, Themes.materialBlue, Themes.fluentBlue].forEach(
  (theme) => {
    test('Fixed columns: Check context menu items', async (t) => {
      const dataGrid = new DataGrid('#container');
      const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

      await t.expect(dataGrid.isReady()).ok();

      await t
        .rightClick(dataGrid.getHeaders().getHeaderRow(0).element)
        .click(dataGrid.getContextMenu().getItemByOrder(4))
        .expect(
          await takeScreenshot(
            `sticky_columns_context_menu_(${theme}).png`,
            dataGrid.element,
          ),
        )
        .ok()
        .expect(compareResults.isValid())
        .ok(compareResults.errorMessages());
    })
      .before(async () => {
        await changeTheme(theme);
        await createWidget('dxDataGrid', {
          dataSource: getData(5, 5),
          width: '100%',
          columnFixing: {
            enabled: true,
          },
        });
      })
      .after(async () => {
        await changeTheme(Themes.genericLight);
      });
  },
);
