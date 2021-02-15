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

## docker exec
--tty , -t		Allocate a pseudo-TTY
--interactive , -i		Keep STDIN open even if not attached
"-it" is the same as "-ti".
Can also supply container name instead of container id. For example,
```docker exec -it exim4 bash```

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
```docker run -d -e GMAIL_USER=michaelfong2017@gmail.com -e GMAIL_PASSWORD=nluqxijxpfkuxkrz --name exim4 -v exim4:/var/lib/exim4/data tianon/exim4```
or
```docker run -d -e GMAIL_USER=michaelfong2017@gmail.com -e GMAIL_PASSWORD=nluqxijxpfkuxkrz --name exim4 -v exim4:/var/lib/exim4/data -p 52022:22 -p 52025:25 -p 52110:110 -p 52995:995 -p 52143:143 -p 52993:993 --privileged tianon/exim4```

Note that GMAIL_PASSWORD is the app password instead of the account password.

## Docker run command example
Create and start a docker container.
```docker run -d -it -p 5432:5432 --name some-postgres -e POSTGRES_PASSWORD=P@ssw0rd -v pgdata:/var/lib/postgresql/data postgres```
The default user is "postgres" and we set the user password to be "P@ssw0rd" here.
The docker container name is set to be "some-postgres". We can start/stop the container by docker start some-postgres or docker stop some-postgres.
The postgres server has been started locally at 0.0.0.0:5432 or 192.168.XXX.XXX:5432.

-it is redundant. See https://docs.docker.com/engine/reference/commandline/run/#assign-name-and-allocate-pseudo-tty---name--it.


## Exim commands
### Exim quick send email test
```echo "Subject: test" | /usr/sbin/exim4 -v michaelfong2017@gmail.com```

### Exim check email
```exim -bt root```, where root is the username.
```cat /var/mail/mail```

### Exim4 reconfig
http://manpages.ubuntu.com/manpages/xenial/man8/update-exim4.conf.8.html
```
update-exim4.conf
```
```/etc/init.d/exim4 restart``` or ```service exim4 restart```

The script update-exim4.conf generates the main configuration files ```/var/lib/exim4/```config.autogenerated for Exim v4 by merging the data in the template file ```/etc/exim4/exim4.conf.template``` or the ones in the ```/etc/exim4/conf.d``` directory tree respectively and ```/etc/exim4/update-exim4.conf.conf``` to the output file ```/var/lib/exim4/config.autogenerated```.

### Exim4 start ssh server
```apt update```
```apt install openssh-server```
```/etc/init.d/ssh start```
Check status:
```/etc/init.d/ssh status```
Open firewall:
```apt install ufw```
```ufw allow ssh```
```ufw enable```
Check status:
```ufw status```
```apt-get install iputils-ping```

## Docker network bridge driver
Docker提供的 user-defined 网络驱动有是那种：bridge、overlay 和 macvlan。其中后两种主要用于创建跨主机网络，我们先关注 bridge 驱动

https://www.youtube.com/watch?v=IWpzLf4hBhk
One of the issues that beginners will encounter is IP assignment to docker containers. By default, IP address are assigned as "first come, first serve". Meaning that depending on the order you start your containers, they can have different IP address.

```docker network create --driver bridge --subnet 172.18.0.0/16 --gateway 172.18.0.1 docker-network```
Driver is set to 'bridge' so that hosts and any other external connections can connect to the containers.
Subnet allows us to assign an IP range for the containers.
Gateway is for the containers to be able to access out into the internet, and vice versa where the external could go through in.
'docker-network' is the name of the network.

```
docker network connect --ip 172.18.0.2 docker-network mysql-5.6
docker network connect --ip 172.18.0.3 docker-network mysql-5.7

docker network disconnect docker-network mysql-5.6
docker network disconnect docker-network mysql-5.7
```

Then, mysql-5.6 will be assigned 172.18.0.2 and mysql-5.7 will be assigned 172.18.0.3 regardless of the order of starting the containers. Note that 172.17.0.2 and 172.17.0.3 will still be assigned in a "first come, first serve" basis.

同时，静态IP也可以直接通过 --ip 进行手动指定。但是只有手动指定了 --subnet 才可以指定 --ip。且指定的 ip 必须在 --subnet 网络内。

## Docker public ip / Docker network macvlan driver
You can use the macvlan network driver to assign a MAC address to each container’s virtual network interface, making it appear to be a physical network interface directly connected to the physical network.

For ```--driver macvlan```, you also need to specify the parent (parent=eth0), which is the interface the traffic will physically go through on the Docker host.

https://micropyramid.medium.com/assign-public-ip-address-to-docker-container-without-port-binding-2fa696e97cf6
```docker network create -d macvlan -o macvlan_mode=bridge --subnet=192.168.0.0/24 --gateway=192.168.0.1 -o parent=eth0 macvlan_bridge```
```docker run --name nginx --net=macvlan_bridge --mac-address c2:45:98:86:d4:d9 -itd nginx```
```docker run --name my-macvlan-alpine --net=macvlan_bridge --mac-address c2:45:98:86:d4:d9 -itd alpine```

## Mailu
### Mailu Requirements
1. Public IPv4
2. Domain name
3. DNS server management access
4. >2GB RAM if with ClamAV
5. Any modern Linux distribution
6. Root access to install and control Docker

Debian 10 supercedes Debian 9.

### Mailu installation
https://www.youtube.com/watch?v=ScarlmgD0dU
https://blog.hanlee.co/mailu-mail-server-install/
1. Go to Linode to rent a linux server.
2. ```ssh root@<server-ip>```
3. Install docker and docker-compose
```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
docker-compose --version
```
4. Go to https://setup.mailu.io/.
Domain: michaelfong.co
主機名稱: mail.michaelfong.co

Notice that we need to uncheck anti-virus because we only have 1GB RAM.
5. 
```
mkdir /mailu
cd /mailu
wget http://setup.mailu.io/1.7/file/6aa449aa-7708-4ba3-b08f-a46c102fd8a0/docker-compose.yml
wget http://setup.mailu.io/1.7/file/6aa449aa-7708-4ba3-b08f-a46c102fd8a0/mailu.env
```
6. Check docker-compose.yml and mailu.env. Change SECRET_KEY in mailu.env.

mailu.env:
SECRET_KEY=<>
DB_PW=<>
WEBROOT_REDIRECT=/webmail

7. docker-compose -p mailu up -d
8. Wait for a while until all containers are started.
9. ```docker-compose -p mailu exec admin flask mailu admin admin michaelfong.co <PASSWORD>```
10. Go to porkbun and add a DNS record:
```mail.michaelfong.co  IN  A  <server-ip>```
11. Go to https://mail.michaelfong.co/admin.
User email is admin@michaelfong.co.
Password is ```<PASSWORD>```.

(Later). Linode edit Reverse DNS in public IPv4 to mail.michaelfong.co.

12. Go to Mail domains -> Actions -> Details,
Domain name: michaelfong.co
DNS MX entry: ```michaelfong.co. 600 IN MX 10 mail.michaelfong.co.```

DNS SPF entries: ```michaelfong.co. 600 IN TXT "v=spf1 mx a:mail.michaelfong.co -all"```
(Quotation marks are not needed)

(This is unnecessary)```michaelfong.co. 600 IN SPF "v=spf1 mx a:mail.michaelfong.co -all"```
13. Go to https://mail.michaelfong.co/webmail and test.
14. Go to https://mxtoolbox.com/ and lookup michaelfong.co.
The most important parts are under SMTP.

SMTP Valid Hostname: OK - Reverse DNS is a valid Hostname
SMTP Banner Check: OK - Reverse DNS matches SMTP Banner
SMTP TLS: OK - Supports TLS.
SMTP Open Relay: OK - Not an open relay.

15. 
Inbox emails are under ```/mailu/mail/admin@michaelfong.co/cur```.
Sent emails are under ```/mailu/mail/admin@michaelfong.co/.Sent/cur```.

16. 
Mail domains Generate keys.
DKIM public key: ```MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDDyEfP6LUvDqfWesBYkKK+apNNCNZScUg9IzMkMD2infQLqKc9aM+ZI3CtDSRitGOOML7xn8fsVu32urkik0EKbxNuiwmHzkEs0LQG7Gpo6TxWMo84Ck6oRR37oUceLJXrPeZ6mfP4QOX8nYOtdw9kUcBIxs/5yGGGLLfpnq8hLQIDAQAB```
DNS DKIM entry: ```dkim._domainkey.michaelfong.co. 600 IN TXT "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDDyEfP6LUvDqfWesBYkKK+apNNCNZScUg9IzMkMD2infQLqKc9aM+ZI3CtDSRitGOOML7xn8fsVu32urkik0EKbxNuiwmHzkEs0LQG7Gpo6TxWMo84Ck6oRR37oUceLJXrPeZ6mfP4QOX8nYOtdw9kUcBIxs/5yGGGLLfpnq8hLQIDAQAB"```
DNS DMARC entry: ```_dmarc.michaelfong.co. 600 IN TXT "v=DMARC1; p=reject; rua=mailto:admin@michaelfong.co; ruf=mailto:admin@michaelfong.co; adkim=s; aspf=s"```

17. Add entries in porkbun.

18. https://mxtoolbox.com can be used to lookup records and test smtp server.

** Note that we cannot send emails to gmail yet.

### Mail manipulation notes
1. We have to create folders using roundcube webmail. The directory inside linux machine will be updated automatically.
2. 
```mv /mailu/mail/admin@michaelfong.co/cur/<mail> /mailu/mail/admin@michaelfong.co/.Junk/cur``` works.
3. 
```cp /mailu/mail/admin@michaelfong.co/cur/<mail> /mailu/mail/admin@michaelfong.co/.Junk/cur``` does not work.
4. 
```mv /mailu/mail/admin@michaelfong.co/cur/<mail> /mailu/mail/admin@michaelfong.co```
-> ```mv /mailu/mail/admin@michaelfong.co/<mail> /mailu/mail/admin@michaelfong.co/cur``` works.
5. 
```cp /mailu/mail/admin@michaelfong.co/cur/<mail> /mailu/mail/admin@michaelfong.co``` adds an email to roundcube but it never shows up
-> ```rm /mailu/mail/admin@michaelfong.co/cur/<mail>```
-> ```mv /mailu/mail/admin@michaelfong.co/<mail> /mailu/mail/admin@michaelfong.co/cur``` original mail in roundcube is corrupted



### Override folders
How can I override settings?
Postfix, Dovecot, Nginx and Rspamd support overriding configuration files. Override files belong in ```$ROOT/overrides``` (i.e. ```/mailu/overrides```). Please refer to the official documentation of those programs for the correct syntax. The following file names will be taken as override configuration:

Postfix - postfix.cf in postfix sub-directory;
Dovecot - dovecot.conf in dovecot sub-directory;
Nginx - All *.conf files in the nginx sub-directory;
Rspamd - All files in the rspamd sub-directory.

### Spam filtering
Follow rspamd documentation at https://rspamd.com/doc/tutorials/writing_rules.html.
Also, https://mailu.io/master/antispam.html.

** Reload Rspamd by stopping the Rspamd container and starting the Rspamd container again. Example for docker-compose setup:
Without mailu/rspamd:1.7: ```docker-compose -p mailu up --scale antispam=0 -d```
With mailu/rspamd:1.7: ```docker-compose -p mailu up --scale antispam=1 -d```
```-p mailu``` specifies the project name. Note that it must be before "up".


## SPF record
SPF record specifies which hosts are allowed to send email on our behalf.

## Docker remove all containers and images and volumes
For Unix
To delete all containers including its volumes use,
```docker rm -vf $(docker ps -a -q)```
To delete all the images,
```docker rmi -f $(docker images -a -q)```