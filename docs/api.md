# API приложения

<div id="swagger-ui"></div>
<script src="https://unpkg.com/swagger-ui-dist@3/swagger-ui-bundle.js" charset="UTF-8"></script>
<script>
  window.onload = function() {
    SwaggerUIBundle({
      url: 'https://raw.githubusercontent.com/Maxpothier1990/OTUS_course_paper/main/docs/out/API_specification.yaml',
      dom_id: '#swagger-ui',
      presets: [
        SwaggerUIBundle.presets.apis
      ],
    });
  };
</script>