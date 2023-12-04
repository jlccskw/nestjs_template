import { ClassSerializerInterceptor, PlainLiteralObject, StreamableFile } from '@nestjs/common';
import { ClassTransformOptions } from '@nestjs/common/interfaces/external/class-transform-options.interface';
import { isObject, isArray } from 'class-validator';
import { isNil } from 'lodash';

/**
 * Global response interceptor
 */
export class ResponseIntercepter extends ClassSerializerInterceptor {
    serialize(
        response: PlainLiteralObject | Array<PlainLiteralObject>,
        options: ClassTransformOptions,
    ): PlainLiteralObject | PlainLiteralObject[] {
        let data: any;

        // if it is not an object, not an array, not a stream, return directly
        if ((!isObject(response) && !isArray(response)) || response instanceof StreamableFile) {
            data = response;
        }

        // if it is an array, traverse each item for serialization
        else if (isArray(response)) {
            data = (response as PlainLiteralObject[]).map((item) =>
                !isObject(item) ? item : this.transformToPlain(item, options),
            );
        }
        // if it is a page data, serialize each item in items
        else if ('meta' in response && 'items' in response) {
            const items = !isNil(response.items) && isArray(response.items) ? response.items : [];
            data = {
                ...response,
                items: (items as PlainLiteralObject[]).map((item) => {
                    return !isObject(item) ? item : this.transformToPlain(item, options);
                }),
            };
        }
        // if the response is an object, serialize it directly
        data = this.transformToPlain(response, options);
        return { data, status: 0, extra: {}, message: 'success', success: true };
    }
}
