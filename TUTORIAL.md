## Making your first contirbution at Konoha - Tutorial 🤖

Before going through this tutorial please make sure that you have gone through the [Contributing]() markdown file.

## Now that you have switched to your branch, follow the below steps -

1) Inside the contributors folder make a new folder with the name as your githubUsername
e.g. If your github username is `John-Doe` then make a folder with the name `John-Doe`. The folder name should be as it is your githubUsername.

2) Inside that folder make a file named `githubUsername.html` and copy paste the below html.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="shortcut icon"
      href="../../assets/konoha.png"
      type="image/x-icon"
    />
    <link rel="stylesheet" href="../../styles/contributorPage.css" />
    <!-- Write your own name instead of John Doe -->
    <title>John Doe | Konoha</title>
  </head>
  <body>
    <div class="contributor-page">
      <div class="heading">
        <h1>Contributor</h1>
      </div>
      <div class="contributor-content">
        <div class="contributor-name">
          <h1>Name</h1>
          <!-- Write your own name instead of John Doe inside the below h2 tag -->
          <h2>John Doe</h2>
        </div>
        <div class="contributor-belief">
          <h1>What is your belief ?</h1>
          <!-- Write your own belief inside the below h2 tag -->
          <h2>I firmly believe that winters are cold</h2>
        </div>
        <div class="likes">
          <h1>What do you like ?</h1>
          <!-- Mention something you like inside the below h2 tag -->
          <h2>I like doge memes. Please give me some.</h2>
        </div>
        <div class="back-button">
          <a href="https://konoha-developers.github.io/starter/">
            <button>Go Back</button>
          </a>
        </div>
      </div>
    </div>
  </body>
</html>
```

3. In the above html you have to make 4 simple changes as follows -
i) Inisde the title tag and the first h2 tag write your own name instead of John Doe
ii) In the remaining two h2 tags write something you believe and something you like respectively.
iii) Then it is done.

4. Now your work is done so the next step is to push it on github in your fork. So let's go back to the Contributing file now and see how that can be done.
