Temporary notes
================

## Postgres schema and search_path
https://postgresql.org/docs/9.6/ddl-schemas.html

By default tables (and other objects) are automatically put into a schema named "public".
We can create schema owned by someone else (since this is one of the ways to restrict the activities of your users to well-defined namespaces).
```CREATE SCHEMA <schema_name> AUTHORIZATION <user_name>;```

Qualified names are tedious to write, and it's often best not to write a particular schema name into applications anyway (such as django code). Therefore, tables are often referred to by unqualified names, which consist of just the table name. The system determines which table is meant by following a search path, which is a list of schemas to look in. The first matching table in the search path is taken to be the one wanted. If there is no match in the search path, an error is reported, even if matching table names exist in other schemas in the database.

By default, users cannot access any objects in schemas they do not own. To allow that, the owner of the schema must grant the USAGE privilege on the schema.
By default, everyone has CREATE and USAGE privileges on the schema public. This allow all users that are able to connect to a given database to create objects in its public schema.

## Postgres secure schema usage pattern
A secure schema usage pattern prevents untrusted users from changing the behaviour of other users' queries.

Recommended approach:
Constrain ordinary users to user-private schemas. To implement this, issue REVOKE CREATE ON SCHEMA public FROM PUBLIC, and create a schema for each user with the same name as that user. Recall that the default search path starts with $user, which resolves to the user name. Therefore, if each user has a separate schema, they access their own schemas by default.

For any pattern, to install shared applications (tables to be used by everyone, additional functions provided by third parties, etc.), put them into separate schemas. Remember to grant appropriate privileges to allow the other users to access them. Users can then refer to these additional objects by qualifying the names with a schema name, or they can put the additional schemas into their search path, as they choose.

### Portability
In the SQL standard, the notion of objects in the same schema being owned by different users does not exist. Moreover, some implementations do not allow you to create schemas that have a different name than their owner. In fact, the concepts of schema and user are nearly equivalent in a database system that implements only the basic schema support specified in the standard. Therefore, many users consider qualified names to really consist of user_name.table_name. This is how PostgreSQL will effectively behave if you create a per-user schema for every user.

Also, there is no concept of a public schema in the SQL standard. For maximum conformance to the standard, you should not use the public schema.

Of course, some SQL database systems might not implement schemas at all, or provide namespace support by allowing (possibly limited) cross-database access. If you need to work with those systems, then maximum portability would be achieved by not using schemas at all.

### My own suggestion
Create schemas named:
app_launcher_developer
bluetooth_census_developer
app_launcher_user
bluetooth_census_user

Mainly use 1-2 databases since databases are completely separated.
Use multiple schemas and users (schemas are very similar to users).

## Postgres public role
When a new database is created, PostgreSQL by default creates a schema named "public" and grants access on this schema to a backend role named "public".
In fact, role "public" does not exist.

The key word PUBLIC indicates that the privileges are to be granted to all roles, including those that might be created later. PUBLIC can be thought of as an implicitly defined group that always includes all roles. Any particular role will have the sum of privileges granted directly to it, privileges granted to any role it is presently a member of, and privileges granted to PUBLIC.

## Use new schema under the same database
1. ```CREATE USER your_app_developer WITH PASSWORD 'P@ssw0rd';```

2. ```REVOKE CREATE ON SCHEMA public FROM PUBLIC;```
This ensures that future users cannot accidentally create tables or other things in public schema.

3. (Optional) We can allow future users to view public tables.
```
grant usage on schema public to public;
grant select on all tables in schema public to public;
```
We must grant both permission to schema and permission to individual stuffs within schema.

4. Manually create schema "your_app_developer" owned by "your_app_developer" in pgAdmin.

5. In default in DATABASES in settings.py in Django, only change USER and PASSWORD.

6. Build

```SHOW search_path;``` can show search path. Default search path is 
```
"$user", public
```
The system determines which table is meant by following a search path. By default, it searches for schema with the same name as the user. If it cannot find one, it then searches for public schema and returns.

Personally, I suggest to have 1-1 correspondence for user and schema. So, we don't have to change the search path.

## Postgres drop a user
1. Remove any tables in its schema.
2. Remove the schema.
3. Remove all permissions and drop:
```
REVOKE ALL PRIVILEGES ON ALL TABLES IN SCHEMA public FROM your_app_developer;
REVOKE ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public FROM your_app_developer;
REVOKE ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA public FROM your_app_developer;
DROP USER your_app_developer;
```

If the 10 tables created by Django become messy. We can delete them all. Django recreates them itself.
If it is further messy, delete schema and recreate schema.

## pgAdmin naming
Personally.
- Name Server Group as djangosever.
- Under djangoserver, name servers to postgres_connection, your_app_developer_connection, etc.

## PuTTY connect to ec2
Windows:
1. Open PuTTY Configuration
2. In Session:
Host Name: appuser@ec2-18-166-17-245.ap-east-1.compute.amazonaws.com
Port: 22
Connection type: SSH
3. Save session for faster future login.
4. Under Connection -> SSH -> Auth:
Private key file for authentication: Browse and select the saved robocore_aws.ppk:

Note that PuTTY requires .ppk.

5. Open!

## Connect to pgAdmin on EC2
ssh -i <path to the .pem private key file> -L 50001:localhost:50001 -N ec2-user@ec2-18-166-17-245.ap-east-1.compute.amazonaws.com

pgAdmin login is:
victor_t@tunghinghk.com / ShitOnTheLidar

## from pathlib import Path
```pathlib.Path.home() / 'python' / 'scripts' / 'test.py'```
or
```pathlib.Path.home().joinpath('python', 'scripts', 'test.py')```
A third way to construct a path is to join the parts of the path using the special operator /. The forward slash operator is used independently of the actual path separator on the platform.

## Create https cert and key on localhost
https://gist.github.com/jonsamp/587b78b7698be7c7fd570164a586e6b7
Using yarn:
```
cd ~/
mkdir .localhost-ssl

sudo openssl genrsa -out ~/.localhost-ssl/localhost.key 2048
sudo openssl req -new -x509 -key ~/.localhost-ssl/localhost.key -out ~/.localhost-ssl/localhost.crt -days 3650 -subj /CN=localhost
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain ~/.localhost-ssl/localhost.crt

yarn add global http-server
echo " 
function https-server() {
  http-server --ssl --cert ~/.localhost-ssl/localhost.crt --key ~/.localhost-ssl/localhost.key
}
" >> ~/.bash_profile
source ~/.bash_profile

echo "You're ready to use https on localhost 💅"
echo "Navigate to a project directory and run:"
echo ""
echo "https-server"
```

## nonce
From OpenID Connect Core 1.0 incorporating errata set 1:
https://openid.net/specs/openid-connect-core-1_0.html#NonceNotes

REQUIRED. String value used to associate a Client session with an ID Token, and to mitigate replay attacks. The value is passed through unmodified from the Authentication Request to the ID Token. Sufficient entropy MUST be present in the nonce values used to prevent attackers from guessing values. For implementation notes, see Section 15.5.2.

15.5.2.  Nonce Implementation Notes
The nonce parameter value needs to include per-session state and be unguessable to attackers. One method to achieve this for Web Server Clients is to store a cryptographically random value as an HttpOnly session cookie and use a cryptographic hash of the value as the nonce parameter. In that case, the nonce in the returned ID Token is compared to the hash of the session cookie to detect ID Token replay by third parties. A related method applicable to JavaScript Clients is to store the cryptographically random value in HTML5 local storage and use a cryptographic hash of this value.

Note that if you're trying to generate anything with "nonce" in the name, it's IMPORTANT that you use os.urandom() and never, ever random.random or random.randint. Otherwise you might have serious security issues.

## Yahoo Mail API
mail-r / mail-w are the correct scopes. I can confirm as I got it working.

I'll tell you Yahoo's dirty little secret: they hardcode a whitelist of acceptable applications. If your app is not in their list, you won't be able to access mail scopes.

Unless, of course, you use the "secret" key from:
https://searchfox.org/comm-central/source/mailnews/base/src/OAuth2Providers.jsm
Until they break it again, of course.

I think you'll be better off telling your clients to switch to a sane mail provider.

## hg vcs
```
brew install mercurial
hg --version
```
Get the latest Mozilla source code from Mozilla's mozilla-central Mercurial code repository, and check it out into a local directory source (or however you want to call it). Then, get the latest Thunderbird source code from Mozilla's comm-central Mercurial code repository. It now needs to be placed inside the Mozilla source code, in a directory named comm/:
```
hg clone https://hg.mozilla.org/mozilla-central source/
cd source/
hg clone https://hg.mozilla.org/comm-central comm/
```

## Docker ubuntu image apt-get
Always combine RUN apt-get update with apt-get install in the same RUN statement. This technique is known as “cache busting”. For example:
```
RUN apt-get update && apt-get install -y \
    package-bar \
    package-baz \
    package-foo  \
    && rm -rf /var/lib/apt/lists/*
```
Using apt-get update alone in a RUN statement causes caching issues and subsequent apt-get install instructions fail. For example, say you have a Dockerfile. After building the image, all layers are in the Docker cache. Suppose you later modify apt-get install by adding extra package. Docker sees the initial and modified instructions as identical and reuses the cache from previous steps. As a result the apt-get update is not executed because the build uses the cached version. Because the apt-get update is not run, your build can potentially get an outdated version of the packages.

## Docker caching system
One of the handiest features of the docker build system is the caching system.

'docker build' tries to reuse the layers already built until something changes inside the Dockerfile. In this way, we can save several minutes when rebuilding an image if the changes happen further down the list in the Dockerfile.

Sometimes, though, we do want to invalidate the cache and ensure the next build won't use it.

To do this an option is to pass the '--no-cache' argument to 'docker build'.

## Docker rm -rf /var/lib/apt/lists/*
Just one more thing: a way to limit the size of a built image is to clean up the content of '/var/lib/apt/lists' in the same RUN command, e.g.:
```
RUN apt-get update && apt-get install -y \
    aufs-tools \
    automake \
    build-essential \
&& rm -rf /var/lib/apt/lists/* 
```
The command above will build an image layer that doesn't contain the apt cache.

If you had instead used this:
```
RUN apt-get update && apt-get install -y \
    aufs-tools \
    automake \
    build-essential
RUN rm -rf /var/lib/apt/lists/*
```
you would have had not only a larger layer, containing the apt cache, but also an additional layer generated by the second RUN command.

## install hg in docker ubuntu image
The codes below is bad dockerfile practice. Should be changed later.
```
FROM ubuntu
RUN apt-get update
RUN apt-get install -y nodejs npm git git-core
RUN apt-get -y install mercurial
RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN npm install -g bower
RUN npm install -g grunt-cli
RUN hg clone <repository>
```

## Install homebrew and homebrew-cask

Advantages of homebrew installation:
CLI tools like that allow you to install / uninstall software in no time and never again be bothered by insufficient permissions. They allow you to manage versions too.
Pre-built installer for your platform requires admin permissions (sudo) to install package globally.

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```
```brew --version```
```brew tap homebrew/cask```

## Install node.js and yarn
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
brew install nvm
nvm install node
npm install --global yarn
```

## conda-forge
No future worry, better than default anaconda channel.

After ```conda config --add channels conda-forge```,
.condarc then looks like:

```
channels:
  - conda-forge
  - defaults
```

## .gitignore_global
*~
.DS_Store
.idea

## React + Webpack debugger
1. In webpack.config.js,
```
module.exports = {
   ......
   devtool: "eval-source-map",
   ......
}

```
2. In Chrome -> Inspect -> Sources,
Under your folder that contains config files,
Locate the generated source maps from the "." folder.
They look the same as source codes.
3. Add breakpoints and debug!

## proxy
```
proxy: [
         {
            context: ['/authorize', '/api'],
            target: 'https://localhost:8443',
            secure: false,
            changeOrigin: true,
         },
      ],
```
A request to /authorize will now proxy the request to https://localhost:8443/authorize.
A request to /api will now proxy the request to https://localhost:8443/api.
'secure: false' is needed because the ssl certificate is generated by myself, which is invalid.
'changeOrigin: true' is needed because origin header should be changed to the target when request is processed later.

## babel-preset-es2015 -> babel-preset-env
If you are using Babel version 7 you will need to run ```yarn add @babel/preset-env -D``` and have "presets": ["@babel/preset-env"] in your configuration.

## @babel/plugin-transform-runtime
Solve the 'regeneratorRuntime is not defined'.
babel-polyfill is deprecated as of Babel 7.4.
Better than importing @babel/polyfill which is specified in webpack.config.js entries.

Another purpose of this transformer is to create a sandboxed environment for your code. If you directly import core-js or @babel/polyfill and the built-ins it provides such as Promise, Set and Map, those will pollute the global scope. While this might be ok for an app or a command line tool, it becomes a problem if your code is a library which you intend to publish for others to use or if you can't exactly control the environment in which your code will run.

