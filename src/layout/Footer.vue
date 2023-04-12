<template>
  <div class="bg-black h-[300px] text-white">
    <Container class="h-full">
      <div class="flex items-center justify-center h-full px-20">
        <table class="w-full">
          <thead>
            <tr>
              <th>ABOUT US</th>
              <th>DEPARTMENTS</th>
              <th>HELP</th>
              <th>PAYMENTS & DELIVERY</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Who we are</td>
              <td>Women fashion</td>
              <td>Customer service</td>
              <td>Purchase terms</td>
            </tr>
            <tr>
              <td>Who we are</td>
              <td>Women fashion</td>
              <td>Customer service</td>
              <td>Purchase terms</td>
            </tr>
            <tr>
              <td>Who we are</td>
              <td>Women fashion</td>
              <td>Customer service</td>
              <td>Purchase terms</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  </div>
</template>

<script setup>
import Container from "../components/Container.vue";
</script>

<style lang="scss" scoped>
th {
  text-align: start;
  width: 25%;
}

th,
td {
  padding: 8px;
}
</style>
