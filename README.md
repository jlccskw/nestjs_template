2023-12-04
### add config functionality
modules/init.ts file use DynamicModule to init Mysql,
the configuration for Mysql is located in config/config.yaml file.
the config/configuration.ts file is used to parse the config file,and copy the config to the dist folder.

### add response interceptor
common/response.interceptor.ts file is used to intercept the response and add some common data to the response.


### add passport
in the auth directory,there are some files about passport.
in the auth/auth.module.ts file,we use the PassportModule to init the passport.
in this Module,we use the 'useFactory' function to call the 'configService' to initialize passport.

we use two kinds of strategies:local and jwt. 
the local strategy is used to verify the username and password. 
the jwt strategy is used to verify the token.
there are two types of corresponding guards.
in the auth.module.ts file,we set the JwtAuthGuard as the global guard.so all the routes come with this guard by default.
if we want to exclude token validation for a specific router,we can use the 'Public' decorator to set the router without the guard.


#### add CORS
in the main.ts file,we use the 'app.enableCors()' to enable the CORS.




### TODO
auth captcha