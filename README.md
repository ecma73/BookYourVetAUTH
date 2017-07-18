# byvAdmin -
A PhoneGap/Cordova Wordpress Hybrid App :
by: Hybrionic ~ 7AppsIonic Asia - https://app.hybrionic.cloudns.asia
email: hybrionic.license@gmail.com

Thank you for your interest in byvAdmin development. 

## Project API's:
Native Backend are built using below tech framework & API's :

### WordPress CMS
is a free and open-source content management system (CMS) based on PHP and MySQL. WordPress is installed on a web server that is either part of an Internet hosting service or a network host in its own right. The first case may be a service like WordPress.com, for example, and the second case could be a computer running the software package WordPress.org. A local computer may be used for single-user testing and learning purposes. Features include a plugin architecture and a template system. WordPress was used by more than 27.5% of the top 10 million websites as of February 2017. WordPress is reportedly the most popular website management or blogging system in use on the Web, supporting more than 60 million websites.

WordPress was released on May 27, 2003, by its founders, Matt Mullenweg and Mike Little, as a fork of b2/cafelog. WordPress is released under the GPLv2 (or later) license.

### ionic Cordova Framework 

Ionic Cordova is a complete open-source SDK for hybrid mobile app development. The original version was released in 2013 and built on top of AngularJS and Apache Cordova. The more recent release, known as Ionic 2 or simply "Ionic", are built on Angular. Ionic provides tools and services for developing hybrid mobile apps using Web technologies like CSS, HTML5, and Sass. Apps can be built with these Web technologies and then distributed through native app stores to be installed on devices by leveraging Cordova. Ionic was created by Max Lynch, Ben Sperry, and Adam Bradley of Drifty Co. in 2013.

Ionic Creator is a drag-and-drop interface building tool. App Builder for Ionic is also provided by Appery.io.

### Phonegap 
Apache Cordova (formerly PhoneGap) is a mobile application development framework originally created by Nitobi. Adobe Systems purchased Nitobi in 2011, rebranded it as PhoneGap, and later released an open source version of the software called Apache Cordova.[3] Apache Cordova enables software programmers to build applications for mobile devices using CSS3, HTML5, and JavaScript instead of relying on platform-specific APIs like those in Android, iOS, or Windows Phone.[4] It enables wrapping up of CSS, HTML, and JavaScript code depending upon the platform of the device. It extends the features of HTML and JavaScript to work with the device. The resulting applications are hybrid, meaning that they are neither truly native mobile application (because all layout rendering is done via Web views instead of the platform's native UI framework) nor purely Web-based (because they are not just Web apps, but are packaged as apps for distribution and have access to native device APIs). Mixing native and hybrid code snippets has been possible since version.

The software was previously called just "PhoneGap", then "Apache Callback". As open-source software, Apache Cordova allows wrappers around it, such as Appery.io or Intel XDK.

PhoneGap is Adobe’s productised version and ecosystem on top of Cordova. Like PhoneGap, many other tools and frameworks are also built on top of Cordova, including : 

	•	Ionic
	•	Monaca 
	•	TACO 
	•	Onsen UI 
	•	Visual Studio
	•	GapDebug
	•	App Builder
	•	Cocoon
	•	Framework7
	•	Evothings Studio
	•	NSB/AppStudio 
	•	Mobiscroll
	•	Intel XDK
	•	Telerik Platform

These tools use Cordova, and not PhoneGap for their core tools.

Contributors to the Apache Cordova project include :

	▪	Adobe
	▪	BlackBerry
	▪	Google
	▪	IBM
	▪	Intel 
	▪	Microsoft
	▪	Mozilla

### OneSignal 

OneSignal is mobile and web push notification and push messaging service and API. Developers and marketers use OneSignal to deliver and track targeted transactional and promotional messages to their customers.

### Firebase 

Firebase is a mobile and web application development platform. Firebase is made up of complementary features that developers can mix-and-match to fit their needs. The team is based in San Francisco and Mountain View, California. The company was founded in 2011 by Andrew Lee and James Tamplin.[1] Firebase's initial product was a realtime database, which provides an API that allows developers to store and sync data across multiple clients. Over time, it has expanded its product line to become a full suite for app development. The company was acquired by Google in October 2014 and a significant number of new features were featured in May 2016 at Google I/O.

## Steps -

A. Set Up Wordpress -

Install and activate Wordpress Plugins:
WordPress REST API (Version 2) 
WP REST API - Pure Taxonomies
Better REST API Featured Images
OneSignal - Free Web Push Notifications
Onesignal Filter (in Wordpress Plugin folder)
 
B. Configure Onesignal Plugin. The same steps are in plugin's Setup guide.

# Android Configuration
# iOS Configuration

<img src="https://github.com/ecma73/byvAdmin/blob/master/push.png">

NOTE Send notifications additionally to iOS & Android platforms switch must be OFF.
Quick Start (you can skip this step)
You need to install the  Ionic Lab for Mac, Windows, and Linux, that makes it a joy to get started with Ionic.
Click "+NEW APP" and add unzipped WordApp folder than click "Serve"

# Onesignal Push Setup

1. You need Generate a Google Server Api Key
2. Configure your OneSignal app's Android platform settings
3. Configure your App
4. Build your App
5. Install App to your Phone and run it.

<img src=“http://test.1871.by/documentation/v2/assets/images/finish.png”>
6. Go to Onesignal Dashboard select your App and click "FINISH APP SETUP"

<img src=“https://github.com/ecma73/byvAdmin/blob/master/sdk.png“>
7. Select SDK "Phonegap, Cordova, Ionic" click "NEXT" and Click "Check Subscribed Users"

<img src=“https://github.com/ecma73/byvAdmin/blob/master/done.png“>

## Set Up byvApp

Open in any text editor config.js file (www/js) and make changes, follow the instructions:
 
Replace with your Wordpress Blog WP REST API url ex.: myblog.com required '/wp-json/wp/v2/' at the end
 
.constant('WORDPRESS_API_URL', 'http://<WORDPRESS_API_URL>/wp-json/wp/v2/')
 
Replace with your Google Project Number https://documentation.onesignal.com/docs/generate-a-google-server-api-key
 
.constant('GOOGLE_PROJECT_NUMBER', '<Sender ID>')
 
Replace with your OneSignal AppId https://documentation.onesignal.com/docs/accounts-and-keys#section-keys-ids
 
.constant('ONESIGNAL_APP_ID', '<ONESIGNAL_APP_ID>')
 
Change color your Ionic application to light, stable, positive, calm, balanced, energized, assertive, royal or dark 
 
.constant('IONIC_APP_COLOR', 'calm')
 
Change Posts page template to cards, cards2, list
 
.constant('POSTS_TEMPLATE', 'cards')
 
Replace with your Android package name ex. 'com.google.android.apps.maps' (change it in config.xml root 'www' folder) and IOS app ID
 
.constant('ANDROID_PACKAGE_NAME', '<ANDROID_PACKAGE_NAME>')
.constant('IOS_APP_ID', '<my_app_id>')
 
Replace with your Primary Email to send Feedback
 
.constant('PRIMARY_EMAIL', 'app@myapp.com')
 
Replace with email to send copy Feedback or leave empty
 
.constant('COPY_EMAIL', 'app2@myapp.com')
 
Replace with phone number for send SMS start with '+' ex. +0112223344
 
.constant('SMS_PHONE_NUMBER', '<SMS_PHONE_NUMBER>');
Comment Configuration
Go to Settings - Discussion in your Wordpress Dashboard and check
 
Comment author must fill out name and e-mail - Check this box as a way to force spammers to do a bit of extra work. In reality, the name and e-mail address are not verified in any way prior to the comment being submitted. Most legitimate commenters are more than willing to fill out a name and e-mail address.
Next step Before a comment appears:
 
These settings provide you even more control over the instances of when and how comments are posted.
 
An administrator must always approve the comment - Select this option to force comments to be approved by a blog user or owner having the proper Role to approve comments, even if the comments appear to be spam . See the Comment Moderation options below regarding spam. 
Comment author must have a previously approved comment - Check the box to insure comments are only posted if the comment author's email address matches the address of a previously approved comment, otherwise, the comment is held for moderation. Comments from blacklisted email addresses (those listed in the Local Spam Words Text Box) are held for moderation regardless of whitelist status.

## Build App

<img src=“https://github.com/ecma73/byvAdmin/blob/master/gap-login.png“>
ZIP all files again and upload to http://build.phonegap.com. 
 
Login or create new account
Click “+new app” button

<img src=“https://github.com/ecma73/byvAdmin/blob/master/gap-newapp.png“>
Than click tab ”private” and “Upload a .zip file”

<img src=“https://github.com/ecma73/byvAdmin/blob/master/gap-upload.png“>
Last step, click “Ready to build” button and wait 1-2 min

<img src=“https://github.com/ecma73/byvAdmin/blob/master/gap-build.png“>
Download your .apk and install. DONE! ))

<img src=“https://github.com/ecma73/byvAdmin/blob/master/gap-apk.png“>

##Take Note:

Current - FWS Authentication Users for this Project :

narenkaru91@gmail.com ::
User UiD - 8UIQ4ecHFKOAHjh73rVHpH7V4pF3

7appsinc@gmail.com ::
User UiD - xUQrkoY5QeWcoLbplYUWZkZRk0k2

# Contact me JustEd or NareKaru using above email credentials - Thanks so much...


