import {readFileSync} from 'fs';
import * as yaml from 'js-yaml';
import {join, resolve} from 'path';

const YAML_CONFIG_FILENAME = 'config.yaml';

export default () => {
    let fs = require('fs');
    // 拷贝本目录下的config.yaml到dist/config/config.yaml
    fs.writeFileSync(join(__dirname, YAML_CONFIG_FILENAME),fs.readFileSync(resolve(__dirname, '../../src/config/config.yaml')))
    // 返回yaml文件内容
    return yaml.load(
        readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8'),
    ) as Record<string, any>;
};