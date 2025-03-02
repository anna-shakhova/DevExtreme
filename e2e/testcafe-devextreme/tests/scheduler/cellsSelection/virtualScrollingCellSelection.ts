import Scheduler from 'devextreme-testcafe-models/scheduler';
import url from '../../../helpers/getPageUrl';
import { scrollTo } from '../utils';
import {
  createScheduler,
  selectCells,
  moveMouse,
  checkSelectionWhenFocusedInViewport,
  checkSelectionWhenFocusedIsNotInViewport,
  checkAllDayCellsWhenInViewport,
  checkAllDayCellsWhenNotInViewport,
} from './init/widget.setup';

fixture.disablePageReloads`Scheduler: Cells Selection in Virtual Scrolling`
  .page(url(__dirname, '../../container.html'));

[true, false].forEach((showAllDayPanel) => {
  test(`Selected cells shouldn't disapppear on scroll when showAllDayPanel is equal to ${showAllDayPanel}`, async (t) => {
    const scheduler = new Scheduler('#container');

    await t
      .dragToElement(scheduler.getDateTableCell(0, 0), scheduler.getDateTableCell(0, 1));

    await checkSelectionWhenFocusedInViewport(t, scheduler, 8, 6, 1);

    await scrollTo(0, 500);
    await checkSelectionWhenFocusedIsNotInViewport(t, scheduler, 9, 6, 1);

    await scrollTo(0, 0);
    await checkSelectionWhenFocusedInViewport(t, scheduler, 8, 6, 1);
  }).before(async () => createScheduler({ showAllDayPanel }));

  test(`Selected cells shouldn't disapppear on scroll when showAllDayPanel is equal to ${showAllDayPanel} and horizontal grouping is used`, async (t) => {
    const scheduler = new Scheduler('#container');

    await t
      .dragToElement(scheduler.getDateTableCell(0, 0), scheduler.getDateTableCell(0, 1));

    await checkSelectionWhenFocusedInViewport(t, scheduler, 8, 6, 1);

    await scrollTo(0, 500);
    await checkSelectionWhenFocusedIsNotInViewport(t, scheduler, 9, 6, 1);

    await scrollTo(0, 0);
    await checkSelectionWhenFocusedInViewport(t, scheduler, 8, 6, 1);
  }).before(async () => createScheduler({
    showAllDayPanel,
    groups: ['resourceId0'],
    resources: [{
      fieldExpr: 'resourceId0',
      dataSource: [{ id: 0 }, { id: 1 }],
    }],
  }));

  test(`Selected cells shouldn't disapppear on scroll when showAllDayPanel is equal to ${showAllDayPanel} and appointments are grouped by date`, async (t) => {
    const scheduler = new Scheduler('#container');

    await t
      .dragToElement(scheduler.getDateTableCell(0, 0), scheduler.getDateTableCell(0, 2));

    await checkSelectionWhenFocusedInViewport(t, scheduler, 8, 6, 2);

    await scrollTo(0, 500);
    await checkSelectionWhenFocusedIsNotInViewport(t, scheduler, 9, 6, 2);

    await scrollTo(0, 0);
    await checkSelectionWhenFocusedInViewport(t, scheduler, 8, 6, 2);
  }).before(async () => createScheduler({
    showAllDayPanel,
    groups: ['resourceId0'],
    views: [{
      type: 'week',
      groupOrientation: 'horizontal',
      groupByDate: true,
    }],
  }));

  test(`Selected cells shouldn't disapppear on scroll when showAllDayPanel is equal to ${showAllDayPanel} and appointments are grouped vertically`, async (t) => {
    const scheduler = new Scheduler('#container');

    await t
      .dragToElement(scheduler.getDateTableCell(0, 0), scheduler.getDateTableCell(0, 1));

    const indexDifference = showAllDayPanel ? 1 : 0;
    await checkSelectionWhenFocusedInViewport(
      t,
      scheduler,
      8 - indexDifference,
      6 - indexDifference,
      1,
    );

    await scrollTo(0, 1100);
    await checkSelectionWhenFocusedIsNotInViewport(
      t,
      scheduler,
      4 + indexDifference,
      2 + indexDifference,
      1,
    );

    await scrollTo(0, 0);
    await checkSelectionWhenFocusedInViewport(
      t,
      scheduler,
      8 - indexDifference,
      6 - indexDifference,
      1,
    );
  }).before(async () => createScheduler({
    showAllDayPanel,
    groups: ['resourceId0'],
    views: [{
      type: 'week',
      groupOrientation: 'vertical',
    }],
  }));
});

test('All-day panel\'s selected cells shouldn\'t disapppear on scroll when horizontal grouping is used', async (t) => {
  const scheduler = new Scheduler('#container');

  await t
    .dragToElement(scheduler.getAllDayTableCell(0), scheduler.getAllDayTableCell(1));

  await checkAllDayCellsWhenInViewport(t, scheduler);

  await scrollTo(0, 500);
  await checkAllDayCellsWhenInViewport(t, scheduler);

  await scrollTo(0, 0);
  await checkAllDayCellsWhenInViewport(t, scheduler);
}).before(async () => createScheduler({
  showAllDayPanel: true,
  groups: ['resourceId0'],
}));

test('All-day panel\'s selected cells shouldn\'t disapppear on scroll when vertical grouping is used', async (t) => {
  const scheduler = new Scheduler('#container');

  await t
    .dragToElement(scheduler.getAllDayTableCell(0), scheduler.getAllDayTableCell(1));

  await checkAllDayCellsWhenInViewport(t, scheduler);

  await scrollTo(0, 500);
  await checkAllDayCellsWhenNotInViewport(t, scheduler);

  await scrollTo(0, 0);
  await checkAllDayCellsWhenInViewport(t, scheduler);
}).before(async () => createScheduler({
  showAllDayPanel: true,
  groups: ['resourceId0'],
  views: [{
    type: 'week',
    groupOrientation: 'vertical',
  }],
}));

test('Selection should work correctly while scrolling', async (t) => {
  const scheduler = new Scheduler('#container');

  await selectCells(
    scheduler.dateTable,
    scheduler.getDateTableCell(0, 0),
    scheduler.getDateTableCell(0, 1),
  );

  await checkSelectionWhenFocusedInViewport(t, scheduler, 8, 6, 1);

  await scrollTo(0, 500);

  await moveMouse(scheduler.dateTable, scheduler.getDateTableCell(4, 1));
  await checkSelectionWhenFocusedInViewport(t, scheduler, 14, 6, 1, 4);

  await scrollTo(0, 0);
  await checkSelectionWhenFocusedIsNotInViewport(t, scheduler, 14, 6, 6);
}).before(async () => createScheduler({
  groups: ['resourceId0'],
}));

test('Selection should work correctly while scrolling when appointments are grouped vertically', async (t) => {
  const scheduler = new Scheduler('#container');

  await selectCells(
    scheduler.dateTable,
    scheduler.getDateTableCell(0, 0),
    scheduler.getDateTableCell(0, 1),
  );

  await checkSelectionWhenFocusedInViewport(t, scheduler, 7, 5, 1);

  await scrollTo(0, 500);

  await moveMouse(scheduler.dateTable, scheduler.getDateTableCell(4, 1));
  await checkSelectionWhenFocusedInViewport(t, scheduler, 14, 6, 1, 4);

  await scrollTo(0, 0);
  await checkSelectionWhenFocusedIsNotInViewport(t, scheduler, 12, 5, 5);
}).before(async () => createScheduler({
  groups: ['resourceId0'],
  views: [{
    type: 'week',
    groupOrientation: 'vertical',
  }],
}));

test('Selection should work in month view', async (t) => {
  const scheduler = new Scheduler('#container');

  await t
    .dragToElement(scheduler.getDateTableCell(0, 0), scheduler.getDateTableCell(0, 1));

  await checkSelectionWhenFocusedInViewport(t, scheduler, 2, 0, 1);

  await scrollTo(0, 1500);
  await t
    .expect(scheduler.getSelectedCells().count)
    .eql(0);

  await scrollTo(0, 0);
  await checkSelectionWhenFocusedInViewport(t, scheduler, 2, 0, 1);
}).before(async () => createScheduler({
  views: [{
    type: 'month',
    intervalCount: 30,
  }],
  currentView: 'month',
}));

test('Selection should work in timeline views', async (t) => {
  const scheduler = new Scheduler('#container');

  const checkSelection = async (): Promise<void> => {
    await t
      .dragToElement(scheduler.getDateTableCell(0, 0), scheduler.getDateTableCell(0, 1));

    await checkSelectionWhenFocusedInViewport(t, scheduler, 2, 0, 1);

    await scrollTo(0, 500);
    await t
      .expect(scheduler.getSelectedCells().count)
      .eql(0);

    await scrollTo(0, 0);
    await checkSelectionWhenFocusedInViewport(t, scheduler, 2, 0, 1);
  };

  await checkSelection();

  await scheduler.option('currentView', 'timelineWeek');
  await checkSelection();

  await scheduler.option('currentView', 'timelineMonth');
  await checkSelection();
}).before(async () => createScheduler({
  views: ['timelineDay', 'timelineWeek', 'timelineMonth'],
  currentView: 'timelineDay',
  startDayHour: 0,
  endDayHour: 2,
  height: 250,
  groups: ['resourceId0'],
  crossScrollingEnabled: true,
  resources: [{
    fieldExpr: 'resourceId0',
    dataSource: [
      { id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },
      { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 },
    ],
  }],
}));
