
export default defineEventHandler(async (event) => {
    // const { name } = getQuery(event);
    // const { age } = await readBody(event);
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?api_key=eJdPhICJUDBt6B4e4IX6DZ4A9Xos4Z2JRZ8xh2v2');
    return data;
});