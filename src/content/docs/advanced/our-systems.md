---
title: Our Systems
draft: true
---

We used a myriad of systems that are constantly changing. While we like to keep things consistent, we're always looking for ways to improve our current systems while giving our customers the best experience.

## Broadcasting
There are many broadcasting systems out there, each ranging in features and functionality. We use two main ones depending on the use-case: RadioDJ and AzuraCast. Both of these platforms run in our cloud environment in the location closest to their listener base. These vary in features and have specific use-cases.

[RadioDJ](https://radiodj.ro) is mainly used by traditional radio stations (i.e., the ones with the towers you listen to in your vehicle). Stations will have their own dedicated playout system that is customized to their liking in terms of ads, radio shows, music selection, and more. These machines recieve their music via a file share that is mapped to our cloud-based file storage system that automatically updates as media is modified, moved, deleted, added, etc. It is also used more commonly when there are presenters (aka DJs or on-air talent) as it is simple to understand for stopping, starting, and rearranging music tracks. In order to get these stations to be "listen-able", we use [Rocket Broadcaster](https://rocketbroadcaster.com/) to stream the audio output of the host machine to their phyiscal radio tower and to their online listeners. These machines are virtualized locally to the station, and are partly managed by us and the customer. We manage the music and its ability to reach the customer, the station manages reliability, updates, and ads.

[AzuraCast](https://github.com/AzuraCast/AzuraCast) is a cloud-based playout system that we use for more customer-focused interactions and for ease-of-management from the customer point-of-view. This is a dedicated machine running this software with relay points scattered across other datacenters that 'listen in' to the stream and relay it to the customer. This helps with bandwidth and so customers aren't having to reach across the country to receive their music. These stations are more of a 'set and forget' type of station where you might add additional files like ads or voiceovers but aren't really concerned about them as much as you are the music. These stations running on AzuraCast are fully managed by us.

## Podcasting
Podcasting is conducted through our cloud provider, [Captivate.fm](https://captivate.fm). Audio is produced with our team of editors (or you can opt to produce it yourself), and then distributed by us via Captivate to all possible listening platforms. Captivate allows for several features, including simple but effective sites (see [https://cautiondonotopen.captivate.fm](https://cautiondonotopen.captivate.fm) as an example) and reliable uptime and distribution.