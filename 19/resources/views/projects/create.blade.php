<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">    
    <title>Lesson 19. Object-Oriented Forms: Part 1</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css">
    <style>
        body { padding-top: 40px }
    </style>
</head>
<body>

    <div id="root" class="container">
        @include ('projects.list')
        <hr>
        <form method="POST" action="/projects" @submit.prevent="onSubmit" @keydown="errors.clear($event.target.name)">
            <div class="field">
              <label class="label" for="name">Project Name</label>
              <div class="control">
                <input class="input" type="text" placeholder="Project Name" name="name" v-model="name">
                <span class="help is-danger" v-if="errors.has('name')" v-text="errors.get('name')"></span>
              </div>
            </div>

            <div class="field">
              <label class="label" for="description">Project Description</label>
              <div class="control">
                <input class="input" type="text" placeholder="Project Description" name="description" v-model="description">
                <span class="help is-danger" v-if="errors.has('description')" v-text="errors.get('description')"></span>
              </div>
            </div>

            <div class="field">
              <p class="control">
                <button class="button is-success" :disabled="errors.any()">
                  Create
                </button>
              </p>
            </div>                
        </form>        
    </div>

    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <script src="/js/app.js"></script>

</body>
</html>
