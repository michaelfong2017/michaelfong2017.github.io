Temporary notes
================

## Android AccessibilityService
For user, open in android settings.

### XML configuration
```
android:canRequestFilterKeyEvents="true"
android:accessibilityFlags="flagRequestFilterKeyEvents"
```
The above is used to get key events from the system.

## How email works, and Exim.
http://www.physics.udel.edu/~bnikolic/teaching/phys660/RUTE/rute/node33.html

30.1.1 How mail works
Before we get into MTA configuration, a background in mail delivery and indexii MX recordDNSMX record handling is necessary. The sequence of events whereby a mail message (sent by a typical interactive mail client) ends up on a distant user's personal workstation is as follows:

1. A user configures his mail client (Outlook Express, Netscape, etc.) to use a particular SMTP host (for outgoing mail, also called the SMTP gateway) and POP host (or IMAP host) for incoming mail.
2. The user composes a message to, say, rrabbit@toonland.net and then clicks on ``Send''.
3. The mail client initiates an outgoing TCP connection to port 25 of the SMTP host. An MTA running on the SMTP host and listening on port 25 services the request. The mail client uses the SMTP protocol exactly as in Section 10.2. It fills in rrabbit@toonland.net as the recipient address and transfers a properly composed header (hopefully) and message body to the MTA. The mail client then terminates the connection and reports any errors.
4. The MTA queues the message as a spool file, periodically considering whether to process the message further according to a retry schedule.
5. Should the retry schedule permit, the MTA considers the recipient address rrabbit@toonland.net. It strips out the domain part of the email address--that is, everything after the @. It then performs a DNS MX query (or MX lookupindexii MX recordDNS) for the domain toonland.net. DNS resolution for toonland.net follows the procedure listed in Section 27.2.2. In short, this means (approximately) that it looks for the name server that is authoritative for the domain toonland.net. It queries that name server for the MX record of the domain toonland.net. The name server returns a host name, say, mail.toonland.net with corresponding IP address, say, 197.21.135.82. [Section 27.7.1 shows you how you can manually lookup the MX record. Chapter 40 shows you how to set up your name server to return such an MX record.]
6. The MTA makes an SMTP connection to port 25 of 197.21.135.82. Another MTA running on mail.toonland.net services the request. A recipient address, message header, and message body are transferred using the SMTP protocol. The MTA then terminates the connection.
7. The MTA running on mail.toonland.net considers the recipient address rrabbit@toonland.net. It recognizes toonland.net as a domain for which it hosts mail (that is, a local domain). It recognizes rrabbit as a user name within its own /etc/passwd file.
8. The MTA running on mail.toonland.net appends the message to the user's personal mailbox file, say, /var/spool/mail/rrabbit or /home/rrabbit/Maildir/. The delivery is now complete. How the email gets from the mailbox on mail.toonland.net to Mr Rabbit's personal workstation is not the responsibility of the MTA and does not happen through SMTP.
9. Mr Rabbit would have configured his mail client (running on his personal workstation) to use a POP/IMAP host mail.toonland.net for incoming mail. mail.toonland.net runs a POP or IMAP service on port 110 or 143, respectively.
10. Mr Rabbit's mail client makes a TCP connection to port 110 (or 143) and communicates using the POP or IMAP protocol. The POP or IMAP service is responsible for feeding the message to the mail client and deleting it from the mailbox file.
11. Mr Rabbit's mail client stores the message on his workstation using its own methods and displays the message as a ``new'' message.

## Use netstat inside tianon/exim4
```
docker exec -ti f5d26ac7c207 apt update  
docker exec -ti f5d26ac7c207 apt install net-tools
docker exec -ti f5d26ac7c207 apt update
```

```docker exec -ti f5d26ac7c207 bash``` connects to the container.

## Smarthost
e.g. "Setup Exim to Send Email Using Gmail in Debian"
Overmore, a Smarthost will remove any annoying ISP sending limits, allow you to send using port 25 (blocked by most ISPs) and provide support along the way. If you are sending a high volume of emails on a regular basis, it is absolutely necessary to use a Smarthost so that they are delivered smartly and avoid blacklists along the way.

## Gmail 2FA is required for using Exim
https://arnaudr.io/2017/07/04/using-gmail-to-send-system-mails-on-debian/
GMail setup

Enabling the 2-Step Verification will unlock the feature we want: App Passwords. Visit https://myaccount.google.com/apppasswords, and go generate a password for your application. You should use it only for one application, and never use it anywhere else. The idea is that for each application that will send emails through your GMail account, you create a password. Simple, right?

There are real benefits with app passwords:

you won't have to write down your real password in a configuration file.
gmail won't block your emails for security reasons (happens if you send emails from different servers in different locations, for example).
you can change your GMail password without impacting applications.
you can revoke an app password anytime without impacting anything else.
OK, once you've done the GMail setup, keep going.

### Therefore, it is required to generate the app password in google account settings.
docker run -d -e GMAIL_USER=michaelfong2017@gmail.com -e GMAIL_PASSWORD=nluqxijxpfkuxkrz --name exim4 -v exim4:/var/lib/exim4/data tianon/exim4

Note that GMAIL_PASSWORD is the app password instead of the account password.

## Docker run command example
Create and start a docker container.
```
docker run -d -it -p 5432:5432 --name some-postgres -e POSTGRES_PASSWORD=P@ssw0rd -v pgdata:/var/lib/postgresql/data postgres
```
The default user is "postgres" and we set the user password to be "P@ssw0rd" here.
The docker container name is set to be "some-postgres". We can start/stop the container by docker start some-postgres or docker stop some-postgres.
The postgres server has been started locally at 0.0.0.0:5432 or 192.168.XXX.XXX:5432.

-it is redundant. See https://docs.docker.com/engine/reference/commandline/run/#assign-name-and-allocate-pseudo-tty---name--it.

