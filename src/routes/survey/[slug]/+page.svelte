<script>
  import { handleChange, handleNextQuestionClick, error } from "$lib";
  export let respones = [];
  import { page } from "$app/stores";
  export let data;
  export let selectedRadioValue = "";
  let userResponse;
  $: errorMessage = "";
  let url = $page.params;

  const updateUrl = (e) => {
    url = $page.params;
    console.log(url);
    handleNextQuestionClick(url, userResponse, e);

    if (selectedRadioValue) {
      respones.push(selectedRadioValue);
      selectedRadioValue = "";
    }

    if (userResponse) {
      respones.push(userResponse);
    }
    userResponse = "";

    if (error) {
      errorMessage = error;
    } else {
      errorMessage = "";
    }
  };
</script>

<main>
  <section>beepboop</section>

  <section>
    {#if data.hasOwnProperty("options")}
      <fieldset>
        <legend>{data.question}</legend>
        {#each data.options as option}
          <li>
            <input
              name={data.name}
              type="radio"
              value={option}
              id={option}
              checked={selectedRadioValue === option}
              on:change={handleChange}
              bind:group={selectedRadioValue}
              required={true}
            />
            <label for={option}>{option}</label>
          </li>
        {/each}
        <p>{errorMessage}</p>
      </fieldset>
    {:else if data.hasOwnProperty("instructions")}
      <h1>{data.question}</h1>
      {@html data.instructions}
    {:else}
      <h1>{data.question}</h1>
      <textarea
        name={data.id}
        id={data.id}
        cols="30"
        rows="10"
        minlength="50"
        placeholder={data.text}
        bind:value={userResponse}
      /><br />
      {errorMessage}
    {/if}
    {#if data.links}
      <p>
        <a
          data-sveltekit-replacestate
          href={(selectedRadioValue === "Laptop/Desktop"
            ? data.links[0]
            : data.links[1]) || data.links[0]}
          on:click={updateUrl}
          >{(selectedRadioValue === "Laptop/Desktop"
            ? data.links[0]
            : data.links[1]) || data.links[0]}</a
        >
      </p>
    {:else}
      <form method="POST">
        {#if respones}
          {#each respones as response, i}
            <input type="hidden" name={`response${i + 1}`} value={response} />
          {/each}
        {/if}
        <button>Submit</button>
      </form>
    {/if}
  </section>
</main>

<style>
  main {
    display: flex;
  }
  section {
    width: 50%;
  }
  li {
    list-style-type: none;
    margin: 2em 0;
  }
</style>
