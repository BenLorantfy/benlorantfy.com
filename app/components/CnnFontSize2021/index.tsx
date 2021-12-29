import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Bar, getElementAtEvent, getElementsAtEvent } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function formatDate(date: string) {
    return new Intl.DateTimeFormat("en", { day: "2-digit", year: "numeric", month: "short" }).format(new Date(date));
}

const rawData = [{ "date": "2021-01-01T16:28:16.856Z", "text": "More states are reporting cases of UK Covid variant", "size": 36, "area": 32018.961181640625 }, { "size": 49.94, "text": "Election lawsuit thrown out", "date": "2021-01-02T02:28:14.362Z", "area": 32406.058074951172 }, { "text": "Report: Trump asks GA officials to 'find' votes to tilt election", "size": 72, "date": "2021-01-03T22:28:13.438Z", "area": 148324.552734375 }, { "text": "Trump's bid to steal Georgia exposes GOP election ruse", "date": "2021-01-04T13:28:13.553Z", "size": 36, "area": 34493.025146484375 }, { "text": "AMERICA IN CRISIS", "size": 72, "date": "2021-01-05T17:28:13.764Z", "area": 49901.1767578125 }, { "size": 95.2714, "date": "2021-01-06T21:28:15.301Z", "text": "MOB INVADES CAPITOL", "area": 105514.00588476562 }, { "size": 72, "text": "Congress to move ahead with vote count", "date": "2021-01-07T00:28:16.190Z", "area": 101295.3515625 }, { "date": "2021-01-08T03:28:14.022Z", "text": "Fallout intensifies over Trump's role in Capitol riot", "size": 72, "area": 122751.896484375 }, { "date": "2021-01-09T05:28:13.707Z", "text": "Trump isolated as Twitter cuts him off and some GOP rebel", "size": 72, "area": 145053.474609375 }, { "date": "2021-01-10T09:28:17.492Z", "text": "The week that shook America", "size": 72, "area": 73524.65625 }, { "size": 72, "date": "2021-01-11T14:28:16.716Z", "text": "America's treacherous moment", "area": 77744.4345703125 }, { "date": "2021-01-12T23:28:19.447Z", "size": 72, "text": "GOP impeachment support grows; military warns troops", "area": 139164.451171875 }, { "date": "2021-01-13T23:28:15.363Z", "text": "IMPEACHED AGAIN", "size": 102.057, "area": 99059.77328027344 }, { "date": "2021-01-14T14:28:14.478Z", "size": 107.429, "text": "What comes next", "area": 95143.30966558839 }, { "date": "2021-01-15T06:28:18.538Z", "size": 71.7143, "text": "Police describe facing the mob", "area": 76274.16342229003 }, { "date": "2021-01-16T19:28:17.424Z", "text": "The GOP's conspiracy caucus", "size": 49.94, "area": 35747.048342285154 }, { "date": "2021-01-17T02:28:15.634Z", "text": "How Biden was Trump's kryptonite", "size": 38.94, "area": 25223.413520507813 }, { "date": "2021-01-18T16:28:15.489Z", "text": "A pivotal week in American history", "size": 64.5714, "area": 69076.5320746582 }, { "size": 72, "date": "2021-01-19T21:28:21.736Z", "text": "President-elect Biden arrives at Joint Base Andrews", "area": 128537.2529296875 }, { "size": 102.057, "date": "2021-01-20T17:28:14.406Z", "text": "PRESIDENT BIDEN", "area": 95031.18782006836 }, { "size": 108.843, "date": "2021-01-21T05:28:15.131Z", "text": "A NEW CHAPTER", "area": 99526.148149292 }, { "size": 72, "date": "2021-01-22T01:28:18.494Z", "text": "Biden rolls out national strategy to combat Covid", "area": 120942.685546875 }, { "date": "2021-01-23T15:28:19.069Z", "size": 36, "text": "Larry King, legendary talk show host, dies at 87", "area": 29231.26611328125 }, { "date": "2021-01-24T08:28:15.251Z", "size": 38.94, "text": "Experts offer Covid-19 advice for Biden", "area": 28386.78228149414 }, { "size": 72, "date": "2021-01-25T23:28:16.398Z", "text": "Impeachment managers prepare to deliver charge", "area": 123482.8388671875 }, { "date": "2021-01-26T00:28:16.573Z", "text": "Countdown to Trump trial starts now", "size": 72, "area": 90616.306640625 }, { "size": 38.72, "text": "US Covid-19 numbers dip despite hurdles", "date": "2021-01-27T23:28:19.305Z", "area": 29864.83951171875 }, { "size": 49.94, "text": "GOP chooses Trump and QAnon", "date": "2021-01-28T13:28:14.618Z", "area": 38476.26446533203 }, { "date": "2021-01-29T15:28:17.918Z", "text": "Single-shot vaccine results released", "size": 44.22, "area": 33541.56633544922 }, { "text": "5 things to know about the GameStop saga", "size": 38.72, "date": "2021-01-30T23:28:15.254Z", "area": 31097.06380859375 }, { "date": "2021-01-31T00:28:12.973Z", "text": "5 things to know about the GameStop saga", "size": 38.72, "area": 31097.06380859375 }, { "date": "2021-02-01T03:28:14.860Z", "size": 44.22, "text": "This is Biden's first real challenge", "area": 31158.109954833984 }, { "date": "2021-02-02T04:28:17.644Z", "size": 44.44, "text": "McConnell rebukes congresswoman", "area": 34033.030275878904 }, { "date": "2021-02-03T16:28:16.305Z", "text": "Senate finally strikes a deal", "size": 44.44, "area": 25523.30733154297 }, { "text": "The battle for the soul of the GOP is already over", "size": 36, "date": "2021-02-04T11:28:19.605Z", "area": 30024.419677734375 }, { "text": "Greene may defiantly seize on punishment", "size": 38.72, "date": "2021-02-05T17:28:13.021Z", "area": 30506.62634765625 }, { "text": "Remembering lives lost to Covid", "size": 57.7143, "date": "2021-02-06T14:28:13.624Z", "area": 51680.954024176026 }, { "size": 49.94, "date": "2021-02-07T00:28:13.123Z", "text": "Wuhan residents want answers", "area": 37132.880294189454 }, { "size": 38.94, "date": "2021-02-08T04:28:14.354Z", "text": "Tom Brady wins his 7th Super Bowl", "area": 25477.032136230468 }, { "text": "Out of office and on trial", "size": 78.8571, "date": "2021-02-09T17:28:16.071Z", "area": 71784.9407576294 }, { "text": "Insurrection on replay", "date": "2021-02-10T17:28:20.851Z", "size": 93.1429, "area": 90148.42739589233 }, { "date": "2021-02-11T22:28:19.838Z", "size": 72, "text": "What's next in Trump's trial", "area": 67189.81201171875 }, { "text": "Trump team responds", "size": 100.286, "date": "2021-02-12T16:28:19.771Z", "area": 104548.13051611328 }, { "date": "2021-02-13T21:28:19.937Z", "text": "ACQUITTED AGAIN", "size": 102.057, "area": 96748.80264514161 }, { "text": "ACQUITTED AGAIN", "size": 102.057, "date": "2021-02-14T02:28:14.421Z", "area": 96748.80264514161 }, { "text": "Trump's post-impeachment reality", "date": "2021-02-15T01:28:17.143Z", "size": 38.94, "area": 24796.67066894531 }, { "date": "2021-02-16T06:28:19.294Z", "text": "Extremist leader refuses to stop", "size": 38.94, "area": 23113.996358642577 }, { "date": "2021-02-17T01:28:14.864Z", "size": 72, "text": "Biden to pitch Covid relief plan in CNN town hall", "area": 118532.126953125 }, { "date": "2021-02-18T14:28:18.423Z", "text": "Texas will stay freezing for days", "size": 38.94, "area": 22915.051556396484 }, { "date": "2021-02-19T21:28:13.637Z", "text": "Incredible new images of Mars", "size": 44.44, "area": 28593.22057861328 }, { "text": "Texas' dangerous week in the dark is a wake-up call", "date": "2021-02-20T23:28:12.681Z", "size": 36, "area": 32155.0400390625 }, { "size": 38.72, "text": "Federal aid will help Texans pay bills", "date": "2021-02-21T23:28:18.845Z", "area": 26047.358046875 }, { "date": "2021-02-22T07:28:14.542Z", "size": 66.44, "text": "'Let's just pray'", "area": 32006.40146118164 }, { "date": "2021-02-23T20:28:14.051Z", "size": 44.22, "text": "Tiger Woods injured in car accident", "area": 32815.828256835935 }, { "date": "2021-02-24T13:28:16.637Z", "size": 44.44, "text": "Momentous battles rock Congress", "area": 32226.27737548828 }, { "date": "2021-02-25T15:28:15.792Z", "size": 44.44, "text": "Trump plots future and revenge", "area": 29154.40577392578 }, { "text": "Biden orders strikes in Syria", "date": "2021-02-26T06:28:15.549Z", "size": 44.44, "area": 26213.54591796875 }, { "text": "Massacre in the mountains", "size": 55.44, "date": "2021-02-27T16:28:16.884Z", "area": 39240.14370117187 }, { "date": "2021-02-28T13:28:17.025Z", "text": "Silencing the truthtellers", "size": 49.94, "area": 29124.99946533203 }, { "date": "2021-03-01T20:28:14.495Z", "size": 55.44, "text": "Stimulus clock is ticking", "area": 35328.01658203125 }, { "date": "2021-03-02T22:28:15.048Z", "size": 44.44, "text": "Biden moves up vaccine timeline", "area": 30589.64363769531 }, { "text": "'Neanderthal thinking'", "date": "2021-03-03T21:28:15.275Z", "size": 60.94, "area": 39028.34307861328 }, { "date": "2021-03-04T14:28:17.004Z", "text": "New divides emerge as Senate debates Covid relief", "size": 36, "area": 31639.23193359375 }, { "date": "2021-03-05T12:28:12.439Z", "text": "Clash over Covid relief comes to a head", "size": 38.72, "area": 28605.430390625 }, { "date": "2021-03-06T21:28:12.423Z", "text": "SENATE PASSES COVID RELIEF BILL", "size": 38.6628, "area": 26755.264066040036 }, { "size": 60.94, "date": "2021-03-07T10:28:14.715Z", "text": "Miscalculating Manchin", "area": 41972.47335327148 }, { "size": 44.44, "date": "2021-03-08T02:28:12.940Z", "text": "Bombshells in royal interview", "area": 27255.75396972656 }, { "text": "Covid relief package marks a shift in US battle against poverty", "date": "2021-03-09T23:28:18.070Z", "size": 36, "area": 38419.9013671875 }, { "text": "House set for stimulus vote", "size": 78.8571, "date": "2021-03-10T17:28:16.775Z", "area": 81328.85423701172 }, { "date": "2021-03-11T21:28:15.288Z", "text": "Biden signs sweeping Covid relief bill", "size": 38.72, "area": 26776.7280859375 }, { "text": "7 takeaways from Biden's prime-time address", "date": "2021-03-12T05:28:14.681Z", "size": 72, "area": 113342.9501953125 }, { "date": "2021-03-13T23:28:16.531Z", "size": 55.44, "text": "Italy shutting down again", "area": 36468.421171875 }, { "size": 55.44, "text": "Italy shutting down again", "date": "2021-03-14T00:28:13.998Z", "area": 36468.421171875 }, { "text": "Two men charged in attack on officer killed in Capitol riot", "size": 36, "date": "2021-03-15T16:28:15.974Z", "area": 35214.89501953125 }, { "date": "2021-03-16T19:28:18.055Z", "size": 44.22, "text": "Russia targeted US elections in 2020", "area": 33885.95009765625 }, { "date": "2021-03-17T02:28:14.218Z", "text": "Biden tells migrants not to come to US", "size": 38.72, "area": 27818.684609375 }, { "date": "2021-03-18T00:28:32.904Z", "size": 44.44, "text": "A history of prejudiced tropes", "area": 27592.0755859375 }, { "date": "2021-03-19T23:28:16.805Z", "text": "'Blamed, scapegoated and harassed'", "size": 38.94, "area": 26827.119298095702 }, { "size": 50.5714, "text": "Raped to 'cleanse the blood line'", "date": "2021-03-20T00:28:13.797Z", "area": 40206.21992551269 }, { "date": "2021-03-21T17:28:14.138Z", "size": 44.22, "text": "DHS chief says the border is closed", "area": 32967.59159912109 }, { "size": 36, "date": "2021-03-22T06:28:12.521Z", "text": "Biden vows to ease border surge as GOP senses a political opening", "area": 41719.517578125 }, { "date": "2021-03-23T22:28:14.468Z", "text": "A store manager and a father among the shooting victims", "size": 72, "area": 142067.4873046875 }, { "text": "Ex-Trump lawyer's risky defense", "date": "2021-03-24T22:36:34.344Z", "size": 44.44, "area": 30229.859741210938 }, { "size": 44.44, "date": "2021-03-25T17:36:14.034Z", "text": "Biden sets new vaccination goal", "area": 30049.965080566406 }, { "text": "Trump's Covid team speaks out", "size": 44.44, "date": "2021-03-26T13:36:41.431Z", "area": 29437.93590332031 }, { "date": "2021-03-27T02:36:18.127Z", "size": 38.72, "text": "How a mass shooting upended this family", "area": 30024.909277343748 }, { "size": 44.22, "text": "Only 500 doctors for 9 million people", "date": "2021-03-28T11:36:16.339Z", "area": 33930.69909667969 }, { "date": "2021-03-29T00:36:21.985Z", "text": "Autopsy of a pandemic", "size": 60.94, "area": 40745.75457519531 }, { "date": "2021-03-30T06:36:17.019Z", "size": 44.44, "text": "Don't throw away your masks yet", "area": 31035.464936523436 }, { "size": 38.72, "date": "2021-03-31T05:36:20.962Z", "text": "Biden's infrastructure plan is no joke", "area": 26424.878046875 }, { "text": "Testimony continues in Chauvin trial", "size": 44.22, "date": "2021-04-01T21:36:13.959Z", "area": 33467.62792602539 }, { "size": 38.72, "date": "2021-04-02T13:36:16.193Z", "text": "A guide to Covid-19 vaccine side effects", "area": 28868.18708984375 }, { "size": 44.22, "link": "/2021/04/03/politics/capitol-attack-congress-security/index.html", "text": "Capitol attack shatters sense of calm", "date": "2021-04-03T08:20:17.467Z", "area": 34582.506862792965 }, { "text": "Life will get back to normal, Fauci says", "size": 38.72, "date": "2021-04-04T05:20:16.845Z", "link": "/2021/04/03/health/us-coronavirus-saturday/index.html", "area": 27925.897226562498 }, { "text": "How Covid-19 can spread at the beach", "size": 44.22, "link": "/travel/article/beach-safety-pandemic-wellness/index.html", "date": "2021-04-05T20:20:15.684Z", "area": 35963.93923095703 }, { "link": "/2021/04/06/health/us-coronavirus-tuesday/index.html", "text": "California will fully reopen in June", "date": "2021-04-06T22:20:13.984Z", "size": 44.22, "area": 31222.315861816405 }, { "date": "2021-04-07T21:20:15.763Z", "size": 36, "text": "Biden to announce executive actions on guns tomorrow", "link": "/2021/04/07/politics/biden-executive-actions-guns/index.html", "area": 34489.13818359375 }, { "size": 44.22, "link": "/2021/04/07/us/covid-vaccine-passport-explainer/index.html", "date": "2021-04-08T15:20:14.728Z", "text": "Heated debate over vaccine passports", "area": 35710.999427490235 }, { "date": "2021-04-09T05:20:15.623Z", "size": 38.72, "link": "/2021/04/08/asia/myanmar-zaw-min-tun-interview-intl-hnk/index.html", "text": "Myanmar's military remains unapologetic", "area": 29685.142695312497 }, { "text": "Texas GOP chair's outsized claim", "date": "2021-04-10T07:20:15.630Z", "size": 38.94, "link": "/2021/04/09/politics/allen-west-texas-kfile/index.html", "area": 24095.051916503904 }, { "size": 55.44, "date": "2021-04-11T19:20:18.448Z", "text": "The perils of long Covid", "link": "/2021/04/11/health/coronavirus-long-covid-intl/index.html", "area": 34379.71646484375 }, { "size": 38.94, "link": "/2021/04/12/europe/ukraine-zelensky-front-lines/index.html", "date": "2021-04-12T13:20:14.222Z", "text": "Fears rise of Russian aggression", "area": 23648.563366699218 }, { "text": "Daunte Wright's last call to his mother", "date": "2021-04-13T23:20:14.659Z", "size": 38.72, "link": "/2021/04/13/us/daunte-wright-family-reaction/index.html", "area": 27483.446074218748 }, { "link": "/2021/04/14/politics/gaetz-parties-women-drug-use-sex-payments/index.html", "date": "2021-04-14T14:20:16.500Z", "text": "Women detail parties with Rep. Gaetz", "size": 44.22, "area": 34755.67037475586 }, { "text": "Chauvin chooses not to testify", "link": "https://www.cnn.com/us/live-news/derek-chauvin-trial-04-15-21/h_c21bb7972f1340ec453d633bc80bc6c8", "date": "2021-04-15T15:20:13.327Z", "size": 44.44, "area": 28284.27523925781 }, { "size": 44.22, "text": "First US Capitol rioter pleads guilty", "date": "2021-04-16T19:20:15.811Z", "link": "/2021/04/16/politics/oath-keepers-capitol-guilty-plea-schaffer/index.html", "area": 32381.94109863281 }, { "text": "Bearing her pain alone", "date": "2021-04-17T16:20:16.642Z", "size": 60.94, "link": "/2021/04/17/uk/queen-alone-philip-funeral-gbr-intl-scli/index.html", "area": 39920.50557128906 }, { "date": "2021-04-18T02:20:14.348Z", "size": 38.72, "text": "Vaccine giant running out of Covid doses", "link": "/2021/04/17/india/covid-vaccine-shortage-covishield-covaxin-intl-hnk-dst/index.html", "area": 29475.24078125 }, { "date": "2021-04-19T23:20:12.678Z", "size": 44.44, "link": "https://www.cnn.com/2021/04/19/us/derek-chauvin-trial-george-floyd-closings/index.html", "text": "Chauvin case is now in jury's hands", "area": 33172.672526855466 }, { "link": "https://www.cnn.com/us/live-news/derek-chauvin-trial-04-20-21/index.html", "date": "2021-04-20T20:20:17.915Z", "text": "VERDICT REACHED", "size": 102.057, "area": 99850.92681848144 }, { "size": 102.057, "date": "2021-04-21T02:20:15.528Z", "link": "https://www.cnn.com/us/live-news/derek-chauvin-trial-04-20-21/h_032c38710a69d7c7bf2884a11a2575f0", "text": "CHAUVIN GUILTY", "area": 87713.08299682617 }, { "date": "2021-04-22T06:20:19.687Z", "text": "Chauvin verdict may rock the Senate", "size": 44.22, "link": "/2021/04/22/politics/police-reform-compromise-political-hurdles/index.html", "area": 34022.15115234375 }, { "text": "Alexey Navalny ends hunger strike", "size": 38.94, "link": "/2021/04/23/europe/alexey-navalny-ends-hunger-strike-intl/index.html", "date": "2021-04-23T14:20:14.018Z", "area": 24890.828748779295 }, { "size": 36, "link": "/2021/04/23/us/columbus-police-bodycam-release-politics/index.html", "date": "2021-04-24T04:20:16.865Z", "text": "The politics of police releasing body camera footage", "area": 32363.6923828125 }, { "text": "Kamala Harris' barrier-breaking role", "size": 44.22, "link": "https://www.cnn.com/2021/04/25/politics/kamala-harris-cnntv/index.html", "date": "2021-04-25T13:20:15.277Z", "area": 33317.8132434082 }, { "date": "2021-04-26T02:20:13.567Z", "text": "Chloé Zhao wins best director", "link": "/entertainment/live-news/oscars-2021/index.html", "size": 44.44, "area": 28022.254460449218 }, { "date": "2021-04-27T18:20:15.411Z", "size": 49.94, "link": "https://www.cnn.com/world/live-news/coronavirus-pandemic-vaccine-updates-04-27-21", "text": "CDC issues new mask guidance", "area": 38281.50029418945 }, { "text": "Gas stations could run out of gas this summer", "size": 36, "date": "2021-04-28T02:20:17.650Z", "link": "/2021/04/27/business/summer-gasoline-shortage/index.html", "area": 28508.099853515625 }, { "date": "2021-04-29T01:20:16.524Z", "link": "https://www.cnn.com/politics/live-news/biden-address-fact-check-updates-04-28-21", "text": "Biden's big night", "size": 100.286, "area": 80208.7293338623 }, { "size": 72, "link": "/2021/04/29/india/india-covid-deaths-crematoriums-intl-hnk-dst/index.html", "text": "Funeral pyres burn through the night in India", "date": "2021-04-30T04:20:13.321Z", "area": 109734.890625 }, { "date": "2021-05-01T16:20:18.995Z", "text": "Covid-19 vaccine myths debunked", "size": 44.44, "link": "/2021/04/28/health/covid-vaccine-myths-debunked/index.html", "area": 32085.49284423828 }, { "size": 49.94, "text": "An early morning splashdown", "date": "2021-05-02T12:20:22.835Z", "link": "/2021/05/02/tech/nasa-spacex-astronauts-return-iss-highlights-scn/index.html", "area": 35317.55946533203 }, { "date": "2021-05-03T15:20:18.791Z", "text": "GOP seizes on mask confusion", "size": 49.94, "link": "/2021/05/03/politics/president-joe-biden-masks-coronavirus-republicans/index.html", "area": 36988.05002685547 }, { "text": "Trump's assault on democracy is working", "size": 38.72, "date": "2021-05-04T12:20:16.310Z", "link": "/2021/05/04/politics/donald-trump-gop-democracy/index.html", "area": 29943.366621093748 }, { "size": 38.72, "link": "/2021/05/05/politics/liz-cheney-donald-trump-gop/index.html", "text": "McCarthy may have sealed Cheney's fate", "date": "2021-05-05T12:20:16.130Z", "area": 29701.7518359375 }, { "link": "/2021/05/05/health/pandemic-births/index.html", "date": "2021-05-06T01:20:14.401Z", "size": 38.94, "text": "How the pandemic affected births", "area": 24500.53510620117 }, { "size": 44.22, "date": "2021-05-07T21:20:16.921Z", "text": "What Florida's new election law does", "link": "/2021/05/07/politics/fact-check-florida-elections-law-desantis-drop-boxes-id-applications/index.html", "area": 34469.66003540039 }, { "text": "Democrats eager to stop DeSantis' rise", "date": "2021-05-08T17:20:16.824Z", "link": "/2021/05/08/politics/desantis-presidential-run-democrats-midterms/index.html", "size": 38.72, "area": 28326.0669140625 }, { "text": "Prices are rising everywhere", "date": "2021-05-09T18:20:15.797Z", "size": 49.94, "link": "/2021/05/09/investing/stocks-week-ahead/index.html", "area": 33709.493903808594 }, { "date": "2021-05-10T02:20:14.531Z", "size": 36, "text": "Fauci: It may be time to rethink indoor mask mandates", "link": "/2021/05/09/health/us-coronavirus-sunday/index.html", "area": 33638.961181640625 }, { "link": "/2021/05/11/world/coronavirus-newsletter-intl-05-11-21/index.html", "size": 86, "date": "2021-05-11T17:20:18.930Z", "text": "One world. Two realities", "area": 84469.69445800781 }, { "size": 102.057, "text": "GOP OUSTS CHENEY", "date": "2021-05-12T14:20:15.495Z", "link": "http://www.cnn.com/politics/live-news/liz-cheney-gop-vote-05-11-21/index.html", "area": 107991.40525341796 }, { "text": "CDC: Vaccinated people can go maskless indoors", "size": 72, "link": "https://www.cnn.com/2021/05/13/health/cdc-mask-guidance-vaccinated/index.html", "date": "2021-05-13T19:20:13.988Z", "area": 123052.5791015625 }, { "date": "2021-05-14T22:20:37.085Z", "text": "Dr. Wen breaks down new mask guidance", "size": 44.22, "link": "/2021/05/14/health/following-new-cdc-guidelines-wen-wellness/index.html", "area": 38656.760178222656 }, { "date": "2021-05-15T23:20:13.893Z", "link": "/2021/05/15/business/mask-guidance-stores/index.html", "text": "More companies loosen mask rules", "size": 38.94, "area": 25724.571130371092 }, { "link": "/2021/05/15/china/china-xinjiang-guantanamo-uyghurs-intl-hnk/index.html", "text": "Trapped between two superpowers", "date": "2021-05-16T03:20:16.319Z", "size": 44.44, "area": 32912.61010253906 }, { "size": 44.22, "link": "/2021/05/17/politics/arizona-audit-trump-republicans/index.html", "text": "Arizona GOP feuds over election audit", "date": "2021-05-17T22:20:15.691Z", "area": 35308.24494140625 }, { "link": "/2021/05/17/politics/arizona-election-audit-stephen-richer-trump-cnntv/index.html", "size": 44.44, "date": "2021-05-18T03:20:16.059Z", "text": "'We are humans, it has to stop'", "area": 28677.299626464843 }, { "size": 55.44, "date": "2021-05-19T18:20:24.042Z", "text": "All eyes on GOP defectors", "link": "/2021/05/19/politics/house-vote-january-6-commission/index.html", "area": 38054.00381835937 }, { "date": "2021-05-20T18:20:20.528Z", "text": "What's next for Nancy Pelosi", "link": "/2021/05/20/politics/nancy-pelosi-future-2022/index.html", "size": 49.94, "area": 34171.43585571289 }, { "date": "2021-05-21T07:20:19.986Z", "size": 49.94, "text": "Kicked and tased by police", "link": "/2021/05/20/us/ronald-greene-video-louisiana-police-death/index.html", "area": 32128.89168457031 }, { "text": "Combating vaccine hesitancy", "link": "/2021/05/21/us/onslow-county-north-carolina-vaccine-hesitancy-go-there/index.html", "size": 49.94, "date": "2021-05-22T15:20:25.293Z", "area": 35092.829465332026 }, { "size": 38.94, "link": "/2021/05/23/health/us-coronavirus-sunday/index.html", "date": "2021-05-23T12:20:19.623Z", "text": "A new Covid vaccination milestone", "area": 25305.42186401367 }, { "link": "/2021/05/24/economy/back-to-normal-index-economic-recovery/index.html", "size": 44.22, "date": "2021-05-24T19:20:17.584Z", "text": "US economy is nearly 'back to normal'", "area": 35666.247729492185 }, { "text": "Remembering George Floyd", "date": "2021-05-25T17:20:18.341Z", "link": "/us/live-news/george-floyd-remembered-05-25-21/index.html", "size": 72, "area": 69237.48779296875 }, { "link": "https://www.cnn.com/us/live-news/san-jose-ca-shooting-05-26-21/index.html", "text": "Deadly shooting in San Jose", "size": 49.94, "date": "2021-05-26T16:20:16.200Z", "area": 33709.49085571289 }, { "text": "'I just couldn't stay quiet anymore'", "size": 44.22, "link": "https://www.cnn.com/politics/live-news/capitol-riot-senate-vote-congress-news/h_b2e413c7daf8f7ba0fb8f4c87124f201", "date": "2021-05-27T16:20:16.445Z", "area": 31887.737255859374 }, { "text": "Democracy at risk", "size": 100.286, "link": "https://www.cnn.com/politics/live-news/capitol-riot-senate-vote-05-28-21/index.html", "date": "2021-05-28T15:20:25.694Z", "area": 87268.86618225097 }, { "link": "/2021/05/29/business/summer-2021-back-to-normal/index.html", "text": "7 signs that summer is about to be lit", "date": "2021-05-29T22:20:19.186Z", "size": 38.72, "area": 26643.84314453125 }, { "size": 50.5714, "date": "2021-05-30T20:20:18.584Z", "text": "Netanyahu's grip on power weakens", "link": "/2021/05/30/middleeast/israel-naftali-bennett-benjamin-netanyahu/index.html", "area": 44753.24747305908 }, { "date": "2021-05-31T04:20:21.103Z", "text": "Don't just go back to 'normal'", "size": 44.44, "link": "/2021/05/30/health/better-than-normal-wellness/index.html", "area": 27629.227360839843 }, { "date": "2021-06-01T09:20:22.557Z", "size": 44.44, "link": "/2021/06/01/politics/president-joe-biden-agenda-summer/index.html", "text": "The stakes are rising for Biden", "area": 28458.297548828123 }, { "text": "Another front in the voting rights wars", "date": "2021-06-02T13:20:14.329Z", "link": "/2021/06/02/politics/voting-rights-supreme-court-arizona/index.html", "size": 38.72, "area": 27323.378671874998 }, { "date": "2021-06-03T23:20:17.399Z", "text": "Manchin holds his position", "link": "/2021/06/03/politics/manchin-interview-filibuster-reconciliation/index.html", "size": 49.94, "area": 31849.222807617185 }, { "size": 55.44, "date": "2021-06-04T15:20:25.461Z", "text": "Hackers have a new target", "link": "/2021/06/03/tech/ransomware-cyberattack-jbs-colonial-pipeline/index.html", "area": 38770.56514160156 }, { "text": "Tracking Covid-19 vaccines in the US", "size": 44.22, "date": "2021-06-05T13:20:15.097Z", "link": "https://www.cnn.com/interactive/2021/health/us-covid-vaccinations/", "area": 34450.19772949219 }, { "date": "2021-06-06T00:20:13.066Z", "size": 44.22, "text": "See which states have vaccinated the most people so far", "link": "https://www.cnn.com/interactive/2021/health/us-covid-vaccinations/", "area": 52786.27551269531 }, { "size": 36, "link": "/2021/06/07/politics/colonial-pipeline-ransomware-recovered/index.html", "text": "US recovers millions in cryptocurrency taken by hackers", "date": "2021-06-07T21:20:18.305Z", "area": 34824.80126953125 }, { "size": 44.44, "date": "2021-06-08T22:20:18.544Z", "text": "Biden-Capito talks break down", "link": "/2021/06/08/politics/biden-capito-infrastructure-talks/index.html", "area": 28853.283002929686 }, { "text": "How your state is recovering", "date": "2021-06-09T17:20:19.722Z", "size": 49.94, "link": "https://www.cnn.com/business/us-economic-recovery-coronavirus", "area": 34081.54446533203 }, { "link": "/2021/06/10/politics/jill-biden-first-lady-queen-elizabeth-ii/index.html", "text": "'Jill from Philly' to meet the Queen", "date": "2021-06-10T22:20:21.702Z", "size": 44.22, "area": 31769.052546386716 }, { "size": 49.94, "link": "https://www.cnn.com/world/live-news/biden-g7-summit-updates-intl-06-11-2021/", "date": "2021-06-11T15:20:21.439Z", "text": "World leaders gather at G7", "area": 31759.33446533203 }, { "date": "2021-06-12T01:20:19.318Z", "link": "/2021/06/11/politics/justice-department-apple-congress-leak-investigation/index.html", "size": 44.22, "text": "What Trump's DOJ wanted in leak probe", "area": 37290.89279663086 }, { "date": "2021-06-13T18:20:20.137Z", "link": "http://www.cnn.com/2021/06/13/middleeast/israel-knesset-vote-prime-minister-intl/index.html", "text": "Netanyahu ousted from power", "size": 49.94, "area": 36069.15280761719 }, { "date": "2021-06-14T21:20:17.013Z", "text": "Major US mall owner files for bankruptcy", "link": "/2021/06/14/business/washington-prime-group-mall-bankruptcy/index.html", "size": 38.72, "area": 29442.0177734375 }, { "text": "US surpasses 600,000 Covid-19 deaths", "date": "2021-06-15T18:20:17.813Z", "link": "https://www.cnn.com/2021/06/15/health/us-coronavirus-tuesday/index.html", "size": 44.22, "area": 36006.7395703125 }, { "date": "2021-06-16T14:20:15.962Z", "size": 49.94, "link": "https://www.cnn.com/world/live-news/biden-putin-meeting-geneva-updates-intl/", "text": "High-stakes summit underway", "area": 36288.890026855464 }, { "size": 60.94, "date": "2021-06-17T00:20:18.468Z", "text": "Heat grips western US", "link": "/2021/06/16/weather/west-heat-wave-records-drought-climate/index.html", "area": 39857.3115649414 }, { "date": "2021-06-18T15:20:22.086Z", "text": "How her memory is dividing Americans", "size": 44.22, "link": "/2021/06/18/politics/ashli-babbitt-capitol-hill-riot-death-invs/index.html", "area": 36232.444020996096 }, { "text": "Fed up with Congress, Democrats go local", "size": 38.72, "link": "/2021/06/19/politics/voting-rights-democratic-activists-states-congress/index.html", "date": "2021-06-19T05:20:21.784Z", "area": 30616.85923828125 }, { "date": "2021-06-20T13:20:17.896Z", "text": "A second chance to say goodbye", "link": "/2021/06/20/health/supernatural-encounters-pandemic-loved-ones-blake/index.html", "size": 44.44, "area": 30890.76912109375 }, { "size": 55.44, "text": "Paths to an insurrection", "date": "2021-06-21T12:20:31.505Z", "link": "https://www.cnn.com/interactive/2021/06/us/capitol-riot-paths-to-insurrection/", "area": 34730.378525390624 }, { "date": "2021-06-22T13:20:27.336Z", "size": 55.44, "link": "/2021/06/22/politics/senate-democrats-voting-bill/index.html", "text": "Voting rights bill doomed", "area": 36233.633583984374 }, { "text": "SCOTUS sides with cheerleader", "size": 44.44, "link": "/2021/06/23/politics/supreme-court-first-amendment-cheerleader/index.html", "date": "2021-06-23T17:20:27.006Z", "area": 29762.52637939453 }, { "date": "2021-06-24T18:20:29.592Z", "size": 38.72, "link": "https://www.cnn.com/us/live-news/miami-florida-building-collapse-06-24-21/h_8f7f4de60134268d459a17ba18fd321d", "text": "51 missing after condo partly collapses", "area": 28179.59310546875 }, { "size": 36, "link": "https://www.cnn.com/us/live-news/miami-florida-building-collapse-06-25-21/h_945cccaa476c45d3a8e39023fc95e801", "date": "2021-06-25T12:20:18.698Z", "text": "Frantic race for survivors as dozens are still missing after condo collapse", "area": 45160.39599609375 }, { "link": "/2021/06/25/us/what-caused-surfside-building-collapse/index.html", "date": "2021-06-26T02:20:19.465Z", "size": 38.72, "text": "Florida condo collapse mystery deepens", "area": 29103.75896484375 }, { "size": 38.72, "date": "2021-06-27T17:20:15.936Z", "link": "https://www.cnn.com/us/live-news/miami-florida-building-collapse-06-27-21-intl/index.html", "text": "Death toll rises to 9 in condo collapse", "area": 27062.13447265625 }, { "text": "Key things to know about the condo collapse investigation so far", "size": 36, "link": "https://www.cnn.com/us/live-news/miami-florida-building-collapse-06-28-21-intl/h_1a983d6cacc981d9376cb19080700719", "date": "2021-06-28T19:20:27.795Z", "area": 40028.23828125 }, { "link": "/2021/06/29/us/erick-de-moura-champlain-towers-resident/index.html", "date": "2021-06-29T18:20:25.359Z", "text": "He almost went home that night", "size": 44.44, "area": 29795.766870117186 }, { "link": "/2021/06/29/us/florida-condo-shaking-construction-invs/index.html", "text": "'Shaking all the time'", "size": 60.94, "date": "2021-06-30T06:20:16.032Z", "area": 36954.06956054687 }, { "link": "https://www.cnn.com/us/live-news/miami-florida-building-collapse-07-01-21/h_ea9a67c1f60bbd915df8168522489956", "date": "2021-07-01T16:20:21.058Z", "text": "Search pauses due to safety concerns", "size": 44.22, "area": 35496.97613891601 }, { "text": "Takeaways from the Trump Org indictment", "date": "2021-07-02T06:20:21.905Z", "size": 38.72, "link": "/2021/07/01/politics/takeaways-from-trump-organization-indictment/index.html", "area": 30517.192578125 }, { "text": "The harrowing reality of gun violence in Louisiana", "link": "https://www.cnn.com/interactive/2021/07/us/louisiana-gun-violence-cnnphotos/", "size": 36, "date": "2021-07-03T07:20:16.291Z", "area": 30571.327880859375 }, { "date": "2021-07-04T22:20:40.715Z", "link": "/2021/07/04/politics/trump-rally-sarasota-florida/index.html", "text": "Trump seemingly acknowledges facts of prosecutors' case", "size": 36, "area": 36329.4580078125 }, { "text": "Demolition may help crews expand search", "link": "/2021/07/05/us/miami-dade-building-collapse-monday/index.html", "size": 38.72, "date": "2021-07-05T13:20:19.319Z", "area": 30473.400976562498 }, { "text": "Why America remains divided", "link": "/2021/07/05/politics/america-partisan-divisions-widen/index.html", "date": "2021-07-06T10:20:30.419Z", "size": 49.94, "area": 35222.67529418945 }, { "date": "2021-07-07T16:20:27.271Z", "text": "10 more bodies found in Surfside rubble", "link": "/2021/07/07/us/miami-dade-building-collapse-wednesday/index.html", "size": 38.72, "area": 28715.672734375 }, { "text": "Possible US citizen among Haiti suspects", "size": 38.72, "date": "2021-07-08T22:20:15.385Z", "link": "/2021/07/08/americas/haiti-moise-assassination-suspects-killed-intl-hnk/index.html", "area": 29830.111093749998 }, { "date": "2021-07-09T10:20:18.090Z", "size": 38.72, "text": "Pfizer and CDC disagree on booster shot", "link": "/2021/07/08/health/pfizer-waning-immunity-bn/index.html", "area": 29478.2610546875 }, { "size": 44.44, "date": "2021-07-10T17:20:22.803Z", "text": "Surfside death toll rises to 86", "link": "/2021/07/10/us/miami-dade-building-collapse-saturday/index.html", "area": 27154.074143066406 }, { "text": "A new era of space travel", "size": 55.44, "link": "http://www.cnn.com/2021/07/11/tech/richard-branson-virgin-galactic-space-flight-scn/index.html", "date": "2021-07-11T19:20:13.407Z", "area": 36816.02767089844 }, { "date": "2021-07-12T07:20:15.118Z", "text": "A weekend of demagoguery shows why Trump can't be ignored", "link": "/2021/07/12/politics/donald-trump-republicans-cpac/index.html", "size": 36, "area": 39189.7265625 }, { "size": 38.72, "link": "/2021/07/13/health/us-coronavirus-tuesday/index.html", "text": "Covid-19 cases are surging in 45 states", "date": "2021-07-13T18:20:17.001Z", "area": 28232.4431640625 }, { "size": 57.4286, "date": "2021-07-14T19:20:14.920Z", "link": "https://www.cnn.com/2021/07/14/health/covid-vaccine-solution-not-problem-gupta/index.html", "text": "Your choice: vaccinated or infected", "area": 54980.523656494144 }, { "date": "2021-07-15T20:20:30.444Z", "text": "Gucci rings and robocalls", "link": "/2021/07/15/politics/kfile-pac-trump-robocall-operation/index.html", "size": 55.44, "area": 36373.89502441406 }, { "size": 44.22, "date": "2021-07-16T23:20:16.986Z", "link": "/2021/07/16/politics/daca-ruling-hanen/index.html", "text": "Federal judge rules DACA is illegal", "area": 31946.11067871094 }, { "size": 38.72, "text": "'We're on the doorstep of a catastrophe'", "date": "2021-07-17T15:20:16.321Z", "link": "/2021/07/17/us/great-salt-lake-drought-dying/index.html", "area": 28945.199335937497 }, { "link": "/2021/07/17/us/washington-nationals-park-shooting-saturday/index.html", "date": "2021-07-18T03:20:17.068Z", "size": 36, "text": "Shooting outside D.C. stadium sends players and fans scrambling", "area": 40625.6923828125 }, { "text": "US gymnast tests positive for Covid-19", "size": 38.72, "date": "2021-07-19T13:20:16.138Z", "link": "https://www.cnn.com/world/live-news/olympics-coronavirus-pandemic-07-19-21/h_c1db7c8b3e6802cc58123ae5dcabfeb5", "area": 27993.85337890625 }, { "size": 60.94, "date": "2021-07-20T13:20:18.370Z", "text": "Jeff Bezos blasts off", "link": "https://www.cnn.com/business/live-news/jeff-bezos-space-flight-07-20-21", "area": 35913.217038574214 }, { "text": "A new presidency facing epic problems", "date": "2021-07-21T00:20:23.840Z", "size": 44.22, "link": "https://www.cnn.com/2021/07/20/politics/white-house-biden-six-months/index.html", "area": 36417.28059814453 }, { "size": 72, "link": "http://www.cnn.com/politics/live-news/biden-town-hall-cincinnati-07-21-21/index.html", "date": "2021-07-22T01:20:19.336Z", "text": "Biden won't give up on filibuster", "area": 79481.0654296875 }, { "date": "2021-07-23T15:20:19.040Z", "text": "Let the Olympic Games begin", "link": "https://www.cnn.com/world/live-news/tokyo-2020-olympics-07-23-21-spt/index.html", "size": 78.8571, "area": 87533.6527621582 }, { "date": "2021-07-24T08:20:24.254Z", "text": "Mask mandates are back on the table", "link": "/2021/07/24/health/us-coronavirus-saturday/index.html", "size": 44.22, "area": 34876.30374389648 }, { "text": "Trump reinvents the Big Lie", "size": 49.94, "link": "/2021/07/25/politics/donald-trump-arizona-audit-fraud-lies-election/index.html", "date": "2021-07-25T14:20:17.956Z", "area": 32508.43446533203 }, { "date": "2021-07-26T22:20:14.223Z", "text": "Reinstating restrictions", "size": 55.44, "link": "/2021/07/26/world/meanwhile-in-america-july-26/index.html", "area": 33870.50020019531 }, { "text": "BILES OUT OF TEAM FINALS", "link": "https://www.cnn.com/world/live-news/tokyo-2020-olympics-07-27-21-spt/h_fbc139e365a8d111304aa45ddd4ed62b", "date": "2021-07-27T12:20:15.624Z", "size": 81.7, "area": 93181.9416748047 }, { "link": "/2021/07/28/politics/mask-wars-are-back/index.html", "date": "2021-07-28T12:20:28.068Z", "size": 49.94, "text": "Mask wars revives struggle between science and politics", "area": 67778.55946533203 }, { "date": "2021-07-29T23:20:14.798Z", "text": "Major thaw in Greenland", "link": "/2021/07/29/us/greenland-ice-melting-climate-change/index.html", "size": 55.44, "area": 35626.83899414062 }, { "size": 55.44, "link": "/2021/07/29/politics/cdc-masks-covid-19-infections/index.html", "date": "2021-07-30T11:20:24.239Z", "text": "CDC: The war has changed", "area": 39645.68743652343 }, { "link": "/2021/07/31/health/us-coronavirus-saturday/index.html", "date": "2021-07-31T17:20:17.734Z", "size": 36, "text": "The unvaccinated Covid surge is only beginning, experts warn", "area": 38266.97607421875 }, { "date": "2021-08-01T12:20:18.069Z", "text": "The meme that struck a nerve", "link": "/2021/08/01/entertainment/biles-osaka-richardson-self-care/index.html", "size": 49.94, "area": 35562.26668457031 }, { "date": "2021-08-02T06:20:21.467Z", "link": "/2021/08/01/us/provincetown-outbreak-residents-response/index.html", "text": "'A petri dish for the country'", "size": 44.44, "area": 26000.413479003906 }, { "link": "/2021/08/03/politics/andrew-cuomo-new-york-report/index.html", "date": "2021-08-03T16:20:15.970Z", "text": "Gov. Cuomo sexually harassed women, investigation finds", "size": 72, "area": 143503.4619140625 }, { "date": "2021-08-04T14:20:15.077Z", "link": "https://www.cnn.com/us/live-news/coronavirus-pandemic-vaccine-updates-08-04-21/h_9439f25e3e7476ff79da9887eab670ef", "text": "Hospitalizations hit new peak in Florida", "size": 38.72, "area": 28232.44080078125 }, { "date": "2021-08-05T07:20:16.650Z", "link": "/2021/08/04/asia/southeast-asia-delta-covid-explainer-intl-hnk/index.html", "size": 38.72, "text": "Delta variant is ravaging Southeast Asia", "area": 28635.63548828125 }, { "size": 44.22, "text": "Dire consequences for life on Earth", "link": "/2021/08/06/world/climate-gulf-stream-collapse-warning-study-intl/index.html", "date": "2021-08-06T20:20:18.759Z", "area": 32677.686639404295 }, { "link": "/2021/08/07/health/children-covid-19-protection/index.html", "date": "2021-08-07T08:20:16.400Z", "text": "How to protect kids from Covid-19", "size": 38.94, "area": 24943.979091796875 }, { "size": 72, "date": "2021-08-08T13:20:13.852Z", "text": "Tokyo Olympics end with Closing Ceremony", "link": "https://www.cnn.com/world/live-news/tokyo-2020-olympics-08-08-21-spt/index.html", "area": 108547.751953125 }, { "text": "How FDA approval could be a game-changer", "link": "/2021/08/09/health/covid-19-fda-approval-meaning/index.html", "date": "2021-08-09T17:20:18.523Z", "size": 38.72, "area": 32268.885 }, { "date": "2021-08-10T17:20:15.607Z", "link": "https://www.cnn.com/politics/live-news/andrew-cuomo-investigation-08-10-21/h_b574f1ef347bb599287b35bdd7b2f415", "text": "ANDREW CUOMO RESIGNS", "size": 72, "area": 69698.8740234375 }, { "size": 38.94, "link": "/2021/08/11/health/one-month-later-these-maps-show-how-quickly-covid-engulfed-the-us-again/index.html", "date": "2021-08-11T16:20:21.402Z", "text": "Mapping the dramatic spread of Covid in the US", "area": 34730.220937499995 }, { "link": "/2021/08/12/us/tennessee-covid-mask-mandate-school-board-protest/index.html", "text": "Mask debate rages as risk to kids grows", "date": "2021-08-12T14:20:27.853Z", "size": 38.72, "area": 29106.776875 }, { "date": "2021-08-13T16:20:18.341Z", "text": "Florida educators killed by Covid-19", "link": "/2021/08/13/us/broward-county-florida-covid-deaths/index.html", "size": 44.22, "area": 33356.72436035156 }, { "text": "Earthquake strikes near Haiti", "link": "http://www.cnn.com/world/live-news/haiti-earthquake-08-14-21/index.html", "size": 44.44, "date": "2021-08-14T15:20:16.479Z", "area": 27081.72623535156 }, { "size": 72, "link": "https://www.cnn.com/world/live-news/afghanistan-taliban-us-troops-intl-08-15-21/index.html", "text": "AFGHAN GOVERNMENT FALLS", "date": "2021-08-15T21:20:17.198Z", "area": 77775.5478515625 }, { "text": "AFGHAN GOVERNMENT FALLS", "size": 72, "link": "/2021/08/15/politics/taliban-kabul-afghanistan-explainer/index.html", "date": "2021-08-16T02:20:21.208Z", "area": 77775.5478515625 }, { "date": "2021-08-17T02:20:20.255Z", "text": "Inside Biden's defiant response to the Afghanistan crisis", "size": 72, "link": "/2021/08/16/politics/white-house-afghanistan-biden-crises/index.html", "area": 139086.6767578125 }, { "text": "Violence erupts in Jalalabad", "date": "2021-08-18T12:20:19.962Z", "size": 49.94, "link": "https://www.cnn.com/world/live-news/afghanistan-taliban-us-news-08-18-21/h_200fa0b5d81058c84ba2a0c51abda8b5", "area": 33422.33585571289 }, { "text": "'Is this a game with kids' lives?'", "size": 38.94, "link": "/2021/08/19/health/cobb-county-schools-georgia-covid/index.html", "date": "2021-08-19T15:20:19.571Z", "area": 22799.63143798828 }, { "date": "2021-08-20T14:20:15.496Z", "size": 55.44, "link": "/2021/08/20/health/coronavirus-steps-to-coexist-gupta-wellness/index.html", "text": "How to coexist with Covid", "area": 37938.136113281245 }, { "text": "Covid reaches 'astronomical' levels in Louisiana", "date": "2021-08-21T19:20:16.397Z", "link": "/2021/08/21/health/us-coronavirus-saturday/index.html", "size": 36, "area": 29634.321533203125 }, { "text": "Henri makes landfall", "date": "2021-08-22T17:20:15.194Z", "link": "http://www.cnn.com/us/live-news/henri-storm-updates/index.html", "size": 60.94, "area": 36188.29508056641 }, { "size": 49.94, "date": "2021-08-23T00:20:14.912Z", "text": "Henri drenches the Northeast", "link": "https://www.cnn.com/2021/08/22/weather/hurricane-henri-sunday/index.html", "area": 35102.81502685547 }, { "size": 38.94, "text": "CIA chief met with Taliban leader", "link": "https://www.cnn.com/world/live-news/afghanistan-news-taliban-refugees-08-24-21/h_fa86fcca94f82ab682b0d9b7eca5e8ba", "date": "2021-08-24T14:20:18.045Z", "area": 23751.83137207031 }, { "link": "/2021/08/25/asia/taliban-key-leaders-explainer-intl/index.html", "size": 49.94, "text": "Key players of the Taliban", "date": "2021-08-25T22:20:12.262Z", "area": 30513.330855712888 }, { "date": "2021-08-26T15:20:16.950Z", "size": 72, "link": "https://www.cnn.com/world/live-news/afghanistan-news-taliban-refugees-08-26-21-intl/index.html", "text": "Explosions near Kabul airport", "area": 73130.6689453125 }, { "text": "Biden promises retribution", "link": "https://www.cnn.com/world/live-news/afghanistan-news-taliban-refugees-08-26-21-intl/index.html", "date": "2021-08-27T03:20:17.591Z", "size": 72, "area": 65644.97607421875 }, { "date": "2021-08-28T14:20:16.466Z", "text": "US strikes back after Kabul attack", "link": "/2021/08/28/asia/afghanistan-us-airstrike-evacuation-mission-intl/index.html", "size": 38.94, "area": 24775.40625366211 }, { "date": "2021-08-29T18:20:17.379Z", "size": 44.44, "link": "https://www.cnn.com/us/live-news/hurricane-ida-updates-08-29-21/", "text": "Ida makes landfall in Louisiana", "area": 28661.657202148435 }, { "date": "2021-08-30T19:20:17.626Z", "text": "A look at scenes of destruction from Ida", "size": 38.72, "link": "https://www.cnn.com/us/live-news/ida-updates-08-30-21/h_aabf004ddbd8fe04bc21000b33c5899c", "area": 28825.903261718748 }, { "link": "/2021/08/31/weather/tropical-depression-ida-tuesday/index.html", "size": 38.72, "text": "The levees held. The power grid did not", "date": "2021-08-31T16:20:34.878Z", "area": 28324.559140625 }, { "text": "Texas bans most abortions", "size": 55.44, "link": "/2021/09/01/politics/texas-abortion-supreme-court-sb8-roe-wade/index.html", "date": "2021-09-01T14:20:26.092Z", "area": 39069.387553710934 }, { "link": "/2021/09/01/asia/taliban-kandahar-captured-weapons-intl/index.html", "text": "Taliban show off captured weapons at Kandahar victory parade", "date": "2021-09-02T02:20:21.002Z", "size": 36, "area": 38983.66259765625 }, { "link": "/2021/09/03/politics/biden-supreme-court-abortion-joe-manchin/index.html", "size": 38.94, "date": "2021-09-03T13:20:17.270Z", "text": "The worst of times for Democrats", "area": 24348.665778808594 }, { "link": "/2021/09/03/us/new-york-city-flooding-illegal-basement-apartments/index.html", "text": "NYC's illegally converted apartments proved deadly in storm", "size": 36, "date": "2021-09-04T07:20:19.164Z", "area": 37362.3662109375 }, { "link": "/2021/09/05/us/ida-louisiana-storm-impact-losses/index.html", "text": "Measuring Ida's losses", "size": 60.94, "date": "2021-09-05T23:20:13.370Z", "area": 40671.40584106445 }, { "size": 44.44, "date": "2021-09-06T05:20:17.035Z", "link": "/2021/09/05/health/coronavirus-fauci-moderna-vaccine-booster/index.html", "text": "Moderna may delay Covid booster", "area": 31970.12623535156 }, { "link": "/2021/09/06/politics/us-pandemic-benefits-ending-explained-what-matters/index.html", "date": "2021-09-07T01:20:15.500Z", "text": "America's pandemic help has run out", "size": 44.22, "area": 34510.51711303711 }, { "date": "2021-09-08T09:20:16.277Z", "size": 36, "text": "13 Miami-Dade school employees have died of Covid since mid-August", "link": "/2021/09/07/us/miami-school-employees-covid/index.html", "area": 43883.83740234375 }, { "text": "Biden faces a medical and political emergency", "size": 36, "link": "/2021/09/09/politics/biden-pandemic-hard-truths-major-speech/index.html", "date": "2021-09-09T09:20:19.285Z", "area": 28702.496337890625 }, { "text": "'It's almost like a plague'", "link": "/2021/09/09/us/ozarks-missouri-covid-vaccine/index.html", "size": 49.94, "date": "2021-09-10T15:20:16.336Z", "area": 29532.011684570312 }, { "text": "20 Years", "link": "https://www.cnn.com/us/live-news/9-11-attacks-20th-anniversary/h_554fe18d6754bfd0b8d0bf479d837d3c", "size": 136, "date": "2021-09-11T15:20:20.714Z", "area": 74353.90771484375 }, { "text": "Europe's doors are closing to Americans", "date": "2021-09-12T10:20:17.846Z", "size": 38.72, "link": "/travel/article/what-americans-need-to-know-about-eu-restrictions/index.html", "area": 29274.399687499998 }, { "date": "2021-09-13T18:20:30.390Z", "text": "He died after he couldn't get an ICU bed at 43 hospitals", "size": 36, "link": "/2021/09/13/us/alabama-heart-patient-icu-shortage/index.html", "area": 34126.25537109375 }, { "text": "GOP infighting over Trump's exit", "date": "2021-09-14T23:20:54.416Z", "size": 38.94, "link": "/2021/09/14/politics/woodward-costa-book-gop-trump/index.html", "area": 23454.17471557617 }, { "link": "/2021/09/14/politics/california-recall-exit-polls/index.html", "text": "Early takeaways from California", "date": "2021-09-15T02:20:26.250Z", "size": 44.44, "area": 29608.052353515624 }, { "text": "DHS warns upcoming right-wing rally has potential for violence", "date": "2021-09-16T23:20:18.822Z", "size": 36, "link": "/2021/09/16/politics/dhs-intelligence-brief-potential-violence/index.html", "area": 39013.470703125 }, { "size": 38.72, "date": "2021-09-17T23:20:16.788Z", "text": "FDA advisers recommend boosters for some", "link": "/2021/09/17/health/fda-vrbpac-booster-meeting/index.html", "area": 32182.814296875 }, { "date": "2021-09-18T00:20:18.960Z", "size": 38.72, "text": "FDA advisers recommend boosters for some", "link": "/2021/09/17/health/fda-vrbpac-booster-meeting/index.html", "area": 32182.814296875 }, { "link": "/2021/09/16/world/covid-countries-opening-up-cmd-intl/index.html", "size": 36, "text": "5 countries opening and living with Covid", "date": "2021-09-19T04:20:21.277Z", "area": 25388.628662109375 }, { "text": "Covid makes grim history", "date": "2021-09-20T21:20:21.787Z", "size": 55.44, "link": "/2021/09/20/health/us-covid-deaths-surpass-1918-pandemic/index.html", "area": 37087.40755371094 }, { "link": "/2021/09/21/us/gabby-petito-brian-laundrie-update-tuesday/index.html", "date": "2021-09-21T21:20:22.605Z", "text": "Autopsy confirms remains found in Wyoming are Gabby Petito's, FBI says", "size": 36, "area": 45379.423828125 }, { "date": "2021-09-22T14:20:21.241Z", "link": "/2021/09/22/politics/donald-trump-new-revelations/index.html", "text": "New bombshells show Trump's coup threat was real and hasn't passed", "size": 36, "area": 43868.28515625 }, { "date": "2021-09-23T16:20:19.581Z", "text": "He went missing after leaving work", "size": 38.94, "link": "http://www.cnn.com/2021/09/23/us/families-missing-black-people/index.html", "area": 25416.283454589844 }, { "link": "/2021/09/24/us/del-rio-texas-border-camp-cleared/index.html", "text": "Texas migrant camp cleared", "size": 49.94, "date": "2021-09-24T18:20:17.643Z", "area": 33559.67085571289 }, { "text": "'We will not boost our way out of this'", "link": "/2021/09/25/health/us-coronavirus-saturday/index.html", "size": 38.72, "date": "2021-09-25T21:20:17.982Z", "area": 26950.38671875 }, { "text": "'Is my child going to die?'", "link": "/2021/09/26/us/pediatric-covid-doctors/index.html", "date": "2021-09-26T21:20:23.533Z", "size": 49.94, "area": 30321.060026855466 }, { "size": 60.94, "date": "2021-09-27T23:20:18.311Z", "text": "R. Kelly found guilty", "link": "/2021/09/27/us/r-kelly-verdict/index.html", "area": 35303.56783325195 }, { "link": "/2021/09/28/business/natural-gas-inflation/index.html", "text": "Home heating sticker shock", "date": "2021-09-28T23:20:15.749Z", "size": 49.94, "area": 33379.88502685547 }, { "date": "2021-09-29T00:20:14.411Z", "size": 49.94, "text": "Home heating sticker shock", "link": "/2021/09/28/business/natural-gas-inflation/index.html", "area": 33379.88502685547 }, { "text": "Senate votes to keep government open", "size": 44.22, "date": "2021-09-30T18:20:14.778Z", "link": "https://www.cnn.com/politics/live-news/government-shutdown-congress-infrastructure-vote-09-30-21/h_23dc5442876c53fb1da1d80057e1ea92", "area": 36434.79154541015 }, { "size": 44.44, "date": "2021-10-01T07:20:15.813Z", "text": "Progressives defy pressure from Pelosi", "link": "/2021/10/01/politics/pelosi-progressives-infrastructure-biden-agenda/index.html", "area": 36391.192873535154 }, { "text": "'Are you taking me for a madman?'", "date": "2021-10-02T08:20:15.052Z", "size": 38.94, "link": "/2021/10/02/europe/belarus-lukashenko-interview/index.html", "area": 25279.603674316404 }, { "size": 36, "date": "2021-10-03T09:20:23.429Z", "text": "Global supply chain workers are warning of a 'system collapse'", "link": "/2021/09/29/business/supply-chain-workers/index.html", "area": 38940.89501953125 }, { "size": 55.44, "text": "Facebook suffers outage", "link": "/2021/10/04/tech/facebook-instagram-whatsapp-outage/index.html", "date": "2021-10-04T23:20:15.110Z", "area": 36160.45237792969 }, { "size": 55.44, "link": "/2021/10/04/tech/facebook-instagram-whatsapp-outage/index.html", "date": "2021-10-05T00:20:14.030Z", "text": "Facebook suffers outage", "area": 36160.45237792969 }, { "size": 44.44, "date": "2021-10-06T05:20:14.716Z", "link": "/2021/10/05/politics/mike-pence-january-6-amnesia-what-matters/index.html", "text": "Pence gets amnesia about Jan. 6", "area": 30816.462858886716 }, { "link": "/2021/10/07/politics/donald-trump-january-6-mike-pence-nikki-haley/index.html", "date": "2021-10-07T12:20:14.584Z", "text": "Trump's threat to American democracy", "size": 44.22, "area": 36207.14923095703 }, { "text": "The 'Great Resignation'", "size": 55.44, "date": "2021-10-08T18:20:21.494Z", "link": "/2021/10/08/success/quit-job-pandemic-feseries/index.html", "area": 34160.17961425781 }, { "link": "/2021/10/09/us/kansas-city-school-slavery-petition/index.html", "text": "Slavery petition puts Missouri school into national debate on race", "size": 36, "date": "2021-10-09T11:20:18.579Z", "area": 40433.88427734375 }, { "text": "How your state is trending with Covid cases", "link": "https://www.cnn.com/interactive/2020/health/coronavirus-us-maps-and-cases/", "date": "2021-10-10T12:20:16.322Z", "size": 44.44, "area": 40915.89498046875 }, { "date": "2021-10-11T14:20:23.957Z", "text": "'She could be any one of us'", "size": 49.94, "link": "/2021/10/11/us/texas-abortion-rosie-jimenez/index.html", "area": 33484.76085571289 }, { "date": "2021-10-12T22:20:17.813Z", "link": "https://www.cnn.com/politics/live-news/debt-ceiling-vote-default-10-12-21/index.html", "text": "House to vote soon to avoid debt default", "size": 38.72, "area": 29226.07767578125 }, { "text": "'I'm overwhelmed,' Shatner says", "date": "2021-10-13T18:20:17.471Z", "size": 44.44, "link": "https://www.cnn.com/business/live-news/william-shatner-blue-origin-space-flight/h_3480a3c7320866b5714c49d081be54a8", "area": 30233.76831298828 }, { "text": "La Niña has arrived and will stick around", "link": "/2021/10/14/weather/la-nina-develops-2021/index.html", "date": "2021-10-14T22:20:17.279Z", "size": 36, "area": 25028.3408203125 }, { "text": "British lawmaker dies after stabbing", "link": "https://www.cnn.com/uk/live-news/david-amess-mp-stabbed-10-15-21/index.html", "size": 44.22, "date": "2021-10-15T19:20:18.480Z", "area": 33494.86867675781 }, { "size": 38.72, "date": "2021-10-16T00:20:17.967Z", "link": "/2021/10/14/business/evergrande-china-property-ghost-towns-intl-hnk/index.html", "text": "A look at China's unsold 'ghost towns'", "area": 27599.724238281247 }, { "date": "2021-10-17T14:20:17.595Z", "link": "/2021/10/17/politics/supreme-court-conference-rules-breyer/index.html", "text": "The secret Supreme Court", "size": 55.44, "area": 38291.840200195315 }, { "text": "Colin Powell dead at 84", "size": 55.44, "date": "2021-10-18T12:20:14.521Z", "link": "http://www.cnn.com/2021/10/18/politics/colin-powell-dies/index.html", "area": 34038.207553710934 }, { "size": 38.94, "date": "2021-10-19T21:20:18.803Z", "text": "Are supply chain woes near an end?", "link": "/2021/10/19/investing/supply-chain-economy/index.html", "area": 26099.68235595703 }, { "size": 49.94, "date": "2021-10-20T07:20:14.815Z", "link": "/2021/10/20/world/carbon-capture-storage-climate-iceland-intl-cmd/index.html", "text": "Will this save the planet?", "area": 29494.55668457031 }, { "date": "2021-10-21T20:20:16.344Z", "text": "BANNON IN CONTEMPT", "link": "https://www.cnn.com/politics/live-news/steven-bannon-contempt-charge-vote-10-21-21/index.html", "size": 57.8028, "area": 39178.0350618164 }, { "date": "2021-10-22T01:20:13.570Z", "size": 71.7143, "text": "Biden speaks at critical moment", "link": "/politics/live-news/joe-biden-town-hall-10-21-21/index.html", "area": 79330.91542629394 }, { "date": "2021-10-23T05:20:15.233Z", "text": "How 'Stop the Steal' flourished", "link": "/2021/10/22/business/january-6-insurrection-facebook-papers/index.html", "size": 44.44, "area": 28861.102858886716 }, { "link": "/2021/10/24/health/medical-gloves-us-thailand-investigation-cmd-intl/index.html", "date": "2021-10-24T10:20:12.647Z", "text": "'Most dangerous commodity on Earth'", "size": 44.22, "area": 35524.216889648436 }, { "size": 44.44, "date": "2021-10-25T11:20:14.992Z", "link": "https://www.cnn.com/2021/10/25/tech/facebook-papers/index.html", "text": "Facebook's existential crisis", "area": 26422.769785156248 }, { "date": "2021-10-26T23:20:16.252Z", "link": "/2021/10/26/entertainment/rust-alec-baldwin-shooting-unfolded-cec/index.html", "text": "How the fatal 'Rust' shooting unfolded", "size": 38.72, "area": 27598.2141015625 }, { "text": "How the fatal 'Rust' shooting unfolded", "date": "2021-10-27T01:20:14.233Z", "link": "/2021/10/26/entertainment/rust-alec-baldwin-shooting-unfolded-cec/index.html", "size": 38.72, "area": 27598.2141015625 }, { "text": "Biden implores Democrats but they balk", "link": "https://www.cnn.com/politics/live-news/infrastructure-spending-bill-biden-10-28-21/", "size": 38.72, "date": "2021-10-28T17:20:15.316Z", "area": 28880.268183593747 }, { "size": 38.94, "text": "Two most powerful Catholics meet", "link": "https://www.cnn.com/world/live-news/biden-europe-trip-10-29-21-intl/index.html", "date": "2021-10-29T14:20:17.608Z", "area": 25103.44200439453 }, { "date": "2021-10-30T17:20:13.758Z", "text": "New court filings reveal Trump secret", "size": 44.22, "link": "/2021/10/30/politics/donald-trump-house-democrats-january-6-documents/index.html", "area": 34588.34204589844 }, { "size": 36, "link": "/2021/10/31/us/atlanta-braves-history-racism-blake/index.html", "date": "2021-10-31T21:20:15.137Z", "text": "Braves may win the World Series. But they're striking out with some fans", "area": 44779.376953125 }, { "size": 38.94, "link": "/2021/11/01/politics/donald-trump-january-6-congress/index.html", "date": "2021-11-01T05:20:15.447Z", "text": "Trump escalates January 6 cover-up", "area": 26215.10009765625 }, { "date": "2021-11-02T23:20:20.394Z", "link": "https://www.cnn.com/politics/live-news/election-day-results-11-02-21", "size": 78.8571, "text": "Virginia polls are closing", "area": 72233.47901832276 }, { "link": "/2021/11/03/politics/us-election-day-analysis-virginia-new-jersey-democrats-reckoning/index.html", "date": "2021-11-03T15:20:15.634Z", "text": "Democrats misjudged the mood", "size": 72, "area": 79465.5263671875 }, { "link": "/2021/11/04/politics/vaccine-rule-large-employers-federal-contractors-health-care-workers/index.html", "text": "Biden's vaccine requirement deadline", "date": "2021-11-04T14:20:16.435Z", "size": 44.22, "area": 34800.42207275391 }, { "text": "Timeline of the 2020 coup", "link": "/2021/11/05/politics/january-6-timeline-trump-coup/index.html", "date": "2021-11-05T17:20:21.278Z", "size": 55.44, "area": 37261.20911132812 }, { "text": "Big win for Biden", "date": "2021-11-06T04:20:14.885Z", "size": 100.286, "link": "http://www.cnn.com/2021/11/05/politics/house-votes-infrastructure-build-back-better/index.html", "area": 81682.92863708496 }, { "text": "'Kids were dropping left and right'", "link": "/2021/11/07/us/astroworld-festival-what-happened/index.html", "size": 44.22, "date": "2021-11-07T18:20:14.047Z", "area": 31484.98276977539 }, { "size": 44.22, "date": "2021-11-08T06:20:15.651Z", "text": "Lawsuit filed in Astroworld tragedy", "link": "/2021/11/08/us/astroworld-lawsuit-travis-scott-festival/index.html", "area": 32311.89730957031 }, { "link": "/2021/11/09/us/kyle-rittenhouse-trial-tuesday/index.html", "size": 36, "text": "Prosecution rests its case against Kyle Rittenhouse", "date": "2021-11-09T19:20:24.065Z", "area": 31774.0166015625 }, { "size": 49.94, "text": "Kyle Rittenhouse testifies", "link": "/us/live-news/kyle-rittenhouse-trial-11-10-21/index.html", "date": "2021-11-10T16:20:20.418Z", "area": 30420.946123046873 }, { "text": "Trump tries again to keep his records secret", "link": "/2021/11/11/politics/trump-motion-documents/index.html", "date": "2021-11-11T18:20:16.986Z", "size": 44.44, "area": 41060.59079589844 }, { "date": "2021-11-12T08:20:19.328Z", "link": "/2021/11/11/us/colorado-geos-neighborhood-net-zero-climate/index.html", "size": 36, "text": "A sustainable housing experiment goes awry", "area": 27642.375 }, { "text": "Trump scores legal victories", "date": "2021-11-13T12:20:19.287Z", "link": "/2021/11/12/politics/trump-lawsuits-michael-cohen-summer-zervos/index.html", "size": 49.94, "area": 33469.776417236324 }, { "link": "https://www.cnn.com/2021/11/14/politics/kamala-harris-frustrating-start-vice-president/index.html", "size": 36, "date": "2021-11-14T21:20:18.421Z", "text": "Inside Kamala Harris' frustrating start as VP", "area": 27090.27685546875 }, { "text": "Biden takes a victory lap", "link": "https://www.cnn.com/politics/live-news/infrastructure-bill-joe-biden-signing-11-15-21/index.html", "size": 55.44, "date": "2021-11-15T22:20:18.625Z", "area": 35684.77623046875 }, { "date": "2021-11-16T17:20:19.510Z", "text": "Bannon quote is key to America's crazy politics", "size": 36, "link": "/2021/11/16/media/steve-bannon-reliable-sources/index.html", "area": 29275.330078125 }, { "link": "/politics/live-news/paul-gosar-censure-vote-aoc-biden-videos/index.html", "date": "2021-11-17T22:20:15.631Z", "text": "House votes to censure Rep. Gosar", "size": 38.94, "area": 25625.856899414062 }, { "link": "/2021/11/18/us/julius-jones-oklahoma-execution-decision/index.html", "text": "Governor grants Julius Jones clemency", "size": 44.22, "date": "2021-11-18T19:20:22.550Z", "area": 36714.96940063476 }, { "date": "2021-11-19T19:20:19.709Z", "text": "Rittenhouse not guilty on all charges", "size": 57.4286, "link": "https://www.cnn.com/us/live-news/kyle-rittenhouse-trial-verdict-watch-11-19-21/index.html", "area": 57003.5007720459 }, { "date": "2021-11-20T20:20:20.459Z", "link": "http://www.cnn.com/2021/11/20/us/atlanta-airport-scare/index.html", "text": "Ground stop lifted at Atlanta airport", "size": 44.22, "area": 32926.73182250976 }, { "date": "2021-11-21T09:20:21.983Z", "link": "/2021/11/20/business/gas-prices-costco-walmart-bjs/index.html", "size": 36, "text": "Here's why gas is so cheap at Costco and Walmart", "area": 31342.449462890625 }, { "text": "Five killed as SUV plows through Wisconsin Christmas parade", "link": "/us/live-news/wisconsin-waukesha-christmas-parade-car-plow-11-22-21/index.html", "date": "2021-11-22T14:20:19.456Z", "size": 36, "area": 38248.8310546875 }, { "text": "What we know about the suspect in the deadly Wisconsin parade tragedy", "size": 36, "date": "2021-11-23T09:20:16.251Z", "link": "/2021/11/22/us/what-we-know-about-suspect-in-waukesha-parade-tragedy/index.html", "area": 45261.4833984375 }, { "date": "2021-11-24T19:20:18.470Z", "text": "All defendants guilty of murder", "size": 72, "link": "https://www.cnn.com/us/live-news/ahmaud-arbery-killing-trial-verdict-watch-11-24-21", "area": 75914.47265625 }, { "date": "2021-11-25T03:20:13.981Z", "text": "All defendants guilty of murder in Ahmaud Arbery's death", "size": 72, "link": "/2021/11/24/us/ahmaud-arbery-killing-trial-wednesday-jury-deliberations/index.html", "area": 141289.8837890625 }, { "size": 66.44, "text": "The US gun epidemic", "link": "/2021/11/26/world/us-gun-culture-world-comparison-intl-cmd/index.html", "date": "2021-11-26T13:20:20.507Z", "area": 44573.92446289062 }, { "text": "Variant prompts US travel restrictions", "size": 38.72, "date": "2021-11-27T00:20:20.050Z", "link": "https://www.cnn.com/world/live-news/new-covid-variant-south-africa-11-26-21", "area": 27013.807734375 }, { "text": "Widely acclaimed fashion designer dies of cancer", "link": "/style/article/virgil-abloh-death/index.html", "date": "2021-11-28T20:20:39.455Z", "size": 44.22, "area": 45884.9596508789 }, { "size": 38.94, "link": "/2021/11/29/health/cdc-booster-guidance-omicron/index.html", "date": "2021-11-29T23:20:21.199Z", "text": "CDC strengthens booster guidance", "area": 25539.297158203124 }, { "date": "2021-11-30T01:20:21.735Z", "link": "/2021/11/29/health/omicron-covid-variant-naming-cec/index.html", "size": 55.44, "text": "How Omicron got its name", "area": 38837.64875976562 }, { "date": "2021-12-01T13:20:16.530Z", "size": 49.94, "text": "US weighs new travel rules", "link": "https://www.cnn.com/world/live-news/omicron-covid-19-variant-12-01-21/index.html", "area": 32181.32807495117 }, { "size": 44.22, "date": "2021-12-02T03:20:20.065Z", "link": "https://www.cnn.com/world/live-news/omicron-covid-19-variant-12-01-21/index.html", "text": "Dr. Fauci tackles Omicron questions", "area": 33504.60117919922 }, { "text": "Michigan shooter's parents charged", "link": "https://www.cnn.com/us/live-news/oxford-school-shooting-michigan-12-03-21/h_0632e1efaed7ceccc8c42660da93990b", "date": "2021-12-03T17:20:19.769Z", "size": 38.94, "area": 26111.827338867188 }, { "text": "Reward offered for info on shooting suspect's parents", "date": "2021-12-04T05:20:14.889Z", "size": 36, "link": "https://www.cnn.com/2021/12/03/us/michigan-oxford-high-school-shooting-superintendent-message/index.html", "area": 33296.816162109375 }, { "link": "/2021/12/04/asia/japan-immigration-detention-wishma-death-hnk-intl-dst/index.html", "date": "2021-12-05T14:20:18.405Z", "text": "Death in detention", "size": 66.44, "area": 38408.556860351564 }, { "date": "2021-12-06T11:20:18.563Z", "size": 49.94, "link": "https://www.cnn.com/interactive/2021/12/us/coal-ash-ponds-plant-barry/", "text": "'America's Amazon' at risk", "area": 31804.278636474606 }, { "text": "Texas could test Biden's bets", "size": 44.44, "date": "2021-12-07T18:20:26.275Z", "link": "/2021/12/07/politics/biden-build-back-better-texas/index.html", "area": 27228.380405273438 }, { "text": "Northwest US sees over 40 earthquakes in 24 hours", "size": 44.22, "date": "2021-12-08T21:20:15.934Z", "link": "/2021/12/08/weather/earthquake-swarm-oregon/index.html", "area": 47933.75667480469 }, { "date": "2021-12-09T15:20:14.431Z", "link": "/2021/12/09/business/epik-hack-ceo-rob-monster-invs/index.html", "size": 44.44, "text": "An online refuge for extremists", "area": 28673.391054687498 }, { "text": "Jussie Smollett guilty on some charges", "size": 38.72, "date": "2021-12-10T02:20:15.927Z", "link": "/us/live-news/jussie-smollett-trial-verdict-watch-12-09-21/index.html", "area": 28166.001874999998 }, { "link": "/2021/12/11/weather/severe-weather-tornadoes-saturday/index.html", "date": "2021-12-11T09:20:17.877Z", "size": 36, "text": "Tornadoes tear across central US, causing widespread damage", "area": 39092.52392578125 }, { "size": 55.44, "date": "2021-12-12T23:20:15.153Z", "text": "'The whole town is gone'", "link": "/2021/12/12/us/survivors-deadly-storm-kentucky/index.html", "area": 36133.00646484375 }, { "link": "/2021/12/12/us/survivors-deadly-storm-kentucky/index.html", "date": "2021-12-13T00:20:17.218Z", "text": "'The whole town is gone'", "size": 55.44, "area": 36133.00646484375 }, { "date": "2021-12-14T16:20:14.387Z", "link": "/2021/12/14/politics/mark-meadows-text-messages/index.html", "text": "Meadows' texts provide a bitter rebuke to Trump's narrative about Jan. 6", "size": 38.72, "area": 52242.709492187496 }, { "link": "http://www.cnn.com/2021/12/14/politics/january-6-committee-text-messages/index.html", "size": 38.94, "text": "New texts sent to Meadows revealed", "date": "2021-12-15T02:20:14.850Z", "area": 26688.918424072264 }, { "text": "How the January 6 panel finally exposed Trump's empire of lies", "size": 36, "date": "2021-12-16T11:20:15.883Z", "link": "/2021/12/16/politics/donald-trump-january-6-committee-republicans-fox-news/index.html", "area": 38873.50048828125 }, { "date": "2021-12-17T23:20:14.703Z", "link": "/2021/12/17/politics/rick-perry-jan-6-text-mark-meadows-nov-4/index.html", "text": "The mysterious November 4 text", "size": 44.44, "area": 30235.723955078123 }, { "size": 44.44, "link": "/2021/12/17/politics/rick-perry-jan-6-text-mark-meadows-nov-4/index.html", "text": "The mysterious November 4 text", "date": "2021-12-18T00:20:20.258Z", "area": 30235.723955078123 }, { "link": "https://www.cnn.com/us/live-news/omicron-variant-coronavirus-news-12-19-21", "date": "2021-12-19T16:20:15.182Z", "text": "Covid upends life. Again.", "size": 55.44, "area": 35962.25031738281 }, { "text": "Biden suffers twin political blows", "link": "/2021/12/20/politics/joe-biden-joe-manchin-build-back-better-covid/index.html", "date": "2021-12-20T10:20:13.469Z", "size": 38.94, "area": 23873.328735351562 }, { "text": "'We've taken a big nose dive'", "size": 44.44, "date": "2021-12-21T23:20:16.952Z", "link": "/2021/12/21/business/businesses-workers-covid-omicron/index.html", "area": 26940.93899169922 }, { "date": "2021-12-22T01:20:15.371Z", "link": "/2021/12/21/business/businesses-workers-covid-omicron/index.html", "text": "'We've taken a big nose dive'", "size": 44.44, "area": 26940.93899169922 }, { "link": "https://www.cnn.com/world/live-news/omicron-variant-coronavirus-news-12-23-21/h_f9aab70b4357549960098d6079771f9c", "text": "How Omicron compares to Delta", "size": 44.44, "date": "2021-12-23T16:20:16.259Z", "area": 30482.096884765622 }, { "size": 38.72, "link": "/2021/12/24/us/doctors-patients-threats-coronavirus-treatments/index.html", "date": "2021-12-24T15:20:21.867Z", "text": "Covid patients clash with hospital staff", "area": 27827.74306640625 }, { "text": "Answering your top Covid questions", "link": "https://www.cnn.com/interactive/2020/health/coronavirus-questions-answers/", "date": "2021-12-25T06:20:15.128Z", "size": 38.94, "area": 26210.543946533202 }, { "date": "2021-12-26T09:20:15.111Z", "link": "/2021/12/26/africa/desmond-tutu-death-intl-hnk/index.html", "text": "Archbishop Desmond Tutu has died", "size": 38.94, "area": 25732.16471557617 }, { "text": "What happened to the Hippie Trail", "size": 38.94, "date": "2021-12-27T00:20:17.977Z", "link": "https://www.cnn.com/interactive/travel/hippie-trail-history-lonely-planet/", "area": 24491.418050537108 }, { "link": "/2021/12/27/homes/us-real-estate-market-2021/index.html", "date": "2021-12-28T04:20:14.285Z", "text": "What to expect from the housing market in 2022", "size": 36, "area": 29616.1787109375 }]

export function CnnFontSize2021() {
    const chartRef = useRef(null);;
    const { height, width } = useWindowSize();

    const data = useMemo(() => ({
        labels: rawData.map((item) => formatDate(item.date)),
        datasets: [{
            label: 'Font Size',
            backgroundColor: rawData.map((item) => item.link ? '#475D75' : '#C1C9D6'),
            borderColor: rawData.map((item) => item.link ? '#475D75' : '#C1C9D6'),
            data: rawData.map((item) => item.size)
        }]
    }), []);

    const aspectRatio = (!width || !height) ? 2 : width > height ? 2 : 1;
    return (
        <div>
            <Bar
                ref={chartRef}
                options={{
                    aspectRatio,
                    plugins: {
                        legend: {
                            display: false
                        },
                        title: {
                            text: 'CNN Headline Font Sizes Over Time',
                            display: true
                        },
                        tooltip: {
                            callbacks: {
                                label: function (tooltipItem) {
                                    const index = tooltipItem.dataIndex;
                                    return `${rawData[index].text} (${rawData[index].size}px)`;
                                },
                            }
                        },
                    },
                    scales: {
                        x: {
                            ticks: {
                                callback: function (value, index, ticks) {
                                    if (value === 0) {
                                        return 'Jan';
                                    }
                                    if (value === 31) {
                                        return 'Feb';
                                    }
                                    if (value === 59) {
                                        return 'Mar'
                                    }
                                    if (value === 90) {
                                        return 'Apr'
                                    }
                                    if (value === 120) {
                                        return 'May'
                                    }
                                    if (value === 151) {
                                        return 'Jun'
                                    }
                                    if (value === 181) {
                                        return 'Jul'
                                    }
                                    if (value === 212) {
                                        return 'Aug'
                                    }
                                    if (value === 243) {
                                        return 'Sep'
                                    }
                                    if (value === 273) {
                                        return 'Oct'
                                    }
                                    if (value === 304) {
                                        return 'Nov'
                                    }
                                    if (value === 334) {
                                        return 'Dec'
                                    }

                                    // const date = new Date('2021-01-01T12:00:00.000Z');
                                    // date.setTime()
                                    // console.log('value', value, index, ticks);
                                    //   // return '$' + value;
                                    return null;
                                }
                            }
                        }
                    }
                }}
                data={data}
                onClick={(event) => {
                    if (chartRef.current) {
                        const [element] = getElementAtEvent(chartRef.current, event);

                        if (element) {
                            const index = element.index;
                            const item = rawData[index];

                            if (item.link) {
                                if (item.link.startsWith("/")) {
                                    window.open(`https://cnn.com${item.link}`, "_blank");
                                } else {
                                    window.open(item.link, "_blank");
                                }
                            }
                        }
                    }
                }}
            />
        </div>
    )
}

export function CnnFontSize2021InkAmount() {
    const chartRef = useRef(null);;


    const data = useMemo(() => ({
        labels: rawData.map((item) => formatDate(item.date)),
        datasets: [{
            label: 'Font Size',
            backgroundColor: rawData.map((item) => item.link ? '#475D75' : '#C1C9D6'),
            borderColor: rawData.map((item) => item.link ? '#475D75' : '#C1C9D6'),
            data: rawData.map((item) => item.area)
        }]
    }), []);

    return (
        <div>
            <Bar
                ref={chartRef}
                options={{
                    plugins: {
                        legend: {
                            display: false
                        },
                        title: {
                            text: 'CNN Headline Amount of Ink Over Time',
                            display: true
                        },
                        tooltip: {
                            callbacks: {
                                label: function (tooltipItem) {
                                    const index = tooltipItem.dataIndex;
                                    return `${rawData[index].text} (${rawData[index].size}px)`;
                                },
                            }
                        },
                    },
                    scales: {
                        x: {
                            ticks: {
                                callback: function (value, index, ticks) {
                                    if (value === 0) {
                                        return 'Jan';
                                    }
                                    if (value === 31) {
                                        return 'Feb';
                                    }
                                    if (value === 59) {
                                        return 'Mar'
                                    }
                                    if (value === 90) {
                                        return 'Apr'
                                    }
                                    if (value === 120) {
                                        return 'May'
                                    }
                                    if (value === 151) {
                                        return 'Jun'
                                    }
                                    if (value === 181) {
                                        return 'Jul'
                                    }
                                    if (value === 212) {
                                        return 'Aug'
                                    }
                                    if (value === 243) {
                                        return 'Sep'
                                    }
                                    if (value === 273) {
                                        return 'Oct'
                                    }
                                    if (value === 304) {
                                        return 'Nov'
                                    }
                                    if (value === 334) {
                                        return 'Dec'
                                    }

                                    // const date = new Date('2021-01-01T12:00:00.000Z');
                                    // date.setTime()
                                    // console.log('value', value, index, ticks);
                                    //   // return '$' + value;
                                    return null;
                                }
                            }
                        }
                    }
                }}
                data={data}
                onClick={(event) => {
                    if (chartRef.current) {
                        const [element] = getElementAtEvent(chartRef.current, event);

                        if (element) {
                            const index = element.index;
                            const item = rawData[index];

                            if (item.link) {
                                if (item.link.startsWith("/")) {
                                    window.open(`https://cnn.com${item.link}`, "_blank");
                                } else {
                                    window.open(item.link, "_blank");
                                }
                            }
                        }
                    }
                }}
            />
        </div>
    )
}

export function CnnFontHeadlineLength() {
    const chartRef = useRef(null);;


    const data = useMemo(() => ({
        labels: rawData.map((item) => formatDate(item.date)),
        datasets: [{
            label: 'Font Size',
            backgroundColor: rawData.map((item) => item.link ? '#475D75' : '#C1C9D6'),
            borderColor: rawData.map((item) => item.link ? '#475D75' : '#C1C9D6'),
            data: rawData.map((item) => item.text.length)
        }]
    }), []);

    return (
        <div>
            <Bar
                ref={chartRef}
                options={{
                    plugins: {
                        legend: {
                            display: false
                        },
                        title: {
                            text: 'CNN Headline Amount of Ink Over Time',
                            display: true
                        },
                        tooltip: {
                            callbacks: {
                                label: function (tooltipItem) {
                                    const index = tooltipItem.dataIndex;
                                    return `${rawData[index].text} (${rawData[index].size}px)`;
                                },
                            }
                        },
                    },
                    scales: {
                        x: {
                            ticks: {
                                callback: function (value, index, ticks) {
                                    if (value === 0) {
                                        return 'Jan';
                                    }
                                    if (value === 31) {
                                        return 'Feb';
                                    }
                                    if (value === 59) {
                                        return 'Mar'
                                    }
                                    if (value === 90) {
                                        return 'Apr'
                                    }
                                    if (value === 120) {
                                        return 'May'
                                    }
                                    if (value === 151) {
                                        return 'Jun'
                                    }
                                    if (value === 181) {
                                        return 'Jul'
                                    }
                                    if (value === 212) {
                                        return 'Aug'
                                    }
                                    if (value === 243) {
                                        return 'Sep'
                                    }
                                    if (value === 273) {
                                        return 'Oct'
                                    }
                                    if (value === 304) {
                                        return 'Nov'
                                    }
                                    if (value === 334) {
                                        return 'Dec'
                                    }

                                    // const date = new Date('2021-01-01T12:00:00.000Z');
                                    // date.setTime()
                                    // console.log('value', value, index, ticks);
                                    //   // return '$' + value;
                                    return null;
                                }
                            }
                        }
                    }
                }}
                data={data}
                onClick={(event) => {
                    if (chartRef.current) {
                        const [element] = getElementAtEvent(chartRef.current, event);

                        if (element) {
                            const index = element.index;
                            const item = rawData[index];

                            if (item.link) {
                                if (item.link.startsWith("/")) {
                                    window.open(`https://cnn.com${item.link}`, "_blank");
                                } else {
                                    window.open(item.link, "_blank");
                                }
                            }
                        }
                    }
                }}
            />
        </div>
    )
}

// TODO: draw vertical line at mean
// const verticalLinePlugin = {
//     id: 'verticalLine',
//     getLinePosition: function (chart, pointIndex) {
//         const meta = chart.getDatasetMeta(0); // first dataset is used to discover X coordinate of a point
//         const data = meta.data;
//         return data[pointIndex]._model.x;
//     },
//     renderVerticalLine: function (chartInstance, pointIndex) {
//         const lineLeftOffset = this.getLinePosition(chartInstance, pointIndex);
//         const scale = chartInstance.scales['y-axis-0'];
//         const context = chartInstance.chart.ctx;

//         // render vertical line
//         context.beginPath();
//         context.strokeStyle = '#ff0000';
//         context.moveTo(lineLeftOffset, scale.top);
//         context.lineTo(lineLeftOffset, scale.bottom);
//         context.stroke();

//         // write label
//         context.fillStyle = "#ff0000";
//         context.textAlign = 'center';
//         context.fillText('MY TEXT', lineLeftOffset, (scale.bottom - scale.top) / 2 + scale.top);
//     },

//     afterDatasetsDraw: function (chart, easing) {
//         const lineAtIndex = [2,4,8];
//         if (lineAtIndex) {
//             lineAtIndex.forEach(pointIndex => this.renderVerticalLine(chart, pointIndex));
//         }
//     }
// };


export function CnnFontSize2021Histogram() {
    const chartRef = useRef(null);
    const data = useMemo(() => createHistogramDataset(), []);

    return (
        <div>
            <Bar
                ref={chartRef}
                options={{
                    plugins: {
                        legend: {
                            display: false
                        },
                        title: {
                            text: 'Headline Font Size Probability',
                            display: true
                        },
                    },
                    scales: {
                        y: {
                            ticks: {
                                callback: function (value) {
                                    return value + '%';
                                }
                            }
                        }
                    }
                }}
                data={data}
            // TODO: draw vertical line at mean
            // plugins={[verticalLinePlugin]}
            />
        </div>
    )
}

function createHistogramDataset() {
    const { labels, frequencies } = createBuckets({ startingBar: 35, distanceBetweenBars: 5, endingBar: 140 });

    let numDataPoints = rawData.length;
    rawData.forEach((rawDataItem) => {
        const size = Math.round(rawDataItem.size);
        const barIndex = Math.floor((size - 36) / 5);

        frequencies[barIndex] = frequencies[barIndex] + 1;
    });

    const relativeFrequencies = frequencies.map((d) => (d / numDataPoints) * 100);

    return {
        labels,
        datasets: [{
            label: 'Relative Frequency',
            backgroundColor: '#C1C9D6',
            borderColor: '#C1C9D6',
            data: relativeFrequencies
        }]
    }
}

function createBuckets(params: { startingBar: number, endingBar: number, distanceBetweenBars: number }) {
    const labels = [];
    const frequencies = [];

    for (let i = params.startingBar; i < params.endingBar; i += params.distanceBetweenBars) {
        labels.push(`${i + 1} - ${i + params.distanceBetweenBars}`);
        frequencies.push(0);
    }

    return {
        labels,
        frequencies
    }
}

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState<{ width: number|undefined, height: number|undefined }>({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }
  