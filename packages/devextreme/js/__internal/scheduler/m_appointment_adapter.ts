import { extend } from '@js/core/utils/extend';
import { deepExtendArraySafe } from '@js/core/utils/object';
import errors from '@js/ui/widget/ui.errors';

import { ExpressionUtils } from './m_expression_utils';
import { getRecurrenceProcessor } from './m_recurrence';

// TODO Vinogradov refactoring: add types to this module.
const PROPERTY_NAMES = {
  startDate: 'startDate',
  endDate: 'endDate',
  allDay: 'allDay',
  text: 'text',
  description: 'description',
  startDateTimeZone: 'startDateTimeZone',
  endDateTimeZone: 'endDateTimeZone',
  recurrenceRule: 'recurrenceRule',
  recurrenceException: 'recurrenceException',
  disabled: 'disabled',
};
class AppointmentAdapter {
  constructor(
    public rawAppointment: any,
    public dataAccessors: any,
    public timeZoneCalculator: any,
    public options: any,
  ) {
  }

  get duration() {
    return this.endDate ? this.endDate - this.startDate : 0;
  }

  get startDate() {
    const result = this.getField(PROPERTY_NAMES.startDate);
    return result === undefined ? result : new Date(result);
  }

  set startDate(value) {
    this.setField(PROPERTY_NAMES.startDate, value);
  }

  get endDate() {
    const result = this.getField(PROPERTY_NAMES.endDate);
    return result === undefined ? result : new Date(result);
  }

  set endDate(value) {
    this.setField(PROPERTY_NAMES.endDate, value);
  }

  get allDay() {
    return this.getField(PROPERTY_NAMES.allDay) as boolean;
  }

  set allDay(value) {
    this.setField(PROPERTY_NAMES.allDay, value);
  }

  get text() {
    return this.getField(PROPERTY_NAMES.text);
  }

  set text(value) {
    this.setField(PROPERTY_NAMES.text, value);
  }

  get description() {
    return this.getField(PROPERTY_NAMES.description);
  }

  set description(value) {
    this.setField(PROPERTY_NAMES.description, value);
  }

  get startDateTimeZone() {
    return this.getField(PROPERTY_NAMES.startDateTimeZone);
  }

  get endDateTimeZone() {
    return this.getField(PROPERTY_NAMES.endDateTimeZone);
  }

  get recurrenceRule() {
    return this.getField(PROPERTY_NAMES.recurrenceRule);
  }

  set recurrenceRule(value) {
    this.setField(PROPERTY_NAMES.recurrenceRule, value);
  }

  get recurrenceException() {
    return this.getField(PROPERTY_NAMES.recurrenceException);
  }

  set recurrenceException(value) {
    this.setField(PROPERTY_NAMES.recurrenceException, value);
  }

  get disabled() {
    return !!this.getField(PROPERTY_NAMES.disabled);
  }

  get isRecurrent() {
    return getRecurrenceProcessor().isValidRecurrenceRule(this.recurrenceRule);
  }

  getField(property) {
    return ExpressionUtils.getField(
      this.dataAccessors,
      property,
      this.rawAppointment,
    );
  }

  setField(property, value) {
    return ExpressionUtils.setField(
      this.dataAccessors,
      property,
      this.rawAppointment,
      value,
    );
  }

  calculateStartDate(pathTimeZoneConversion) {
    if (!this.startDate || isNaN(this.startDate.getTime())) {
      throw errors.Error('E1032', this.text);
    }

    return this.calculateDate(this.startDate, this.startDateTimeZone, pathTimeZoneConversion);
  }

  calculateEndDate(pathTimeZoneConversion) {
    return this.calculateDate(this.endDate, this.endDateTimeZone, pathTimeZoneConversion);
  }

  calculateDate(date, appointmentTimeZone, pathTimeZoneConversion) {
    if (!date) { // TODO: E1032 should be thrown only for startDate above
      return undefined;
    }

    return this.timeZoneCalculator.createDate(date, {
      appointmentTimeZone,
      path: pathTimeZoneConversion,
    });
  }

  clone(options?: { pathTimeZone: string }) {
    const result = new AppointmentAdapter(
      deepExtendArraySafe({}, this.rawAppointment, false, false, false, true),
      this.dataAccessors,
      this.timeZoneCalculator,
      options,
    );

    if (options?.pathTimeZone) {
      result.calculateDates(options.pathTimeZone);
    }

    return result;
  }

  calculateDates(pathTimeZoneConversion) {
    this.startDate = this.calculateStartDate(pathTimeZoneConversion);
    this.endDate = this.calculateEndDate(pathTimeZoneConversion);

    return this;
  }

  source(serializeDate = false) {
    if (serializeDate) {
      // hack for use dateSerializationFormat
      const clonedAdapter = this.clone();
      clonedAdapter.startDate = this.startDate;
      clonedAdapter.endDate = this.endDate;

      return clonedAdapter.source();
    }

    return extend({}, this.rawAppointment);
  }
}

export default AppointmentAdapter;

export const createAppointmentAdapter = (rawAppointment, dataAccessors, timeZoneCalculator?: any, options?: any) => new AppointmentAdapter(rawAppointment, dataAccessors, timeZoneCalculator, options);
