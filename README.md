# TravelMaster
- Front-end framework: **Vue3**
- UI design: **element-ui**
- Back-end framework: **Express**
- Database: **MYSQL**
- Utils: **Postman** & **Sequelize**

## Back-end build

### Database config
- database => tmdb
- host => localhost
- user => tm
- password => tm123
- tables => users, locations, hotels, restaurants, shoppings

### Create database from mysql
```
create database tmdb;
```

```
create user 'tm'@'%' identified by 'tm123';
```

```
grant all on tmdb.* to 'tm'@'%';
```

### Startup server
```
cd tm-server
npm install -s
```

```
npm start
```


## Front-end build
```
cd tm-vue
npm install -s
```

```
npm run serve
```
or
```
npm run build
```


## Future Ｗork
#### 1. Automate mysql deployment by using python to upload local data
#### 2. Solve Front-end communication bugs (event-bus or VueX implement components communication)
#### 3. Add login security functions to protect web pages
#### 4. Deploy mature software with Docker to aliyun
