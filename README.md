# Binance

## Functionality
- To download shortstock data from IB via ftp server **ftp3.interactivebrokers.com**

## Prerequisite
- Node

## Install
```
$ npm install
```

## Run
```
$ node index.js
```

## Data
- shortstock@ftp3.interactivebrokers.com
- stored date by date
- date format in YYYYMMDD

## Sample Output - australia.txt
```
#BOF|2022.12.29|17:45:04
#SYM|CUR|NAME|CON|ISIN|REBATERATE|FEERATE|AVAILABLE|
A2M|AUD|A2 MILK CO LTD|189114468|NZATME0002S8|1.9014|1.1030|35000|
...
```
##  Destination
```
	src/
        ├── <date>
        ├── <date>                   
        │   ├── <location A>.txt          
        │   ├── <location A>.txt.md5     
        │   ├── <location B>.txt          
        │   ├── <location B>.txt.md5
        └── ...
```
