# WikiToday
Wikitoday is scrapper for scrapping On-This-Day from wikipedia, made with NodeJs. This also supports three categories, and also customizable dates. You will get avarage 100 events per category usually!

## Made With
- [expressjs](https://github.com/expressjs/express)
- [cheeriojs](https://github.com/cheeriojs/cheerio)
- [wikifox.js](https://github.com/Wikifox/wikifox.js)
- [axios](https://github.com/axios/axios)

## Quick jump
- [Usage](#usage)
    - [Parameters](#parameter)
    - [Examples](#examples)
       - [Example 1](#example-1)
       - [Example 2](#example-2)
- [Deploy](#deploy)
- [Support](#support)

# Usage
This returns all the events including birtsh, deaths, and other events if `event` parameter is not specified. You can also customize the date here with `month` and `day`. You can just leave it blank to get Todays history! 

|Endpoint: `/{event}/{month}/{day}` |
|-----------|

#### Parameter

| Parameter | Description                                                        | Optional |
|-----------|--------------------------------------------------------------------|----------|
| event     | You can choose what type of event (`event` \| `births` \| `death`) | Yes      |
| month     | The month in which you want the history                            | Yes      |
| day       | The day of the month in which you want the history                 | Yes      |

## Examples

#### Example 1

```c++
  http://localhost:8000/1/10
```

###### Response

```json
{    "categories": [
        "events",
        "births",
        "deaths"
    ],
    "date": "January 10",
    "results": {
        "events": [
            {
                "year": "49 BC",
                "snippet": "Julius Caesar crosses the Rubicon, signalling the start of civil war."
            },
            {
                "year": "9",
                "snippet": "The Western Han dynasty ends when Wang Mang claims that the divine Mandate of Heaven called for the end of the dynasty and the beginning of his own, the Xin dynasty."
            },
            {
                "year": "69",
                "snippet": "Lucius Calpurnius Piso Licinianus is appointed by Galba as deputy Roman Emperor."
            }

            //...
        ],
        "births": [
            {
                "year": "626",
                "snippet": "Husayn ibn Ali the third Shia Imam"
            },
            {
                "year": "1480",
                "snippet": "Margaret of Austria, Duchess of Savoy"
            },
            {
                "year": "1538",
                "snippet": "Louis of Nassau"
            }

            // ...
        ],
        "deaths": [
            {
                "year": "259",
                "snippet": "Polyeuctus, Roman saint"
            },
            {
                "year": "314",
                "snippet": "Miltiades, pope of the Catholic Church"
            },
            {
                "year": "681",
                "snippet": "Agatho, pope of the Catholic Church"
            }
            // ...
        ]
    }
}
```

#### Example 2

```c++
  http://localhost:8000/births/1/10
```

###### Response

```json
{
    "results": {
        "births": [
            {
                "year": "626",
                "snippet": "Husayn ibn Ali the third Shia Imam"
            },
            {
                "year": "1480",
                "snippet": "Margaret of Austria, Duchess of Savoy"
            },
            {
                "year": "1538",
                "snippet": "Louis of Nassau"
            }
            
            //...
        ]
    },
    "categories": [
        "births"
    ],
    "date": "January 10"
}
```

# Deploy

You can deploy this to Heroku or Vercel or, Clone this project and deploy somewhere else!

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FWikifox%2Fwikitoday&env=PORT&project-name=wikitoday&repo-name=wiki-today-api)
# Support
If you want to support me, You can buy me some coffee and  ??? This Repo! <br>
<br>
<a href="https://www.buymeacoffee.com/harrytom" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a><br>
<br>

