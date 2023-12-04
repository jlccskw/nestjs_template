2023-12-04
### add config functionality
modules/init.ts file use DynamicModule to init Mysql,
the configuration for Mysql is located in config/config.yaml file.
the config/configuration.ts file is used to parse the config file,and copy the config to the dist folder.