<template>
  <div class="viewer">
    <vc-viewer>
      <navigation></navigation>
      <!-- 加载底图 -->
      <vc-layer-imagery>
        <vc-provider-imagery-openstreetmap></vc-provider-imagery-openstreetmap>
      </vc-layer-imagery>
    </vc-viewer>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
</style>