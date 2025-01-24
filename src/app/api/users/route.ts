import { NextResponse } from "next/server";

const users =
[
  {
    "createdAt": "2025-01-06T17:54:02.240Z",
    "name": "Mindy Gusikowski",
    "id": "1"
  },
  {
    "createdAt": "2025-01-06T18:58:12.198Z",
    "name": "Dr. Lee Schneider",
    "id": "2"
  },
  {
    "createdAt": "2025-01-07T04:33:49.798Z",
    "name": "Suzanne Shanahan",
    "id": "3"
  },
  {
    "createdAt": "2025-01-07T09:56:31.839Z",
    "name": "Mrs. Percy Quitzon",
    "id": "4"
  },
  {
    "createdAt": "2025-01-06T19:02:35.694Z",
    "name": "Corey Kuvalis I",
    "id": "5"
  },
  {
    "createdAt": "2025-01-07T06:52:52.481Z",
    "name": "Mattie Fritsch",
    "id": "6"
  },
  {
    "createdAt": "2025-01-07T09:03:50.013Z",
    "name": "Joan Cummings",
    "id": "7"
  },
  {
    "createdAt": "2025-01-06T23:13:33.049Z",
    "name": "Miss Roger Kemmer PhD",
    "id": "8"
  },
  {
    "createdAt": "2025-01-07T08:40:38.938Z",
    "name": "Sherman Schmitt",
    "id": "9"
  },
  {
    "createdAt": "2025-01-07T11:38:21.356Z",
    "name": "Beatrice Schulist",
    "id": "10"
  },
  {
    "createdAt": "2025-01-07T04:40:25.559Z",
    "name": "Douglas Ebert",
    "id": "11"
  },
  {
    "createdAt": "2025-01-07T11:56:00.365Z",
    "name": "Jesus Torp",
    "id": "12"
  },
  {
    "createdAt": "2025-01-07T12:40:12.987Z",
    "name": "Oliver Rath PhD",
    "id": "13"
  },
  {
    "createdAt": "2025-01-07T05:17:13.207Z",
    "name": "Iris Cassin DDS",
    "id": "14"
  },
  {
    "createdAt": "2025-01-07T01:17:52.747Z",
    "name": "Nicolas Hills",
    "id": "15"
  },
  {
    "createdAt": "2025-01-07T15:44:59.108Z",
    "name": "Elaine Hessel",
    "id": "16"
  },
  {
    "createdAt": "2025-01-06T19:39:03.446Z",
    "name": "Mrs. Bryan Goldner",
    "id": "17"
  },
  {
    "createdAt": "2025-01-07T06:40:35.295Z",
    "name": "Randolph Lind",
    "id": "18"
  },
  {
    "createdAt": "2025-01-06T20:45:35.889Z",
    "name": "Nicole Walsh",
    "id": "19"
  },
  {
    "createdAt": "2025-01-06T18:09:29.648Z",
    "name": "Josh Shanahan",
    "id": "20"
  },
  {
    "createdAt": "2025-01-07T16:39:49.462Z",
    "name": "Neal Gusikowski",
    "id": "21"
  },
  {
    "createdAt": "2025-01-07T00:05:33.048Z",
    "name": "Grant Schumm",
    "id": "22"
  },
  {
    "createdAt": "2025-01-06T23:57:22.137Z",
    "name": "Luz Watsica",
    "id": "23"
  },
  {
    "createdAt": "2025-01-07T12:43:22.685Z",
    "name": "Heather Hagenes",
    "id": "24"
  },
  {
    "createdAt": "2025-01-06T23:36:04.940Z",
    "name": "Darryl Nikolaus",
    "id": "25"
  },
  {
    "createdAt": "2025-01-07T09:38:06.029Z",
    "name": "Susie Huel",
    "id": "26"
  },
  {
    "createdAt": "2025-01-07T07:40:22.755Z",
    "name": "Jay Langworth",
    "id": "27"
  },
  {
    "createdAt": "2025-01-07T02:00:19.429Z",
    "name": "Beulah Waelchi",
    "id": "28"
  },
  {
    "createdAt": "2025-01-07T02:18:54.369Z",
    "name": "Jay Johnston",
    "id": "29"
  },
  {
    "createdAt": "2025-01-07T13:44:21.695Z",
    "name": "Tom Skiles V",
    "id": "30"
  },
  {
    "createdAt": "2025-01-07T09:05:27.982Z",
    "name": "Kyle Schimmel IV",
    "id": "31"
  },
  {
    "createdAt": "2025-01-07T01:23:22.860Z",
    "name": "Kenneth Greenholt",
    "id": "32"
  },
  {
    "createdAt": "2025-01-07T14:02:45.094Z",
    "name": "Emily Lakin",
    "id": "33"
  },
  {
    "createdAt": "2025-01-07T10:59:12.975Z",
    "name": "Rick Jaskolski",
    "id": "34"
  },
  {
    "createdAt": "2025-01-07T10:19:36.928Z",
    "name": "Mrs. Tasha Rolfson",
    "id": "35"
  },
  {
    "createdAt": "2025-01-06T20:46:59.622Z",
    "name": "Alan Ritchie",
    "id": "36"
  },
  {
    "createdAt": "2025-01-06T19:08:48.261Z",
    "name": "Tommie Feest",
    "id": "37"
  },
  {
    "createdAt": "2025-01-07T11:59:03.241Z",
    "name": "Ms. Aubrey Toy",
    "id": "38"
  },
  {
    "createdAt": "2025-01-06T18:36:18.212Z",
    "name": "Pedro Rowe",
    "id": "39"
  },
  {
    "createdAt": "2025-01-07T07:37:03.695Z",
    "name": "Brandon Hartmann PhD",
    "id": "40"
  },
  {
    "createdAt": "2025-01-06T23:57:34.640Z",
    "name": "Ashley O'Conner",
    "id": "41"
  },
  {
    "createdAt": "2025-01-07T14:54:12.016Z",
    "name": "Sherri Satterfield",
    "id": "42"
  },
  {
    "createdAt": "2025-01-06T19:54:44.791Z",
    "name": "Cory Ernser",
    "id": "43"
  },
  {
    "createdAt": "2025-01-07T14:10:47.642Z",
    "name": "Marguerite Graham",
    "id": "44"
  },
  {
    "createdAt": "2025-01-07T06:31:01.515Z",
    "name": "Gina Mraz",
    "id": "45"
  },
  {
    "createdAt": "2025-01-07T08:51:52.487Z",
    "name": "Dr. Leo Bode",
    "id": "46"
  },
  {
    "createdAt": "2025-01-06T21:06:33.081Z",
    "name": "Ann Hayes",
    "id": "47"
  },
  {
    "createdAt": "2025-01-07T09:16:09.463Z",
    "name": "Danny Davis",
    "id": "48"
  },
  {
    "createdAt": "2025-01-07T03:05:57.923Z",
    "name": "Alberta Von",
    "id": "49"
  },
  {
    "createdAt": "2025-01-06T18:12:14.366Z",
    "name": "Ben Glover",
    "id": "50"
  },
  {
    "createdAt": "2025-01-07T10:13:11.711Z",
    "name": "Rosemarie Hettinger",
    "id": "51"
  },
  {
    "createdAt": "2025-01-07T12:16:03.484Z",
    "name": "Nichole Schamberger",
    "id": "52"
  },
  {
    "createdAt": "2025-01-07T03:31:00.073Z",
    "name": "Tammy Jast",
    "id": "53"
  },
  {
    "createdAt": "2025-01-06T21:37:51.040Z",
    "name": "Stephanie Bauch",
    "id": "54"
  },
  {
    "createdAt": "2025-01-07T11:05:02.491Z",
    "name": "Sue Jones",
    "id": "55"
  },
  {
    "createdAt": "2025-01-07T12:46:21.063Z",
    "name": "Lora Ryan",
    "id": "56"
  },
  {
    "createdAt": "2025-01-06T17:31:29.872Z",
    "name": "Levi Brakus II",
    "id": "57"
  },
  {
    "createdAt": "2025-01-06T20:33:06.612Z",
    "name": "Margarita Grimes PhD",
    "id": "58"
  },
  {
    "createdAt": "2025-01-06T21:31:04.023Z",
    "name": "Ms. Alfredo Haag",
    "id": "59"
  },
  {
    "createdAt": "2025-01-07T06:52:40.885Z",
    "name": "Calvin Turner",
    "id": "60"
  },
  {
    "createdAt": "2025-01-07T02:16:45.981Z",
    "name": "Melba Lind",
    "id": "61"
  },
  {
    "createdAt": "2025-01-07T16:18:25.326Z",
    "name": "Courtney Klein",
    "id": "62"
  },
  {
    "createdAt": "2025-01-07T13:43:13.064Z",
    "name": "Mr. Deborah Kemmer",
    "id": "63"
  },
  {
    "createdAt": "2025-01-07T12:08:08.611Z",
    "name": "Geoffrey Carroll",
    "id": "64"
  },
  {
    "createdAt": "2025-01-07T07:59:12.225Z",
    "name": "Benjamin Orn",
    "id": "65"
  },
  {
    "createdAt": "2025-01-06T20:42:59.556Z",
    "name": "Leah Leuschke IV",
    "id": "66"
  },
  {
    "createdAt": "2025-01-07T04:47:02.308Z",
    "name": "Blanca Wiegand",
    "id": "67"
  },
  {
    "createdAt": "2025-01-07T03:10:17.623Z",
    "name": "Miss Elizabeth Koepp",
    "id": "68"
  },
  {
    "createdAt": "2025-01-07T07:13:33.652Z",
    "name": "Gertrude Stiedemann IV",
    "id": "69"
  },
  {
    "createdAt": "2025-01-07T11:59:48.708Z",
    "name": "Jana Beier",
    "id": "70"
  },
  {
    "createdAt": "2025-01-07T14:07:00.915Z",
    "name": "Gerardo Dickens",
    "id": "71"
  },
  {
    "createdAt": "2025-01-07T08:02:34.167Z",
    "name": "Winifred Rogahn",
    "id": "72"
  },
  {
    "createdAt": "2025-01-07T06:28:59.816Z",
    "name": "Lorenzo Windler",
    "id": "73"
  },
  {
    "createdAt": "2025-01-07T01:49:42.111Z",
    "name": "Rolando Powlowski",
    "id": "74"
  },
  {
    "createdAt": "2025-01-07T05:29:50.539Z",
    "name": "Ms. Troy Wintheiser",
    "id": "75"
  },
  {
    "createdAt": "2025-01-07T13:04:20.056Z",
    "name": "Miranda Lockman",
    "id": "76"
  },
  {
    "createdAt": "2025-01-07T10:34:15.682Z",
    "name": "Genevieve Wisoky",
    "id": "77"
  },
  {
    "createdAt": "2025-01-07T14:02:39.760Z",
    "name": "Patsy Rosenbaum",
    "id": "78"
  },
  {
    "createdAt": "2025-01-07T04:31:51.020Z",
    "name": "Marion Konopelski",
    "id": "79"
  },
  {
    "createdAt": "2025-01-07T16:48:33.334Z",
    "name": "Geoffrey Ortiz",
    "id": "80"
  },
  {
    "createdAt": "2025-01-07T09:16:04.059Z",
    "name": "Dr. Ignacio Bartoletti",
    "id": "81"
  },
  {
    "createdAt": "2025-01-07T14:17:28.099Z",
    "name": "Tabitha Waters DDS",
    "id": "82"
  },
  {
    "createdAt": "2025-01-07T15:00:43.638Z",
    "name": "Ramon Thompson",
    "id": "83"
  },
  {
    "createdAt": "2025-01-06T20:44:42.056Z",
    "name": "Jose Johns",
    "id": "84"
  },
  {
    "createdAt": "2025-01-07T12:06:12.762Z",
    "name": "Ana Kunze",
    "id": "85"
  },
  {
    "createdAt": "2025-01-07T02:22:48.360Z",
    "name": "Marguerite Wisozk",
    "id": "86"
  },
  {
    "createdAt": "2025-01-07T07:19:35.316Z",
    "name": "Edgar Jast",
    "id": "87"
  },
  {
    "createdAt": "2025-01-07T16:30:36.544Z",
    "name": "Carlos Kuphal MD",
    "id": "88"
  },
  {
    "createdAt": "2025-01-07T12:33:50.054Z",
    "name": "Kristina Cole",
    "id": "89"
  },
  {
    "createdAt": "2025-01-07T03:46:35.000Z",
    "name": "Mrs. Irving Koepp",
    "id": "90"
  },
  {
    "createdAt": "2025-01-07T09:55:42.689Z",
    "name": "Vanessa Lueilwitz",
    "id": "91"
  },
  {
    "createdAt": "2025-01-07T13:23:40.374Z",
    "name": "Frederick Huel",
    "id": "92"
  },
  {
    "createdAt": "2025-01-07T12:28:41.460Z",
    "name": "Perry Price",
    "id": "93"
  }
  
]
export async function GET() {
  return NextResponse.json(users);
}
