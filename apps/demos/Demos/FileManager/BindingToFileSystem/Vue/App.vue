<template>
  <DxFileManager
    :file-system-provider="remoteProvider"
    :allowed-file-extensions="allowedFileExtensions"
  >
    <!-- uncomment the code below to enable file/directory management -->
    <!-- <dx-permissions
      :create="true"
      :copy="true"
      :move="true"
      :delete="true"
      :rename="true"
      :upload="true"
      :download="true"
    /> -->
  </DxFileManager>
</template>

<script setup lang="ts">
/* import DxPermissions if you using <dx-permissions  */
import { DxFileManager /* DxPermissions */ } from 'devextreme-vue/file-manager';
import RemoteFileSystemProvider from 'devextreme/file_management/remote_provider';

const remoteProvider = new RemoteFileSystemProvider({
  endpointUrl: 'https://js.devexpress.com/Demos/NetCore/api/file-manager-file-system',
});
const allowedFileExtensions = ['.js', '.json', '.css'];
</script>
