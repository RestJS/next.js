# Next React Application

This is create for start **Create Next App** and easily manage and scale your site.


### Installation

```bash 
$ npx degit RestJS/next.js <folder_name>
```
after clone native folder
```bash 
$ cd <folder_name>
$ npm install
```

## Used Packages

> `Next`, `Sass`, `Tailwind CSS`, `React`


### Folder Structure

```
├─── public
│     ├─── robots.txt                                  # Google file
│     ├─── favicon.ico                                 # Default favicon
│     ├─── assets                                      # Static assets (images, videos and favicons)
│     └─── data                                        # All Json files
│
├─── src
│     ├─── app
│     │     ├─── (routes)                               # All route link folder
│     │     │      └─── [slug]                          # Url page folder
│     │     │             ├─── _components              # All page components
│     │     │             ├─── page.tsx                 # Page component file
│     │     │             └─── layout.tsx               # Page layout file
│     │     │
│     │     ├─── _components                            # All page components folder
│     │     ├─── layout.tsx                             # Index layout file
│     │     ├─── page.tsx                               # Index page file
│     │     ├─── not-found.tsx                          # Not Found page file
│     │     ├─── loading.tsx                            # Loading page file
│     │     └─── style.scss                             # Global css file 
│     │
│     ├─── features                                     # All external react packages
│     │
│     ├─── utils                                        # All common components and hooks folder
│     │
│     └───scss
│          ├─── _base.scss                              # base css (heading and tags)
│          ├─── _components.scss                        # components css (card, container and other class)
│          └─── _utilities.scss                         # extra common css (box-shadow, animation and other class)
│
└─── README.md 
``` 

#### Run Vite Command :-

1. `bun run next build` for start **build**.
2. `bun run next dev` for start **dev**.