
# ZordonAPI
An experimental Saban's Power Rangers API created for educational purposes

# Getting Started
Welcome to ZordonAPI, the Power Rangers API! In this file, you will find information about the resources available and how to consume them with HTTP requests.

## Base URL
The base URL for ZordonAPI is:
> https://zordonapi.com/api/

# Resources
There are currently 2 available resources:

## Rangers
An individual Ranger in the Power Rangers Universe, ordered by season.

**Example:**
> https://zordonapi.com/api/rangers/2

**Response:**
```json
{
	"zord": [
		"triceratops dinozord",
	    "unicorn thunderzord",
	    "wolf ninjazord",
		"blue shogunzord"
	],
	"name": "billy",
	"fullName": "william 'billy' cranston",
	"gender": "male",
	"season": "mighty morphin",
	"color": "blue",
	"homeworld": "earth",
	"firstAp": "day of the dumpster",
	"lastAp": "legendary battle",
	"numberOfAp": 197,
	"actor": "david yost"
}
```
**Schema**
>**rangerID:** *Number* - Only for sorting, doesn't get returned 
	**name:** *String* - How the character is called by in the show
	**fullName:** *String* - The character's full name
	**zord:** *Array* - The one or more zords that the ranger rides
	**gender:** *String* - Either male or female
	**season:** *String* - The season this character is present as a ranger
	**color:** *String* - The color of the ranger
	**homeworld:** *String* - The ranger's planet of birth
	**firstAp:** *String* - The episode that the character first appeared
	**lastAp:** *String* - The episode that the character last appeared
	**numberOfAp:** *Number* - The number of episodes the character has appeared
	**actor:** *String* - The name of the actor that portrayed this character

***Note:** Some rangers have had more than one color throughout their appearances in different seasons, in this case, we have decided to create a new entry in the database for each color the ranger had been.*

## Seasons
A season in the Power Rangers franchise, ordered by airing year.

**Example:**
> https://zordonapi.com/api/season/1

**Response:**
```json
{
	"rangers": [
		"jason",
		"billy",
		"zack",
		"trini",
		"kimberly",
		"tommy",
		"rocky",
		"adam",
		"aisha",
		"catherine"
	],
	"name": "mighty morphin power rangers",
	"sentaiName": "kyoryu sentai zyuranger",
	"airingYear": 1993,
	"numberOfEpisodes": 142,
	"firstEpisode": "day of the dumpster",
	"lastEpisode": "rangers in reverse",
	"theme": "dinosaurs",
	"producer": "saban"
}
```
**Schema**
>**seasonNumber:** *Number* - Only for sorting, doesn't get returned 
	**name:** *String* - The name of the season
	**sentaiName:** *String* - The name of Toei's Super Sentai season that the show was adapted from
	**airingYear:** *Number* - The year that the season premiered
	**numberOfEpisodes:** *Number* - Total number of episodes
	**firstEpisode:** *String* - The name of the first episode of the season
	**lastEpisode:** *String* - The name of the last episode of the season
	**theme:** *String* - The season's overall theme
	**producer:** *String* - The name of the company that produced the season
	**rangers:** *Array* - The names of the main set of rangers
	
***Note:** Although Mighty Morphin Power Rangers has had three seasons and a re-edited version of the first season in 2010, we are only considering the first three seasons that originally aired from 1993 to 1995 and counting them as one individual season*

# Copyright
The copyright of the name and informations on this API belongs to Toei Corporation. It is used under the fair use laws.
