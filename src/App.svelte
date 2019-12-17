<script>
  import { onMount } from "svelte";
  import _ from "lodash";
  import moment from "moment";
  let products = [];
  let authenticated = true;

  onMount(async () => {
    // fetch("https://inventorymgrclient.ptar.now.sh/api/login", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json"
    //   },
    //   body: {
    //     password: "exhale123!"
    //   }
    // })
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    const response = await fetch(
      "https://inventorymgrclient.ptar.now.sh/api/inventory"
    );
    const resBody = await response.json();
    products = _.orderBy(resBody, ["expiration_date"], ["asc"]);
  });
</script>

<style>
  .loader {
    color: black;
    font-size: 90px;
    text-indent: -9999em;
    overflow: hidden;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    margin: 72px auto;
    position: relative;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;
    animation: load6 1.7s infinite ease, round 1.7s infinite ease;
  }
  @-webkit-keyframes load6 {
    0% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    5%,
    95% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    10%,
    59% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em,
        -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em,
        -0.297em -0.775em 0 -0.477em;
    }
    20% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
        -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em,
        -0.749em -0.34em 0 -0.477em;
    }
    38% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
        -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em,
        -0.82em -0.09em 0 -0.477em;
    }
    100% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
  }
  @keyframes load6 {
    0% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    5%,
    95% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    10%,
    59% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em,
        -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em,
        -0.297em -0.775em 0 -0.477em;
    }
    20% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
        -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em,
        -0.749em -0.34em 0 -0.477em;
    }
    38% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
        -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em,
        -0.82em -0.09em 0 -0.477em;
    }
    100% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
  }
  @-webkit-keyframes round {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes round {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>

<div>
  <div class="flex flex-row items-center justify-center">
    <div class="w-1/2 h-1/2 text-center bg-red-300">Expired</div>
    <div class="w-1/2 h-1/2 text-center bg-orange-300">
      Expiring within 30 days
    </div>
  </div>
  {#if products.length}
    <table class="sans-serif text-sm table-auto w-full max-w-48 mx-auto">
      <thead>
        <tr class="text-left">
          <th class="px-4 py-2">Expired</th>
          <th class="px-4 py-2">Expires</th>
          <th class="px-4 py-2">Expiry date</th>
          <th class="px-4 py-2">Name</th>
          <th class="px-4 py-2">SKU</th>
          <th class="px-4 py-2">Qty.</th>
          <th class="px-4 py-2">Open in GB</th>
        </tr>
      </thead>
      <tbody>
        {#each products as p}
          {#if p.expiration_date}
            <tr
              class={moment(p.expiration_date).isBefore(new Date()) ? 'bg-red-300' : '' || moment(p.expiration_date).isBefore(moment().add(30, 'days')) ? 'bg-orange-300' : ''}>
              <td class=" border px-4 py-2">
                {moment(p.expiration_date).isBefore(new Date()) ? 'Yes' : 'No'}
              </td>
              <td class="border px-4 py-2">
                {moment(p.expiration_date).fromNow()}
              </td>
              <td class="border px-4 py-2">{p.expiration_date}</td>
              <td class="border px-4 py-2">{p.product.name}</td>
              <td class="border px-2 py-2">{p.sku ? p.sku : 'N/A'}</td>
              <td class="border px-2 py-2">
                {p.quantity ? p.quantity.value : 'N/A'}
              </td>
              <td class="border px-2 text-center py-2">
                <a
                  href="https://secure.greenbits.com/products?by_name={p.product.name}"
                  title="Open in Green Bits"
                  target="_blank"
                  rel="noopener">
                  <img src="link.svg" width="25px" height="25px" alt="" />
                </a>
              </td>
            </tr>
          {/if}
        {/each}
      </tbody>
    </table>
  {:else}
    <div class="w-full h-full flex flex-col items-center justify-center">
      <div class="loader" />
      <h1>Calculating inventory expiration dates.</h1>
    </div>
  {/if}
</div>
