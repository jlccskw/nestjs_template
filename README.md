### SQL TypeORM sample

### Installation


`npm install`

### Running

This example requires docker or a local MySQL installation.  If using a local MySQL database, see `app.module.ts` for credentials, and make sure there are matching credentials in the database and the source code.

#### Docker

There is a `docker-compose.yml` file for starting Docker.

`docker-compose up`

After running the sample, you can stop the Docker container with

`docker-compose down`

### Run the sample

Then, run Nest as usual:

`npm run start`


https://nest.nodejs.cn/pipes
https://www.happyy.vip/archives/nestjs-learn1

## 异常过滤器学习
需要使用@UseFilters引入，可以从全局、路由、路径三个地方进行过滤，在过滤器中@Catch(HttpException)进行捕获http异常，@Catch()捕获全部异常


