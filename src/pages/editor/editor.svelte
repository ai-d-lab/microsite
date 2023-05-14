<script>
  // import "/src/styles/global.css";

  import { Editor, Viewer } from "bytemd";
  import gfm from "@bytemd/plugin-gfm";

  let value = "# h1 \n\n## h2";
  const plugins = [
    gfm(),
  ];

  function handleChange(e) {
    value = e.detail.value;
  }
</script>

<Editor {value} {plugins} on:change={handleChange} />
<Viewer {value} {plugins} />
