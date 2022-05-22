const settings = {
  "name": "frontity-storybook",
  "state": {
    "frontity": {
      "url": "http://frontitytest.local",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://localhost:8000/wp-json",
          "url": "http://localhost:8000",
          "homepage" : "/sample-page" ,
          "postsPage" : "/posts-list"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;

