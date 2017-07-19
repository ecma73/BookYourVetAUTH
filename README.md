# byvAdmin -
A PhoneGap/Ionic Cordova WP Native Hybrid App :

## By: 7AppsIonic - Hybrionic .< 
7AppsIonic Asia - https://app.hybrionic.cloudns.asia

Email: hybrionic.license@gmail.com
Thank you for your interest in byvAdmin development. 

## Project API's:
Native Backend are built using below tech framework & API's :

### WordPress CMS - https://www.wordpress.org/
is a free and open-source content management system (CMS) based on PHP and MySQL. WordPress is installed on a web server that is either part of an Internet hosting service or a network host in its own right. The first case may be a service like WordPress.com, for example, and the second case could be a computer running the software package WordPress.org. A local computer may be used for single-user testing and learning purposes. Features include a plugin architecture and a template system. WordPress was used by more than 27.5% of the top 10 million websites as of February 2017. WordPress is reportedly the most popular website management or blogging system in use on the Web, supporting more than 60 million websites.

WordPress was released on May 27, 2003, by its founders, Matt Mullenweg and Mike Little, as a fork of b2/cafelog. WordPress is released under the GPLv2 (or later) license.

### ionic Cordova Framework - https://ionicframework.com/

Ionic Cordova is a complete open-source SDK for hybrid mobile app development. The original version was released in 2013 and built on top of AngularJS and Apache Cordova. The more recent release, known as Ionic 2 or simply "Ionic", are built on Angular. Ionic provides tools and services for developing hybrid mobile apps using Web technologies like CSS, HTML5, and Sass. Apps can be built with these Web technologies and then distributed through native app stores to be installed on devices by leveraging Cordova. Ionic was created by Max Lynch, Ben Sperry, and Adam Bradley of Drifty Co. in 2013.

Ionic Creator is a drag-and-drop interface building tool. App Builder for Ionic is also provided by Appery.io.

### Phonegap - https://phonegap.com/
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

### OneSignal - https://onesignal.com

OneSignal is mobile and web push notification and push messaging service and API. Developers and marketers use OneSignal to deliver and track targeted transactional and promotional messages to their customers.

### Firebase - https://console.firebase.google.com

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

# <a href="https://documentation.onesignal.com/docs/generate-a-google-server-api-key">Android Configuration</a>
# <a href="https://documentation.onesignal.com/docs/generate-an-ios-push-certificate">iOS Configuration</a>

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
## Impressions

<img src=“https://github.com/ecma73/byvAdmin/blob/master/finish.png” height="400">
6. Go to Onesignal Dashboard select your App and click "FINISH APP SETUP"

<img src=“https://github.com/ecma73/byvAdmin/blob/master/sdk.png“ height="400">>
7. Select SDK "Phonegap, Cordova, Ionic" click "NEXT" and Click "Check Subscribed Users"

<img src=“https://github.com/ecma73/byvAdmin/blob/master/done.png“ height="300">

## Set Up byvApp

Open in any text editor config.js file (www/js) and make changes, follow the instructions:
Replace with your Wordpress Blog WP REST API url ex.: myblog.com required '/wp-json/wp/v2/' at the end:
 
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

### Comment Configuration

Go to Settings - Discussion in your Wordpress Dashboard and check
 
Comment author must fill out name and e-mail - Check this box as a way to force spammers to do a bit of extra work. In reality, the name and e-mail address are not verified in any way prior to the comment being submitted. Most legitimate commenters are more than willing to fill out a name and e-mail address.

### Next step Before a comment appears:
 
These settings provide you even more control over the instances of when and how comments are posted.
An administrator must always approve the comment - Select this option to force comments to be approved by a blog user or owner having the proper Role to approve comments, even if the comments appear to be spam . See the Comment Moderation options below regarding spam. 
Comment author must have a previously approved comment - Check the box to insure comments are only posted if the comment author's email address matches the address of a previously approved comment, otherwise, the comment is held for moderation. Comments from blacklisted email addresses (those listed in the Local Spam Words Text Box) are held for moderation regardless of whitelist status.

## Build App

<img src=“https://github.com/ecma73/byvAdmin/blob/master/gap-login.png“ height="300">
ZIP all files again and upload to http://build.phonegap.com. 
 
Login or create new account
Click “+new app” button

<img src=“https://github.com/ecma73/byvAdmin/blob/master/gap-newapp.png“ height="300">
Than click tab ”private” and “Upload a .zip file”

<img src=“https://github.com/ecma73/byvAdmin/blob/master/gap-upload.png“ height="300">
Last step, click “Ready to build” button and wait 1-2 min

<img src=“https://github.com/ecma73/byvAdmin/blob/master/gap-build.png“ height="300">
Download your .apk and install. DONE! ))

<img src=“https://github.com/ecma73/byvAdmin/blob/master/gap-apk.png“ height="300">

The recommended way to add a complete sign-in system to your app.

# FirebaseUI 
provides a drop-in auth solution that handles the UI flows for signing in users with email addresses and passwords, phone numbers, and with popular federated identity providers, including Google Sign-In and Facebook Login.

The FirebaseUI Auth component implements best practices for authentication on mobile devices and websites, which can maximize sign-in and sign-up conversion for your app. It also handles edge cases like account recovery and account linking that can be security sensitive and error-prone to handle correctly.

FirebaseUI can be easily customized to fit in with the rest of your app's visual style, and it is open source, so you aren't constrained in realizing the user experience you want.
Source Url : 
https://opensource.google.com/projects/firebaseui

# Final Note:
## Android Notification Icons
Adding custom icons to some or all of your notifications. Works with ANDROID (and derivatives like AMAZON).
Icons are a way to provide a more unique, branded experience for your ANDROID and AMAZONapp. Note that iOS doesn't support custom icons, as it uses the app icon for all notifications.
You may add a default icon that appears with every notification you send, or you may add icons to just certain types of notifications. The below tutorial shows you how to do both.

# About Notification Icons
Android supports both Small and Large Notification Icons.
Small Notification Icons - by default our SDK automatically uses either a white bell icon or your App's launcher icon. Starting with Android 5, the OS forces Small Notification Icons to be all white when your app targets Android API 21+. If you don't make a correct icon, it will most likely be displayed as a bell or solid white icon in the status bar.
Large Notification Icons - The large notification icon will show up to the left of the notification text on Android 3.0+ devices. If you do not set a large icon, the small icon will be used instead. OneSignal will auto scale large notification icons for you to prevent the icon from being cropped.
￼
# How to Add Default Icons
We strongly recommend adding default icons to every ANDROID and AMAZON app.

1. Generate Icons

Option A: Using Android Asset Studio

## RECOMMENDED

To quickly and easily generate small icons with the correct settings, we recommend using the Android Asset Studio. Use ic_stat_onesignal_default as the name.

Option B: Manually Create Icons

## NOT RECOMMENDED


# Small Icon
If you prefer to create your own icons, you must make your icons the following size and colors:
Type
Size (px)

Small Notification Icon (mdpi)
24x24

Small Notification Icon (hdpi)
36x36

Small Notification Icon (xhdpi)
48x48

Small Notification Icon (xxhdpi)
72x72

# Other - Large Icon
Type
Size (px)

Large Notification Icon (xxxhdpi)
256x256

2.Create project paths
Make sure the following paths exist, create any folders you are missing.
SDK
File path
# Android Native
res/drawable-mdpi/ (24x24)
res/drawable-hdpi/ (36x36)
res/drawable-xhdpi/ (48x48)
res/drawable-xxhdpi/ (72x72)
res/drawable-xxxhdpi/ (256x256) 
(Large Icon)

# Unity
Assets/Plugins/Android/OneSignalConfig/res/drawable-mdpi/ (24x24) 
Assets/Plugins/Android/OneSignalConfig/res/drawable-hdpi/ (36x36) 
Assets/Plugins/Android/OneSignalConfig/res/drawable-xhdpi/ (48x48) 
Assets/Plugins/Android/OneSignalConfig/res/drawable-xxhdpi/ (72x72) 
Assets/Plugins/Android/OneSignalConfig/res/drawable-xxxhdpi/(256x256) 
(Large Icon)

# PhoneGap, Cordova, Ionic
<project-root>
/platforms/
      android/
          res/
             drawable-hdpi/ 
             (36x36) 
             
<project-root>
             /platforms/android/res/drawable-xhdpi/ (48x48) 
             <project-root>
             /platforms/android/res/drawable-xxhdpi/ (72x72) 
             <project-root>/platforms/android/res/drawable-xxxhdpi/ (256x256) (Large Icon)
             
# Ionic Package (Cloud Build)
<project-root>
/resources/android/custom/ (72x72) 
<project-root>/resources/android/custom/ (256x256) (Large Icon)

Must also add 'ionic-package-hooks` to your project. 
As well as follow it's android_custom_values.js instructions.

# PhoneGap Build (PGB)
<project-root>
/locales/android/drawable-hdpi/ (36x36) 
<project-root>/locales/android/drawable-xhdpi/ (48x48) 
<project-root>/locales/android/drawable-xxhdpi/ (72x72) 
<project-root>/locales/android/drawable-xxxhdpi/ (256x256) (Large Icon)

## See this github link for more details on the directory structure if you're having issues.
# Intel XDK
Limited, see this work around

# Corona
Add files to root (all sizes)

# Xamarin
Resources/drawable-mdpi/ (24x24) 
Resources/drawable-hdpi/ (36x36) 
res/drawable-xhdpi/ (48x48)
Resources/drawable-xxhdpi/ (72x72)
Resources/drawable-xxxhdpi/ (256x256) (Large Icon) 
Screenshot

3. Name Icons Appropriately
Next, you must be sure the icon filenames are correct. If you used Android Asset Studio for your small icon then this step may have already been done for you.
## SDK
Filename

	▪	Native
	▪	Unity
	▪	PhoneGap
	▪	Cordova
	▪	Ionic
	▪	PhoneGap Build (PGB)
	▪	Xamarin
  
/drawable-[SIZE_NAMES]/ic_stat_onesignal_default.png 
/drawable-xxxhdpi/ic_onesignal_large_icon_default.png (Large Icon)

# Ionic Package 
(Cloud Build)
<project-root>/resources/android/custom/ic_stat_onesignal_default(72x72) (small icon) 
<project-root>/resources/android/custom/ic_onesignal_large_icon_default(256x256) (large icon)

# Corona
IconNotificationDefault-ldpi.png (16x16) 
IconNotificationDefault-mdpi.png (24x24) 
IconNotificationDefault-hdpi.png (36x36) 
IconNotificationDefault-xhdpi.png (48x48) 
IconNotificationDefault-xxhdpi.png (72x72) 
ic_onesignal_large_icon_default.png (256x256)(Large Icon)

Done! You should be all set with your new default icons


## How to Add Non-Default Icons

# OPTIONAL

After you've added your default icons, you may choose to add more non-default icons. These will let you show different icons depending on the types of notifications your app sends. For instance, a game with a title like "Jewel Breaker" may wish to have a different colored jewel icon for every notification sent that represents the player's level. Meanwhile, a social network may wish to show a chat bubble icon when the user receives a message from another user to differentiate those notifications from more generic system notifications.
OneSignal supports overriding default icons on a per-message basis.

1. Generate Icons
Follow the steps above to generate icons and place them in the appropriate folder for your SDK.

2. Name Non-Default Icons
To add non-default icons, you must name them something other than the default names specified above. For instance, you may name one message_icon.

3. Send Notifications with Non-Default Icons
If you've followed the above steps for creating default icons, and have updated your app, you'll be able to reference those icons when you send a notification. To send a notification with an icon, within New Message open Android Options, and specify the icon to use.
Do not add the file extension when referencing the icon file. For instance, in the below example the file is referenced as message_icon.
￼
With Large Notification Icons, you can also supply a URL where the icon will be displayed from.
REST API - Instead of sending via the dashboard, you can send notifications with icons in the REST API by using the appropriate parameter and file extension depending on your platform (see more in Create notification REST API docs).

## Additional Options

# Small Icon Accent Color
Android 5.0+ enforces your icon to only be white and transparent however it still allows tinting on the notification shown in the shade, known as the "accent color". (The status bar icon color will still be unaffected)

	1.	To set a default color add the following line to your AndroidManifest.xml.
		XML 
    
<!-- Example: Sets all OneSignal notification's accent color to Green by default.  -->
<!-- Color format is in ARGB. -->
<meta-data android:name="com.onesignal.NotificationAccentColor.DEFAULT" android:value="FF00FF00" />

	1.	To set the color on per notification bases set android_accent_color on our Create notification API call. Or enter a value in the Accent color field under Options > Android on the New Message page on the OneSignal dashboard.
New icons take a while to propagate to all users
If you've very recently added an icon resource to your app, you may want to wait a few days before sending notifications using the icon. This is because it can take many days or even weeks for the majority of your users to update their apps to the latest version which contain your new icons.

##########################################################

Current - FWS Authentication Users for this Project :

narenkaru91@gmail.com ::
User UiD - 8UIQ4ecHFKOAHjh73rVHpH7V4pF3

7appsinc@gmail.com ::
User UiD - xUQrkoY5QeWcoLbplYUWZkZRk0k2

# Contact me JustEd or NarenKaru using above email credentials - Thanks so much...
