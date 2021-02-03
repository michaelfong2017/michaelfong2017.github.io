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
1. ```CREATE USER temi_api_developer WITH PASSWORD 'P@ssw0rd';```
2. ```REVOKE CREATE ON SCHEMA public FROM PUBLIC;```
This ensures that future users cannot accidentally create tables in public schema.
3. Manually create schema "temi_api_developer" in pgAdmin.
4. In default in DATABASES in settings.py, only change USER and PASSWORD.
5. Build

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
REVOKE ALL PRIVILEGES ON ALL TABLES IN SCHEMA public FROM temi_api_developer;
REVOKE ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public FROM temi_api_developer;
REVOKE ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA public FROM temi_api_developer;
DROP USER temi_api_developer;
```

If the 10 tables created by Django become messy. We can delete them all.

