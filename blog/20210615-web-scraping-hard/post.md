---
title: Web Scraping Hard to Scrape Sites
featuredImage: ./image.jpg
date: 2021-06-15T00:00:00+00:00
featured: true
---

*I feel the need to preface this by telling you to be kind to the servers you scrape. Keep from scraping too fast or downloading more data than you need to prevent unnecessary load on the web servers you're scraping from.*

This all began when I decided to create a Generative Adversarial Network (GAN) to algorithmically generate Minecraft skins. In order to do this, I needed a large number of Minecraft skins to train the model. Using web scraping to collect these skins turned out to be significantly more difficult than anticipated.

## Scraping Planet Mincraft
Planet Minecraft is a large repository of Minecraft servers, texture packs, maps, and skins. I thought scraping skins off of the site should be pretty simple.

When scraping a website, there are a handful of considerations. First, is all the information that needs to be scraped included in the HTML initially requested from the server or is it loaded later using JavaScript? If there is pagination, is the page number included in the URL, and if so, can it be changed in the URL to access the next page? Is all the information that needs to be scraped on one page or does another page need to be accessed to find additional information.

Planet Minecraft included all the information I needed in the HTML responses, so I could use Beautiful Soup (a Python library) to parse the HTML and extract the information I needed. If this was not the case, I'd either have to dig deeper and find how the information was being requested by the JavaScript or I'd have to use a library like Selenium to control a headless web browser to execute the JavaScript and parse the resulting DOM. Planet Minecraft also included the page number in the URL of the skins page and I could change it to go to the next page. The URL to download the skins was not included on the skins page. Instead, there was a link to each skins own page and a link on that page to download the skin.

The general process to scrape skins would be something like this:

1. Download to the skins page on the site
2. Collect the URLs for the pages for each of the individual skins on the page using Beautiful Soup
3. Download the next page
4. Repeat steps 2-3 until I have collected enough Minecraft skins
5. Download each of the collected URLs, find the URL to download the skin using Beautiful Soup, and download the skin.

I implemented this in Python and downloaded 2,500 skins. It seemed to work fine, and I got to work implementing my GAN.

## Disaster Strikes
While working with my newly collected Minecraft skins I noticed something peculiar. The same skins seemed to be popping up more often than I would have expected them to in a sample of 2,500 unique skins when I viewed them. The only way I could explain it was if the skins were not unique and some skins were contained multiple times. To check this, I wrote a bash one liner (`md5sum * 2>/dev/null | awk '{print $1}' | sort -u | wc -l`) to check how many unique skins I had. Apparently, I only had about 200 unique skins.

What could have caused this? I began to check my script, and after banging my head against my desk a bunch I realized what went wrong. It appeared like some pages were being scraped multiple times. This caused skins to be downloaded more then once. The script appeared to be incrementing the page number each time it downloaded the page of skins, but sometimes this seemed to not work.

To debug this further I opened the page in my web browser. I tried changing the number of the page in the URL and discovered some interesting behavior I hadn't seen before. When I changed the page number in the URL, sometimes it would go to the next page instead of the page I specified in the URL. This was really weird and no matter how far I dug into it, I couldn't figure out how the server could have even known what the current page was (to be able to send the next page instead of the specified page) because that information didn't seem to be included in the request. I realized that changing the page number in the URL wasn't going to be reliable and I had to return to the drawing board.

## Finding Skin Pages Another Way
Using the Planet Minecraft website to find skin pages (the page dedicated to a single skin that has a download link for it) would not work, so I had to find another way to find skin pages. I thought that maybe I could use Google or another search engine and limit the search results to a particular path. On Google, this can be done by searching `site:https://www.planetminecraft.com/skin`. Scraping Google seemed like a bad idea cause I know they start asking the user to complete a captcha if requests are made too quickly. Google's search API limits searches pretty aggressively. Using Google to find skins wasn't a viable solution.

I realized that instead of using Google to find skins, I could find the skins the same way Google does. Let me explain: Websites can post a sitemap, an XML file with a list of all the content on a website with some metadata, to make it easier for search engines to find content on the site. Planet Minecraft has a sitemap, and it contains links to every single page (including skin pages) on the entire site. Now I just had to modify my script to use the sitemap. The new process looked like this:

1. Download the sitemap
2. Parse the sitemap and find all the URLs
3. Filter out all the URLs of pages that are not skin pages
4. Select a number of URLs equal to the number of skins I want
6. Download each of the collected URLs, find the URL to download the skin using Beautiful Soup, and download the skin.

I implemented this in Python and downloaded 2,500 skins. I used my bash oneline to check how many unique skins there were, and this time there were actually 2,500 unique skins.
