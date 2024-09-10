// netlify/functions/check-referer.js

exports.handler = async function (event, context) {
    // 获取请求头中的 referer 值
    const referer = event.headers.referer || event.headers.Referer;

    // 定义允许访问的 referer 列表
    const allowedReferers = ['https://*.xnox.top', 'https://*.solaso.top', 'https://*.vidol.top'];

    // 检查 referer 是否存在且是否在允许的列表中
    if (!referer || !allowedReferers.some(r => referer.includes(r))) {
        return {
            statusCode: 500,  // 禁止访问
            body: 'Internal Server Error',
        };
    }

    // 如果 referer 合法，允许访问
    return {
        statusCode: 200,
        body: 'OK',
    };
};
