<template>
  <DxDataGrid
    id="gridContainer"
    :data-source="suppliersData"
    :remote-operations="true"
    :show-borders="true"
  >
    <DxPaging :page-size="15"/>
    <DxPager :visible="true"/>

    <DxColumn data-field="ContactName"/>
    <DxColumn data-field="ContactTitle"/>
    <DxColumn data-field="CompanyName"/>
    <DxColumn data-field="City"/>
    <DxColumn data-field="Country"/>
    <DxMasterDetail
      :enabled="true"
      template="master-detail"
    />
    <template #master-detail="{ data }">
      <MasterDetail :master-detail-data="data"/>
    </template>
  </DxDataGrid>
</template>

<script setup lang="ts">
import {
  DxDataGrid,
  DxColumn,
  DxPaging,
  DxPager,
  DxMasterDetail,
} from 'devextreme-vue/data-grid';

import { createStore } from 'devextreme-aspnet-data-nojquery';
import MasterDetail from './MasterDetail.vue';

const url = 'https://js.devexpress.com/Demos/NetCore/api/DataGridAdvancedMasterDetailView';

const suppliersData = createStore({
  key: 'SupplierID',
  loadUrl: `${url}/GetSuppliers`,
});
</script>
