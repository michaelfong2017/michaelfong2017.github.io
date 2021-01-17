Temporary notes
================

## ffmpeg
ffmpeg -i input.png -q:v 10 -vf scale=1152:720 output.jpg

-q:v accepts 1-31. 1 already compresses the photo, 31 compresses the most.
output can be .jpg and must not be png for compression to work.
-vf scale accepts any ratio regardless of the original photo.

Email does not compress images regardless of representation on screen.
Signal compresses images a bit.
Whatsapp compresses images very much.

## PathExt
When running a command line that does not contain an extension, the system uses the value of this environment variable to determine which extensions to look for and in what order.

After setting Path and PathExt environment variables, Windows system can search for the conda programs in folders specified in Path. ```where conda``` gives the found files.

## Try catch
In case of checking None,
python try except often performs better than checking None everytime.
Pythonistas typically suggest that EAFP (easier to ask forgiveness than permission) is better than LBYL (look before you leap).

## Spyder IDE installation
Install in Anaconda-Navigator instead of command line to ensure that the version is correct.

## mysqlclient installation
ModuleNotFoundError: No module named 'MySQLdb'
Mac:
conda install -c bioconda mysqlclient
OR
conda install -c conda-forge mysqlclient==2.0.3

## How to use mysql and start mysql server on Mac
```open -a TextEdit .bash_profile```
Append the following:
```export PATH="/usr/local/mysql/bin:$PATH"```
```export PATH="/usr/local/mysql/support-files:$PATH"```

sudo mysql.server start
sudo mysql.server stop

