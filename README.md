### Intro

It's a plugin a wrote for my single usecase:

> Display number of my newsletter subscribers in my gatsby blog

### Usage

`gatsby-config.js`

```javascript
[
  {
    resolve: `@rogovdm/gatsby-source-mailchimp`,
    options: {
      id: '<id-of-your-list>',
      key: '<MAILCHIMP-API-KEY>'
    }
  }
];
```

- You can get `id` in settings of your list.
- You can can your API key in account setting of your mailchimp account.
